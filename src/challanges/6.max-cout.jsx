import { useEffect, useRef, useState } from "react";
import "../styles/6.css";

const MaxCount = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const val = useRef(null);
  

  const clear = () => clearInterval(val.current);

  useEffect(() => {
    val.current = setInterval(() => setTimer(time => time - 1), 1000)
    return clear;
  }, [])

  useEffect(() => { 
    if (timer <= 0) {
      clear();
    }

  },[timer])


  return (
    <div className="max-container">
      <h2>No of clicks until timer expires</h2>
      <div>
        <h2>{ count }</h2>
        <h3>The time left : { timer } seconds</h3>
        {
          timer > 0 && 
          <button onClick={()=>setCount(count+1)}>+</button>
        }
      </div>
    </div>
  )
}

export default MaxCount;