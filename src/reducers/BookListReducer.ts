import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../action-types";
import { bookListTypes } from "../actions/types";
import { bookListReducerState } from "./types";

const initialState: bookListReducerState = {
    body: [],
    loading: false,
    error: false
}

export const bookListReducer = (
    state = initialState, action: bookListTypes): bookListReducerState => {

    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                body: [],
                loading: true,
                error: false
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                body: action.payload,
                loading: false,
                error: false
            }
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