import React, { useState, useEffect } from "react";
import ArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import "./More.css";

const More = ({ toggleLess, toggleGenerator }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [time, setTime] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    toggleGenerator();
  };

  useEffect(() => {
    fetchTimeData();
  }, []);

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchTimeData = async () => {
    try {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/America/New_York"
      );
      const data = await response.json();

      if (data && data.datetime && data.abbreviation) {
        const datetime = new Date(data.datetime);
        const hours = datetime.getHours();
        const minutes = datetime.getMinutes().toString().padStart(2, "0");

        setTime(`${hours}:${minutes}`);
        setAbbreviation(data.abbreviation);
      }
    } catch (error) {
      console.error("Error fetching time data:", error);
    }
  };

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

  return (
    <div id="more-container">
        <div id="greeting-div">
          <div id="icon"></div>
          <p id="greeting">GOOD MORNING</p>
        </div>
        <div id="time-zone-div">
          <span id="time">{time}</span><span id="abbreviation">{abbreviation}</span>
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
