import React, { useState } from "react";
import Clock from "./components/Clock";

function App() {
  const [showLess, setShowLess] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);// Add darkTheme state

  const toggleLess = () => {
    setShowLess(!showLess);
  };

  const toggleDarkTheme = (value) => {
    setDarkTheme(value);
  };

  return (
    <div className={`App ${darkTheme ? "dark" : ""}`}>{/* Apply "dark" class based on darkTheme state */}
      <Clock
        darkTheme={darkTheme}
        showLess={showLess}
        toggleLess={toggleLess}
        toggleDarkTheme={toggleDarkTheme}// Pass the function as a prop
      />
    </div>
  );
}

export default App;
