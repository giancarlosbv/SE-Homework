import React, { useState, useRef, useEffect } from "react";



export default function TodoList(){

 const [todo, setTodo] = useState([   
])

let addItemRef = useRef()

useEffect(() => {
  addItemRef.current.focus()
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  let formData = [{
    addItem: addItemRef.current.value
  }]
  // console.log(formData.addItem)
  // console.log(formData)
  // const newItem = () => setTodo([])  

  setTodo((prevState) => prevState.concat(formData))
  addItemRef.current.value = ""
  console.log(formData)
}

const deleteId = (id) => {
  setTodo((prevState) => prevState.filter((_, index) => index !== id));
};
// const addItem ()
console.log('Outside of handleSubmit ',todo)
return (
  <div id="App">
    <h1>To Do List</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item:</label>
      <input
        id="addItem"
        ref={addItemRef}
        type="text"
        required
      />
      <button>Add Todo</button>
    </form>
    {todo.map((list, index) =>
      <ul>
        <li key={index}>{list.addItem}</li>
        <input id="" type="checkbox" />
        <button onClick={() => deleteId(index)}>Remove</button>
      </ul>
    )}
  </div>
)}