import { GameObjects } from "phaser";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
declare class Lootbox extends GameObjects.Image {
    ID: number;
    isOpened: boolean;
    canOpenLootbox: boolean;
    parentScene: ProceduralFreeRoam;
    openImage: Phaser.GameObjects.Image | undefined;
    openInProgess: boolean;
    constructor(parentScene: ProceduralFreeRoam, x: number, y: number, isOpened: boolean, ID: number);
    checkIfPlayerIsNear(): boolean;
    showPopup(): void;
    triggerOpen(): void;
    Open(): void;
    saveState(): void;
    loadState(): void;
    update(): void;
}
export default Lootbox;
