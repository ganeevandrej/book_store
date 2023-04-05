import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart } from "../../actions";
import { ArticleState } from "../../reducers";

import './shopping-cart-table.css';

export const ShoppingCartTable: React.FC = (): JSX.Element => {
    const { cartItems, orderTotal } = useSelector((state: ArticleState) => state.shoppingCart);
    const dispatch = useDispatch();

    const renderItemCart = cartItems.map((
        {id, total, title, count}, idx) => {
        return  (
            <tr key={id}>
                <td className="cntr">{ idx + 1 }</td>
                <td className="cntr">{ title }</td>
                <td className="cntr">{ count }</td>
                <td className="cntr">${ total }</td>
                <td>
                    <div className="actions">
                        <button
                            onClick={() => dispatch(allBooksRemovedFromCart(id))}
                            className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            onClick={() => dispatch(bookAddedToCart(id))}
                            className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => dispatch(bookRemovedFromCart(id))}
                            className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    })

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th  className="cntr">#</th>
                        <th  className="cntr">Item</th>
                        <th  className="cntr">Count</th>
                        <th  className="cntr">Price</th>
                        <th className="cntr">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { renderItemCart }
                </tbody>
            </table>
            <div className="total">
                Total: ${ orderTotal }
            </div>
        </div>
    );
};