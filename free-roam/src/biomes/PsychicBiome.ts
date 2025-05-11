import Perlin from "../utils/perlin"
import { BaseBiome, FrameDetails } from "./BaseBiome"
import psychicRules from '../assetJson/psychic-placement-rules.json'

export default class PsychicBiome extends BaseBiome {
  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin) {
    super(scene, x, y, chunkSize, tileSize, polygonIdx, isDungeon, perlin)

    this.biomeConfig = {
      dungeonAsset: 'psychic-biome-dungeon',
      terrainSprite: 'psychic-biome',
      collidableObjectSprite: 'psychic-atlas',
      nonCollidableObjectSprite: 'psychicNonCollidable',
    }
  }

  protected placeAssets(tileArray: { x: number; y: number }[], assetType: 'lowElevation' | 'highElevation') {

    tileArray.forEach(({ x, y }) => {
      const assetNoise = this.perlin.perlin2(x / 300, y / 300);

      var normalizedNoise = (assetNoise + 1) / 2;
      var color = Phaser.Display.Color.Interpolate.ColorWithColor(
        new Phaser.Display.Color(0, 255, 0),  // Blue for low values
        new Phaser.Display.Color(255, 0, 0),  // // Red for high values
        100,                     // Steps in gradient (arbitrary, can be tuned)
        Math.floor(normalizedNoise * 100)  // Convert normalized value to range 0-100
      );
      var hexColor = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
      if (this.isWithinBounds(x, y)) {
        // if (assetNoise > -0.21 && assetNoise < -0.17) {
        // this.scene.add.circle(x, y, 4, hexColor, 1).setDepth(12);
        // }
      }
      // this.scene.add.text(x, y, String(assetNoise.toPrecision(2)), {
      //   fontSize: '5px',
      //   color: 'white',

      // }).setDepth(10);

      const biomeConfig = psychicRules[assetType]

      for (const asset of biomeConfig) {
        const [minRange, maxRange] = asset.range;

        if (assetNoise >= minRange && assetNoise < maxRange) {
          const frameDetails: FrameDetails = {
            name: asset.name,
            width: asset.collidableFrameWidth,
            height: asset.collidableFrameHeight,
            depth: asset.collidableFrameDepth,
            collisionBounds: asset.collisionBounds,
            collisionOffset: asset.collisionOffset
          }
          this.placeCollidableSprite(x, y, this.biomeConfig.collidableObjectSprite, frameDetails);
        }
        if (asset.extraCondition) {
          const { min, max } = asset.extraCondition;
          if (assetNoise < min || assetNoise >= max) continue;
        }

        // Place normal sprite
        if (asset.nonCollidableFrames) {
          const frame = this.chooseRandomSprite(asset.nonCollidableFrames);
          if (frame !== -1) {
            switch (frame) {
              case 0:
              case 15:
                this.placeVerticalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
                break;
              case 14:
              case 17:
              case 22:
              case 23:
              case 24:
                this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
                break;
              default:
                this.placeSquareSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
            }
          }
        }

      }
    })
  }

  placeSquareSprite(x: number, y: number, spriteKey: string, frame: number) {
    const placementParams: [number, number, string, number][] = [
      [x, y, spriteKey, frame],
      [x + this.tileSize, y, spriteKey, frame + 1],
      [x, y + this.tileSize, spriteKey, frame + 2],
      [x + this.tileSize, y + this.tileSize, spriteKey, frame + 3],


    ]
    for (const params of placementParams) {
      if (!this.placeNormalSprite(...params)) {
        break;
      }
    }
  }

  placeVerticalSprite(x: number, y: number, spriteKey: string, frame: number) {
    const placementParams: [number, number, string, number][] = [
      [x, y, spriteKey, frame],
      [x, y + this.tileSize, spriteKey, frame + 1],
    ]
    for (const params of placementParams) {
      if (!this.placeNormalSprite(...params)) {
        break;
      }
    }
  }

  protected placeDungeonTiles(x: number, y: number, dungeonSize: number = 10, dungeonOffset: number = 3): void {
    if (x <= dungeonSize + dungeonOffset && y <= dungeonSize + dungeonOffset) {
      const dualMapTileX = (this.tileXYs[0].x + this.tileXYs[2].x) / 2;
      const dualMapTileY = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (x > dungeonOffset && y > dungeonOffset) {
        const tile = this.scene.physics.add.image(dualMapTileX, dualMapTileY, this.biomeConfig.dungeonAsset, (x - (dungeonOffset + 1)) + (y - (dungeonOffset + 1)) * 10).setDepth(4);
        if (y > 2+ dungeonOffset && y < 7 + dungeonOffset) {
          tile.setPushable(false)
          this.scene.collidableObjects!.add(tile)
        }
        this.tiles.add(tile);
      }
    }
  }
}