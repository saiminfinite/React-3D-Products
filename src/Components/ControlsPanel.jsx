
import { COLORS } from "../Constents/colors";
import { TEXTURES } from "../Constents/textures";
import "./ControlsPanel.css";

const ControlsPanel = ({
  selectedPart,
  onColorChange,
  onTextureChange,
  onReset,
  autoRotate,
  setAutoRotate
}) => {
  return (
    <div className="controls-panel">
      <h3 className="controls-title">
        {selectedPart ? `Customize ${selectedPart}` : "Select a part"}
      </h3>

      {selectedPart && (
        <>
          {/* Color Section */}
          <div className="section">
            <label>Color</label>
            <div className="color-grid">
              {COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => onColorChange(color.value)}
                  className="color-btn"
                  style={{ background: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Texture Section */}
          <div className="section">
            <label>Material</label>
            <div className="texture-list">
              {Object.entries(TEXTURES).map(([key, texture]) => (
                <button
                  key={key}
                  onClick={() => onTextureChange(key)}
                  className="texture-btn"
                >
                  {texture.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Bottom Panel */}
      <div className="bottom-panel">
        <label className="rotate-label">
          <input
            type="checkbox"
            checked={autoRotate}
            onChange={(e) => setAutoRotate(e.target.checked)}
          />
          Auto Rotate
        </label>

        <button className="reset-btn" onClick={onReset}>
          Reset Configuration
        </button>
      </div>
    </div>
  );
};

export default ControlsPanel;

