import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withBookServiceContext } from "../hok";

import { BookListItem } from "../book-list-item";
import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

import { fetchBooks } from "../../actions";

import { ArticleState } from "../../reducers/types";
import { BookListProps } from "../types";

import "./book-list.css";

const BookList: React.FC<BookListProps> = ({ bookServiceContext }): JSX.Element => {
    const { body: books, loading, error } = useSelector((state: ArticleState) => state.bookList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooks(bookServiceContext, dispatch);
    }, [bookServiceContext, dispatch]);

    const renderBookList = books.length !== 0 && books.map(( book ) => {
        return (
            <li key={ book.id }>
                <BookListItem book={ book } />
            </li>
        );
    })

    const content_1 = loading ? <Spinner /> : renderBookList;
    const content_2 = error ? <ErrorIndicator /> : content_1;

    return (
        <ul className="book-list">
            { content_2 }
        </ul>
    );
}

export default withBookServiceContext()(BookList);