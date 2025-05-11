import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
import Player from "./Player";

class ghostPlayer {

    debug = false;

    baseVelocityX = 15;
    baseVelocityY = 15;

    currVelocityX = 0;
    currVelocityY = 0;

    limitX = 10;
    limitY = 10;

    x: number;
    y: number;
    angle: number = 0;
    parentScene: ProceduralFreeRoam;
    parentPlayer: Player;
    followPlayer = false;
    radius = 500;

    graphics: Phaser.GameObjects.Graphics | undefined = undefined;
    ghostCircle: Phaser.GameObjects.Graphics | undefined = undefined;

    constructor(
        parentScene: ProceduralFreeRoam,
        parentPlayer: Player,
    ) {
        this.parentScene = parentScene;
        this.parentPlayer = parentPlayer;
        this.x = parentPlayer.x;
        this.y = parentPlayer.y;
        parentScene.cameras.main.startFollow(this, true, .1, .1, 1, 1)

        if (this.debug) {
            this.graphics = parentScene.add.graphics();
            this.ghostCircle = parentScene.add.graphics();
        }

    }

    private getAngle(): void {
        const dx = this.parentPlayer.x - this.x;
        const dy = this.parentPlayer.y - this.y;
        this.angle = Math.atan2(dy, dx);
    }

    private getDistance(): number {
        const dx = this.parentPlayer.x - this.x;
        const dy = this.parentPlayer.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    update(): void {
        const distance = this.getDistance();

        const playerX = this.parentPlayer.x;
        const playerY = this.parentPlayer.y;

        const followAreaLeft = this.x - this.limitX;
        const followAreaRight = this.x + this.limitX;
        const followAreaTop = this.y - this.limitY;
        const followAreaBottom = this.y + this.limitY;

        if ((!this.followPlayer && (playerX < followAreaLeft || playerX > followAreaRight || playerY < followAreaTop || playerY > followAreaBottom)) || this.parentPlayer.currSpeed === 0) {
            this.followPlayer = true;
        }
        if (this.followPlayer && distance <= 5) {
            this.followPlayer = false;
        }

        if (this.followPlayer) {
            this.getAngle();
            let factor = (distance) / this.radius * 1.2;
            this.currVelocityX = this.baseVelocityX * factor;
            this.currVelocityY = this.baseVelocityY * factor
            if (this.parentScene.checkActive) {
                this.currVelocityX *= this.parentPlayer.cheatFactor;
                this.currVelocityY *= this.parentPlayer.cheatFactor;
            }
            this.x += this.currVelocityX * Math.cos(this.angle);
            this.y += this.currVelocityY * Math.sin(this.angle);
        }

        if (this.debug && this.graphics && this.ghostCircle) {
            this.graphics.clear();
            this.graphics.lineStyle(2, 0x00ff00, 1);
            this.graphics.strokeRect(followAreaLeft, followAreaTop, 2 * this.limitX, 2 * this.limitY);


            this.ghostCircle.clear();
            this.ghostCircle.lineStyle(2, 0xff0000, 1);
            this.ghostCircle.strokeCircle(this.x, this.y, 50);
        }

    }
}

export default ghostPlayer;
