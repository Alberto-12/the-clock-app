import "./Less.css";

const Less = ({ darkTheme, showLess, timeData }) => {

  const containerClassName = darkTheme ? "container dark" : "container";
  const lessClassName = showLess ? "show" : "";

  return (
    <div id="less-div"  className={`${containerClassName} ${lessClassName}`}>
      <div className="data-container">
        <div className="section">
          <p className="left-column">current time zone</p>
          <p className="right-column" id="timezone">{timeData.timezone}</p>
        </div>
        <div className="section" >
          <p className="left-column">day of the year</p>
          <p className="right-column numbers" id="day-of-the-year">{timeData.day_of_year}</p>
        </div>

        <div className="section">
          <p className="left-column">day of the week</p>
          <p className="right-column numbers" id="day-of-the-week">{timeData.day_of_week}</p>
        </div>
        <div className="section" id="week-number">
          <p className="left-column">week number</p>
          <p className="right-column numbers" id="week-number">{timeData.week_number}</p>
        </div>
      </div>
    </div>
  );
};

export default Less;
