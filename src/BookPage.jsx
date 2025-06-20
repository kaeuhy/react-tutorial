import { useParams } from 'react-router-dom';

export default function BookPage() {
  // 경로 매개변수 가져오기
  const params = useParams();
  return <p>ISBN 코드 {params.isbn}의 페이지입니다.</p>;
}