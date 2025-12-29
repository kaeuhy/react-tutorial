import "./../css/Editor.css";
import { useRef, useState } from "react";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onkeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return <div className="Editor">
    <input ref={contentRef} value={content} onKeyDown={onkeyDown} onChange={onChangeContent}
           placeholder="깡지의 할 일을 추가하세요" />
    <button onClick={onSubmit}>
      추가
    </button>
  </div>;
}
