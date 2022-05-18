import * as three from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls'

export class GameRenderer {
    private camera  : three.PerspectiveCamera;
    private controls: ArcballControls;
    
    public readonly renderer: three.WebGLRenderer;
    public readonly scene   : three.Scene;

    constructor(canvas: HTMLCanvasElement, scene: three.Scene) {
        this.renderer = new three.WebGLRenderer({ canvas, antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xE1F5FE);
        this.renderer.setAnimationLoop(() => {
            this.renderer.render(this.scene, this.camera);
        })

        this.scene = scene;

        this.camera = new three.PerspectiveCamera(
            60, window.innerWidth / window.innerHeight, 0.1, 30);

        const ambient_light = new three.AmbientLight(0xffffff, 0.9);
        this.scene.add(ambient_light);

        const main_light = new three.DirectionalLight(0xffffff, 0.3);
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

        const fill_light = new three.DirectionalLight(0xffffff, 0.1);
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

    public setCamera(position: three.Vector3, lookAt: three.Vector3) {
        this.camera.position.copy(position);
        this.camera.lookAt(lookAt);
        this.controls.update();
    }

    public getRayCaster(clientX: number, clientY: number) {
        const raycaster = new three.Raycaster();
        raycaster.setFromCamera(new three.Vector2(
            + (clientX / window.innerWidth ) * 2 - 1,
            - (clientY / window.innerHeight) * 2 + 1), this.camera);
        return raycaster;
    }
}
