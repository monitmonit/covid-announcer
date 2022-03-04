import * as THREE from 'three';
import Earth from './Earth';
import Stars from './Stars';

export default class Scene extends THREE.Scene {
  private camera;
  private orbit: THREE.Object3D;

  constructor(camera: THREE.PerspectiveCamera) {
    super();
    this.camera = camera;
    this.orbit = new THREE.Object3D();
    this.add(this.orbit);
    this.init();
  }

  init() {
    this.camera.position.set(0, 0, 30);

    const earth = new Earth();
    this.orbit.add(earth);

    const light = new THREE.DirectionalLight('white', 1.5);
    light.position.set(0, 20, 20);
    this.add(light);
  }

  update() {
    this.orbit.rotateY(0.001);
  }
}
