import { useState } from "react";

const ShowHide = () => {
  const [disible, setDisible] = useState(true);


  const Buttonstyle = {
    backgroundColor: 'pink',
    borderRadius: '6px',
    padding: '5px 15px',
  }

  const clickHandler = () => setDisible(!disible);

  return <div>
    <h1 style={{visibility:disible?'visible':'hidden'}}>Welcome To React</h1>
    <button style={Buttonstyle} onClick={clickHandler}>Show</button>
  </div>
}

export default ShowHide;