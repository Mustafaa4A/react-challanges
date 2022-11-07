import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([])

  const changeHandler = (item) => {
    const { value } = item.target;
    setInput(value)
  }

  const addItem = () => {
    if (input !== "") {
      const id = Date.now();
      setList(list => ([...list, { id: id, text: input }]))
      setInput("");
    }
  }

  const removeItem = (id) => {
    const filtered = list.filter(item => item.id !== id);
    setList(filtered);
  }
  
  return (
    <div className="">
      <div>
        <input type="text" value={input} onChange={changeHandler} placeholder="Enter Item"/>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {
          list.map((item) => {
            return (<li key={item.id}>{item.text} <button onClick={()=>removeItem(item.id)}>X</button></li>)
          })
        }
      </ul>
  </div>
  )
}

export default Todo;