const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_Todo":
      return action.payload !== ""
        ? [...state, { id: Date.now(), text: action.payload, completed: false }]
        : state;
    case "Toggle_Todo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "Remove_Todo":
      return state.filter((todo) => todo.id !== action.payload);

    case "Update_Todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};

export default TodoReducer;
