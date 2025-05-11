import { GameObjects } from "phaser";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";
import { Events, eventEmitter } from "../events/EventEmitters";
import { config } from "../config/config";

class Lootbox extends GameObjects.Image {
	ID: number;
	isOpened: boolean;
	canOpenLootbox = false;
	parentScene: ProceduralFreeRoam;
	openImage: Phaser.GameObjects.Image | undefined = undefined;
	openInProgess = false;

	constructor(
		parentScene: ProceduralFreeRoam,
		x: number,
		y: number,
		isOpened: boolean,
		ID: number
	) {
		super(parentScene, x + parentScene.tileSize, y, isOpened ? config.lootboxOpen.key : config.lootboxClosed.key);
		this.setDepth(4);
		this.isOpened = isOpened;
		this.parentScene = parentScene;
		this.ID = ID;

		this.scale = 0.8; // Set scale for visibility

		parentScene.add.existing(this);
	}

	checkIfPlayerIsNear(): boolean {
		if (!this.parentScene.player) return false;

		return Phaser.Math.Distance.Between(
			this.parentScene.player.x, this.parentScene.player.y,
			this.x, this.y
		) < 50; // Adjust proximity range
	}

	showPopup(): void {
		if (!this.openImage) {
			this.openImage = this.parentScene.add.image(this.x, this.y - 40, config.openLootbox.key).setDepth(10).setScale(0.4);
		}
	}

	triggerOpen(): void {
		if (this.openInProgess) return;

		this.openInProgess = true;
		if (this.openImage) {
			console.log("Destroying openImage:", this.openImage); // Debug log
			this.openImage.destroy();
			this.openImage = undefined;
		}

		eventEmitter.emit(Events.LOOTBOX_OPEN, {
			lootboxID: this.ID,
		});
		this.Open();
	}

	Open(): void {
		this.openInProgess = false;
		this.isOpened = true;
		this.setTexture(config.lootboxOpen.key);
		if (this.openImage) {
			console.log("Destroying openImage in Open method:", this.openImage); // Debug log
			this.openImage.destroy();
			this.openImage = undefined;
		}
		//this.saveState();
	}
	saveState(): void {
		const lootboxState = JSON.parse(localStorage.getItem('lootboxState') || '{}');
		lootboxState[this.ID] = this.isOpened;
		localStorage.setItem('lootboxState', JSON.stringify(lootboxState));
	}

	loadState(): void {
		const lootboxState = JSON.parse(localStorage.getItem('lootboxState') || '{}');
		this.isOpened = lootboxState[this.ID] || false;
		this.setTexture(this.isOpened ? config.lootboxOpen.key : config.lootboxClosed.key);
	}

	update(): void {
		if (this.isOpened) return;

		const isNear = this.checkIfPlayerIsNear();

		if (isNear && !this.canOpenLootbox) {
			this.showPopup();
		} else if (!isNear && this.canOpenLootbox) {
			if (this.openImage) {
				console.log("Destroying openImage in Open method:", this.openImage); // Debug log
				this.openImage.destroy();
				this.openImage = undefined;
			}
		}

		this.canOpenLootbox = isNear;

		if (this.canOpenLootbox && !this.openInProgess && this.parentScene.ekey!.isDown) {
			this.triggerOpen();
		}
	}
}

export default Lootbox;
