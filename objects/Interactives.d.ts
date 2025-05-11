import { GameObjects } from "phaser";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
declare class Interactive extends GameObjects.Image {
    parentScene: ProceduralFreeRoam;
    canInteract: boolean;
    eventToEmit: string;
    constructor(parentScene: ProceduralFreeRoam, x: number, y: number, event: string, key: string);
    checkIfPlayerIsNear(): boolean;
    update(): void;
}
export default Interactive;
