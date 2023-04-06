import React from "react";
import { store } from "../../store";
import { useDispatch } from "react-redux";

import { bookAddedToCart } from "../../actions";
import { BookType } from "../../reducers/types";

import "./book-list-item.css";

interface BookListItemProps {
    book: BookType
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }): JSX.Element => {
    const dispatch = useDispatch();
    const bookList = store.getState().bookList.body;

    const { coverImage, title, author, price, id } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <span className="book-title">{ title }</span>
                <div className="book-author">{ author }</div>
                <div className="book-price">${ price }</div>
                <button
                    onClick={() => dispatch(bookAddedToCart(id, bookList))}
                    className="btn btn-info add-to-cart"
                >
                    Add to cart
                </button>
            </div>

        </div>
    );
}