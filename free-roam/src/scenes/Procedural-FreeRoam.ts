import { Scene } from 'phaser';
import { Polygons } from '../utils/polygons'
import GroundBiome from '../biomes/GroundBiome';
import FlyingBiome from '../biomes/FlyingBiome';
import SteelBiome from '../biomes/SteelBiome';
import PsychicBiome from '../biomes/PsychicBiome';
import { getCharacterSpriteURL, getImageURL, getAssetURL, getJoystickAsset } from '../utils/helpers';
import OuterArea from '../biomes/OuterArea';
import Lootbox from "../objects/Lootbox";
import { config } from '../config/config';
import { BaseBiome } from '../biomes/BaseBiome';
import { dungeonChunkCoordinates } from '../utils/dungeons';
import Perlin from '../utils/perlin';
import { Layer, LootboxDetails } from '../types.d';
import Player from '../objects/Player';
import { eventEmitter, Events } from '../FreeRoam';
import Dungeon from '../objects/Dungeon';
import { centralRegion } from '../utils/maps';
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';
import Arena from '../objects/Arena';
import Interactive from '../objects/Interactives';

export class ProceduralFreeRoam extends Scene {
  //overall map size
  resolution: number = 3000;

  collidableObjects: Phaser.Physics.Arcade.Group | undefined = undefined;

  chunkSize: number = 16;
  tileSize: number = 16;
  characterURL = "adventurer";
  loader: Phaser.Loader.LoaderPlugin | null = null;
  checkActive: Boolean = false;
  cheatCode: string | null = null;
  cheatTimeout: ReturnType<typeof setTimeout> | null = null;

  polygonData: {
    index: number,
    polygonIndex: number,
    vertices: { x: number, y: number }[],
    reducedVertices: { x: number, y: number }[]
    lootBoxesCoordinates: { x: number, y: number }[]
    gradientAreaCoordinates: { x: number, y: number }[]
    outerBorderCoordinates: { x: number, y: number }[]
    centroid: { x: number, y: number }
  }[] = [];
  lootboxes: Lootbox[] = [];
  lootboxDetails: LootboxDetails[] = [];

  cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  ekey: Phaser.Input.Keyboard.Key | undefined = undefined;
  enterKey: Phaser.Input.Keyboard.Key | undefined = undefined;
  dungeonVertices: { x: number; y: number; index: number }[] = [];
  chunks: BaseBiome[] = [];
  followPoint: Phaser.Math.Vector2 | undefined = undefined;

  joystick: VirtualJoystick | undefined = undefined;
  EbuttonMobile: Phaser.GameObjects.Container | undefined = undefined;
  eButtonImage: Phaser.GameObjects.Image | undefined = undefined;
  homeButtonImage: Phaser.GameObjects.Image | undefined = undefined;

  player: Player | null = null;
  spawnPoint: { x: number; y: number } | undefined = undefined;

  keyW: Phaser.Input.Keyboard.Key | undefined = undefined;
  keyS: Phaser.Input.Keyboard.Key | undefined = undefined;
  keyA: Phaser.Input.Keyboard.Key | undefined = undefined;
  keyD: Phaser.Input.Keyboard.Key | undefined = undefined;
  // indices of the polygons which are biomes
  indices: integer[] = [];
  debugGraphics: Phaser.GameObjects.Graphics | undefined = undefined;
  perlin: Perlin
  dungeons: { x: number, y: number }[] = [];
  dungeonObjects: Dungeon[] = [];
  arena: Arena | undefined = undefined;
  interactives: Interactive[] = [];
  seed: string;
  polygons: Polygons

  constructor(lootboxDetails: LootboxDetails[], seed: string) {
    super({ key: "SceneMain", physics: { arcade: {} }, active: true });
    this.perlin = new Perlin();
    this.lootboxDetails = lootboxDetails;
    this.seed = "erg";
    this.polygons = new Polygons(this.seed);
  }

  preload() {
    const { lootboxOpen, lootboxClosed, openLootbox, openDungeon } = config;
    this.load.image(lootboxOpen.key, lootboxOpen.url);
    this.load.image(lootboxClosed.key, lootboxClosed.url);
    this.load.image(openLootbox.key, openLootbox.url);
    this.load.image(openDungeon.key, openDungeon.url);
    this.checkForCheat()
    this.load.image(config.arena.startMatchImage.key, config.arena.startMatchImage.url);
    this.load.image(config.arena.startMatchImageMobile.key, config.arena.startMatchImageMobile.url);

    for (let i = 0; i < 2; i++) {
      this.load.image(centralRegion.Interactives![i].image.key, centralRegion.Interactives![i].image.url);
    }
    this.load.spritesheet('adventurer', getCharacterSpriteURL('adventurer.webp'), {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.indices = this.polygons.randomWalkGen();

    this.load.plugin(
      "rexvirtualjoystickplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",
      true
    );

    //spritesheets for biomes
    this.load.spritesheet(
      'ground-biome',
      getImageURL('ground-biome.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'flying-biome',
      getImageURL('flying-biome.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'psychic-biome',
      getImageURL('psychic-biome.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'steel-biome',
      getImageURL('steel-biome.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'groundNonCollidable',
      getAssetURL('ground-biome-assets-noCollide.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'flyingNonCollidable',
      getAssetURL('flying-biome-assets-noCollide.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'steelNonCollidable',
      getAssetURL('steel-biome-assets-noCollide.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'psychicNonCollidable',
      getAssetURL('psychic-biome-assets-noCollide.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )

    this.load.atlas('ground-atlas', getAssetURL('ground-biome-assets-collide-atlas.png'), getAssetURL('ground-biome-assets-collide-atlas.json'));
    this.load.atlas('flying-atlas', getAssetURL('flying-biome-assets-collide-atlas.png'), getAssetURL('flying-biome-assets-collide-atlas.json'));
    this.load.atlas('steel-atlas', getAssetURL('steel-biome-assets-collide-atlas.png'), getAssetURL('steel-biome-assets-collide-atlas.json'));
    this.load.atlas('psychic-atlas', getAssetURL('psychic-biome-assets-collide-atlas.png'), getAssetURL('psychic-biome-assets-collide-atlas.json'));

    this.load.spritesheet(
      'ground-biome-dungeon',
      getImageURL('ground-biome-dungeon.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'flying-biome-dungeon',
      getImageURL('flying-biome-dungeon.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'steel-biome-dungeon',
      getImageURL('steel-biome-dungeon.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )
    this.load.spritesheet(
      'psychic-biome-dungeon',
      getImageURL('psychic-biome-dungeon.png'), {
      frameWidth: 16,
      frameHeight: 16
    }
    )

    this.load.image(
      'joystick-inner',
      getJoystickAsset('joystick-inner.webp')
    )
    this.load.image(
      'joystick-outer',
      getJoystickAsset('joystick-outer.webp')
    )
    this.load.image(
      'home-button',
      getJoystickAsset('homeButton.webp')
    )
    this.load.image(
      'e-button',
      getJoystickAsset('eButton.webp')
    )

    this.load.image(
      centralRegion.asset.tileset.key,
      centralRegion.asset.tileset.url,
    );
    this.load.tilemapTiledJSON(
      centralRegion.asset.map.key,
      centralRegion.asset.map.url,
    );

    this.load.image(
      centralRegion.asset.overlay!.key,
      centralRegion.asset.overlay!.url,
    );

    this.load.image(
      centralRegion.asset.glitchTiles!.key,
      centralRegion.asset.glitchTiles!.url,
    );

    this.load.tilemapTiledJSON(
      centralRegion.asset.glitchMap!.key,
      centralRegion.asset.glitchMap!.url,
    );
  }

  create() {
    this.cursor = this.input.keyboard!.createCursorKeys();
    this.ekey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.enterKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    this.setPolygonData();

    // Start the player and cam at center of home base
    this.spawnPoint = { x: this.polygonData[0].centroid.x, y: this.polygonData[0].centroid.y };

    if (this.player) {
      this.player.destroy();
    }

    this.player = new Player(
      this,
      this.spawnPoint.x,
      this.spawnPoint.y,
      this.characterURL,
      this.cursor
    );

    this.player.changeCharacter(this.characterURL);

    if (this.sys.game.device.os.desktop) {
      this.cameras.main.setZoom(2.4);
    } else {
      this.cameras.main.setZoom(1.7);
    } this.followPoint = new Phaser.Math.Vector2(
      this.spawnPoint.x, this.spawnPoint.y
    );

    this.chunks = [];


    // debugging
    this.debugGraphics = this.add.graphics();
    this.debugGraphics.lineStyle(2, 0xff0000, 1);


    this.physics.world.debugGraphic = this.debugGraphics;
    this.physics.world.drawDebug = false;
    this.physics.world.debugGraphic.setAlpha(0);
    this.physics.world.debugGraphic.setDepth(5);

    this.collidableObjects = this.physics.add.group();
    this.physics.add.collider(this.player, this.collidableObjects);

    this.loader = new Phaser.Loader.LoaderPlugin(this);

    this.addLootBoxes();

    this.placeDungeonForEachPolygon();

    eventEmitter.on(Events.LOOTBOX_OPEN, () => {
      this.pauseGame();
    });

    eventEmitter.on(Events.LOOTBOX_OPENED, (lootboxID: number) => {
      this.resumeGame();
      this.handleOpenLootbox(lootboxID);
    });

    eventEmitter.on(Events.RESUME_GAME, () => {
      this.resumeGame();
    });

    eventEmitter.on(Events.PAUSE_GAME, () => {
      this.pauseGame();
    });

    eventEmitter.on(Events.CHANGE_CHARACTER, (characterURL: string) => {
      this.handleCharacterChange(characterURL);
    });

    eventEmitter.on(Events.OPEN_DASHBOARD, () => {
      this.pauseGame();
      this.disableKeys();
    });

    eventEmitter.on(Events.CLOSE_DASHBOARD, () => {
      this.resumeGame();
      this.enableKeys();
    });
    eventEmitter.on(Events.MATCH_ENDED, () => {
      this.resumeGame();
      this.arena!.endMatchMaking();
    });


    if (this.spawnPoint.x == this.polygonData[0].centroid.x && this.spawnPoint.y == this.polygonData[0].centroid.y) {
      this.setupCentralMap(this.spawnPoint.x, this.spawnPoint.y);
    }
    if (!this.sys.game.device.os.desktop) {
      this.setUpJoystick();
      this.setupEButton();
    }
    this.setupHomeButton()
    this.setupArena();
    this.setupInteractives();
    let { x, y, width, height }: { x: number, y: number, width: number, height: number } = this.polygons.getWorldBounds()!;
    // this.physics.world.setBounds(x, y, width, height);
    // this.physics.world.setBoundsCollision(true, true, true, true);
  }

  pauseGame: () => void = () => {
    if (this.scene.manager) {
      this.scene.pause();
    } else if (
      this.scene &&
      this.scene.systems &&
      this.scene.systems.game &&
      this.scene.systems.game.scene
    ) {
      this.scene.manager = this.scene.systems.game.scene;
      this.scene.pause();
    }
  };

  resumeGame: () => void = () => {
    if (this.scene.manager) {
      this.scene.resume();
    } else if (
      this.scene &&
      this.scene.systems &&
      this.scene.systems.game &&
      this.scene.systems.game.scene
    ) {
      this.scene.manager = this.scene.systems.game.scene;
      this.scene.resume();
    }
  };

  checkForCheat() {
    this.input.keyboard!.on("keydown", (event: any) => {
      if (
        event.key === "d" ||
        event.key === "e" ||
        event.key === "l" ||
        event.key === "t" ||
        event.key === "a" ||
        event.key === "f" ||
        event.key === "o" ||
        event.key === "r" ||
        event.key === "c" ||
        event.key === "e"
      ) {
        const Cheat = "deltaforce";
        if (!this.checkActive) {
          if (this.cheatCode && !Cheat.startsWith(this.cheatCode)) {
            this.cheatCode = null;
          }
          this.cheatCode = (this.cheatCode || "") + event.key;

          if (this.cheatCode === "deltaforce") {
            console.log("Cheat entered");
            this.checkActive = true;
          }
          if (this.cheatTimeout) {
            clearTimeout(this.cheatTimeout);
          }
          // Clear the cheat code if there is no input for a certain duration
          this.cheatTimeout = setTimeout(() => {
            this.cheatCode = null;
          }, 2000);
        }
      } else {
        this.cheatCode = null;
      }
    });
  }

  private setupEButton() {
    this.eButtonImage = this.add.image(this.cameras.main.width * 0.66, this.cameras.main.height * 0.7, 'e-button').setScale(0.15);
    this.eButtonImage.setInteractive({ useHandCursor: true });
    this.eButtonImage.setDepth(20);
    this.eButtonImage.setScrollFactor(0);


    this.eButtonImage.on("pointerdown", () => {
      console.log("E Button Clicked!");
      if (this.ekey) {
        this.ekey.isDown = true;
        this.time.delayedCall(100, () => { this.ekey!.isDown = false; });
      } else {
        console.error("Error: this.ekey is undefined!");
      }
    });
  }

  private setupHomeButton() {
    const imageX = this.sys.game.device.os.desktop ? this.cameras.main.width * 0.69 : this.cameras.main.width * 0.7;
    const imageY = this.sys.game.device.os.desktop ? this.cameras.main.height * 0.69 : this.cameras.main.height * 0.7;
    this.homeButtonImage = this.add.image(imageX, imageY, 'home-button').setScale(0.15);
    this.homeButtonImage.setInteractive({ useHandCursor: true });
    this.homeButtonImage.setDepth(20);
    this.homeButtonImage.setScrollFactor(0);


    console.log("Circle Position:", this.homeButtonImage.x, this.homeButtonImage.y);

    this.homeButtonImage.on("pointerdown", () => {
      this.player!.x = this.polygonData[0].centroid.x;
      this.player!.y = this.polygonData[0].centroid.y;
    });
  }

  private setUpJoystick(): void {
    const windowHeight = this.cameras.main.height;
    const windowWidth = this.cameras.main.width;
    const x = 50; // 50px gap from left corner
    const y = windowHeight / 1.5; // 50px gap from bottom
    console.log("window height" + this.cameras.main.height);
    console.log("x: " + x + " y: " + y);
    this.joystick = new VirtualJoystick(this, {
      x: 280,
      y: y,
      base: this.add.image(0, 0, 'joystick-outer').setAlpha(0.8).setDepth(20).setScale(0.2),
      thumb: this.add.image(0, 0, 'joystick-inner').setDepth(20).setScale(0.2),
      radius: 35,
      dir: "4dir",
    });
  }

  private setupCentralMap(startX: number, startY: number) {
    const map = this.make.tilemap({ key: centralRegion.asset.map.key });

    const tileset = map.addTilesetImage(
      centralRegion.asset.tileset!.key,
      centralRegion.asset.tileset!.key,
      16,
      16,
      1,
      2
    );
    const overlay = map.addTilesetImage(
      centralRegion.asset.overlay!.key,
      centralRegion.asset.overlay!.key,
      16,
      16,
      1,
      2
    );
    const glitchMap = this.make.tilemap({ key: centralRegion.asset.glitchMap!.key });
    const glitchTiles = glitchMap.addTilesetImage(
      centralRegion.asset.glitchTiles!.key,
      centralRegion.asset.glitchTiles!.key,
      16,
      16
    );
    if (!tileset || !glitchMap || !overlay || !glitchTiles) {
      return
    }

    const mapWidth = map.widthInPixels;
    const mapHeight = map.heightInPixels;
    const mapX = startX - mapWidth / 2;
    const mapY = startY - mapHeight / 2 - this.tileSize * 3;

    const glitchMapX = startX - glitchMap.widthInPixels / 2;
    const glitchMapY = startY - glitchMap.heightInPixels / 2 - this.tileSize * 3;
    map.createLayer(Layer.BELOW_PLAYER, tileset, mapX, mapY)!.setDepth(1);

    glitchMap.createLayer(Layer.GLTICH_LAYER, glitchTiles, glitchMapX, glitchMapY)!.setDepth(2);

    const objectsLayer = map.createLayer(Layer.OBJECTS, tileset, mapX, mapY)!.setDepth(5).setCollisionByProperty({ collides: true });

    map.createLayer(Layer.ABOVE_PLAYER, [tileset, overlay], mapX, mapY)!.setDepth(6);
    this.physics.add.collider(this.player!, objectsLayer);

  }

  private setPolygonData() {
    const polygons = this.polygons.voronoi.cellPolygons();
    this.polygons.calculatePolygonData();

    this.polygonData = this.polygons.polygonData;
    this.polygonData.forEach(vertex => {
      vertex.vertices = vertex.vertices.map(v => ({ x: v.x * this.resolution, y: v.y * this.resolution }));
      vertex.reducedVertices = vertex.reducedVertices.map(v => ({ x: v.x * this.resolution, y: v.y * this.resolution }));
      vertex.lootBoxesCoordinates = vertex.lootBoxesCoordinates.map(v => ({ x: v.x * this.resolution, y: v.y * this.resolution }));
      vertex.gradientAreaCoordinates = vertex.gradientAreaCoordinates.map(v => ({ x: v.x * this.resolution, y: v.y * this.resolution }));
      vertex.outerBorderCoordinates = vertex.outerBorderCoordinates.map(v => ({ x: v.x * this.resolution, y: v.y * this.resolution }));
      vertex.centroid = { x: vertex.centroid.x * this.resolution, y: vertex.centroid.y * this.resolution };
    });
    console.log(this.polygons.polygonData);
  }

  private setupInteractives() {
    if (!centralRegion.Interactives) {
      return
    }

    if (this.interactives) {
      for (let i = 0; i < this.interactives.length; i++) {
        this.interactives[i].destroy();
      }
    }
    this.interactives = [];

    for (const interactive of centralRegion.Interactives) {
      if (interactive.name === "ARENA") {
        continue;
      }
      if (!this.spawnPoint) {
        return;
      }
      this.interactives.push(new Interactive(
        this,
        interactive.coordinates.x * this.tileSize + this.spawnPoint.x,
        interactive.coordinates.y * this.tileSize + this.spawnPoint.y,
        interactive.event,
        interactive.image.key
      ))
      console.log("Interactive setup", interactive.name, interactive.image.key);
    }
  }

  private setupArena() {
    if (!this.spawnPoint || !centralRegion.Interactives) {
      return;
    }
    this.arena = new Arena(
      this,
      centralRegion.Interactives[2].coordinates.x * this.tileSize + this.spawnPoint.x,
      centralRegion.Interactives[2].coordinates.y * this.tileSize + this.spawnPoint.y
    );
    console.log("Arena setup", this.arena.x, this.arena.y);
  }

  disableKeys(): void {
    if (this.input.keyboard) {
      this.input.keyboard.enabled = false;
    }
  }

  enableKeys(): void {
    if (this.input.keyboard) {
      this.input.keyboard.enabled = true;
    }
  }

  addLootBoxes() {
    const minDistance = 500; // Minimum allowed distance between loot boxes
    let lootboxCount = 0;
    for (let polygon of this.polygonData) {
      const validLootBoxes: { x: number; y: number }[] = [];
      for (let lootBox of polygon.lootBoxesCoordinates) {
        // Check distance with existing valid loot boxes
        let isFarEnough = true;

        for (let existing of validLootBoxes) {
          const distance = Phaser.Math.Distance.Between(lootBox.x, lootBox.y, existing.x, existing.y);
          if (distance < minDistance) {
            isFarEnough = false;
            break;
          }
        }

        if (isFarEnough && lootboxCount < 65 && polygon.index !== 0) {
          console.log("lootbox", lootboxCount);
          const newLootbox = new Lootbox(this, lootBox.x, lootBox.y, false, lootboxCount);
          newLootbox.loadState();
          this.lootboxes.push(newLootbox);
          validLootBoxes.push(lootBox)
          lootboxCount++;
        }
      }
    }

    console.log("lootboxes", this.lootboxes.length);
  }

  handleOpenLootbox(lootboxID: number): void {

    for (let i = 0; i < this.lootboxes.length; i++) {
      if (this.lootboxes[i].ID === lootboxID) {
        this.lootboxes[i].Open();
        break;
      }
    }

    const lootboxesDetails = this.lootboxDetails;

    if (lootboxesDetails === undefined) {
      return;
    }

    for (let i = 0; i < lootboxesDetails.length; i++) {
      if (lootboxesDetails[i].ID === lootboxID) {
        lootboxesDetails[i].isOpen = true;
        break;
      }
    }
  }

  handleCharacterChange(characterURL: string): void {
    this.characterURL = characterURL;
    if (!this.loader) {
      return;
    }
    this.loader.spritesheet(
      this.characterURL,
      getCharacterSpriteURL(this.characterURL),
      {
        frameWidth: config.player.frameWidth,
        frameHeight: config.player.frameHeight,
      }
    );
    this.loader.once("complete", () => {
      this.player?.changeCharacter(this.characterURL);
    });
    if (this.sys.events) {
      this.loader.start();
    }
  }

  getCenterVertices(): { x: number; y: number; polygonIndex: number }[] {
    const centerVertices = this.polygonData.map((polygon, index) => ({
      x: polygon.centroid.x,
      y: polygon.centroid.y,
      polygonIndex: polygon.polygonIndex
    }));
    return centerVertices;
  }

  getDungeonVertices(seed = 12345): { x: number; y: number; index: number }[] {
    const centerVertices = this.getCenterVertices();
    const distanceFromCenter = 500;
    const randomOffset = (index: number) => {
      const angle = (Math.sin(seed + index) * 2 * Math.PI) % (2 * Math.PI);
      return { x: Math.cos(angle) * distanceFromCenter, y: Math.sin(angle) * distanceFromCenter };
    };

    return centerVertices.map((vertex, index) => {
      const offset = randomOffset(index);
      return { x: vertex.x + offset.x, y: vertex.y + offset.y, index: vertex.polygonIndex };
    });

  }

  placeDungeonForEachPolygon() {
    console.log(this.polygonData)
    for (let polygon of this.polygonData) {
      let isDisabled = false;
      if (polygon.index === 0) {
        isDisabled = true;
      }
      const center = polygon.centroid;
      const { x, y } = dungeonChunkCoordinates(center, this.chunkSize, this.tileSize, this.seed);
      this.dungeons[polygon.index] = { x, y };
      const peakX = (x * (this.chunkSize * this.tileSize)) + (this.chunkSize * this.tileSize) / 2;
      const peakY = (y * (this.chunkSize * this.tileSize)) + (this.chunkSize * this.tileSize) / 2;
      console.log('Peak:', polygon.index, peakX, peakY);
      this.dungeonObjects.push(new Dungeon(this, peakX, peakY, polygon.index, isDisabled));
      this.perlin.addPeakPoint(peakX / 500, peakY / 500, 1, (20 * this.tileSize) / 500);

      console.log('Dungeon:', this.dungeons[polygon.index]);
    }
  }

  isWithinBounds(chunkX: number, chunkY: number): { withinBounds: boolean; biomeType?: string; index?: number } {
    const chunkSizeInPixels = this.chunkSize * this.tileSize;
    const chunkCorners = [
      { x: chunkX * chunkSizeInPixels, y: chunkY * chunkSizeInPixels },
      { x: (chunkX + 1) * chunkSizeInPixels, y: chunkY * chunkSizeInPixels },
      { x: chunkX * chunkSizeInPixels, y: (chunkY + 1) * chunkSizeInPixels },
      { x: (chunkX + 1) * chunkSizeInPixels, y: (chunkY + 1) * chunkSizeInPixels }
    ];

    for (let polygon of this.polygonData) {
      for (let corner of chunkCorners) {
        if (this.point_in_polygon(corner, polygon.outerBorderCoordinates)) {
          var type;
          if (polygon.index == 0) {
            type = "home";
          } else if (polygon.index >= 0 && polygon.index < 5) {
            type = "flying";
          }
          else if (polygon.index >= 5 && polygon.index < 10) {
            type = "ground";
          }
          else if (polygon.index >= 10 && polygon.index < 15) {
            type = "steel";
          }
          else {
            type = "psychic";
          }
          return { withinBounds: true, biomeType: type, index: polygon.index };
        }

      }
    }
    return { withinBounds: false };
  }

  point_in_polygon(point: { x: number; y: number }, polygon: { x: number; y: number }[]): boolean {

    const num_vertices = polygon.length;
    var x = point.x;
    var y = point.y;
    let inside = false;

    let p1 = polygon[0];
    let p2;

    for (let i = 1; i <= num_vertices; i++) {
      p2 = polygon[i % num_vertices];

      if (y > Math.min(p1.y, p2.y)) {
        if (y <= Math.max(p1.y, p2.y)) {
          if (x <= Math.max(p1.x, p2.x)) {
            const x_intersection = ((y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x;

            if (p1.x === p2.x || x <= x_intersection) {
              inside = !inside;
            }
          }
        }
      }

      p1 = p2;
    }
    return inside;
  }

  getChunk(x: number, y: number) {
    var chunk = null;
    for (var i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].x == x && this.chunks[i].y == y) {
        chunk = this.chunks[i];
      }
    }
    return chunk;
  }

  checkIfDungeon(x: number, y: number) {
    for (let dungeon of this.dungeons) {
      if (dungeon.x == x && dungeon.y == y) {
        return true;
      }
    }
    return false;
  }

  update() {
    // if(this.joystick) {
    // this.joystick.
    if (this.debugGraphics) {
      this.debugGraphics.clear();
    }
    this.physics.world.drawDebug = true;
    this.lootboxes.forEach(lootbox => lootbox.update());
    this.dungeonObjects.forEach(dungeon => dungeon.update());
    this.arena?.update();
    this.interactives.forEach(interactive => interactive.update());
    if (this.player && this.spawnPoint) {
      this.player.update();
      this.events.emit('player-moved', Math.round(this.player.x - this.spawnPoint.x), Math.round(this.player.y - this.spawnPoint.y));

    }
    // console.log('Player at:', this.player.x, this.player.y);
    const gridSize = this.chunkSize * this.tileSize;

    if (!this.player) return;

    const snappedChunkX = Math.round(this.player.x / gridSize);
    const snappedChunkY = Math.round(this.player.y / gridSize);

    for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        const result = this.isWithinBounds(x, y);

        const isDungeon = this.checkIfDungeon(x, y);
        // console.log('Is Dungeon:', x, y, isDungeon);

        if (result.withinBounds) {
          var existingChunk = this.getChunk(x, y);
          if (existingChunk == null) {
            let newChunk: BaseBiome;
            switch (result.biomeType) {
              case 'home':
                if (typeof result.index === 'number') {
                  newChunk = new OuterArea(this, x, y, this.chunkSize, this.tileSize, result.index, this.perlin);
                } else {
                  throw new Error('Expected result.index to be a number');
                }
                break;
              case 'steel':
                if (typeof result.index === 'number') {
                  if (x == 45 && y == 58) {
                    console.log("isDungeon: ", isDungeon);
                  }
                  newChunk = new SteelBiome(this, x, y, this.chunkSize, this.tileSize, result.index, isDungeon, this.perlin);
                } else {
                  throw new Error('Expected result.index to be a number');
                }
                break;
              case 'ground':
                if (typeof result.index === 'number') {
                  newChunk = new GroundBiome(this, x, y, this.chunkSize, this.tileSize, result.index, isDungeon, this.perlin);
                } else {
                  throw new Error('Expected result.index to be a number');
                }
                break;
              case 'flying':
                if (typeof result.index === 'number') {
                  newChunk = new FlyingBiome(this, x, y, this.chunkSize, this.tileSize, result.index, isDungeon, this.perlin);
                } else {
                  throw new Error('Expected result.index to be a number');
                }
                //console.log('sand');
                break;
              case 'psychic':
                if (typeof result.index === 'number') {
                  newChunk = new PsychicBiome(this, x, y, this.chunkSize, this.tileSize, result.index, isDungeon, this.perlin);
                } else {
                  throw new Error('Expected result.index to be a number');
                }
                //console.log('grassBorder');
                break;
              default:
                throw new Error(`Unknown biome type: ${result.biomeType}`);
            }
            this.chunks.push(newChunk);
          }
        } else {
          var existingChunk = this.getChunk(x, y);
          if (existingChunk === null) {
            const newChunk = new OuterArea(this, x, y, this.chunkSize, this.tileSize, -1, this.perlin);
            this.chunks.push(newChunk);
          }
        }
      }
    }
    for (var i = 0; i < this.chunks.length; i++) {
      var chunk = this.chunks[i];
      const distance = Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      )
      if (distance < 3) {
        if (chunk !== null) {
          chunk.load();
        }
      }
      // to load left chunks for smooth map
      else if (snappedChunkX - chunk.x > 0 && snappedChunkX - chunk.x < 4) {
        if (chunk !== null) {
          chunk.load();
        }
      }
      else {
        if (chunk !== null) {
          chunk.unload();
        }
      }
    }
  }
}