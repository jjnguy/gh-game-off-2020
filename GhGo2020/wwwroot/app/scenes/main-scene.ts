export class MainScene extends Phaser.Scene {

  private static imgName = "myImage";
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image(MainScene.imgName, "../assets/phaser.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 300, MainScene.imgName);
  }
}