import React, { useState, useEffect } from "react";
import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";
import "./Clock.css";

const Clock = ({ darkTheme, showLess, toggleLess }) => {
  const [showGenerator, setShowGenerator] = useState(true);
  const [timeData, setTimeData] = useState({
    datetime: "",
    abbreviation: "",
    timezone: "",
    day_of_year: "",
    day_of_week: "",
    week_number: "",
  });

  //const lessClassName = showLess ? "show" : "";

  const toggleGenerator = () => {
    setShowGenerator(!showGenerator);
    toggleLess();
  };

  useEffect(() => {
    fetchTimeData();
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

        setTimeData({
          datetime: `${hours}:${minutes}`,
          abbreviation: data.abbreviation,
          timezone: data.timezone,
          day_of_year: data.day_of_year,
          day_of_week: data.day_of_week,
          week_number: data.week_number,
        });
      }
    } catch (error) {
      console.error("Error fetching time data:", error);
    }
  };

  return (
    <div id="container" className={darkTheme ? "dark" : ""}>
      {showGenerator && <Generator />}
      <More toggleGenerator={toggleGenerator} timeData={timeData} />
      {showLess && <Less timeData={timeData} />}
    </div>
  );
};

export default Clock;
