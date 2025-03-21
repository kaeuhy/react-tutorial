import React from 'react';

export default function ForFilter({ src }) {
    const lowPrice = src.filter(book => book.price < 25000);
    return (
        <dl>
            {lowPrice.map(elem => (
                <React.Fragment key={elem.isbn}>
                <dt>
                    <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
                        {elem.title} ({elem.price}원)
                    </a>
                </dt>
                <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}