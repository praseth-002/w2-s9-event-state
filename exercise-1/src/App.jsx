import React, { useState } from "react";
function App() {
  const [raining, setRaining] = useState(false);

  function onSunClick() {
    // alert("SUNNY");
    // document.getElementsByTagName("main")[0].classList.add("sunny") 
    setRaining(false);   
  }

  function onRainClick() {
    // alert("RAINY");
    // document.getElementsByTagName("main")[0].classList.add("rainy") 
    setRaining(true);   
  }

  function getTitle() {
    if (raining === false) {
      return "sunny";
    } else if (raining === true) {
      return "rainy";
    } else {
      return "no weather";
    }
  }

  function getBackgroundColor() {
    if (raining === false) {
      return "sunny";
    } else if (raining === true) {
      return "rainy";
    }
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
