import ArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import "./More.css";

const More = () => {
  return (
    <div id="more-container">
      
      <div className="clock" id="good-morning-div">
        <div id="icon-greeting-div">
          <div id="icon"></div>
          <p id="greeting">GOOD MORNING</p>
        </div>
      </div>
      <div  className="clock" id="time-timeZone">
        <div id="time">11:37</div>
        <p id="timeZone">BST</p>
      </div>
      <p className="clock" id="location">IN LONDON, UK</p>
      <div className="clock" id="more-button-div">
        <button id="more-button">more</button>
        <div id="arrow-down-div">
          <img id="arrow-down" src={ArrowDown} alt="arrow down" />
        </div>
      </div>
      
    </div>
  );
};

export default More;
