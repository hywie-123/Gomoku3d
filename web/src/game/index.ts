import * as three from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { GameEngine } from './engine';
import { GameApi    } from './GameApi';

interface GamePalette {
    background: number,
}

const defaultPalette: GamePalette = {
    background: 0xE1F5FE,
}

enum BoxState {
    Hover = -2,
    Neutral = -1,
    Empty,
    Player,
    Opponent,
}

export class Game {
    private engine: GameEngine;
    private api   : GameApi;

    private canvas: HTMLCanvasElement;
    private scene : three.Scene;

    private boardSize: three.Vector3Tuple;
    private boxStates: BoxState[][][];
    private boardObject: three.Object3D;
    
    private boxObjects: three.Mesh[][][] = undefined as any;
    private boxGeometry: three.BufferGeometry;

    private boxMaterials: { [key in BoxState]: three.Material | null } = {
        [BoxState.Empty     ]: null,
        [BoxState.Hover     ]: new three.MeshBasicMaterial({ color: 0x81D4FA, wireframe: true, }),
        [BoxState.Neutral   ]: new three.MeshStandardMaterial({ color: 0xffffff }),
        [BoxState.Player    ]: new three.MeshStandardMaterial({ color: 0x81D4FA }),
        [BoxState.Opponent  ]: new three.MeshStandardMaterial({ color: 0xF06292 }),
    };

    private boxHovered: three.Vector3Tuple | null = null;

    private mouseDownPosition: three.Vector2 | null = null;

    private onWon : () => Promise<void>;
    private onLost: () => Promise<void>;

    constructor(
        canvas: HTMLCanvasElement,
        boardSize: three.Vector3Tuple = [11, 11, 11],
        onWon : () => Promise<void>,
        onLost: () => Promise<void>,) {
        this.api = new GameApi();
        this.onWon  = onWon;
        this.onLost = onLost;

        this.canvas = canvas;
        this.scene  = new three.Scene();
        this.engine = new GameEngine(this.canvas, this.scene);
        this.engine.setCamera(
            new three.Vector3(0, 0, 10),
            new three.Vector3(0, 0,  0));

        this.boxGeometry = undefined as any;

        this.boardSize = boardSize;
        this.boxStates = array3D(this.boardSize, () => BoxState.Empty);

        this.setPalette(defaultPalette);

        this.boardObject = new three.Object3D();
        this.boardObject.position.set(
            - (this.boardSize[0] - 1) / 2,
            - (this.boardSize[1] - 1) / 2,
            - (this.boardSize[2] - 1) / 2);
        this.scene.add(this.boardObject);
    }

    private myTurn: boolean = false;
    private moveCount: number = 0;

    public async start() {
        await this.loadModels();

        const prevHandler = this.canvas.onmousemove;
        this.canvas.onmousemove = (e: MouseEvent) => {
            if (prevHandler) (prevHandler as any)(e);
            if (! this.myTurn) return;
            array3D(this.boardSize, (i, j, k) => [i, j, k]).flat().flat().forEach(([i, j, k]) => {
                if (this.boxStates[i!]![j!]![k!]! === BoxState.Hover)
                    this.boxStates[i!]![j!]![k!]! = BoxState.Empty;
            });
            if (this.moveCount === 0) {
                const [i, j, k] = [
                    (this.boardSize[0] - 1) / 2,
                    (this.boardSize[0] - 1) / 2,
                    (this.boardSize[0] - 1) / 2,
                ]
                this.boxStates[i]![j]![k]! = BoxState.Hover;
                this.boxHovered = [i, j, k];
            }
            else {
                this.boxHovered = null;
                const hoverCandidate = this.getSolidNeighbors();
                const raycaster = this.engine.getRayCaster(e.clientX, e.clientY);
                const intersections = raycaster.intersectObjects(
                    hoverCandidate.map(([i, j, k]) => this.boxObjects[i!]![j!]![k!]!));
                if (intersections.length > 0) {
                    const obj = intersections[0]!.object;
                    const [i, j, k] = hoverCandidate.find(([i, j, k]) => this.boxObjects[i!]![j!]![k!]! === obj)!;
                    this.boxStates[i!]![j!]![k!]! = BoxState.Hover;
                    this.boxHovered = [i!, j!, k!];
                }
            }
            this.onBoardStateChanged();
        };

        this.canvas.onmousedown = (e: MouseEvent) => {
            this.mouseDownPosition = new three.Vector2(e.clientX, e.clientY);
        }
        this.canvas.onclick = async (e) => {
            if (this.myTurn &&
                this.boxHovered &&
                this.mouseDownPosition &&
                this.mouseDownPosition.equals(new three.Vector2(e.clientX, e.clientY))) {
                await this.api.move(new three.Vector3(
                    this.boxHovered[0],
                    this.boxHovered[1],
                    this.boxHovered[2]));
                this.myTurn = false;
                this.waitForMyTurn();
            }
            this.mouseDownPosition = null;
        }
        this.waitForMyTurn();
    }

    private async waitForMyTurn() {
        while (true) {
            // @nekomaru: here https://github.com/microsoft/TypeScript/issues/34955;
            if (await this.api.hasWon ()) { await this.onWon (); return; }
            if (await this.api.hasLost()) { await this.onLost(); return; }
            this.moveCount = await this.api.getMoveCount();
            this.boxStates = await this.api.getBoardState();
            this.myTurn    = await this.api.isMyTurn();
            this.onBoardStateChanged();
            if (this.myTurn) break;
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        alert("Your turn!");
    }

    private async loadModels() {
        const loader = new OBJLoader();
        const box_loaded = await loader.loadAsync("/static/models/box.obj");
        let box_geo: three.BufferGeometry = undefined as any;
        box_loaded.traverse(child => {
            if (child instanceof three.Mesh) {
                box_geo = child.geometry;
            }
        });
        this.boxGeometry = box_geo;
        this.boxGeometry.scale(0.35, 0.35, 0.35);

        this.boxObjects = array3D(this.boardSize, (i, j, k) => {
            const box = new three.Mesh(this.boxGeometry, this.boxMaterials[BoxState.Player]!);
            box.position.set(i, j, k);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });
    }

    private onBoardStateChanged() {
        for (let i = 0; i < this.boardSize[0]; ++ i)
            for (let j = 0; j < this.boardSize[1]; ++ j)
                for (let k = 0; k < this.boardSize[2]; ++ k) {
                    const obj = this.boxObjects[i]![j]![k]!;
                    const mat = this.boxMaterials[this.boxStates[i]![j]![k]!];
                    if (mat) {
                        obj.material = mat;
                        obj.visible = true;
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                    }
                    else {
                        obj.visible = false;
                        obj.castShadow = false;
                        obj.receiveShadow = false;
                    }
                }
    }

    private getSolidNeighbors() {
        return Array.from(array3D(this.boardSize, (i, j, k) => [i, j, k])
        .flat().flat().filter(([ii, jj, kk]) => ((i: number, j: number, k: number): boolean => {
            if (this.boxStates[i]![j]![k]! != BoxState.Empty)
                return false;
            const isSolid = (i: number, j: number, k: number) => {
                if (this.boxStates[i]![j]![k]! === BoxState.Player) return true;
                if (this.boxStates[i]![j]![k]! === BoxState.Opponent) return true;
                if (this.boxStates[i]![j]![k]! === BoxState.Neutral) return true;
                return false;
            };
            for (let di = -1; di <= 1; ++ di)
                for (let dj = -1; dj <= 1; ++ dj)
                    for (let dk = -1; dk <= 1; ++ dk)
                        if (Math.abs(di) + Math.abs(dj) + Math.abs(dk) <= 2 &&
                            i + di > 0 && i + di < this.boardSize[0] &&
                            j + dj > 0 && j + dj < this.boardSize[1] &&
                            k + dk > 0 && k + dk < this.boardSize[2] &&
                            isSolid(i + di, j + dj, k + dk))
                            return true;
            return false;
        })(ii!, jj!, kk!)));
    }

    private palette: GamePalette = defaultPalette;
    public setPalette(palette: GamePalette) {
        this.palette = palette;
        this.engine.renderer.setClearColor(this.palette.background);
    }
}

function array3D<T>(
    size: [number, number, number],
    generator: (i: number, j: number, k: number) => T): T[][][] {
    return range(0, size[0]).map(
        i => range(0, size[1]).map(
            j => range(0, size[2]).map(
                k => generator(i, j, k))));
}

function range(start: number, end: number) {
    return Array.from(Array(end - start).keys()).map(i => start + i);
}
