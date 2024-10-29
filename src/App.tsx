import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Todo from "./components/todo-react-redux";
import Todos from "./components/todo-redux-toolkit";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
