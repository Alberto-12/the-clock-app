const Clock = () => {
  return (
    <div id="container">
      <div id="quote-generator-div">
        <p id="quote">
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <div id="button"></div>
      </div>
      <p id="author">Ada Lovelace</p>
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

    </div>
  );
};

export default Clock;
