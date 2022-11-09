import { useState } from "react";
import "../styles/5.css";

const SubmitFormData = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    age:""
  })

  const [display, setDisplay] = useState(false);

  const { username, fullname, age } = formData;
  
  const changeHandler = (event) => {
    const {name, value} = event.target;
    setFormData(form => {
      return {...form, [name]:value}
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setDisplay(true);
  }

  return (
    <div className="form-container">
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={changeHandler} />
        
        <label htmlFor="fullname">Fullname</label>
        <input type="text" id="fullname" name="fullname" value={fullname} onChange={changeHandler} />
        
        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" value={age} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
      {
        display &&
        <div>
          <h2>The Reequested Data</h2>
          <ul>
            <li>Username: { username.toUpperCase()}</li>
            <li>Fullname: { fullname.toUpperCase()}</li>
            <li>Age: { age }</li>
          </ul>
      </div>
      }
    </div>
  )
}

export default SubmitFormData;