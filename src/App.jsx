import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound.jsx";
import Button from "./components/Button/Button.jsx";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <>
      <Header title={"Header"} leftChild={<Button text="left" />} rightChild={<Button text="right" />} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}