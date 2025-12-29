import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import { useRef, useState } from "react";
import { mockDate } from "./items/items.js";

export default function App() {
  const [todos, setTodos] = useState(mockDate);
  const isRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: isRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}