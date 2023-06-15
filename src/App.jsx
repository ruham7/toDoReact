import "./styles.css";
import { Fragment } from "react";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDoList from "./ToDoList";
export default function App() {
  // const [newItem, setNewItem] = useState("");
  const [todos, setNewTodos] = useState([]);

  function toggleTodo(id, completed) {
    setNewTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setNewTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  function addTodo(title) {
    setNewTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
