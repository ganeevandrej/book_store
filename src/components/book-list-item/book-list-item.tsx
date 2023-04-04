import React from "react";

import { Book } from "../../services/book-service";

import "./book-list-item.css";

interface BookListItemProps {
    book: Book
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }): JSX.Element => {
    const { coverImage, title, author, price } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{ title }</a>
                <div className="book-author">{ author }</div>
                <div className="book-price">${ price }</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    );
}