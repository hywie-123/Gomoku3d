import { Vector3 } from "three";

export class GameApi {
    public async hasWon() {
        return (await(await fetch('/api/v1/game/winner')).json() as any).data === 1;
    }

    public async hasLost() {
        return (await(await fetch('/api/v1/game/winner')).json() as any).data === -1;
    }

    public async isMyTurn() {
        return (await(await fetch('/api/v1/game/me-next')).json() as any).data;
    }

    public async getMoveCount() {
        return (await(await fetch('/api/v1/game/move-count')).json() as any).data["move_count"];
    }

    public async getBoardState() {
        return (await(await fetch('/api/v1/game/board')).json() as any).data;
    }

    public async move(pos: Vector3) {
        await fetch('/api/v1/game/move', {
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
