import { GameObjects } from "phaser";
import { Events, eventEmitter } from "../FreeRoam";
import { config } from "../config/config";
import { regionNameToString } from "../utils/helpers";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";

class Arena extends GameObjects.Rectangle {
	parentScene: ProceduralFreeRoam;
	startMatchImage: GameObjects.Image | undefined = undefined;
	matchmaking = false;
	canMatchmake = true;

	constructor(parentScene: ProceduralFreeRoam, x: number, y: number) {
		super(
			parentScene,
			x,
			y
		);

		this.parentScene = parentScene;
		this.scale = 3;
		this.setDepth(4)
		parentScene.add.existing(this);
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

	endMatchMaking(): void {
		this.canMatchmake = true;
		this.matchmaking = false;
		if (this.startMatchImage) {
			this.startMatchImage.visible = true;
		}
	}

	showPopup(): void {
		const imageKey = this.parentScene.sys.game.device.os.desktop ? config.arena.startMatchImage.key : config.arena.startMatchImageMobile.key;
		this.startMatchImage = this.parentScene.add
			.image(this.x, this.y, imageKey)
			.setDepth(10)
			.setScale(0.3);
	}

	triggerMatchmake(): void {
		if (this.matchmaking) {
			return;
		}
		this.matchmaking = true;
		this.parentScene.pauseGame();

		eventEmitter.emit(Events.START_MATCHMAKING);
		if (this.startMatchImage) {
			this.startMatchImage.visible = false;
		}
	}

	update(): void {
		if (this.matchmaking) {
			return;
		}

		const isNear = this.checkIfPlayerIsNear();

		if (isNear && !this.canMatchmake) {
			this.showPopup();
		}

		if (!isNear && this.canMatchmake) {
			if (this.startMatchImage) {
				this.startMatchImage.visible = false;
			}
		}

		this.canMatchmake = isNear;

		const checkKey = () => {
			if (this.parentScene.sys.game.device.os.desktop && this.parentScene.enterKey) {
				return this.parentScene.enterKey.isDown;
			} else if(!this.parentScene.sys.game.device.os.desktop && this.parentScene.ekey) {
				return this.parentScene.input.keyboard!.checkDown(this.parentScene.ekey, 250);
			} else return false
		}
		if (this.canMatchmake && checkKey()) {
			this.triggerMatchmake();
		}
	}
}

export default Arena;
