import React from "react";
import { useDispatch } from "react-redux";
import { store } from "../../../store";

import { allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart } from "../../../actions";
import { BlockButtonsProps } from "../../types";

export const BlockButtons: React.FC<BlockButtonsProps> = ({ id }): JSX.Element => {
    const dispatch = useDispatch();
    const bookList = store.getState().bookList.body;

    return (
        <div className="actions">
            <button
                onClick={() => dispatch(bookRemovedFromCart(id, bookList))}
                className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
            </button>
            <button
                onClick={() => dispatch(bookAddedToCart(id, bookList))}
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
            </button>
            <button
                onClick={() => dispatch(allBooksRemovedFromCart(id, bookList))}
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </div>
    );
}