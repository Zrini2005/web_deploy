import Phaser from 'phaser';
import { ProceduralFreeRoam } from '../scenes/Procedural-FreeRoam';
import Perlin from '../utils/perlin';
import Prando from 'prando';
import { config } from '../config/config';


export class BaseBiome {
  scene: ProceduralFreeRoam;
  x: number;
  y: number;
  tiles: Phaser.GameObjects.Group;
  isLoaded: boolean;
  occupiedCollidables: OccupiedArea[];
  occupiedNonCollidables: OccupiedArea[];
  chunkSize: number;
  tileSize: number;
  perlin: Perlin;
  polygonIdx: number;
  tileXYs: { x: number, y: number }[] = [];
  isDungeon: boolean;

  biomeConfig!: {
    terrainSprite: string;
    nonCollidableObjectSprite: string;
    dungeonAsset: string;
    collidableObjectSprite: string;
  };
  deterministicRng : Prando | undefined = undefined;
  collidableOverlapThreshold: number = 30;
  elevationThreshold: number = 0.06

  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin) {
    this.scene = scene as ProceduralFreeRoam;
    // x and y of the chunk
    this.x = x;
    this.y = y;
    this.chunkSize = chunkSize;
    this.tileSize = tileSize;
    this.tiles = this.scene.add.group();
    this.isLoaded = false;
    this.occupiedCollidables = [];
    this.occupiedNonCollidables = [];
    this.perlin = perlin;
    this.polygonIdx = polygonIdx;
    this.isDungeon = isDungeon;
    this.deterministicRng = new Prando(this.scene.seed)
  }

  unload() {
    if (this.isLoaded) {
      this.tiles.clear(true, true);
      this.isLoaded = false;
      this.occupiedCollidables = [];
      this.occupiedNonCollidables = [];
      this.tileXYs = [];
    }
  }

  load() {
    if (!this.isLoaded) {
      let highElevationTiles: { x: number; y: number }[] = [];
      let lowElevationTiles: { x: number; y: number }[] = [];

      // Generate base tiles
      for (var x = 0; x < this.chunkSize; x++) {
        for (var y = 0; y < this.chunkSize; y++) {
          const { lowElevationTiles: newLowElevationTiles, highElevationTiles: newHighElevationTiles } = this.generateDualGridTile(x, y, highElevationTiles, lowElevationTiles);
          lowElevationTiles = newLowElevationTiles;
          highElevationTiles = newHighElevationTiles;
        }
      }

      if (!this.isDungeon) {
        this.placeAssets(lowElevationTiles, 'lowElevation');
        this.placeAssets(highElevationTiles, 'highElevation');
      }
      this.isLoaded = true;
    }
  }

  protected placeAssets(tileArray: { x: number; y: number }[], assetType: 'lowElevation' | 'highElevation') {
    // place assets, override for each child class
  }

  private generateDualGridTile(x: number, y: number, highElevationTiles: { x: number; y: number }[], lowElevationTiles: { x: number; y: number }[]) {
    var tileX = (this.x * (this.chunkSize * this.tileSize)) + (x * this.tileSize);
    var tileY = (this.y * (this.chunkSize * this.tileSize)) + (y * this.tileSize);

    this.tileXYs = [0, 1].flatMap(i =>
      [0, 1].map(j => ({
        x: (this.x * this.chunkSize * this.tileSize) + ((x + i) * this.tileSize),
        y: (this.y * this.chunkSize * this.tileSize) + ((y + j) * this.tileSize)
      }))
    );


    // place dungeon
    if (this.isDungeon && this.isWithinBounds(tileX, tileY)) {
      this.placeDungeonTiles(x, y);
    }

    // place terrain
    const perlinValues = this.placeTerrainTiles();

    // pushing to asset arrays
    if (perlinValues[0] < this.elevationThreshold-0.1) {
      lowElevationTiles.push({ x: tileX, y: tileY });
    }
    else if (perlinValues[0] > this.elevationThreshold+0.05) {
      highElevationTiles.push({ x: tileX, y: tileY });
    }

    return { lowElevationTiles, highElevationTiles }
  }

  private placeTerrainTiles() {
    let spriteKey = 0;
    let perlinValues = this.tileXYs.map(({ x, y }) => {
      if (!this.isWithinBounds(x, y) && this.isWithinBorderBounds(x, y)) return 1;
      if (!this.isWithinBorderBounds(x, y)) {
        spriteKey |= 1 << 4;
        return 0;
      }
      return this.perlin.perlin2(x / 500, y / 500);
    });

    // checking tile type with perlin value
    const whatAsset = (perlinValue: number) => {
      return perlinValue < this.elevationThreshold ? 0 : 1;
    }

    // bitmasking function for tileset
    for (const key in perlinValues) {
      spriteKey |= whatAsset(perlinValues[key]) << Number(key);
    }

    const dualTileX = (this.tileXYs[0].x + this.tileXYs[2].x) / 2;
    const dualTileY = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
    const tile = this.scene.add.image(dualTileX, dualTileY, this.biomeConfig.terrainSprite, spriteKey).setDepth(1)
    this.tiles.add(tile);

    return perlinValues;
  }

  protected placeDungeonTiles(x: number, y: number, dungeonSize: number = 10, dungeonOffset: number = 3) {
    if (x <= dungeonSize + dungeonOffset && y <= dungeonSize + dungeonOffset) {
      const dualMapTileX = (this.tileXYs[0].x + this.tileXYs[2].x) / 2;
      const dualMapTileY = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (x > dungeonOffset && y > dungeonOffset) {
        const tile = this.scene.add.image(dualMapTileX, dualMapTileY, this.biomeConfig.dungeonAsset, (x - (dungeonOffset + 1)) + (y - (dungeonOffset + 1)) * 10).setDepth(4);
        this.tiles.add(tile);
      }
    }
  }

  //helper functions

  private isWithinBorderBounds(x: number, y: number): boolean {
    if (this.polygonIdx === -1) {
      return false;
    }
    if (this.point_in_polygon({ x, y }, this.scene.polygonData[this.polygonIdx].gradientAreaCoordinates)) {
      return true;
    }
    return false;
  }

  protected isWithinBounds(x: number, y: number): boolean {
    if (this.polygonIdx === -1) {
      return false;
    }
    if (this.point_in_polygon({ x, y }, this.scene.polygonData[this.polygonIdx].reducedVertices)) {
      return true;
    }
    return false;
  }
  protected isSpriteWithinBounds(x: number, y: number, width: number, height: number, threshold: number = 5): boolean {
    if (this.polygonIdx === -1) {
        return false;
    }
    const polygon = this.scene.polygonData[this.polygonIdx].reducedVertices;
    // Convert bottom-middle coordinates to the four corners
    const halfWidth = width / 2;
    // Expand the check area outward by threshold amount
    const bottomLeft = { x: x - halfWidth - threshold, y: y + threshold };
    const bottomRight = { x: x + halfWidth + threshold, y: y + threshold };
    const topLeft = { x: x - halfWidth - threshold, y: y - height - threshold };
    const topRight = { x: x + halfWidth + threshold, y: y - height - threshold };
    
    // If ANY of these expanded points are outside the polygon, 
    // then the sprite is too close to the edge
    return (
        this.point_in_polygon(bottomLeft, polygon) &&
        this.point_in_polygon(bottomRight, polygon) &&
        this.point_in_polygon(topLeft, polygon) &&
        this.point_in_polygon(topRight, polygon)
    );
}

  private point_in_polygon(point: { x: number; y: number }, polygon: { x: number; y: number }[]): boolean {

    const num_vertices = polygon.length;
    var x = point.x;
    var y = point.y;
    let isInside = false;

    let p1 = polygon[0];
    let p2;

    for (let i = 1; i <= num_vertices; i++) {
      p2 = polygon[i % num_vertices];

      if (y > Math.min(p1.y, p2.y)) {
        if (y <= Math.max(p1.y, p2.y)) {
          if (x <= Math.max(p1.x, p2.x)) {
            const x_intersection = ((y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x;

            if (p1.x === p2.x || x <= x_intersection) {
              isInside = !isInside;
            }
          }
        }
      }

      p1 = p2;
    }
    return isInside;
  }

  private isOverlapping(
    x: number,
    y: number,
    width: number,
    height: number,
    options: { isCollidable: boolean }
  ): boolean {
    const collidableList = options.isCollidable
      ? this.occupiedCollidables
      : this.occupiedNonCollidables;
    const threshold = options.isCollidable ? this.collidableOverlapThreshold : 0;

    // Convert bottom-middle to top-left coords
    const topLeftX = x - width / 2;
    const topLeftY = y - height;

    return collidableList.some((area) => {
      const areaTopLeftX = area.x - area.width / 2;
      const areaTopLeftY = area.y - area.height;

      const overlaps =
        topLeftX < areaTopLeftX + area.width + threshold &&
        topLeftX + width > areaTopLeftX - threshold &&
        topLeftY < areaTopLeftY + area.height + threshold &&
        topLeftY + height > areaTopLeftY - threshold;

      const fullyContained =
        topLeftX >= areaTopLeftX &&
        topLeftX + width <= areaTopLeftX + area.width &&
        topLeftY >= areaTopLeftY &&
        topLeftY + height <= areaTopLeftY + area.height;

      return overlaps || fullyContained;
    });
  }
  private isOutsideChunkBounds(
    x: number,
    y: number,
    width: number,
    height: number
  ): boolean {
    const threshold = this.tileSize/2;
  
    // Convert bottom-middle to top-left
    const topLeftX = x - width / 2;
    const topLeftY = y - height;

    const chunkLeft = this.x * this.chunkSize * this.tileSize;
    const chunkTop = this.y * this.chunkSize * this.tileSize;
    const chunkRight = chunkLeft + this.chunkSize * this.tileSize;
    const chunkBottom = chunkTop + this.chunkSize * this.tileSize;
  
    return (
      topLeftX < chunkLeft + threshold || // Left boundary
      topLeftX + width > chunkRight - threshold || // Right boundary
      topLeftY < chunkTop + threshold || // Top boundary
      topLeftY + height > chunkBottom - threshold // Bottom boundary
    );
  }


  // Helpers for child classes

  protected placeCollidableSprite(x: number, y: number, sprite: string, frameDetails: FrameDetails) {
    if (!this.isOverlapping(x, y, frameDetails.width, frameDetails.height, { isCollidable: true }) && !this.isOutsideChunkBounds(x, y, frameDetails.width, frameDetails.height) && this.isSpriteWithinBounds(x, y, frameDetails.width, frameDetails.height)) {

      const tile = this.scene.physics.add.sprite(x, y, sprite, frameDetails.name)
        .setOrigin(0.5, 1) // Align the tile's bottom to the tile
        .setDepth(frameDetails.depth);
      const body = tile.body as Phaser.Physics.Arcade.Body;
      body.setSize(frameDetails.collisionBounds.x, frameDetails.collisionBounds.y);
      // offset to bottom center
      body.offset.set(frameDetails.collisionOffset.x, frameDetails.collisionOffset.y)
      tile.setPushable(false);
      this.scene.collidableObjects!.add(tile);
      this.tiles.add(tile);

      this.occupiedCollidables.push({ x: x, y: y, width: frameDetails.width, height: frameDetails.height });

    }
  }

  protected placeNormalSprite(x: number, y: number, sprite: string, frame: number, depth = 9.6): boolean {
    if (!this.isOverlapping(x, y, this.tileSize, this.tileSize, { isCollidable: false }) && !this.isOutsideChunkBounds(x, y, this.tileSize, this.tileSize) && this.isSpriteWithinBounds(x, y, this.tileSize, this.tileSize)) {
      const tile = this.scene.add.image(x, y, sprite, String(frame))
        .setDepth(depth);
      this.tiles.add(tile);
      this.occupiedNonCollidables.push({ x, y, width: this.tileSize, height: this.tileSize });
      return true;
    }
    return false
  }

  protected chooseRandomSprite(spriteIndices: number[]): number {

    return this.deterministicRng!.nextArrayItem(spriteIndices);
  }
}

interface OccupiedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

class Tile extends Phaser.GameObjects.Sprite {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setOrigin(0);
  }
}
export default Tile;

export type FrameDetails = {
  name: string;
  width: number;
  height: number;
  depth: number;
  collisionBounds: { x: number; y: number };
  collisionOffset: { x: number; y: number };
};