import React, { useState } from "react";
import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";
import "./Clock.css";

const Clock = ({ darkTheme, showLess, toggleLess }) => {
  const [showGenerator, setShowGenerator] = useState(true);

  //const lessClassName = showLess ? "show" : "";

  const toggleGenerator = () => {
    setShowGenerator(!showGenerator);
    toggleLess();
  };

  return (
    <div id="container" className={darkTheme ? "dark" : ""}>
      {showGenerator && <Generator />}
      <More toggleGenerator={toggleGenerator} />
      {showLess && <Less />}
    </div>
  );
};

export default Clock;
