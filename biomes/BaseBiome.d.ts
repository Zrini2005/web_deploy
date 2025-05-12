import Phaser from 'phaser';
import { ProceduralFreeRoam } from '../scenes/Procedural-FreeRoam';
import Perlin from '../utils/perlin';
import Prando from 'prando';
export declare class BaseBiome {
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
    tileXYs: {
        x: number;
        y: number;
    }[];
    isDungeon: boolean;
    biomeConfig: {
        terrainSprite: string;
        nonCollidableObjectSprite: string;
        dungeonAsset: string;
        collidableObjectSprite: string;
    };
    deterministicRng: Prando | undefined;
    collidableOverlapThreshold: number;
    elevationThreshold: number;
    constructor(scene: Phaser.Scene, x: number, y: number, chunkSize: number, tileSize: number, polygonIdx: number, isDungeon: boolean, perlin: Perlin);
    unload(): void;
    load(): void;
    protected placeAssets(tileArray: {
        x: number;
        y: number;
    }[], assetType: 'lowElevation' | 'highElevation'): void;
    private generateDualGridTile;
    private placeTerrainTiles;
    protected placeDungeonTiles(x: number, y: number, dungeonSize?: number, dungeonOffset?: number): void;
    private isWithinBorderBounds;
    protected isWithinBounds(x: number, y: number): boolean;
    protected isSpriteWithinBounds(x: number, y: number, width: number, height: number, threshold?: number): boolean;
    private point_in_polygon;
    private isOverlapping;
    private isOutsideChunkBounds;
    protected placeCollidableSprite(x: number, y: number, sprite: string, frameDetails: FrameDetails): void;
    protected placeNormalSprite(x: number, y: number, sprite: string, frame: number, depth?: number): boolean;
    protected chooseRandomSprite(spriteIndices: number[]): number;
}
interface OccupiedArea {
    x: number;
    y: number;
    width: number;
    height: number;
}
declare class Tile extends Phaser.GameObjects.Sprite {
    scene: Phaser.Scene;
    constructor(scene: Phaser.Scene, x: number, y: number, key: string);
}
export default Tile;
export type FrameDetails = {
    name: string;
    width: number;
    height: number;
    depth: number;
    collisionBounds: {
        x: number;
        y: number;
    };
    collisionOffset: {
        x: number;
        y: number;
    };
};
