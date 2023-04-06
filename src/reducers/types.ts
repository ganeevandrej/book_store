export interface BookType {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

export interface bookListReducerState {
    body: BookType[],
    loading: boolean,
    error: boolean;
}

export interface shoppingCartReducerState {
    cartItems: ItemCartType[],
}

export interface ItemCartType {
    id: number,
    count: number,
    title: string,
    total: number
}

export interface ArticleState {
    bookList: bookListReducerState,
    shoppingCart: shoppingCartReducerState
}