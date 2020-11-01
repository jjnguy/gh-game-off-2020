import { Map } from "../objects/Map";


abstract class OverWorldScene extends Phaser.Scene {

  private static imgName = "myImage";
  private phaserSprite: Phaser.GameObjects.Sprite;
  mapFile: string;

  constructor(map: string) {
    super({
      key: "OverWorldScene"
    });

    this.mapFile = map;
  }

  preload(): void {
    this.load.image(OverWorldScene.imgName, "../assets/phaser.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 300, OverWorldScene.imgName);
  }
}

export class NurseryScene extends OverWorldScene {
  constructor() {
    super('../assets/maps/nursery.json');
  }

  preload() {
    Map.loadFile(this.mapFile);
  }
}
