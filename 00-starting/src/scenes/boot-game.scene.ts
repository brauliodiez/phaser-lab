import { Scene } from "phaser";

export class BootGame extends Phaser.Scene {
  constructor() {
    super("BootGame");
  }

  create() {
    console.log("Booting Game");
    this.scene.start("PlayGame");
  }
}
