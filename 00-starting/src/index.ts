import Phaser from "phaser";
import { PlayGame, BootGame } from "./scenes";

let game = null;

window.onload = function () {
  game = new Phaser.Game({
    width: 640,
    height: 360,
    type: Phaser.WEBGL,
    disableContextMenu: true,
    title: "My Test",
    scene: [BootGame, PlayGame],
  });
  resize();
  window.addEventListener("resize", resize, false);
};

function resize() {
  const canvas: HTMLCanvasElement = document.querySelector("canvas");
  const windowWidth: number = window.innerWidth;
  const windowHeight: number = window.innerHeight;
  const windowRatio: number = windowWidth / windowHeight;
  const gameRatio: number = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
