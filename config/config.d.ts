import { Asset } from "../types";
type Config = {
    fps: Phaser.Types.Core.FPSConfig;
    tileWidth: number;
    player: {
        key: string;
        velocity: number;
        spawn: {
            x: number;
            y: number;
        };
        frameWidth: number;
        frameHeight: number;
        frameRate: number;
    };
    freeRoam: {
        key: string;
    };
    loader: {
        key: string;
    };
    arena: {
        startMatchImage: Asset;
        startMatchImageMobile: Asset;
    };
    lootboxOpen: Asset;
    lootboxClosed: Asset;
    openLootbox: Asset;
    openDungeon: Asset;
    teleporter: {
        Effect: Asset;
        Image: Asset;
    };
    seed: number;
};
declare const config: Config;
export { config };
