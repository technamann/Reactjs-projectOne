import { useState } from "react";
import "./App.css";

function App() {
  const [party1, setParty1] = useState(0);
  const [party2, setParty2] = useState(0);
  const [party3, setParty3] = useState(0);

  const total = party1 + party2 + party3;

  return (
    <div className="app">
      <h1 className="app-title">Election vote counter</h1>

      <div className="results-grid">
        <div className="party-card bjp">
          <img
            src="https://images.pexels.com/photos/16457179/pexels-photo-16457179.jpeg"
            alt="Party A campaign"
            className="party-img"
          />
          <h2 className="party-name">Party A</h2>
          <p className="party-count">{party1}</p>
          <button className="vote-btn" onClick={() => setParty1(party1 + 1)}>
            Vote Party A
          </button>
        </div>

        <div className="party-card cjp">
          <img
            src="https://images.pexels.com/photos/37880548/pexels-photo-37880548.jpeg"
            alt="Party B campaign"
            className="party-img"
          />
          <h2 className="party-name">Party B</h2>
          <p className="party-count">{party2}</p>
          <button className="vote-btn" onClick={() => setParty2(party2 + 1)}>
            Vote Party B
          </button>
        </div>

        <div className="party-card cong">
          <img
            src="https://images.pexels.com/photos/20474699/pexels-photo-20474699.jpeg"
            alt="Party C campaign"
            className="party-img"
          />
          <h2 className="party-name">Party C</h2>
          <p className="party-count">{party3}</p>
          <button className="vote-btn" onClick={() => setParty3(party3 + 1)}>
            Vote Party C
          </button>
        </div>
      </div>

      <div className="total-panel">
        <h2>Total votes</h2>
        <p className="total-count">{total}</p>
      </div>
    </div>
  );
}

export default App;