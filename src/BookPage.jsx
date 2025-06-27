import { useParams } from 'react-router-dom';


export default function BookPage() {
  const { isbn = '979-1-1583-9517-9' } = useParams();
  if (!/979-1[0-9]{2, 7}-[0-9]{2, 7}-[0-9X]/.test(isbn)) {
    throw new RangeError('ISBN is invalid!!');
  }

  return (<p>ISBN 코드 {isbn}의 페이지입니다.</p>);
}