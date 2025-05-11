import { GameObjects } from "phaser";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
declare class Arena extends GameObjects.Rectangle {
    parentScene: ProceduralFreeRoam;
    startMatchImage: GameObjects.Image | undefined;
    matchmaking: boolean;
    canMatchmake: boolean;
    constructor(parentScene: ProceduralFreeRoam, x: number, y: number);
    checkIfPlayerIsNear(): boolean;
    endMatchMaking(): void;
    showPopup(): void;
    triggerMatchmake(): void;
    update(): void;
}
export default Arena;
