import { useState } from "react";

function App() {
  echo l
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodo() {
    if (!todo.trim()) return;

    setTodos([...todos, todo]);
    setTodo("");
  }
  function deleteTodo(index) {
  setTodos(todos.filter((_, i) => i !== index));
  alert('ok')
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
      <button onClick={() => deleteTodo(1)}> delete</button>
    </div>
  );


}

export default App;