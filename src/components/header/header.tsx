import React from 'react';

import './header.css';
import {Link} from "react-router-dom";

interface HeaderProps {
    numItems: number,
    total: number
}

export const Header: React.FC<HeaderProps> = ({ numItems, total }): JSX.Element => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link to="/cart" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </Link>
        </header>
    );
};
