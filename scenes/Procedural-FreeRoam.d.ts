import { Scene } from 'phaser';
import { Polygons } from '../utils/polygons';
import Lootbox from "../objects/Lootbox";
import { BaseBiome } from '../biomes/BaseBiome';
import Perlin from '../utils/perlin';
import { LootboxDetails } from '../types.d';
import Player from '../objects/Player';
import Dungeon from '../objects/Dungeon';
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';
import Arena from '../objects/Arena';
import Interactive from '../objects/Interactives';
export declare class ProceduralFreeRoam extends Scene {
    resolution: number;
    collidableObjects: Phaser.Physics.Arcade.Group | undefined;
    chunkSize: number;
    tileSize: number;
    characterURL: string;
    loader: Phaser.Loader.LoaderPlugin | null;
    checkActive: Boolean;
    cheatCode: string | null;
    cheatTimeout: ReturnType<typeof setTimeout> | null;
    polygonData: {
        index: number;
        polygonIndex: number;
        vertices: {
            x: number;
            y: number;
        }[];
        reducedVertices: {
            x: number;
            y: number;
        }[];
        lootBoxesCoordinates: {
            x: number;
            y: number;
        }[];
        gradientAreaCoordinates: {
            x: number;
            y: number;
        }[];
        outerBorderCoordinates: {
            x: number;
            y: number;
        }[];
        centroid: {
            x: number;
            y: number;
        };
    }[];
    lootboxes: Lootbox[];
    lootboxDetails: LootboxDetails[];
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    ekey: Phaser.Input.Keyboard.Key | undefined;
    enterKey: Phaser.Input.Keyboard.Key | undefined;
    dungeonVertices: {
        x: number;
        y: number;
        index: number;
    }[];
    chunks: BaseBiome[];
    followPoint: Phaser.Math.Vector2 | undefined;
    joystick: VirtualJoystick | undefined;
    EbuttonMobile: Phaser.GameObjects.Container | undefined;
    eButtonImage: Phaser.GameObjects.Image | undefined;
    homeButtonImage: Phaser.GameObjects.Image | undefined;
    player: Player | null;
    spawnPoint: {
        x: number;
        y: number;
    } | undefined;
    keyW: Phaser.Input.Keyboard.Key | undefined;
    keyS: Phaser.Input.Keyboard.Key | undefined;
    keyA: Phaser.Input.Keyboard.Key | undefined;
    keyD: Phaser.Input.Keyboard.Key | undefined;
    indices: integer[];
    debugGraphics: Phaser.GameObjects.Graphics | undefined;
    perlin: Perlin;
    dungeons: {
        x: number;
        y: number;
    }[];
    dungeonObjects: Dungeon[];
    arena: Arena | undefined;
    interactives: Interactive[];
    seed: string;
    polygons: Polygons;
    constructor(lootboxDetails: LootboxDetails[], seed: string);
    preload(): void;
    create(): void;
    pauseGame: () => void;
    resumeGame: () => void;
    checkForCheat(): void;
    private setupEButton;
    private setupHomeButton;
    private setUpJoystick;
    private setupCentralMap;
    private setPolygonData;
    private setupInteractives;
    private setupArena;
    disableKeys(): void;
    enableKeys(): void;
    addLootBoxes(): void;
    handleOpenLootbox(lootboxID: number): void;
    handleCharacterChange(characterURL: string): void;
    getCenterVertices(): {
        x: number;
        y: number;
        polygonIndex: number;
    }[];
    getDungeonVertices(seed?: number): {
        x: number;
        y: number;
        index: number;
    }[];
    placeDungeonForEachPolygon(): void;
    isWithinBounds(chunkX: number, chunkY: number): {
        withinBounds: boolean;
        biomeType?: string;
        index?: number;
    };
    point_in_polygon(point: {
        x: number;
        y: number;
    }, polygon: {
        x: number;
        y: number;
    }[]): boolean;
    getChunk(x: number, y: number): BaseBiome | null;
    checkIfDungeon(x: number, y: number): boolean;
    update(): void;
}
