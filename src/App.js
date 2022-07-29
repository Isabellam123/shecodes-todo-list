import React, { useState } from 'react'
import './App.css';
import TodoItem from './components/todoItem'
import TodoForm from "./components/todoForm";

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);

  function addToDo(e) {
    e.preventDefault()
    console.log("Did we add a todo?")
  }

  return (
    <>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm handleSubmit={addTodo} />
    </>
  );
}

export default App;
