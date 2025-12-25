import './App.css';
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import { useState } from "react";
import { mockDate } from "./items/items.js";

export default function App() {
  const [todos, setTodos] = useState(mockDate);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}