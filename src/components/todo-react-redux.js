import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (todo && isEditing) {
      dispatch({ type: "Update_Todo", payload: { text: todo, id: editId } });
      setTodo("");
      setIsEditing(false);
      setEditId(null);
    } else {
      dispatch({ type: "Add_Todo", payload: todo });
      setTodo("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "Remove_Todo", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "Toggle_Todo", payload: id });
  };

  const handleEditTodo = (id) => {
    setIsEditing(true);
    const updatedTodo = todos.find((todo) => todo.id === id);
    setTodo(updatedTodo.text);
    setEditId(id);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {isEditing ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      <ul>
        {todos &&
          todos.map(({ id, text, completed }) => {
            return (
              <li
                key={id}
                style={{ backgroundColor: completed ? "green" : "red" }}
              >
                {text}
                <button onClick={() => handleEditTodo(id)}>Edit</button>
                <button onClick={() => handleToggle(id)}>Completed</button>
                <button onClick={() => handleRemoveTodo(id)}>Remove</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Todo;
