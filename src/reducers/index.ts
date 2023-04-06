import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS,
    BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART } from "../action-types";
import { ArticleAction } from "../store";
import {ArticleState, BookType, ItemCartType} from "./types";

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

const updateCartItems = (cartItems: ItemCartType[], newItem: ItemCartType, index: number) => {
    if(newItem.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ]
    }

    if(index < 0) {
        return [ ...cartItems, newItem]
    } else {
        return [
            ...cartItems.slice(0, index),
            newItem,
            ...cartItems.slice(index + 1)
        ]
    }
}

const updateItem = (book: BookType, itemFromCart: ItemCartType, action: number) => {
    if(itemFromCart) {
        const { id, title, count, total } = itemFromCart;

        return {
            id,
            title,
            count: count + action,
            total: total + book.price * action
        }
    } else {
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
        }
    }
}

const updateOrder = (state: ArticleState, itemId: number, action: number) => {
    const cartItems = state.shoppingCart.cartItems;
    const book = state.bookList.body.find(({ id }) => id === itemId);
    const bookFromCartIndex = cartItems.findIndex(({ id }) => id === itemId);
    const bookFromCart = cartItems[bookFromCartIndex];
    let newItemCart: ItemCartType = updateItem(book!, bookFromCart, action);

    return {
        ...state,
        ...state.bookList,
        shoppingCart: {
            cartItems: updateCartItems(cartItems, newItemCart, bookFromCartIndex),
            orderTotal: 0
        }
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
            return updateOrder(state, action.payload, 1);
        case BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1);
        case ALL_BOOKS_REMOVED_FROM_CART:
            const book = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -book!.count);
        default:
            return state;
    }
}