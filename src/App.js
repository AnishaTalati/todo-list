import React, { useState } from 'react'
import './App.css';
import Header from './Header'
import ToDoList from './ToDoList';
import data from "./data.json"

function App() {
  const [toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
    <Header/>
    <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
