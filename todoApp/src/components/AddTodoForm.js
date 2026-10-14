
import { useState } from "react";
import useTodoStore from "../store/todoStore";
const AddTodoForm = ()=>{
const [text,setText]=useState('');
const {addTodo}=useTodoStore();
const handleSubmit=(e)=>{
  e.preventDefault();
  if(!text.trim())return;
  addTodo(text);
  setText('');

}


 return (
  <form onSubmit={handleSubmit} className="todo-form">
    <input
      className="todo-input"
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Add new todo..."
    />
    <button type="submit" className="add-btn">Add</button>
  </form>
);
}
export default AddTodoForm;