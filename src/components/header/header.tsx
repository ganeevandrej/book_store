import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ArticleState } from "../../reducers/types";

import './header.css';

export const Header: React.FC = (): JSX.Element => {
    const booksInCart = useSelector((state: ArticleState)=> state.shoppingCart.cartItems);
    const countItems = booksInCart.length;
    const totalPrice = booksInCart.reduce((prevRes,{total}) => prevRes + total, 0);

    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link to="/cart" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {countItems} items (${totalPrice})
            </Link>
        </header>
    );
};
