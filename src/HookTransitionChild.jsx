import { memo } from 'react';
import books from './books';


// delay 밀리초만큼 처리를 지연시키는 코드
const sleep = (delay) => {
    const start = Date.now();
    while (Date.now() - start < delay);
};

export function BookDetails({ isbn }) {
    const book = books.find(b => b.isbn === isbn);
    return (
        <ul>
            <li>ISBN:{book?.isbn}</li>
            <li>도서명:{book?.title}</li>
            <li>가격:{book?.price}원</li>
            <li>개요:{book?.summary}</li>
            <li>예제 코드:{(book?.download) ? '있음': '없음'}</li>
        </ul>
    );
}

export const CommentList = memo(function({ src, isPending }){
    // isPending이 true인 경우 로딩 메시지 표시 (7-7-3 절에서 사용)
    if (isPending) return <p>Now Loading...</p>;
    // 수신된 댓글 정보 목록 표시
    return (
        <ol>
            {src.map(c => <CommentItem key={c.id} src={c} />)}
        </ol>
    );
});

// 개별 코멘트 표시로 시간이 오래 걸리는 처리 시뮬레이션
function CommentItem({ src }) {
    sleep(1000);
    return <li>{src.body}({src.rank})</li>;
}