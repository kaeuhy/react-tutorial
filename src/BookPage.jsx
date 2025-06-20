import { useParams } from 'react-router-dom';
import MyHeader from './MyHeader';
import books from './books.jsx';

export default function BookPage() {
  const { isbn = '9791158395179' } = useParams();
  const { title, summary } = books.find(b => isbn === b.isbn);

  return (
    <>
    <MyHeader title={title} keywords={title}
      description={summary} />
    <p>ISBN 코드 {isbn}의 페이지입니다. </p>
    </>
  );
}