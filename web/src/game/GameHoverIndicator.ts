import {
    Vector3,
    Object3D,
    Mesh,
    BufferGeometry,
    MeshBasicMaterial
} from 'three';
import { Line2 as Line  } from 'three/examples/jsm/lines/Line2';
import { LineGeometry   } from 'three/examples/jsm/lines/LineGeometry';
import { LineMaterial   } from 'three/examples/jsm/lines/LineMaterial';

import { ValueAnimator  } from './ValueAnimator';
import {
    kBoardSize,
    kAnimationSpeed,
    kEaseFunction,
    kEaseFunctionSecondary,
    kHoverIndicatorColor,
    kHoverIndicatorAxisThickness,
    kHoverIndicatorBallHoverRadius,
} from './GameConstants';

export class HoverIndicatorAxisComponent {
    public readonly geo = new LineGeometry();
    public readonly mat = new LineMaterial({
        color: kHoverIndicatorColor,
        dashed: true,
        dashSize: 2,
        gapSize: 1
    });
    public readonly mesh = new Line(this.geo, this.mat);
    public readonly animator = new ValueAnimator();

    public constructor() {
        this.animator.speed = kAnimationSpeed * 4;
        this.animator.easeFunction            = kEaseFunctionSecondary;
        this.animator.setValueCallback        = value => this.mat.linewidth = value;
        this.animator.getValueCallback        = () => this.mat.linewidth;
        this.animator.setZeroValueCallback    = () => this.mesh.visible = false;
        this.animator.setNonZeroValueCallback = () => this.mesh.visible = true;
    }
}

export class HoverIndicator {
    private readonly xAxis = new HoverIndicatorAxisComponent();
    private readonly yAxis = new HoverIndicatorAxisComponent();
    private readonly zAxis = new HoverIndicatorAxisComponent();

    private readonly ball: Mesh = undefined as any;
    private readonly ballMat = new MeshBasicMaterial({ color: kHoverIndicatorColor });
    private readonly ballAnimator = new ValueAnimator();

    public readonly root = new Object3D();

    public constructor(boxGeo: BufferGeometry) {
        this.ball = new Mesh(boxGeo, this.ballMat);
        this.ballAnimator.speed = kAnimationSpeed;
        this.ballAnimator.easeFunction = kEaseFunction;
        this.ballAnimator.setValueCallback = value => this.ball.scale.set(value, value, value);
        this.ballAnimator.getValueCallback = () => this.ball.scale.x;
        this.ballAnimator.setZeroValueCallback = () => this.ball.visible = false;
        this.ballAnimator.setNonZeroValueCallback = () => this.ball.visible = true;

        this.ball.visible = false;
        this.xAxis.mesh.visible = false;
        this.yAxis.mesh.visible = false;
        this.zAxis.mesh.visible = false;

        this.root.add(this.ball);
        this.root.add(this.xAxis.mesh);
        this.root.add(this.yAxis.mesh);
        this.root.add(this.zAxis.mesh);
    }

    public setPosition(pos: Vector3) {
        this.ball.position.set(pos.x, pos.y, pos.z);
        this.xAxis.geo.setPositions([
            0, pos.y, pos.z,
            kBoardSize[0], pos.y, pos.z,
        ]);
        this.yAxis.geo.setPositions([
            pos.x, 0, pos.z,
            pos.x, kBoardSize[1], pos.z,
        ]);
        this.zAxis.geo.setPositions([
            pos.x, pos.y, 0,
            pos.x, pos.y, kBoardSize[2],
        ]);
    }

    public update(deltaTime: number) {
        this.ballAnimator.update(deltaTime);
        this.xAxis.animator.update(deltaTime);
        this.yAxis.animator.update(deltaTime);
        this.zAxis.animator.update(deltaTime);
    }

    public animateIn() {
        this.ballAnimator.animateTo(kHoverIndicatorBallHoverRadius);
        this.xAxis.animator.animateTo(kHoverIndicatorAxisThickness);
        this.yAxis.animator.animateTo(kHoverIndicatorAxisThickness);
        this.zAxis.animator.animateTo(kHoverIndicatorAxisThickness);
    }

    public animateOut() {
        this.ballAnimator.animateTo(0);
        this.xAxis.animator.animateTo(0);
        this.yAxis.animator.animateTo(0);
        this.zAxis.animator.animateTo(0);
    }
}
