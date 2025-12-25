import { OrbitControls, Environment } from '@react-three/drei';
import ChairModel from './ChairModel';

const Viewer = ({ selectedPart, setSelectedPart, partColors, partTextures, autoRotate }) => {
  return (
    <>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate={autoRotate} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <ChairModel
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        partColors={partColors}
        partTextures={partTextures}
      />
      <Environment preset="studio" />
    </>
  );
};

export default Viewer;
