import { useState } from "react";
import useTodoStore from "../store/todoStore"
import { use } from "react";

const TodoItem=({todo})=>{
    const {removeTodo,toggleTodo,updateTodo}=useTodoStore();
    const [isEditing,setIsEditing]=useState(false);
    const [newText,setNewText]=useState('');
    const handleUpdate=()=>{
     updateTodo(todo.id,newText);
     setIsEditing(false);
    }
  

    return (
  <li className="todo-item">
    <input
      type="checkbox"
      className="todo-checkbox"
      checked={todo.done}
      onChange={() => toggleTodo(todo.id)}
    />
    {isEditing?(
        <input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)}/>
    ):(
     <span className={`todo-text ${todo.done ? 'done' : ''}`}>{todo.text}</span>
    )}
    {isEditing?(
        <button className="save-btn" onClick={handleUpdate}>save</button>
    ):(
        <button className="edit-btn" onClick={()=>setIsEditing(true)}>Edit</button>
    )}
    
    <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
      Delete
    </button>

  </li>
);
}
export default TodoItem;