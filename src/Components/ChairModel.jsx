import React, { useRef, useState } from 'react';
import * as THREE from 'three';

const ChairModel = ({ selectedPart, setSelectedPart, partColors, partTextures }) => {
  const chairRef = useRef();
  const [hoveredPart, setHoveredPart] = useState(null);

  // Create chair parts
  const parts = {
    seat: useRef(),
    backrest: useRef(),
    legFL: useRef(),
    legFR: useRef(),
    legBL: useRef(),
    legBR: useRef(),
  };

  const handlePartClick = (partName) => {
    setSelectedPart(partName);
  };

  const getPartMaterial = (partName) => {
    const color = partColors[partName] || '#8B4513';
    const texture = partTextures[partName];
    
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: texture === 'metal' ? 0.2 : 0.8,
      metalness: texture === 'metal' ? 0.9 : 0.1,
    });

    if (selectedPart === partName) {
      material.emissive = new THREE.Color(color);
      material.emissiveIntensity = 0.3;
    }

    return material;
  };

  return (
    <group ref={chairRef} position={[0, 0, 0]}>
      {/* Seat */}
      <mesh
        ref={parts.seat}
        position={[0, 0.5, 0]}
        onClick={() => handlePartClick('seat')}
        onPointerOver={() => setHoveredPart('seat')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('seat')}
        scale={hoveredPart === 'seat' ? 1.02 : 1}
      >
        <boxGeometry args={[1, 0.1, 1]} />
      </mesh>

      {/* Backrest */}
      <mesh
        ref={parts.backrest}
        position={[0, 1, -0.45]}
        onClick={() => handlePartClick('backrest')}
        onPointerOver={() => setHoveredPart('backrest')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('backrest')}
        scale={hoveredPart === 'backrest' ? 1.02 : 1}
      >
        <boxGeometry args={[1, 1, 0.1]} />
      </mesh>

      {/* Front Left Leg */}
      <mesh
        ref={parts.legFL}
        position={[-0.4, 0, 0.4]}
        onClick={() => handlePartClick('legFL')}
        onPointerOver={() => setHoveredPart('legFL')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('legFL')}
        scale={hoveredPart === 'legFL' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
      </mesh>

      {/* Front Right Leg */}
      <mesh
        ref={parts.legFR}
        position={[0.4, 0, 0.4]}
        onClick={() => handlePartClick('legFR')}
        onPointerOver={() => setHoveredPart('legFR')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('legFR')}
        scale={hoveredPart === 'legFR' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
      </mesh>

      {/* Back Left Leg */}
      <mesh
        ref={parts.legBL}
        position={[-0.4, 0, -0.4]}
        onClick={() => handlePartClick('legBL')}
        onPointerOver={() => setHoveredPart('legBL')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('legBL')}
        scale={hoveredPart === 'legBL' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
      </mesh>

      {/* Back Right Leg */}
      <mesh
        ref={parts.legBR}
        position={[0.4, 0, -0.4]}
        onClick={() => handlePartClick('legBR')}
        onPointerOver={() => setHoveredPart('legBR')}
        onPointerOut={() => setHoveredPart(null)}
        material={getPartMaterial('legBR')}
        scale={hoveredPart === 'legBR' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
      </mesh>
    </group>
  );
};

export default ChairModel;
