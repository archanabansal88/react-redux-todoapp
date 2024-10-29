import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./reducers/todoReducers";
import todosReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoList: TodoReducer,
  },
});

export default store;
