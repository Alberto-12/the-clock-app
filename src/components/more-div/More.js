import React, { useState } from "react";
import ArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import "./More.css";

const More = ({ toggleLess, toggleGenerator }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
      toggleGenerator();
    
  };

  return (
    <div id="more-container">
      <div id="greeting-div">
        <div id="icon"></div>
        <p id="greeting">GOOD MORNING</p>
      </div>
      <div id="time-zone-div">
        <div id="time">11:37</div>
        <p id="timeZone">BST</p>
      </div>
      <div id="city-button-div">
        <p className="clock" id="location">
          IN LONDON, UK
        </p>
        <div id="more-button-div" onClick={toggleExpansion}>
          <button id="more-button" onClick={toggleExpansion}>
            {isExpanded ? "less" : "more"}
          </button>
          <div id="arrow-down-div" className={isExpanded ? "rotate-up" : ""}>
            <img id="arrow-down" src={ArrowDown} alt="arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
