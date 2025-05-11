import Perlin from "../utils/perlin";
import { BaseBiome } from "./BaseBiome";

export default class FlyingBiome extends BaseBiome {
  constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, perlin: Perlin) {
    super(scene, x, y, chunkSize, tileSize, polygonIdx, false, perlin)

    this.biomeConfig = {
      dungeonAsset: 'ground-biome-dungeon',
      terrainSprite: 'ground-biome',
      collidableObjectSprite: 'ground-biome-collidable',
      nonCollidableObjectSprite: 'ground-biome-non-collidable',
    }
  }

  unload(): void {
    if (this.isLoaded) {
      this.isLoaded = false;
      this.isDungeon = false;
      this.tiles.clear(true, true);
    }
  }

  load(): void {
    if (!this.isLoaded) {
      for (var x = 0; x < this.chunkSize; x++) {
        for (var y = 0; y < this.chunkSize; y++) {
          var tileX = (this.x * (this.chunkSize * this.tileSize)) + (x * this.tileSize) + this.tileSize / 2;
          var tileY = (this.y * (this.chunkSize * this.tileSize)) + (y * this.tileSize) + this.tileSize / 2;
          const noise = this.perlin.perlin2(tileX / 100, tileY / 100);
          let frame = 16
          if(noise > 0.2) frame = 32;
          const tile = this.scene.add.image(tileX, tileY, this.biomeConfig.terrainSprite, frame);
          this.tiles.add(tile);
        }
      }
      this.isLoaded = true;
    }
  }
}