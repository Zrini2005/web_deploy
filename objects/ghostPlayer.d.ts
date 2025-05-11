import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
import Player from "./Player";
declare class ghostPlayer {
    debug: boolean;
    baseVelocityX: number;
    baseVelocityY: number;
    currVelocityX: number;
    currVelocityY: number;
    limitX: number;
    limitY: number;
    x: number;
    y: number;
    angle: number;
    parentScene: ProceduralFreeRoam;
    parentPlayer: Player;
    followPlayer: boolean;
    radius: number;
    graphics: Phaser.GameObjects.Graphics | undefined;
    ghostCircle: Phaser.GameObjects.Graphics | undefined;
    constructor(parentScene: ProceduralFreeRoam, parentPlayer: Player);
    private getAngle;
    private getDistance;
    update(): void;
}
export default ghostPlayer;
