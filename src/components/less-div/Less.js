import "./Less.css";

const Less = ({ darkTheme, showLess }) => {

  const containerClassName = darkTheme ? "container dark" : "container";
  const lessClassName = showLess ? "show" : "";

  return (
    <div id="less-div"  className={`${containerClassName} ${lessClassName}`}>
      <div className="data-container">
        <div className="section">
          <p className="left-column">current time zone</p>
          <p className="right-column">Europe/London</p>
        </div>
        <div className="section" id="day-of-the-year">
          <p className="left-column">day of the year</p>
          <p className="right-column numbers">295</p>
        </div>

        <div className="section">
          <p className="left-column">day of the week</p>
          <p className="right-column numbers">5</p>
        </div>
        <div className="section" id="week-number">
          <p className="left-column">week number</p>
          <p className="right-column numbers">42</p>
        </div>
      </div>
    </div>
  );
};

export default Less;
