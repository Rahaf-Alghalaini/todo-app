
import { useState } from 'react';
import './App.css';
import Counter from './components/AddTodoForm';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
function App() {


return(
<div className="app">
      <div className="row">
       <h1>Todo List</h1>
       <AddTodoForm/>
       <TodoList/>
    </div>
    </div>
)

}

export default App;
