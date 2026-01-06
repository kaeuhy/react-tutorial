import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import DiaryList from "../components/Diary/DiaryList.jsx";

export default function Home() {
  return (
    <div>
      <Header
        title={new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <DiaryList />
    </div>
  );
}