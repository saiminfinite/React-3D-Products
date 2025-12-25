
import "./Sidebar.css";

const Sidebar = ({ parts, selectedPart, onPartSelect }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Chair Parts</h2>

      <div className="sidebar-list">
        {parts.map((part) => (
          <button
            key={part.id}
            onClick={() => onPartSelect(part.id)}
            className={`sidebar-btn ${
              selectedPart === part.id ? "active" : ""
            }`}
          >
            {part.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

