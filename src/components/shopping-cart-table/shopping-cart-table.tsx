import React from 'react';
import { useSelector } from "react-redux";

import { Table } from "./table";

import { ArticleState } from "../../reducers/types";

import './shopping-cart-table.css';

export const ShoppingCartTable: React.FC = (): JSX.Element => {
    const { cartItems } = useSelector((state: ArticleState) => state.shoppingCart);
    const totalPrice = cartItems.reduce((prevRes,{total}) => prevRes + total, 0);

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>

            <Table cartItems={cartItems} />

            <div className="total">
                Total: ${ totalPrice }
            </div>
        </div>
    );
};