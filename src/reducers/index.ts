import { BOOKS_LOADED } from "../action-types";
import { Book } from "../services/book-service";

export interface ArticleAction {
    type: string,
    payload: Book[]
}

export interface ArticleState {
    body: Book[]
}

const initialState: ArticleState = {
    body: []
}

export const reducer = ( state: ArticleState = initialState, action: ArticleAction ): ArticleState => {
    switch (action.type) {
        case BOOKS_LOADED:
            return {
                body: action.payload
            };
        default:
            return state;
    }
}