import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddToDo = () => {
    dispatch(addTodo(todo));
  };

  const handleToggleToDo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddToDo}>Add ToDo</button>
      </div>
      <ul>
        {todos.map(({ id, text, completed }) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: completed ? "green" : "red" }}
            >
              {text}
              <button onClick={() => handleToggleToDo(id)}>completed</button>
              <button onClick={() => handleRemoveTodo(id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
