import "./EmotionItem.css";
import { getEmotionImage } from "../../util/get-emotion-image.jsx";

export default function EmotionItem({ emotionId, emotionName, isSeleted }) {
  return (
    <div className={`EmotionItem ${isSeleted ? `EmotionItem_on_${emotionId}`: ""}`}>
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}