import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { withBookServiceContext } from "../hok";

import { BookListItem } from "../book-list-item";

import { booksLoaded } from "../../actions";

import { Book } from "../../services/book-service";
import { ArticleState } from "../../reducers";
import { BookService } from "../app/app";

import "./book-list.css";

interface BookListProps {
    bookServiceContext: BookService
}

const BookList: React.FC<BookListProps> = ({ bookServiceContext }): JSX.Element => {
    const books: Book[] = useSelector((state: ArticleState) => state.body);
    const dispatch = useDispatch();

    useEffect(() => {
        const data = bookServiceContext.getBooks();
        dispatch(booksLoaded(data));
    }, [bookServiceContext, dispatch]);

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