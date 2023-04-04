import React from "react";

import { BookListItem } from "../book-list-item";

import { Book } from "../../services/book-service";

interface BookListProps {
    books: Book[]
}

export const BookList: React.FC<BookListProps> = ({ books }): JSX.Element => {
    return (
        <ul>
            { books.length !== 0 && books.map(( book ) => {
                return (
                    <li key={ book.id }>
                        <BookListItem book={ book } />
                    </li>
                );
            }) }
        </ul>
    );
}