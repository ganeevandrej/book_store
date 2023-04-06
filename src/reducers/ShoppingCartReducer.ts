import { ALL_BOOKS_REMOVED_FROM_CART,  BOOK_ADDED_TO_CART,  BOOK_REMOVED_FROM_CART, } from "../action-types";
import { shoppingCartTypes } from "../actions/types";
import { BookType, ItemCartType, shoppingCartReducerState } from "./types";

const initialState: shoppingCartReducerState = {
    cartItems: [],
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
const updateOrder = (state: shoppingCartReducerState, itemId: number, action: number, bookList: BookType[]) => {
    const cartItems = state.cartItems;
    const book = bookList.find(({ id }) => id === itemId);
    const bookFromCartIndex = cartItems.findIndex(({ id }) => id === itemId);
    const bookFromCart = cartItems[bookFromCartIndex];
    let newItemCart: ItemCartType = updateItem(book!, bookFromCart, action);

    return {
        cartItems: updateCartItems(cartItems, newItemCart, bookFromCartIndex),
    }
}

export const shoppingCartReducer = (
    state = initialState, action: shoppingCartTypes): shoppingCartReducerState => {
    switch (action.type) {
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1, action.bookList);
        case BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1, action.bookList);
        case ALL_BOOKS_REMOVED_FROM_CART:
            const book = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -book!.count, action.bookList);
        default:
            return state;
    }
}