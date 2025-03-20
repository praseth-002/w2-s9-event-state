import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [stateA, setA] = useState("");
  const [stateB, setB] = useState("");
  const [stateC, setC] = useState(null);
  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
    console.log(stateA);
  }
  function onB(event) {
    setB(event.target.value);
    console.log(stateB);
  }
  function compute() {
    if (!/[0-9]/.test(stateA) || !/[0-9]/.test(stateB)) {
      setC("WARNING");
    } else {
      setC(parseFloat(stateA) + parseFloat(stateB));
    }
    console.log(stateC);
  }
  
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} value={stateA}/>

      <label>B =</label>
      <input onChange={onB} value={stateB}/>

      <label>A + B =</label>

      <input disabled value={stateC} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
