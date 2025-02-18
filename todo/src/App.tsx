import React, { useState } from "react";
import { Todo } from "./types";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if(newTodo.trim() === "") return
    const newTask: Todo = {id: Date.now(), text: newTodo, completed: false }
    setTodos([...todos, newTask])
    setNewTodo("")
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  return(
    <div>
      <input
       type="text"
       value={newTodo}
       onChange={(e)=> setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;