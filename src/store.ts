import { createStore, Store } from "redux";
import { ArticleAction, ArticleState, reducer } from "./reducers";
import { DispatchType } from "./actions";

export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer);