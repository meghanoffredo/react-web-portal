import ToDoList from './ToDoList';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import check from '../../Media/check-mark.png';
import plus from '../../Media/plus.png';

const SESSION_STORAGE_KEY = 'toDoApp.toDos';

// save user's to do's for current session only
function ToDoItems() {
  const [todos, setToDos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() => {
    const storedToDos = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY))
    if (storedToDos) setToDos(storedToDos)
  }, [])

  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleToDo(id) {
    const newToDos = [...todos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setToDos(newToDos)
  }

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value
    if (name === '') return
    setToDos (prevToDos => {
      return [...prevToDos, {id: uuidv4(), name: name, completed: false}]
    })
    toDoNameRef.current.value = null
  }

  function handleClearToDos() {
    const newToDos = todos.filter(todo => !todo.completed)
    setToDos(newToDos)
  }

  return (
    <div className="to-do-container">
      <div 
        className="section-title">
        <img 
          src={check}
          alt="Checkbox Icon"/>
        <h1>
          My To Do List
        </h1>
      </div>
      <div className="task-row-container">
        <div className="add-task-container">
          <input 
            className="to-do-input" 
            ref={toDoNameRef} 
            type="text" 
            placeholder="Add new task"/>
          <button 
            className="add-button"
            onClick={handleAddToDo}>
            <img
              src={plus}
              alt="Add Task Button" />
          </button>
        </div>
        <div className="list-container">
          <div 
            className="to-dos">
            <ToDoList todos={todos} toggleToDo={toggleToDo}/>
          </div>
          <div                  
            className="counter-clear-container">
            <div 
              className="counter"> 
              {todos.filter(todo => !todo.completed).length} Pending Task(s)
            </div>
            <button 
              className="clear-button"
              onClick={handleClearToDos}>
              Clear Completed
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default ToDoItems;