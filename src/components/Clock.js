import ArrowDown from "../assets/desktop/icon-arrow-down.svg";

const Clock = () => {
  return (
    <div id="container">
      {/*<div id="quote-generator-container">
        <div id="quote-generator-div">
          <p id="quote">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <div id="button"></div>
        </div>
        <p id="author">Ada Lovelace</p>
  </div>*/}
      <div id="more-div">
        <div id="good-morning-div">
          <div id="icon-greeting-div">
            <div id="icon"></div>
            <p id="greeting">GOOD MORNING</p>
          </div>
        </div>
        <div id="time-timeZone">
          <div id="time">11:37</div>
          <p id="timeZone">BST</p>
        </div>
        <p id="location">IN LONDON, UK</p>
        <div id="more-button-div">
          <button id="more-button">more</button>
          <div id="arrow-down-div">
            <img id="arrow-down" src={ArrowDown} alt="arrow down" />
          </div>
        </div>
      </div>
      <div id="less-div">
        <p class="left-column">current time zone</p>
        <p class="right-column">Europe/London</p>
        <p class="left-column">day of the year</p>
        <p class="right-column">295</p>
        <p class="left-column">day of the week</p>
        <p class="right-column">5</p>
        <p class="left-column">week number</p>
        <p class="right-column">42</p>
      </div>
    </div>
  );
};

export default Clock;
