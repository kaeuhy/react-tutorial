import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import books from './books';

export function BookListPage() {
    return (
        <>
            {books.map(b => (
                <React.Fragment key={b.isbn}>
                    [<NavLink to={`/books/${b.isbn}`}>
                    {b.title}</NavLink>]|
                </React.Fragment>
            ))}
            <Outlet />
        </>
    );
}

export function BookDetailsPage() {
    const { isbn='979-1-1583-9517-9' } = useParams();
    const book = books.find(b => isbn === b.isbn);

    return (
        <ul>
            <li>ISBN 코드:{book.isbn}</li>
            <li>도서명:{book.title}</li>
            <li>가격:{book.price}</li>
            <li>개요:{book.summary}</li>
        </ul>
    );
}