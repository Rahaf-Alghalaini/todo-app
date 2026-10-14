import useTodoStore from "../store/todoStore"
import TodoItem from "./TodoItem";



const TodoList=()=>{
    const todos=useTodoStore(state=>state.todos);
    return(
    <div>
        <ul className="todo-list">
            {todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    </div>
    )
}
export default TodoList;