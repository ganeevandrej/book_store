export interface BookType {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

export interface ItemCartType {
    id: number,
    count: number,
    title: string,
    total: number
}

export interface ArticleState {
    bookList: {
        body: BookType[],
        loading: boolean,
        error: boolean;
    },
    shoppingCart: {
        cartItems: ItemCartType[],
        orderTotal: number
    }
}