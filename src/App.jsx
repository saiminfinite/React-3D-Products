// import Viewer from "./Components/Viewer";

// export default function App() {
//   return <Viewer />;
// }


import { useState } from "react";
import Viewer from "./Components/Viewer";
// import Viewer from "./components/Viewer";

export default function App() {
  const [selectedPart, setSelectedPart] = useState("Seat");
  const [colors, setColors] = useState({});

  return (
    <>
      <Viewer
        selectedPart={selectedPart}
        onSelectPart={setSelectedPart}
        colors={colors}
      />

      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          background: "#fff",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <h4>Selected: {selectedPart}</h4>
        <input
          type="color"
          onChange={(e) =>
            setColors({
              ...colors,
              [selectedPart]: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}

