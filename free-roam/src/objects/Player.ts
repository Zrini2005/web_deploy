import { Physics } from "phaser";
import { config } from "../config/config";
import { Animations } from "../types";
import ghostPlayer from "./ghostPlayer";
import { ProceduralFreeRoam } from "../scenes/Procedural-FreeRoam";

const animations: Animations = {
	up: {
		startFrame: 0,
		endFrame: 15,
	},
	down: {
		startFrame: 64,
		endFrame: 79,
	},
	right: {
		startFrame: 32,
		endFrame: 47,
	},
	idle: {
		startFrame: 48,
		endFrame: 63,
	},
	left: {
		startFrame: 16,
		endFrame: 31,
	},
};

class Player extends Physics.Arcade.Sprite {
	cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined = undefined;
	wKey: Phaser.Input.Keyboard.Key | undefined = undefined;
	aKey: Phaser.Input.Keyboard.Key | undefined = undefined;
	sKey: Phaser.Input.Keyboard.Key | undefined = undefined;
	dKey: Phaser.Input.Keyboard.Key | undefined = undefined;
	shiftKey: Phaser.Input.Keyboard.Key | undefined = undefined;

	velocity = config.player.velocity;

	parentScene: ProceduralFreeRoam;
	ghostPlayer: ghostPlayer;

	currSpeed = 0;
	cheatFactor = 2;

	changeCharacter = (characterURL: string) => {
		this.setTexture(characterURL);
		this.setupAnimations();
	};

	constructor(
		parentScene: ProceduralFreeRoam, // scene
		x: number, // x position
		y: number, // y position
		texture: string,
		cursor?: Phaser.Types.Input.Keyboard.CursorKeys,
		frame?: string | number
	) {
		super(parentScene, x, y, texture, frame);

		this.parentScene = parentScene;

		this.scale = window.innerHeight / (config.player.frameWidth * 10);

		this.cursor = cursor;

		this.setUpKeys(); // set up WASD keys

		// place the player at the center of the screen
		this.setOrigin(0.5, 0.5);

		// add camera follow where the player is at the center of the camera
		// parentScene.cameras.main.startFollow(this, true, 1,1);

		parentScene.physics.add.existing(this);
		this.body!.setSize(this.body!.width * 0.5, this.body!.height, true);
		this.body!.setOffset(this.body!.offset.x, this.body!.offset.y + 26);
		this.setScale(0.2)
		parentScene.add.existing(this).setDepth(5);


		// this.setupAnimations();
		this.ghostPlayer = new ghostPlayer(this.parentScene, this)
		// this.setCollideWorldBounds(true);
	}
	
	private setUpKeys() {
		this.wKey = this.parentScene.input.keyboard!.addKey(
			Phaser.Input.Keyboard.KeyCodes.W
		);
		this.aKey = this.parentScene.input.keyboard!.addKey(
			Phaser.Input.Keyboard.KeyCodes.A
		);
		this.sKey = this.parentScene.input.keyboard!.addKey(
			Phaser.Input.Keyboard.KeyCodes.S
		);
		this.dKey = this.parentScene.input.keyboard!.addKey(
			Phaser.Input.Keyboard.KeyCodes.D
		);
		this.shiftKey = this.parentScene.input.keyboard!.addKey(
			Phaser.Input.Keyboard.KeyCodes.SHIFT
		);
	}

	private setupAnimations() {
		Object.keys(animations).forEach((key) => {
			const animation = animations[key];
			this.anims.remove(key);
			this.anims.create({
				key: key,
				frames: this.anims.generateFrameNumbers(
					this.parentScene.characterURL,
					{
						start: animation.startFrame,
						end: animation.endFrame,
					}
				),
				frameRate: config.player.frameRate,
				repeat: -1,
			});
		});
	}

	private idle() {
		this.currSpeed = 0;
		this.setVelocityX(0);
		this.setVelocityY(0);
		this.anims.play("idle", true);
	}

	private moveUp(factor: number) {
		this.currSpeed = this.velocity * -factor
		this.setVelocityY(-factor * this.velocity);
		this.setVelocityX(0);
		this.anims.play("up", true);
	}

	private moveRight(factor: number) {
		this.currSpeed = this.velocity * factor
		this.setVelocityX(factor * this.velocity);
		this.setVelocityY(0);
		this.anims.play("right", true);
	}

	private moveDown(factor: number) {
		this.currSpeed = this.velocity * factor
		this.setVelocityY(factor * this.velocity);
		this.setVelocityX(0);
		this.anims.play("down", true);
	}

	private moveLeft(factor: number) {
		this.currSpeed = this.velocity * -factor
		this.setVelocityX(-factor * this.velocity);
		this.setVelocityY(0);
		this.anims.play("left", true);
	}


	update() {
		// console.log("player x: ", this.x, "player y: ", this.y)
		if (!this.cursor) {
			return;
		}

		this.cheatFactor = 2;

		if (this.cursor.up.isDown || this.wKey?.isDown) {
			if (this.shiftKey?.isDown && this.parentScene.checkActive) {
				this.moveUp(this.cheatFactor);
			} else {
				this.moveUp(1);
			}
		} else if (this.cursor.right.isDown || this.dKey?.isDown) {
			if (this.shiftKey?.isDown && this.parentScene.checkActive) {
				this.moveRight(this.cheatFactor);
			} else {
				this.moveRight(1);
			}
		} else if (this.cursor.down.isDown || this.sKey?.isDown) {
			if (this.shiftKey?.isDown && this.parentScene.checkActive) {
				this.moveDown(this.cheatFactor);
			} else {
				this.moveDown(1);
			}
		} else if (this.cursor.left.isDown || this.aKey?.isDown) {
			if (this.shiftKey?.isDown && this.parentScene.checkActive) {
				this.moveLeft(this.cheatFactor);
			} else {
				this.moveLeft(1);
			}
		} else {
			this.idle();
		}
		if (this.parentScene.joystick) {
			const forceX = this.parentScene.joystick.forceX;
			const forceY = this.parentScene.joystick.forceY;
	
			if (Math.abs(forceX) > 0.1 || Math.abs(forceY) > 0.1) {
				if (Math.abs(forceX) > Math.abs(forceY)) {
					if (forceX > 0) this.moveRight(1);
					else this.moveLeft(1);
				} else {
					if (forceY > 0) this.moveDown(1);
					else this.moveUp(1);
				}
			}
			else {
				this.idle();
			}
		}

		if (this.ghostPlayer) {
			this.ghostPlayer.update();
		}
	}
}

export default Player;
