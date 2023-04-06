import { ArticleState } from "./types";
import { bookListReducer } from "./BookListReducer";
import { shoppingCartReducer } from "./ShoppingCartReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers<ArticleState>({
    bookList: bookListReducer,
    shoppingCart: shoppingCartReducer
});