import "./App.css";
import Viewer from "./componets/Viewer.jsx";
import Controller from "./componets/Controller.jsx";
import { useEffect, useRef, useState } from "react";
import Even from "./componets/Even.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // mount
  useEffect(()=>{
    console.log("mount");
  }, []);

  // update
  useEffect(()=>{
    if(!isMount.current) {
      isMount.current = true;
      return
    }
    console.log("update")
  });


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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}
