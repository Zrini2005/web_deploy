import { Physics } from "phaser";
import ghostPlayer from "./ghostPlayer";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
declare class Player extends Physics.Arcade.Sprite {
    cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;
    shiftKey: Phaser.Input.Keyboard.Key | undefined;
    velocity: number;
    parentScene: ProceduralFreeRoam;
    ghostPlayer: ghostPlayer;
    currSpeed: number;
    cheatFactor: number;
    changeCharacter: (characterURL: string) => void;
    constructor(parentScene: ProceduralFreeRoam, // scene
    x: number, // x position
    y: number, // y position
    texture: string, cursor?: Phaser.Types.Input.Keyboard.CursorKeys, frame?: string | number);
    private setUpKeys;
    private setupAnimations;
    private idle;
    private moveUp;
    private moveRight;
    private moveDown;
    private moveLeft;
    update(): void;
}
export default Player;
