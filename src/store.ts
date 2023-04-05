import { createStore, Store } from "redux";
import { ArticleState, reducer } from "./reducers";
import { bookListTypes, shoppingCartTypes } from "./actions/types";

export type DispatchType = (args: ArticleAction) => ArticleAction;
export type ArticleAction = bookListTypes | shoppingCartTypes;


export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer);