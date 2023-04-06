import {
    ALL_BOOKS_REMOVED_FROM_CART,
    BOOK_ADDED_TO_CART,
    BOOK_REMOVED_FROM_CART,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS
} from "../action-types";
import { BookType } from "../reducers/types";



export type booksLoadedAction = {
    type: typeof FETCH_BOOKS_SUCCESS,
    payload: BookType[]
}
export type booksRequestedAction = {
    type: typeof FETCH_BOOKS_REQUEST
}
export type booksErrorAction = {
    type: typeof FETCH_BOOKS_FAILURE
}
export type bookAddedToCartAction = {
    type: typeof BOOK_ADDED_TO_CART,
    payload: number,
    bookList: BookType[]
}
export type bookRemovedFromCartAction = {
    type: typeof BOOK_REMOVED_FROM_CART,
    payload: number,
    bookList: BookType[]
}
export type allBooksRemovedFromCartAction = {
    type: typeof ALL_BOOKS_REMOVED_FROM_CART,
    payload: number,
    bookList: BookType[]
}

export type bookListTypes = booksLoadedAction | booksRequestedAction | booksErrorAction;
export type shoppingCartTypes = bookAddedToCartAction | bookRemovedFromCartAction | allBooksRemovedFromCartAction;

