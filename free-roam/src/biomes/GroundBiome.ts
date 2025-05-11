import Perlin from "../utils/perlin";
import { BaseBiome, FrameDetails } from "./BaseBiome";
import groundRules from '../assetJson/ground-placement-rules.json'

export default class GroundBiome extends BaseBiome {
  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin) {
    super(scene, x, y, chunkSize, tileSize, polygonIdx, isDungeon, perlin);

    this.biomeConfig = {
      dungeonAsset: 'ground-biome-dungeon',
      terrainSprite: 'ground-biome',
      collidableObjectSprite: 'ground-atlas',
      nonCollidableObjectSprite: 'groundNonCollidable',
    }
    this.collidableOverlapThreshold = 10;
  }

  protected placeAssets(tileArray: { x: number; y: number }[], assetType: 'lowElevation' | 'highElevation') {

    tileArray.forEach(({ x, y }) => {
      const assetNoise = this.perlin.perlin2(x / 500, y / 500) - this.perlin.perlin2(x / 300, y / 300) * 0.5;

      var normalizedNoise = (assetNoise + 1) / 2;
      var color = Phaser.Display.Color.Interpolate.ColorWithColor(
        new Phaser.Display.Color(0, 255, 0),  // Blue for low values
        new Phaser.Display.Color(255, 0, 0),  // // Red for high values
        100,
        Math.floor(normalizedNoise * 100)  // Convert normalized value to range 0-100
      );
      var hexColor = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
      if (this.isWithinBounds(x, y)) {
        // if (assetNoise > -1 && assetNoise < -0.5) {
        // this.scene.add.circle(x, y, 4, hexColor, 1).setDepth(9.5);
        // }
      }

      const biomeConfig = groundRules[assetType]

      for (const asset of biomeConfig) {
        const [minRange, maxRange] = asset.range;

        if (assetNoise >= minRange && assetNoise < maxRange) {
          const frameDetails: FrameDetails = {
            name: asset.name,
            width: asset.collidableFrameWidth,
            height: asset.collidableFrameHeight,
            depth: asset.collidableFrameDepth,
            collisionBounds: asset.collisionBounds,
            collisionOffset: asset.collisionOffset,
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
            // 2-frame sprites
            if (frame == 1 || frame == 12) {
              const isPlaced = this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
              if (isPlaced) {
                this.placeNormalSprite(x + this.tileSize, y, this.biomeConfig.nonCollidableObjectSprite, frame + 1);
              }
            }
            this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
          }
        }
      }
    })
  }

  protected placeDungeonTiles(x: number, y: number, dungeonSize: number = 10, dungeonOffset: number = 3): void {
    if (x <= dungeonSize + dungeonOffset && y <= dungeonSize + dungeonOffset) {
      const dualMapTileX = (this.tileXYs[0].x + this.tileXYs[2].x) / 2;
      const dualMapTileY = (this.tileXYs[0].y + this.tileXYs[1].y) / 2;
      if (x > dungeonOffset && y > dungeonOffset) {
        const tile = this.scene.physics.add.image(dualMapTileX, dualMapTileY, this.biomeConfig.dungeonAsset, (x - (dungeonOffset + 1)) + (y - (dungeonOffset + 1)) * 10).setDepth(4);
        if (y > 2 + dungeonOffset && y < 9 + dungeonOffset) {
          tile.setPushable(false)
          this.scene.collidableObjects!.add(tile)
        }
        this.tiles.add(tile);
      }
    }
  }
}
