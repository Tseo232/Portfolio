import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.148.0/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('threejs-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Create a larger cube
    const geometry = new THREE.BoxGeometry(2, 2, 2); // Increase dimensions to 2x2x2
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Use MeshPhongMaterial for better lighting
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1); // White point light
    pointLight.position.set(5, 5, 5); // Position light source
    scene.add(pointLight);

    camera.position.z = 5;

    // Function to rotate cube and update scene
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
