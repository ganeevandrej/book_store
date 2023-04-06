import { AnyAction, createStore, Store } from "redux";

import { reducer } from "./reducers";
import { bookListTypes, shoppingCartTypes } from "./actions/types";
import { ArticleState } from "./reducers/types";

export type DispatchType = (args: AnyAction ) => AnyAction;
export type ArticleAction = bookListTypes | shoppingCartTypes;

export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer);