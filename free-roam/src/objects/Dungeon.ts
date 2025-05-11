import { GameObjects } from "phaser";
import { config } from "../config/config";
import { Events, eventEmitter } from "../FreeRoam";
import { regionNameToString } from "../utils/helpers";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";

class Dungeon extends GameObjects.Image {

    parentScene: ProceduralFreeRoam;
    canEnter: boolean;
    dungeonIndex: number;
    diasbled: Boolean;

    constructor(parentScene: ProceduralFreeRoam, x: number, y: number, dungeonIndex: number, disabled: Boolean = false) {
        super(
            parentScene,
            x+parentScene.tileSize,
            y,
            config.openDungeon.key
        );
        this.setVisible(false);
        parentScene.add.existing(this);
        this.parentScene = parentScene;
        this.setDepth(10);
        this.setScale(0.4);
        this.canEnter = false;
        this.dungeonIndex = dungeonIndex;
        this.diasbled = disabled;
    }

    checkIfPlayerIsNear(): boolean {
        if (!this.parentScene.player || this.diasbled) {
            return false;
        }
        return (
            Math.abs(this.parentScene.player.x - this.x) < 100 &&
            Math.abs(this.parentScene.player.y - this.y) < 100
        );
    }

    update(): void {
        if (!this.diasbled) {
            const isNear = this.checkIfPlayerIsNear();
            if (isNear && !this.canEnter) {
                console.log("Player is near dungeon", this.dungeonIndex);
                this.setVisible(true);
            }
            if (!isNear && this.canEnter && this.visible) {
                this.setVisible(false);
            }

            this.canEnter = isNear;

            if (this.canEnter && this.parentScene.input.keyboard!.checkDown(this.parentScene.ekey!, 250)) {
                console.log("Entering dungeon", this.dungeonIndex);
                eventEmitter.emit(Events.ENTER_DUNGEON, { RegionIndex: this.dungeonIndex });
            }
        }
    }
}

export default Dungeon;