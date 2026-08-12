import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodo() {
    if (!todo.trim()) return;

    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <h1>Todo DevOps</h1>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Nouvelle tâche"
      />

      <button onClick={addTodo}>Ajouter</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;