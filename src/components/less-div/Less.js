import "./Less.css";

const Less = () => {
  return (
    <div id="less-div" class="container">
      <div className="data-container">
        <div className="section">
          <p className="left-column">current time zone</p>
          <p className="right-column">Europe/London</p>
        </div>
        <div div className="section">
          <p className="left-column">day of the year</p>
          <p className="right-column numbers">295</p>
        </div>

        <div div className="section">
          <p className="left-column">day of the week</p>
          <p className="right-column numbers">5</p>
        </div>
        <div div className="section" id="week-number">
          <p className="left-column">week number</p>
          <p className="right-column numbers">42</p>
        </div>
      </div>
    </div>
  );
};

export default Less;
