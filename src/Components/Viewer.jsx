// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function ChairModel() {
//   const { scene } = useGLTF("/models/chair.glb");
//   return <primitive object={scene} scale={1.5} />;
// }

// export default function Viewer() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[5, 5, 5]} />

//       <ChairModel />

//       <OrbitControls />
//     </Canvas>
//   );
// }


import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Chair({ selectedPart, onSelectPart, colors }) {
  return (
    <group>

      {/* SEAT */}
      <mesh
        name="Seat"
        position={[0, 0.6, 0]}
        onClick={() => onSelectPart("Seat")}
      >
        <boxGeometry args={[1.6, 0.3, 1.6]} />
        <meshStandardMaterial color={colors.Seat || "#ff9800"} />
      </mesh>

      {/* BACKREST */}
      <mesh
        name="Backrest"
        position={[0, 1.2, -0.65]}
        onClick={() => onSelectPart("Backrest")}
      >
        <boxGeometry args={[1.6, 1, 0.2]} />
        <meshStandardMaterial color={colors.Backrest || "#9e9e9e"} />
      </mesh>

      {/* LEGS */}
      {[
        [-0.6, 0, 0.6],
        [0.6, 0, 0.6],
        [-0.6, 0, -0.6],
        [0.6, 0, -0.6],
      ].map((pos, i) => (
        <mesh
          key={i}
          name="Legs"
          position={pos}
          onClick={() => onSelectPart("Legs")}
        >
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color={colors.Legs || "#795548"} />
        </mesh>
      ))}

    </group>
  );
}

export default function Viewer({ selectedPart, onSelectPart, colors }) {
  return (
    <Canvas
      camera={{ position: [4, 4, 6] }}
      style={{ height: "100vh", background: "#f2f2f2" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Chair
        selectedPart={selectedPart}
        onSelectPart={onSelectPart}
        colors={colors}
      />

      <OrbitControls />
    </Canvas>
  );
}
