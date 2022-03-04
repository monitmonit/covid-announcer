import * as THREE from 'three';

export default class Earth extends THREE.Mesh {
  constructor(radius = 10) {
    super();
    this.geometry = new THREE.SphereGeometry(radius, 32, 32);
    this.material = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('/earth_map.jpeg'),
    });
  }
}
