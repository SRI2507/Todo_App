import React,{useState}from 'react'

const Todoform = ({addtodo}) => {
    const [task,setTask] = useState("");

   function addItem(){
      // e.preventDefault();
      // console.log(task);
      if(!task.trim()){
        alert("Enter the task");
      }
      else{
        addtodo(task);
         setTask(" ");
      }
       
   }
  return (
    <div className='Todoform'>
      <input type="text" placeholder="what is the task today?" className='todo-input'value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button className='todo-btn' onClick={addItem}>Addtask</button>
    </div>
    
  )
}

export default Todoform
