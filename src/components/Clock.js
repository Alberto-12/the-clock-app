import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
import Less from "./less-div/Less";

const Clock = () => {
  return (
    <div id="container">
      <Generator />
      <More />
      <Less />
    </div>
  );
};

export default Clock;
