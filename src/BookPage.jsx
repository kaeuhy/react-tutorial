import { useParams } from 'react-router-dom';

export default function BookPage() {
  // 경로 매개변수 가져오기
  const { isbn = '979-1-1583-9517-9' } = useParams();
  return <p>ISBN 코드 {isbn}의 페이지입니다. </p>;
}