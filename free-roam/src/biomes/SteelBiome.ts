import Perlin from "../utils/perlin";
import { BaseBiome, FrameDetails } from "./BaseBiome";
import steelRules from '../assetJson/steel-placement-rules.json'

export default class SteelBiome extends BaseBiome {
  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean = false, perlin: Perlin) {
    super(scene, x, y, chunkSize, tileSize, polygonIdx, isDungeon, perlin);

    this.biomeConfig = {
      dungeonAsset: 'steel-biome-dungeon',
      terrainSprite: 'steel-biome',
      collidableObjectSprite: 'steel-atlas',
      nonCollidableObjectSprite: 'steelNonCollidable',
    }
    this.collidableOverlapThreshold = 0
  }

  protected placeAssets(tileArray: { x: number; y: number }[], assetType: 'lowElevation' | 'highElevation') {

    tileArray.forEach(({ x, y }) => {
      const assetNoise = this.perlin.perlin2(x / 500, y / 500) - this.perlin.perlin2(x / 300, y / 300) * 0.5;

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

      const biomeConfig = steelRules[assetType]

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
              this.placeNormalSprite(x, y, this.biomeConfig.nonCollidableObjectSprite, frame);
            }
          }
        }
      }
    }
    );
  }
}