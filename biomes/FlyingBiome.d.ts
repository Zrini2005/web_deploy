import Perlin from "../utils/perlin";
import { BaseBiome } from "./BaseBiome";
export default class FlyingBiome extends BaseBiome {
    constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin);
    protected placeAssets(tileArray: {
        x: number;
        y: number;
    }[], assetType: 'lowElevation' | 'highElevation'): void;
}
