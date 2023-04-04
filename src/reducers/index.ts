import { DETCH_BOOKS_REQUEST, FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS } from "../action-types";
import { Book } from "../services/book-service";

export interface ArticleAction {
    type: string,
    payload?: Book[]
}

export interface ArticleState {
    body: Book[],
    loading: boolean,
    error: boolean;
}

const initialState: ArticleState = {
    body: [],
    loading: false,
    error: false
}

export const reducer = ( state: ArticleState = initialState, action: ArticleAction ): ArticleState => {
    switch (action.type) {
        case DETCH_BOOKS_REQUEST:
            return {
                body: [],
                loading: true,
                error: false
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                body: action.payload!,
                loading: false,
                error: false
            };
        case FETCH_BOOKS_FAILURE:
            return {
                body: [],
                loading: false,
                error: true
            }
        default:
            return state;
    }
}