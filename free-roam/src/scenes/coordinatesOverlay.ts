import { Scene } from "phaser";
import { ProceduralFreeRoam } from "./Procedural-FreeRoam";

export class coordinatesOverlay extends Scene {
  xText: Phaser.GameObjects.Text | undefined = undefined;
  yText: Phaser.GameObjects.Text | undefined = undefined;
  gameScene: ProceduralFreeRoam | undefined = undefined;
  constructor() {
    super({ key: 'coordinatesOverlay', active: true });
  }

  create() {
    this.xText = this.add.text(10, 0, "X: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20);
    this.yText = this.add.text(10, 0, "Y: 0", { font: "20px Courier" }).setScrollFactor(0).setDepth(20);
    if (!this.gameScene) {
      this.gameScene = this.scene.get('SceneMain') as ProceduralFreeRoam;
    }

    this.updateTextPosition();

    // Listen for screen resize
    this.scale.on("resize", () => {
      this.updateTextPosition();
    });
    this.gameScene.events.on('player-moved', this.handlePlayerMove, this);
  }

  updateTextPosition() {
    const { height } = this.cameras.main;
    const padding = { x: 10, y: 30 };
    if (this.xText && this.yText) {

      this.xText.setPosition(padding.x, height - padding.y - 20);
      this.yText.setPosition(padding.x, height - padding.y);
    }
  }

  handlePlayerMove(x: number, y: number) {
    if (this.xText && this.yText) {
      this.xText.setText(`X: ${x}`);
      this.yText.setText(`Y: ${y}`);
    }
  }

  update() {

  }
}