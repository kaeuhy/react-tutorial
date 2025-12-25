import "./App.css";
import Viewer from "./componets/Viewer.jsx";
import Controller from "./componets/Controller.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log(`count: ${count} | input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=> {
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}
