export default function ForItem({ book }) {
    return (
        <>
            <dt>
                <a href={`https://wikibook.co.kr/images/cover/s/${book.is}.jpg`}>
                    {book.title} ({book.price}원)
                </a>
            </dt>
            <dd>{book.summary}</dd>
        </>
    );
}