import React, { useState } from "react";
import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";
import "./Clock.css";

const Clock = ({ darkTheme, showLess, toggleLess }) => {
  const [showGenerator, setShowGenerator] = useState(true);

  const containerClassName = darkTheme ? "dark" : "";

  //const lessClassName = showLess ? "show" : "";

  const toggleGenerator = () => {
    setShowGenerator(!showGenerator);
  };

  return (
    <div id="container" className={containerClassName}>
      {showGenerator && <Generator />}
      <More toggleLess={toggleLess} toggleGenerator={toggleGenerator} />
      {showLess && !showGenerator && <Less darkTheme={false}  />}
    </div>
  );
};

export default Clock;
