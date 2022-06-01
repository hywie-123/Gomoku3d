import * as three from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { GameRenderer } from './GameRenderer';
import { GameApi      } from './GameApi';

enum BoxState { Empty, Player, Opponent, }

const kBoxScale = 0.35;
const kHoverDetectionRadius = 0.2;
const kHoverIndicationRadius = 0.1;

export class Game {
    private renderer: GameRenderer;
    private api     : GameApi;

    private canvas: HTMLCanvasElement;
    private scene : three.Scene;

    private boardSize  : three.Vector3Tuple;
    private boardState : BoxState[][][];
    private boardObject: three.Object3D;
    
    private boxObjects  : three.Mesh[][][]     = undefined as any;
    private boxGeometry : three.BufferGeometry = undefined as any;
    private boxMaterials: { [key in BoxState]: three.Material | null } = {
        [BoxState.Empty     ]: null,
        [BoxState.Player    ]: new three.MeshStandardMaterial({ color: 0x81D4FA }),
        [BoxState.Opponent  ]: new three.MeshStandardMaterial({ color: 0xF06292 }),
    };

    private hoverPosition: three.Vector3Tuple | null = null;
    private hoverObject  : three.Mesh = undefined as any;
    private hoverMaterial: three.Material = new three.MeshBasicMaterial({
        color: 0x81D4FA,
        wireframe: true, });

    private hoverDetectionObjects: three.Mesh[][][] = undefined as any;
    private hoverDetectionGeometry: three.BufferGeometry = new three.SphereGeometry(kHoverDetectionRadius);
    private hoverDetectionMaterial: three.Material = new three.MeshBasicMaterial({ color: 0xF06292 });//new three.MeshBasicMaterial();

    private hoverIndicationObjects: three.Mesh[][][] = undefined as any;
    private hoverIndicationGeometry: three.BufferGeometry = new three.SphereGeometry(kHoverIndicationRadius);
    private hoverIndicationMaterial: three.Material = new three.MeshBasicMaterial({ color: 0xE1F5FE });

    private mouseDownPosition: three.Vector2 | null = null;

    private onWon : () => void;
    private onLost: () => void;

    constructor(
        canvas: HTMLCanvasElement,
        userName: string,
        gameId: string,
        onWon : () => void,
        onLost: () => void,) {
        this.api = new GameApi(userName, gameId);
        this.onWon  = onWon;
        this.onLost = onLost;

        this.canvas = canvas;
        this.scene  = new three.Scene();
        this.renderer = new GameRenderer(this.canvas, this.scene);
        this.renderer.setCamera(
            new three.Vector3(0, 0, 10),
            new three.Vector3(0, 0,  0));

        this.boardSize  = [11, 11, 11];
        this.boardState = array3D(this.boardSize, () => BoxState.Empty);
        this.boardObject = new three.Object3D();
        this.boardObject.position.set(
            - (this.boardSize[0] - 1) / 2,
            - (this.boardSize[1] - 1) / 2,
            - (this.boardSize[2] - 1) / 2);
        this.scene.add(this.boardObject);

        this.hoverDetectionObjects = array3D(this.boardSize, (i, j, k) => {
            const box = new three.Mesh(this.hoverDetectionGeometry, this.hoverDetectionMaterial);
            box.position.set(i, j, k);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });

        this.hoverIndicationObjects = array3D(this.boardSize, (i, j, k) => {
            const box = new three.Mesh(this.hoverIndicationGeometry, this.hoverIndicationMaterial);
            box.position.set(i, j, k);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });
    }

    private myTurn: boolean = false;
    private isFirstMove: boolean = false;

    public async start() {
        await this.loadModels();

        this.canvas.onmousemove = async (e: MouseEvent) => {
            if (! this.myTurn) return;
            if (this.mouseDownPosition) return;
            if (this.isFirstMove)
                this.updateHoverPositionForFirstMove();
            else
                this.updateHoverPosition(e.clientX, e.clientY);
            this.onHoverStateChanged();
        };
        this.canvas.onmousedown = (e: MouseEvent) => {
            this.mouseDownPosition = new three.Vector2(e.clientX, e.clientY);
        }
        this.canvas.onclick = async (e) => {
            const mouseDownPosition = this.mouseDownPosition;
            this.mouseDownPosition = null;
            if (this.myTurn &&
                this.hoverPosition &&
                mouseDownPosition &&
                mouseDownPosition.equals(new three.Vector2(e.clientX, e.clientY))) {
                await this.api.move(new three.Vector3(
                    this.hoverPosition[0],
                    this.hoverPosition[1],
                    this.hoverPosition[2]));
                await this.waitForMyTurn();
            }
        }
        this.waitForMyTurn();
    }

    private async waitForMyTurn() {
        while (true) {
            await this.api.update();
            if (await this.api.hasWon ()) { await this.onWon (); return; }
            if (await this.api.hasLost()) { await this.onLost(); return; }
            this.boardState = await this.api.getBoardState();
            this.myTurn     = await this.api.isMyTurn();
            this.isFirstMove = ! this.boardState.some(
                o => o.some(o => o.some(o => o !== BoxState.Empty)));
            this.onBoardStateChanged();
            if (this.myTurn) break;
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        alert("Your turn!");
    }

    private async loadModels() {
        const loader = new OBJLoader();
        const boxLoaded = await loader.loadAsync("/static/models/box.obj");
        let boxGeometry: three.BufferGeometry = undefined as any;
        boxLoaded.traverse(child => {
            if (child instanceof three.Mesh) {
                boxGeometry = child.geometry;
            }
        });

        this.boxGeometry = boxGeometry;
        this.boxGeometry.scale(kBoxScale, kBoxScale, kBoxScale);
        this.boxObjects = array3D(this.boardSize, (i, j, k) => {
            const box = new three.Mesh(this.boxGeometry, this.boxMaterials[BoxState.Player]!);
            box.position.set(i, j, k);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });

        this.hoverObject = new three.Mesh(this.boxGeometry, this.hoverMaterial);
        this.hoverObject.visible = false;
        this.boardObject.add(this.hoverObject);
    }

    private onBoardStateChanged() {
        array3D(this.boardSize, (i, j, k) => [i, j, k])
            .flat()
            .flat()
            .forEach(([i_, j_, k_]) => ((i: number, j: number, k: number) => {
                const obj = this.boxObjects[i]![j]![k]!;
                const val = this.boardState[i]![j]![k]!
                obj.material      = this.boxMaterials[val] ?? obj.material;
                obj.visible       = val !== BoxState.Empty;
                obj.castShadow    = val !== BoxState.Empty;
                obj.receiveShadow = val !== BoxState.Empty;
            })(i_!, j_!, k_!))
        array3D(this.boardSize, (i, j, k) => [i, j, k])
            .flat()
            .flat()
            .forEach(([i, j, k]) => {
                this.hoverIndicationObjects[i!]![j!]![k!]!.visible = false;
            })
        if (this.myTurn) this.getHoverCandidates()
            .forEach(([i, j, k]) => {
                this.hoverIndicationObjects[i!]![j!]![k!]!.visible = true;
            })
    }
    
    private onHoverStateChanged() {
        if (this.hoverPosition) {
            this.hoverObject.visible = true;
            this.hoverObject.position.set(
                this.hoverPosition[0],
                this.hoverPosition[1],
                this.hoverPosition[2]);
        }
        else {
            this.hoverObject.visible = false;
        }
    }

    private updateHoverPosition(mouseX: number, mouseY: number) {
        this.hoverPosition = null;
        const hoverCandidate = this.getHoverCandidates();
        const raycaster = this.renderer.getRayCaster(mouseX, mouseY);
        const intersections = raycaster.intersectObjects(
            hoverCandidate.map(([i, j, k]) => this.hoverDetectionObjects[i!]![j!]![k!]!));
        if (intersections.length > 0) {
            const obj = intersections[0]!.object;
            const [i, j, k] = hoverCandidate.find(([i, j, k]) => this.hoverDetectionObjects[i!]![j!]![k!]! === obj)!;
            this.hoverPosition = [i!, j!, k!];
            return;
        }
    }

    private updateHoverPositionForFirstMove() {
        this.hoverPosition = [
            (this.boardSize[0] - 1) / 2,
            (this.boardSize[0] - 1) / 2,
            (this.boardSize[0] - 1) / 2,
        ]
    }

    private getHoverCandidates() {
        return Array.from(
            array3D(this.boardSize, (i, j, k) => [i, j, k])
                .flat()
                .flat()
                .filter(([i, j, k]) => this.isHoverCandidate(i!, j!, k!)));
    }

    private isHoverCandidate(i: number, j: number, k: number): boolean {
        return (
            this.boardState[i]![j]![k]! === BoxState.Empty &&
            array3D([3, 3, 3], (i, j, k) => [i - 1, j - 1, k - 1])
                .flat()
                .flat()
                .some(([di_, dj_, dk_]) => ((di, dj, dk) =>
                    Math.abs(di) + Math.abs(dj) + Math.abs(dk) <= 2 &&
                    i + di > 0 && i + di < this.boardSize[0] &&
                    j + dj > 0 && j + dj < this.boardSize[1] &&
                    k + dk > 0 && k + dk < this.boardSize[2] &&
                    this.boardState[i + di]![j + dj]![k + dk]! !== BoxState.Empty)(
                    di_!, dj_!, dk_!)));
    }

    public resize(width: number, height: number) {
        this.renderer.resize(width, height);
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
