import React, { useState, Suspense } from 'react';
import Viewer from "./Components/Viewer";
import Sidebar from "./Components/Sidebar";
import { Canvas } from '@react-three/fiber';
import ControlsPanel from './Components/ControlsPanel';
import "./App.css";

export default function App() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [partColors, setPartColors] = useState({});
  const [partTextures, setPartTextures] = useState({});
  const [autoRotate, setAutoRotate] = useState(true);

  const parts = [
    { id: 'seat', name: 'Seat' },
    { id: 'backrest', name: 'Backrest' },
    { id: 'legFL', name: 'Front Left Leg' },
    { id: 'legFR', name: 'Front Right Leg' },
    { id: 'legBL', name: 'Back Left Leg' },
    { id: 'legBR', name: 'Back Right Leg' },
  ];

  const handleColorChange = (color) => {
    if (selectedPart) {
      setPartColors(prev => ({ ...prev, [selectedPart]: color }));
    }
  };

  const handleTextureChange = (texture) => {
    if (selectedPart) {
      setPartTextures(prev => ({ ...prev, [selectedPart]: texture }));
    }
  };

  const handleReset = () => {
    setPartColors({});
    setPartTextures({});
    setSelectedPart(null);
  };

  return (
    <div className="app-container">
      <Sidebar
        parts={parts}
        selectedPart={selectedPart}
        onPartSelect={setSelectedPart}
      />

      <div className="canvas-wrapper">
        <Canvas camera={{ position: [3, 2, 3], fov: 50 }} shadows>
          <Suspense fallback={null}>
            <Viewer
              selectedPart={selectedPart}
              setSelectedPart={setSelectedPart}
              partColors={partColors}
              partTextures={partTextures}
              autoRotate={autoRotate}
            />
          </Suspense>
        </Canvas>

        <ControlsPanel
          selectedPart={selectedPart}
          onColorChange={handleColorChange}
          onTextureChange={handleTextureChange}
          onReset={handleReset}
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
        />

        <div className="controls-info">
  <span className="controls-title">Controls</span>
  <div className="controls-text">
    🖱️ Click parts to select <span>•</span>
    🔄 Drag to rotate <span>•</span>
    🔍 Scroll to zoom
  </div>
</div>

      </div>
    </div>
  );
}
