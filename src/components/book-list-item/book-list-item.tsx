import React from "react";

import { Book } from "../../services/book-service";

interface BookListItemProps {
    book: Book
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }): JSX.Element => {
    return (
        <>
            <span>
                { book.title }
            </span>
            <span>
                { book.author }
            </span>
        </>
    );
}