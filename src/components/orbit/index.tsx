import React, { useRef, useEffect } from 'react';
import Scene from './Scene';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Orbit = () => {
  const ref = useRef(null);

  useEffect(() => {
    const container = document.getElementById('canvasContainer');
    const width = container.offsetWidth;
    const height = container.offsetWidth;

    const renderer = new THREE.WebGL1Renderer({
      canvas: ref.current as HTMLCanvasElement,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(width / height);
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    const scene = new Scene(camera);
    const control = new OrbitControls(camera, renderer.domElement);

    animate();

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.update();
      control.update();
    }

    function onResize() {
      const container = document.getElementById('canvasContainer');
      const width = container.offsetWidth;
      const height = container.offsetWidth;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(width / height);
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default Orbit;
