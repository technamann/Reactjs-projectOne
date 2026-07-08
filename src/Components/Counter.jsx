import { useState } from "react";

function App() {
    const [party1, setParty1] = useState(0);
    const [party2, setParty2] = useState(0);
    const [party3, setParty3] = useState(0);
    const [party4, setParty4] = useState(0);
    const [party5, setParty5] = useState(0);

    return (
        <div>
            <h1>Voting Counter</h1>

            <h2>Party A : {party1}</h2>
            <button onClick={() => setParty1(party1 + 1)}>Vote Party A</button>

            <h2>Party B : {party2}</h2>
            <button onClick={() => setParty2(party2 + 1)}>Vote Party B</button>

            <h2>Party C : {party3}</h2>
            <button onClick={() => setParty3(party3 + 1)}>Vote Party C</button>

            <h2>Party D : {party4}</h2>
            <button onClick={() => setParty4(party4 + 1)}>Vote Party D</button>

            <h2>Party E : {party5}</h2>
            <button onClick={() => setParty5(party5 + 1)}>Vote Party E</button>

            <hr />

            <h2>Total Votes</h2>
            <h3>{party1 + party2 + party3 + party4 + party5}</h3>
        </div>
    );
}

export default App;