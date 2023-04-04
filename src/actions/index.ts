import { BOOKS_LOADED } from "../action-types";
import { Book } from "../services/book-service";
import { ArticleAction } from "../reducers";

export type DispatchType = (args: ArticleAction) => ArticleAction;

export const booksLoaded = (newBooks: Book[]): ArticleAction  => {
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    }
}

