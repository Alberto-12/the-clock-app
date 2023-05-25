import Generator from "./quote-generator/Generator";
import More from "./more-div/More";
/*import Less from "./less-div/Less";*/
import "./Clock.css";

const Clock = ({ darkTheme }) => {

  const containerClassName = darkTheme ? "dark": "" ;
  return (
    <div  className={containerClassName}>
      <Generator />
      <More />
      {/*<Less />*/}
    </div>
  );
};

export default Clock;
