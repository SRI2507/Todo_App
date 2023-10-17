import React from 'react'
import {FaTrash} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';

const Todo = ({task,deleteTodo,editTodo}) => {
  
  return (

    <div className='Todo'>
      <p>{task.task}</p>
  <div className='icons-line'>
     <FaEdit onClick={() => editTodo(task.id)}/>
     <FaTrash onClick={() => deleteTodo(task.id)}/>
     
  </div>
     
    
     

    </div>
  )
}

export default Todo
