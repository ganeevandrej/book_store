import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_SUCCESS,
    BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART, BOOK_ADDED_TO_CART
} from "../action-types";
import { BookStoreServiceType } from "../services/book-service";
import { BookType } from "../reducers/types";
import {AnyAction, Dispatch} from "redux";
import {
    allBooksRemovedFromCartAction,
    bookAddedToCartAction,
    bookRemovedFromCartAction,
    booksErrorAction, booksLoadedAction, booksRequestedAction
} from "./types";

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
export const bookAddedToCart = (bookId: number, bookList: BookType[]): bookAddedToCartAction => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId,
        bookList
    };
};
export const bookRemovedFromCart = (bookId: number, bookList: BookType[]): bookRemovedFromCartAction => {
    return {
        type: BOOK_REMOVED_FROM_CART,
        payload: bookId,
        bookList
    };
};
export const allBooksRemovedFromCart = (bookId: number, bookList: BookType[]): allBooksRemovedFromCartAction => {
    return {
        type: ALL_BOOKS_REMOVED_FROM_CART,
        payload: bookId,
        bookList
    };
};

export const fetchBooks = (bookServiceContext: BookStoreServiceType, dispatch: Dispatch<AnyAction>) => {
    dispatch(booksRequested());
    bookServiceContext.getBooks()
        .then( (data) => dispatch(booksLoaded(data)))
        .catch(() => dispatch(booksError()));
}

