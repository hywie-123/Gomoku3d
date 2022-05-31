import { Vector3 } from "three";

export class GameApi {
    private gameId: string = '';
    private gameData: any;
    private userName: string = '';

    public constructor(userName: string, gameId: string) {
        this.userName = userName;
        this.gameId   = gameId;
    }

    public async update(): Promise<void> {
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
        await fetch(`/api/v2/games/${this.gameId}/move`, {
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
