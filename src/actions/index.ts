import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_SUCCESS,
    BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART, BOOK_ADDED_TO_CART
} from "../action-types";
import { BookType } from "../reducers/types";
import { Dispatch } from "redux";
import { BookService } from "../components/app/app";
import {
    allBooksRemovedFromCartAction,
    bookAddedToCartAction,
    bookRemovedFromCartAction,
    booksErrorAction, booksLoadedAction, booksRequestedAction
} from "./types";
import {ArticleAction} from "../store";


export const booksLoaded = (newBooks: BookType[]): booksLoadedAction => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
}

export const booksRequested = (): booksRequestedAction => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

export const booksError = (): booksErrorAction => {
    return {
        type: FETCH_BOOKS_FAILURE
    }
}

export const bookAddedToCart = (bookId: number): bookAddedToCartAction => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    };
};

export const bookRemovedFromCart = (bookId: number): bookRemovedFromCartAction => {
    return {
        type: BOOK_REMOVED_FROM_CART,
        payload: bookId
    };
};

export const allBooksRemovedFromCart = (bookId: number): allBooksRemovedFromCartAction => {
    return {
        type: ALL_BOOKS_REMOVED_FROM_CART,
        payload: bookId
    };
};

export const fetchBooks = (dispatch: Dispatch<ArticleAction>, bookServiceContext: BookService) => {
    dispatch(booksRequested());
    bookServiceContext.getBooks()
        .then( (data) => { dispatch(booksLoaded(data))})
        .catch(() => dispatch(booksError()));
}

