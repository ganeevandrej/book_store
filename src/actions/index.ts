import { DETCH_BOOKS_REQUEST, FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS } from "../action-types";
import { ArticleAction } from "../reducers";

import { Book } from "../services/book-service";
import { AnyAction, Dispatch } from "redux";
import {BookService} from "../components/app/app";

export type DispatchType = (args: ArticleAction) => ArticleAction;

export const booksLoaded = (newBooks: Book[]): ArticleAction => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
}

export const booksRequested = (): ArticleAction => {
    return {
        type: DETCH_BOOKS_REQUEST
    }
}

export const booksError = (): ArticleAction => {
    return {
        type: FETCH_BOOKS_FAILURE
    }
}

export const fetchBooks = (dispatch: Dispatch<AnyAction>, bookServiceContext: BookService) => {
    dispatch(booksRequested());
    bookServiceContext.getBooks()
        .then( (data) => { dispatch(booksLoaded(data))})
        .catch(() => dispatch(booksError()));
}

