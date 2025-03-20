import React from 'react';

export default function ForList({ src }) {
    return (
        // 도서 정보(src 속성)를 <dt>/<dd> 목록으로 정형화
        <dl>
            {src.map(elem => (
                <>
                    <dt>
                        <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
                            {elem.title} ({elem.price}원)
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </>
            ))}
        </dl>
    );
}