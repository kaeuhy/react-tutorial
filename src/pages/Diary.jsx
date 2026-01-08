import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import { getStringedDate } from "../util/get-stringed-date.js";
import useDiary from "../hooks/useDiary.jsx";
import Viewer from "../components/Viewer/Viewer.jsx";

export default function Diary() {
  const nav = useNavigate();
  const params = useParams();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}
