import ToDoItem from "./ToDoItem";

const ToDoList = (todos, toggleTodo, deleteTodo) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos rn"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
