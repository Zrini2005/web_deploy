import Perlin from "../utils/perlin";
import { BaseBiome, FrameDetails } from "./BaseBiome";
import flyingRules from '../assetJson/flying-placement-rules.json'

export default class FlyingBiome extends BaseBiome {
  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin) {
    super(scene, x, y, chunkSize, tileSize, polygonIdx, isDungeon, perlin)

    this.biomeConfig = {
      dungeonAsset: 'flying-biome-dungeon',
      terrainSprite: 'flying-biome',
      collidableObjectSprite: 'flying-atlas',
      nonCollidableObjectSprite: 'flyingNonCollidable',
    }
    this.elevationThreshold = 0.2
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
        // if (assetNoise > -0.21 && assetNoise < -0.17) {
        // this.scene.add.circle(x, y, 4, hexColor, 1).setDepth(12);
        // }
      }

      const biomeConfig = flyingRules[assetType]

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
          if (assetNoise > min && assetNoise < max) {
            const frame = this.chooseRandomSprite(asset.nonCollidableFrames);
            if (frame !== -1) {
              if (frame == 7) {
                const isPlaced = this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
                if (isPlaced) {
                  this.placeNormalSprite(x + this.tileSize, y, this.biomeConfig.nonCollidableObjectSprite, frame + 1);
                }
              }
              if (frame == 9) {
                const isPlaced = this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
                if (isPlaced) {
                  this.placeNormalSprite(x, y + this.tileSize, this.biomeConfig.nonCollidableObjectSprite, frame + 1);
                }
              }
              this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
            }
          }
        }
      }
    }
    );
  }
}