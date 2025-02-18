import React from "react";
import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void
}
 

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return(
        <ul>
            {todos.map((todo)=> (
                <li key={todo.id}>
                    {todo.text}
                    <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)}/>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;