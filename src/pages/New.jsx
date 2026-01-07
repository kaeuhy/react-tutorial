import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import Editor from "../components/Editor/Editor.jsx";

export default function New() {
  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로 가기"} />} />
      <Editor />
    </div>
  );
}
