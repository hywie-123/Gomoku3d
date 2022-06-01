import {
    Vector2,
    Vector3,
    Scene,
    AmbientLight,
    DirectionalLight,
    PerspectiveCamera,
    Raycaster,
    WebGLRenderer,
} from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls'

export class GameRenderer {
    private camera  : PerspectiveCamera;
    private controls: ArcballControls;
    
    public readonly renderer: WebGLRenderer;
    public readonly scene   : Scene;

    public onBeforeRender: () => void = () => {};

    constructor(canvas: HTMLCanvasElement, scene: Scene) {
        this.renderer = new WebGLRenderer({ canvas, antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff);
        this.renderer.setAnimationLoop(() => {
            this.onBeforeRender();
            this.renderer.render(this.scene, this.camera);
        })

        this.scene = scene;

        this.camera = new PerspectiveCamera(
            60, window.innerWidth / window.innerHeight, 0.1, 30);

        const ambient_light = new AmbientLight(0xffffff, 0.9);
        this.scene.add(ambient_light);

        const main_light = new DirectionalLight(0xffffff, 0.3);
        main_light.position.set(1, 2, 3);
        main_light.lookAt(0, 0, 0);
        main_light.castShadow = true;
        main_light.shadow.bias = 0;
        main_light.shadow.mapSize.width = 2048;
        main_light.shadow.mapSize.height = 2048;
        main_light.shadow.camera.left = -10;
        main_light.shadow.camera.right = 10;
        main_light.shadow.camera.top = -10;
        main_light.shadow.camera.bottom = 10;
        main_light.shadow.camera.near = 1;
        main_light.shadow.camera.far = 10;
        this.scene.add(main_light);

        const fill_light = new DirectionalLight(0xffffff, 0.1);
        fill_light.position.set(-1, -2, -3);
        fill_light.lookAt(0, 0, 0);
        this.scene.add(fill_light);

        this.controls = new ArcballControls(
            this.camera,
            this.renderer.domElement,
            this.scene);
        this.controls.setGizmosVisible(false);
        this.controls.enableZoom = false;
        this.controls.enablePan  = false;
        this.controls.addEventListener(
            'change', () => this.renderer.render(this.scene, this.camera));
    }

    public setCamera(position: Vector3, lookAt: Vector3) {
        this.camera.position.copy(position);
        this.camera.lookAt(lookAt);
        this.controls.update();
    }

    public getRayCaster(clientX: number, clientY: number) {
        const raycaster = new Raycaster();
        raycaster.setFromCamera(new Vector2(
            + (clientX / window.innerWidth ) * 2 - 1,
            - (clientY / window.innerHeight) * 2 + 1), this.camera);
        return raycaster;
    }

    public resize(width: number, height: number) {
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
}
