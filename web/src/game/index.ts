import {
    Vector2,
    Vector3,
    Vector3Tuple,
    Scene,
    Object3D,
    Mesh,
    BufferGeometry,
    SphereBufferGeometry,
    Material,
    MeshBasicMaterial,
    MeshStandardMaterial,
} from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { GameRenderer   } from './GameRenderer';
import { GameApi        } from './GameApi';
import { ValueAnimator  } from './ValueAnimator';
import { HoverIndicator } from './GameHoverIndicator';
import {
    kBoardSize,
    kBoxScale,
    kAnimationFrameTime,
    kAnimationSpeed,
    kEaseFunction,
    kHoverDetectionRadius,
    kHoverIndicatorColor,
    kHoverIndicatorBallRadius,
} from './GameConstants';

enum BoxState { Empty, Player, Opponent, }

export class Game {
    private renderer: GameRenderer;
    private api     : GameApi;

    private canvas: HTMLCanvasElement;
    private scene : Scene;

    private boardState : BoxState[][][];
    private boardObject: Object3D;
    
    private boxes       : Mesh[][][]     = undefined as any;
    private boxGeometry : BufferGeometry = undefined as any;
    private boxMaterials: { [key in BoxState]: Material | null } = {
        [BoxState.Empty     ]: null,
        [BoxState.Player    ]: new MeshStandardMaterial({ color: 0x81D4FA }),
        [BoxState.Opponent  ]: new MeshStandardMaterial({ color: 0xF06292 }),
    };
    private boxAnimators: ValueAnimator[][][] = undefined as any;

    private hoverCandidateIndicatorGeometry = new SphereBufferGeometry(kHoverIndicatorBallRadius, 8, 8);
    private hoverCandidateIndicatorMaterial = new MeshBasicMaterial({ color: kHoverIndicatorColor });
    private hoverCandidateIndicators        : Mesh         [][][] = undefined as any;
    private hoverCandidateIndicatorAnimators: ValueAnimator[][][] = undefined as any;


    private hoverPosition     : Vector3Tuple | null = null;
    private prevHoverPosition : Vector3Tuple | null = null;
    private hoverIndicator    : HoverIndicator = undefined as any;
    private prevHoverIndicator: HoverIndicator = undefined as any;

    private hoverProbes: Mesh[][][] = undefined as any;
    private hoverProbeGeometry = new SphereBufferGeometry(kHoverDetectionRadius, 8, 8);
    private hoverProbeMaterial = new MeshBasicMaterial();

    private mouseDownPosition: Vector2 | null = null;

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
        this.scene  = new Scene();
        this.renderer = new GameRenderer(this.canvas, this.scene);
        this.renderer.setCamera(
            new Vector3(0, 0, 10),
            new Vector3(0, 0,  0));

        this.boardState = array3D(kBoardSize, () => BoxState.Empty);
        this.boardObject = new Object3D();
        this.boardObject.position.set(
            - (kBoardSize[0] - 1) / 2,
            - (kBoardSize[1] - 1) / 2,
            - (kBoardSize[2] - 1) / 2);
        this.scene.add(this.boardObject);

        this.boxAnimators = array3D(kBoardSize, (i, j, k) => {
            const animator = new ValueAnimator();
            const getBox = () => this.boxes[i!]![j!]![k!]!;
            animator.speed = kAnimationSpeed;
            animator.easeFunction            = kEaseFunction;
            animator.setValueCallback        = value => getBox().scale.set(value, value, value);
            animator.getValueCallback        = ()    => getBox().scale.x;
            animator.setZeroValueCallback    = () => getBox().visible = false;
            animator.setNonZeroValueCallback = () => getBox().visible = true;
            return animator;
        });

        this.hoverProbes = array3D(kBoardSize, (i, j, k) => {
            const box = new Mesh(this.hoverProbeGeometry, this.hoverProbeMaterial);
            box.position.set(i, j, k);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });

        this.hoverCandidateIndicators = array3D(kBoardSize, (i, j, k) => {
            const box = new Mesh(
                this.hoverCandidateIndicatorGeometry,
                this.hoverCandidateIndicatorMaterial);
            box.position.set(i, j, k);
            box.scale.set(0, 0, 0);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });

        this.hoverCandidateIndicatorAnimators = array3D(kBoardSize, (i, j, k) => {
            const animator = new ValueAnimator();
            const getBox = () => this.hoverCandidateIndicators[i!]![j!]![k!]!;
            animator.speed = kAnimationSpeed;
            animator.easeFunction            = kEaseFunction;
            animator.setValueCallback        = value => getBox().scale.set(value, value, value);
            animator.getValueCallback        = ()    => getBox().scale.x;
            animator.setZeroValueCallback    = () => getBox().visible = false;
            animator.setNonZeroValueCallback = () => getBox().visible = true;
            return animator;
        });
    }

    private myTurn: boolean = false;
    private isFirstMove: boolean = false;

    public async run() {
        await this.loadModels();

        this.renderer.onBeforeRender = () => {
            array3D(kBoardSize, (i, j, k) => [i, j, k])
                .flat()
                .flat()
                .forEach(([i, j, k]) => {
                    this.boxAnimators                    [i!]![j!]![k!]!.update(kAnimationFrameTime);
                    this.hoverCandidateIndicatorAnimators[i!]![j!]![k!]!.update(kAnimationFrameTime);
                });
            this.hoverIndicator.update(kAnimationFrameTime);
            this.prevHoverIndicator.update(kAnimationFrameTime);
        };

        this.canvas.addEventListener('mousemove', async (e: MouseEvent) => {
            if (! this.myTurn) return;
            if (this.mouseDownPosition) return;
            this.prevHoverPosition = this.hoverPosition;
            const prevHoverIndicator = this.prevHoverIndicator;
            if (this.isFirstMove)
                this.updateHoverPositionForFirstMove();
            else
                this.updateHoverPosition(e.clientX, e.clientY);
            if (! this.prevHoverPosition ||
                ! this.hoverPosition ||
                [0, 1, 2].some(i => this.prevHoverPosition![i] !== this.hoverPosition![i])) {
                this.prevHoverIndicator = this.hoverIndicator;
                this.hoverIndicator = prevHoverIndicator;
                this.onHoverStateChanged();
            }
        });
        this.canvas.addEventListener('mousedown', (e: MouseEvent) => {
            this.mouseDownPosition = new Vector2(e.clientX, e.clientY);
        });
        this.canvas.addEventListener('click', async (e) => {
            const mouseDownPosition = this.mouseDownPosition;
            this.mouseDownPosition = null;
            if (this.myTurn &&
                this.hoverPosition &&
                mouseDownPosition &&
                mouseDownPosition.equals(new Vector2(e.clientX, e.clientY))) {
                this.hoverIndicator.animateOut();
                this.prevHoverIndicator.animateOut();
                await this.api.move(new Vector3(
                    this.hoverPosition[0],
                    this.hoverPosition[1],
                    this.hoverPosition[2]));
                await this.waitForMyTurn();
            }
        });

        await this.waitForMyTurn();
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
    }

    private async loadModels() {
        const loader = new OBJLoader();
        const boxLoaded = await loader.loadAsync("/static/models/box.obj");
        let boxGeometry: BufferGeometry = undefined as any;
        boxLoaded.traverse(child => {
            if (child instanceof Mesh) {
                boxGeometry = child.geometry;
            }
        });

        this.boxGeometry = boxGeometry;
        this.boxGeometry.scale(kBoxScale, kBoxScale, kBoxScale);
        this.boxes = array3D(kBoardSize, (i, j, k) => {
            const box = new Mesh(this.boxGeometry, this.boxMaterials[BoxState.Player]!);
            box.position.set(i, j, k);
            box.scale.set(0, 0, 0);
            box.visible = false;
            this.boardObject.add(box);
            return box;
        });

        this.hoverIndicator     = new HoverIndicator(this.boxGeometry);
        this.prevHoverIndicator = new HoverIndicator(this.boxGeometry);
        this.boardObject.add(this.hoverIndicator    .root)
        this.boardObject.add(this.prevHoverIndicator.root)
    }

    private onBoardStateChanged() {
        array3D(kBoardSize, (i, j, k) => [i, j, k])
            .flat()
            .flat()
            .forEach(([i_, j_, k_]) => ((i: number, j: number, k: number) => {
                const obj = this.boxes[i]![j]![k]!;
                const val = this.boardState[i]![j]![k]!
                obj.material      = this.boxMaterials[val] ?? obj.material;
                obj.castShadow    = val !== BoxState.Empty;
                obj.receiveShadow = val !== BoxState.Empty;
                this.boxAnimators[i]![j]![k]!.animateTo(val === BoxState.Empty ? 0 : 1);
            })(i_!, j_!, k_!))
        if (this.myTurn)
            this.getHoverCandidates()
                .forEach(([i_, j_, k_]) => ((i: number, j: number, k: number) => {
                    this.hoverCandidateIndicatorAnimators[i]![j]![k]!.animateTo(1);
                })(i_!, j_!, k_!));
        else
            array3D(kBoardSize, (i, j, k) => [i, j, k])
                .flat()
                .flat()
                .forEach(([i_, j_, k_]) => ((i: number, j: number, k: number) => {
                    this.hoverCandidateIndicatorAnimators[i]![j]![k]!.animateTo(0);
                })(i_!, j_!, k_!));
    }
    
    private onHoverStateChanged() {
        if (this.prevHoverPosition) {
            this.prevHoverIndicator.animateOut();
        }
        if (this.hoverPosition) {
            this.hoverIndicator.setPosition(new Vector3(
                this.hoverPosition[0],
                this.hoverPosition[1],
                this.hoverPosition[2]));
            this.hoverIndicator.animateIn();
        }
    }

    private updateHoverPosition(mouseX: number, mouseY: number) {
        this.hoverPosition = null;
        const hoverCandidate = this.getHoverCandidates();
        const raycaster = this.renderer.getRayCaster(mouseX, mouseY);
        const intersections = raycaster.intersectObjects(
            hoverCandidate.map(([i, j, k]) => this.hoverProbes[i!]![j!]![k!]!));
        if (intersections.length > 0) {
            const obj = intersections[0]!.object;
            const [i, j, k] = hoverCandidate.find(([i, j, k]) =>
                this.hoverProbes[i!]![j!]![k!]! === obj)!;
            this.hoverPosition = [i!, j!, k!];
            return;
        }
    }

    private updateHoverPositionForFirstMove() {
        this.hoverPosition = [
            (kBoardSize[0] - 1) / 2,
            (kBoardSize[0] - 1) / 2,
            (kBoardSize[0] - 1) / 2,
        ]
    }

    private getHoverCandidates() {
        return Array.from(
            array3D(kBoardSize, (i, j, k) => [i, j, k])
                .flat()
                .flat()
                .filter(([i, j, k]) => this.isHoverCandidate(i!, j!, k!)));
    }

    private isHoverCandidate(i: number, j: number, k: number): boolean {
        return (
            this.boardState[i]![j]![k]! === BoxState.Empty &&
            array3D([5, 5, 5], (i, j, k) => [i - 2, j - 2, k - 2])
                .flat()
                .flat()
                .some(([di_, dj_, dk_]) => ((di, dj, dk) =>
                    Math.abs(di) + Math.abs(dj) + Math.abs(dk) <= 2 &&
                    i + di > 0 && i + di < kBoardSize[0] &&
                    j + dj > 0 && j + dj < kBoardSize[1] &&
                    k + dk > 0 && k + dk < kBoardSize[2] &&
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
