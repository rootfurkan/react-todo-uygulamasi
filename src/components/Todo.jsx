import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


function Todo({todo, onRemoveTodo,onUpdateTodo}) {
  const {id, content} = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = ()=>{
    onRemoveTodo(id);
  }
  const updateTodo =()=>{
    const request ={
      id : id,
      content : newTodo
    }
    onUpdateTodo(request);
    setEditable(false)
  }

  return (
    <div className="todo">
      <div className="todo-text">
        {
        editable ? <input value={newTodo} type="text" onChange={(e)=> setNewTodo(e.target.value)} className="todo-input" style={{width:'335px'}}/> : content
        }
      </div>

      <div className="todo-actions">
        <IoMdRemoveCircleOutline className="icon icon-delete"  onClick={removeTodo}/>
        {
          editable ? <FaCheckCircle className="icon icon-edit-success" onClick={updateTodo} /> 
          : <FaEdit className="icon icon-edit" onClick={()=> setEditable(true)} />
        }
        
        

      </div>
    </div>
  )
}

export default Todo
