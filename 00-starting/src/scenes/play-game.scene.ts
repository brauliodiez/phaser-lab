import { Scene } from "phaser";

export class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  create() {
    console.log("This is my game");
  }
}
