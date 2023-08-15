import React, { useState } from "react";
import Clock from "./components/Clock";

function App() {
  const [showLess, setShowLess] = useState(false);

  const toggleLess = () => {
    setShowLess(!showLess);
  };

  const darkTheme = true;

  return (
    <div className="App">
      <Clock
        darkTheme={darkTheme}
        showLess={showLess}
        toggleLess={toggleLess}
      />
    </div>
  );
}

export default App;
