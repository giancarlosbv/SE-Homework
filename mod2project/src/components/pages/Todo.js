import React, { useState, useRef, useEffect } from "react";
import thumbtack from '../../images/thumbtack.png'
import useLocalStorage from './useLocalStorage'

export default function TodoList(){

 const [todo, setTodo] = useLocalStorage('saveToDo',
 {
   default: 'Do the dishes'
 },
 {
   default: 'Feed the cats'
 }
)

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
  <div className = "current todo-container">

  <img src = {thumbtack} height = '50vh'/>
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