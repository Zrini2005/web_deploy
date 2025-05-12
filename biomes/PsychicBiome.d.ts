import Perlin from "../utils/perlin";
import { BaseBiome } from "./BaseBiome";
export default class PsychicBiome extends BaseBiome {
    constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin);
    protected placeAssets(tileArray: {
        x: number;
        y: number;
    }[], assetType: 'lowElevation' | 'highElevation'): void;
    placeSquareSprite(x: number, y: number, spriteKey: string, frame: number): void;
    placeVerticalSprite(x: number, y: number, spriteKey: string, frame: number): void;
    protected placeDungeonTiles(x: number, y: number, dungeonSize?: number, dungeonOffset?: number): void;
}
