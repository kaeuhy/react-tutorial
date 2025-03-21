import React from 'react';

export default function ForSort({ src }) {
    src.sort((m, n) => m.price - n.price);
    return (
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.isbn}>
                    <dt>
                        <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
                            {elem.title}（{elem.price}원）
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}