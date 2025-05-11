import { GameObjects } from "phaser";
import { eventEmitter } from "../FreeRoam";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";

class Interactive extends GameObjects.Image {

    parentScene: ProceduralFreeRoam;
    canInteract: boolean;
    eventToEmit: string;

    constructor(parentScene: ProceduralFreeRoam, x: number, y: number, event: string, key: string) {
        super(
            parentScene,
            x,
            y,
            key
        );
        this.eventToEmit = event;
        this.setVisible(false);
        parentScene.add.existing(this);
        this.parentScene = parentScene;
        this.setDepth(10);
        this.canInteract = false;
        this.setScale(0.3)
    }

    checkIfPlayerIsNear(): boolean {
        if (!this.parentScene.player) {
            return false;
        }
        return (
            Math.abs(this.parentScene.player.x - this.x) < 100 &&
            Math.abs(this.parentScene.player.y - this.y) < 100
        );
    }

    update(): void {
        const isNear = this.checkIfPlayerIsNear();
        if (isNear && !this.canInteract) {
            this.setVisible(true);
        }
        if (!isNear && this.canInteract && this.visible) {
            this.setVisible(false);
        }

        this.canInteract = isNear;

        if (this.canInteract && this.parentScene.input.keyboard!.checkDown(this.parentScene.ekey!, 250)) {
            eventEmitter.emit(this.eventToEmit);
        }
    }
}

export default Interactive;