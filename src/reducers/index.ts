import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS,
    BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART } from "../action-types";
import { ArticleAction } from "../store";

export interface BookType {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

interface ItemCartType {
    id: number,
    count: number,
    title: string,
    total: number
}

export interface ArticleState {
    bookList: {
        body: BookType[],
        loading: boolean,
        error: boolean;
    },
    shoppingCart: {
        cartItems: ItemCartType[],
        orderTotal: number
    }
}

const initialState: ArticleState = {
    bookList: {
        body: [],
        loading: false,
        error: false
    },
    shoppingCart: {
        cartItems: [],
        orderTotal: 0
    }
}

export const reducer = ( state: ArticleState = initialState, action: ArticleAction ): ArticleState => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                ...state.shoppingCart,
                bookList: {
                    body: [],
                    loading: true,
                    error: false
                }
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                ...state.shoppingCart,
                bookList: {
                    body: action.payload,
                    loading: false,
                    error: false
                }

            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                ...state.shoppingCart,
                bookList: {
                    body: [],
                    loading: false,
                    error: true
                }
            }
        case BOOK_ADDED_TO_CART:
            const book = state.bookList.body.find((item) => item.id === action.payload);
            let newItemCart: ItemCartType;

            if (book) {
                const { id, title, price } = book;
                newItemCart = {
                    id,
                    title,
                    count: 1,
                    total: price * 1
                }
            } else {
                newItemCart = {
                    id: 0,
                    title: "",
                    count: 0,
                    total: 0
                }
            }

            return {
                ...state,
                ...state.bookList,
                shoppingCart: {
                    cartItems: [
                        { ...newItemCart }
                    ],
                    orderTotal: 0
                }
            };
        case BOOK_REMOVED_FROM_CART:
            return state;
        case ALL_BOOKS_REMOVED_FROM_CART:
            return state;
        default:
            return state;
    }
}