import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function onChange(e) {
    setTodo((d) => d = e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      return
    }
    setTodos((currentArr) => [todo, ...currentArr]);
    setTodo((d) => d = "");

  }

  return (
    <div>
      <h1>My Todos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write your to do..." />
        <button>submit</button>
      </form>
      <ul>
        {todos.map((item, index) =>
        (<li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App