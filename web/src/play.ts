import { Game } from "./game";

const game = new Game(document.getElementById("game") as HTMLCanvasElement);
game.start();
