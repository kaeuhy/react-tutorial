import './App.css';
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}