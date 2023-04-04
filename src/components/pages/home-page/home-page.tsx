import React from "react";

import BookList from "../../book-list";
import { ShoppingCartTable } from "../../shopping-cart-table";

export const HomePage: React.FC = (): JSX.Element => {


    return (
        <>
            <BookList />
            <ShoppingCartTable />
        </>
    );
}