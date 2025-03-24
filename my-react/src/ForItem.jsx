import Download from "./download.jsx";

export default function ForItem({ book }) {
    let dd;

    if (book.download) {
        dd = <dd>{book.summary}<Download slug={book.slug}/></dd>;
    } else {
        dd = <dd>{book.summary}</dd>;
    }
    return (
        <>
        <dt>
        <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
            {book.title} ({book.isbn}원)
        </a>
        </dt>
            {dd}
            </>
    )
}