import { useState, useTransition } from 'react';
import books from './books';
import commentList from './comments';
import { BookDetails, CommentList } from './HookTransitionChild';

export default function HookTransition() {
  // 선택한 도서(isbn)와 해당 코멘트(comments)
  const [isbn, setIsbn] = useState('');
  const [comments, setComments] = useState([]);

  // 선택 상자 변경에 따른 State 반영
  const handleChange = e => {
    const isbn = e.target.value;
    setIsbn(isbn);
    setComments(commentList.filter(c => c.isbn === isbn));
  };

  return (
      <>
      <select onChange={handleChange}>
        <option value="">선택해주세요.</option>
        {books.map(b => (
           <option key={b.isbn} value={b.isbn}>{b.title}</option>
        ))}
      </select>
      <BookDetails isbn={isbn} />
      <hr />
      <CommentList src={comments} />
      </>
  );
}