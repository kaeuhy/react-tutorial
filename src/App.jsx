import "./App.css";
import Viewer from "./componets/Viewer.jsx";
import Controller from "./componets/Controller.jsx";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}
