import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import EditTodo from './EditTodo';
uuidv4();
const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);
    function addtodo(todo) {
       setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
       
    }
    function deleteTodo(id){
     setTodos(todos.filter((todo) => todo.id !== id))

    }
    function editTodo(id){
      setTodos(todos.map(todo => 
        todo.id === id ? 
        {...todo,isEditing : !todo.isEditing}
        :
        todo))
      }
    function editTask(task,id){
      setTodos(
        todos.map((todo) => todo.id === id ?
         {...todo,task,isEditing : !todo.isEditing} : todo
         ))

    }
  return (
    <div className='TodoWrapper'>
      <Todoform addtodo = {addtodo}/>
      {todos.map((todo,index) =>
        todo.isEditing ? 
        (
        <EditTodo editTask={editTask} temp={todo}/>
        )
        :
        (
        <Todo 
        task={todo} 
        key={index} 
        deleteTodo = {deleteTodo} 
        editTodo={editTodo}
        />
        )
      )}
      
      
      
    </div>
  )
}

export default TodoWrapper
