import { Scene } from "phaser";
import { ProceduralFreeRoam } from "./Procedural-FreeRoam";
export declare class coordinatesOverlay extends Scene {
    xText: Phaser.GameObjects.Text | undefined;
    yText: Phaser.GameObjects.Text | undefined;
    gameScene: ProceduralFreeRoam | undefined;
    constructor();
    create(): void;
    updateTextPosition(): void;
    handlePlayerMove(x: number, y: number): void;
    update(): void;
}
