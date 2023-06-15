const ToDoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li key={id}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
          delete
        </button>
      </li>
    </>
  );
};

export default ToDoItem;
