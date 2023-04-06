import { BookStoreServiceType } from "../services/book-service";
import { BookType, ItemCartType } from "../reducers/types";

export interface BookListProps {
    bookServiceContext: BookStoreServiceType
}

export interface BookListItemProps {
    book: BookType
}

export interface TableProps {
    cartItems: ItemCartType[]
}

export interface BlockButtonsProps {
    id: number
}