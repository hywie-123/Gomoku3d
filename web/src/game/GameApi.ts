import { Vector3 } from "three";

export class GameApi {
    private gameId: string = '';
    private gameData: any;
    private userName: string = '';

    public async update(): Promise<void> {
        if (! this.userName) {
            this.userName = (await(await fetch('/api/v2/login')).json() as any).data["username"];
        }
        if (! this.gameId) {
            this.gameId = (await(await fetch('/api/v2/join')).json() as any).data["game_id"];
        }
        this.gameData = (await(await fetch(`/api/v2/games/${this.gameId}`)).json() as any).data;
    }

    public async hasWon() {
        return this.gameData.winner === this.userName;
    }

    public async hasLost() {
        return this.gameData.winner !== this.userName && this.gameData.winner !== '';
    }

    public async isMyTurn() {
        return this.gameData.next === this.userName;
    }

    public async getBoardState() {
        return this.gameData.board;
    }

    public async move(pos: Vector3) {
        await fetch(`/api/v2/games/${this.gameId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                x: pos.x,
                y: pos.y,
                z: pos.z,
            }),
        })
    }
}
