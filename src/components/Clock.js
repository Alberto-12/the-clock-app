import React, { useState, useEffect } from "react";
import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";
import "./Clock.css";

const Clock = ({ darkTheme, showLess, toggleLess, toggleDarkTheme }) => {
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
    fetchTimeData();//Fetch initial time data
    const intervalId = setInterval(fetchTimeData, 1000); //Update time data every second

    return () => {
      clearInterval(intervalId);// Clean up the interval when the component unmounts
    }
  }, []);

  const fetchTimeData = async () => {
    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${userTimezone}`
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
      <More toggleGenerator={toggleGenerator} timeData={timeData} toggleDarkTheme={toggleDarkTheme} />
      {showLess && <Less timeData={timeData} />}
    </div>
  );
};

export default Clock;
