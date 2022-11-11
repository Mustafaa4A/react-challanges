import { useState } from 'react';
import '../../styles/2.css';
 

const StopWatch = () => {

  const [timer, setTimer] = useState(0);
 

  const startTimer = () => {
    window.MyTimer = setInterval(() => {
      setTimer(timer => timer+1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(window.MyTimer)
  }

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  }

  return (
    <div className="container">
      <h4>{Math.floor(timer / 60)} minutes {timer % 60} seconds</h4>
      <div>
        <button className='start' onClick={startTimer}>Start</button>
        <button className='stop' onClick={stopTimer}>Stop</button>
        <button className='reset' onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch;