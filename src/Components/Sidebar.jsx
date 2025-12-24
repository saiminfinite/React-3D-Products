export default function Sidebar({ selectedPart, onSelect }) {
  const parts = ["Seat", "Backrest", "Legs"];

  return (
    <div
      style={{
        width: 200,
        padding: 10,
        background: "#f4f4f4",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>Parts</h3>

      {parts.map((part) => (
        <div
          key={part}
          onClick={() => onSelect(part)}
          style={{
            padding: 8,
            marginBottom: 5,
            cursor: "pointer",
            background: selectedPart === part ? "#ccc" : "#fff",
          }}
        >
          {part}
        </div>
      ))}
    </div>
  );
}
