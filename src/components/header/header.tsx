import React from 'react';

import './header.css';

interface HeaderProps {
    numItems: number,
    total: number
}

export const Header: React.FC<HeaderProps> = ({ numItems, total }): JSX.Element => {
    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="#">ReStore</a>
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </a>
        </header>
    );
};
