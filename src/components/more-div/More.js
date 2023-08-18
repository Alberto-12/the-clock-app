import React, { useState, useEffect } from "react";
import ArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import "./More.css";

const More = ({ toggleLess, toggleGenerator, timeData, toggleDarkTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [greeting, setGreeting] = useState("");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    toggleGenerator();
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchLocationData = async () => {
    try {
      const response = await fetch(
        "https://ipapi.co/json/"
      );
      const data = await response.json();

      if(data && data.city && data.country_code){
        setCity(data.city);
        setCountryCode(data.country_code);
      }
    } catch(error) {
      console.error("Error fetching location data", error);
    }
  };

  useEffect(() => {
    function getGreetingMessage() {
      const currentHour = parseInt(timeData.datetime.split(":")[0], 10);
    
      if (currentHour >= 0 && currentHour < 12) {
        return "GOOD MORNING";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "GOOD AFTERNOON";
      } else {
        return "GOOD EVENING";
      }
    }
    
  
    const updatedGreeting = getGreetingMessage();
    setGreeting(updatedGreeting);

    if(updatedGreeting === "GOOD EVENING"){
      toggleDarkTheme(true);
    } else {
      toggleDarkTheme(false);
    }
  }, [timeData.datetime, toggleDarkTheme]);
  


  return (
    <div id="more-container">
        <div id="greeting-div">
          <div id="icon"></div>
          <p id="greeting">{greeting}</p>
        </div>
        <div id="time-zone-div">
          <span id="time">{timeData.datetime}</span><span id="abbreviation">{timeData.abbreviation}</span>
          {/*<p id="timeZone">BST</p>*/}
        </div>
        <div id="city-button-div">
          <p className="clock" id="location">
            in {city}, {countryCode}
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
