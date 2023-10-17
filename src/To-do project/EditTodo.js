import React,{useState} from 'react'

const EditTodo = ({editTask,temp}) => {
  const [task,setTask] = useState(temp.task);
  function addItem(){
    // e.preventDefault();
    // console.log(task);
    if(!task){
      alert("Enter the task");
    }
    else{
    
        editTask(task,temp.id);
        setTask(" ");
      }
      
    }
     
 

  return (
      <div className='Todoform'>
        <input type="text" placeholder="Update task" className='todo-input'value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button className='todo-btn' onClick={addItem}>Update task</button>
    
    </div>
  )
}

export default EditTodo
