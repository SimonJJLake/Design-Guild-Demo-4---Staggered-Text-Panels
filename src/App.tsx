import { useState } from "react";
import "./App.css";
import { TextContainer } from "./TextContainer";

function App() {
  const [aligned, setAligned] = useState(false);

  return (
    <div className="App">
      <div className="panels-container">
        <div className="panel-container">
          <div className="panel">
            <TextContainer aligned={aligned} multiplier={-1.5} />
          </div>
        </div>
        <div className="panel-container">
          <div className="panel" style={{ left: "-25vw" }}>
            <TextContainer aligned={aligned} multiplier={-0.75} />
          </div>
        </div>
        <div className="panel-container">
          <div className="panel" style={{ left: "-50vw" }}>
            <TextContainer aligned={aligned} multiplier={0.5} />
          </div>
        </div>
        <div className="panel-container">
          <div className="panel" style={{ left: "-75vw" }}>
            <TextContainer aligned={aligned} multiplier={1.8} />
          </div>
        </div>
      </div>
      {aligned && (
        <div className="selectable-text-container">
          <div className="panel">
            <TextContainer aligned={true} />
          </div>
        </div>
      )}
      <button className="button" onClick={() => setAligned(!aligned)}>
        Toggle
      </button>
    </div>
  );
}

export default App;
