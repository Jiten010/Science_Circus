import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true
    });

    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create lines (connections)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x6633CC,
      transparent: true,
      opacity: 0.4
    });
    
    const points = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      
      if (i > 0 && i % 2 === 0) {
        const prevX = points[points.length - 3];
        const prevY = points[points.length - 2];
        const prevZ = points[points.length - 1];
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(prevX, prevY, prevZ),
          new THREE.Vector3(x, y, z)
        ]);
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }
      
      points.push(x, y, z);
    }

    // Position camera
    camera.position.z = 50;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
}
