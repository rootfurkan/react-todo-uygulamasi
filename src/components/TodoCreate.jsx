import React, { useState } from 'react'
import '../App.css'

function TodoCreate({onCreateTodo}) {

  const [newTodo, setNewTodo] = useState('');

  const clearInput = ()=>{
    setNewTodo('');
  }
  
  const createTodo = ()=>{
    if(!newTodo) return;

    const request ={
      id : Math.floor(Math.random()*99999999),
      content : newTodo
    }
    onCreateTodo(request);
    clearInput();
    
  }
  


  return (
    <div className="todo-create">
      <input
        type="text"
        value={newTodo} 
        onChange={(e)=> setNewTodo(e.target.value)}
        placeholder="Yeni todo ekle..."
        className="todo-input"
      />

      <button className="todo-button"
      onClick={createTodo}>
        Ekle
      </button>
    </div>
  )
}

export default TodoCreate
