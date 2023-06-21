import React, { useState } from 'react';
import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";
import "./Clock.css";

const Clock = ({ darkTheme }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(darkTheme);

  const containerClassName = darkTheme ? "dark": "" ;
  return (
    <div  id="container" className={containerClassName}>
      <Generator />
      <More />
      <Less />
    </div>
  );
};

export default Clock;
