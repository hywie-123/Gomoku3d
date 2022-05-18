import { Game } from "./game";

const game = new Game(
    document.getElementById("game") as HTMLCanvasElement,
    [11, 11, 11],
    async () => {
        window.location.href = "/static/victory.html";
        return undefined as any as never;
    },
    async () => {
        window.location.href = "/static/defeat.html";
        return undefined as any as never;
    });
game.start();
