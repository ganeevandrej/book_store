import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withBookServiceContext } from "../hok";

import { BookListItem } from "../book-list-item";
import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

import { fetchBooks } from "../../actions";

import { ArticleState } from "../../reducers/types";
import { BookService } from "../app/app";

import "./book-list.css";

interface BookListProps {
    bookServiceContext: BookService
}

const BookList: React.FC<BookListProps> = ({ bookServiceContext }): JSX.Element => {
    const { body: books, loading, error } = useSelector((state: ArticleState) => state.bookList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooks(dispatch, bookServiceContext);
    }, [bookServiceContext, dispatch]);

    if(loading) {
        return <Spinner />
    }

    if(error) {
        return <ErrorIndicator />
    }

    return (
        <ul className="book-list">
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

export default withBookServiceContext()(BookList);