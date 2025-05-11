import { GameObjects } from "phaser";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
declare class Dungeon extends GameObjects.Image {
    parentScene: ProceduralFreeRoam;
    canEnter: boolean;
    dungeonIndex: number;
    diasbled: Boolean;
    constructor(parentScene: ProceduralFreeRoam, x: number, y: number, dungeonIndex: number, disabled?: Boolean);
    checkIfPlayerIsNear(): boolean;
    update(): void;
}
export default Dungeon;
