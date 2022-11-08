import { useState } from "react";
import "../styles/4.css";

const ProgressBar = () => {
  const [bar, setBar] = useState(10);

  const changekHandler = (input) => {
    const value = input.target.value;
    if (value <= 100 && value >= 0) {
      setBar(value);
    }
  }

  return (
    <div className="bar-container">
      <h1>Progress Bar</h1>
      <div className="background">
        <div className="barwidth" style={{width:`${bar}%`}}>
          <span>{ bar }%</span>
        </div>
      </div>
      <div>
         <label htmlFor="bar">Input Percentage: </label>
        <input type="number" name="bar" value={bar} id="bar" min={0} max={100} onChange={changekHandler} />
       </div>
    </div>
  );
}

export default ProgressBar;