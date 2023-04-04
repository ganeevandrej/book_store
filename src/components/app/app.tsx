import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Header } from "../header";
import { ShoppingCartTable } from "../shopping-cart-table";
import { HomePage } from "../pages/home-page";
import { CartPage } from "../pages/cart-page";

import { Book } from "../../services/book-service";

export type BookService = {
    getBooks: () => Book[],
}

export const App: React.FC = (): JSX.Element => {
    return (
        <main role="main" className="container">
            <Header numItems={5} total={210} />
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/cart" element={ <CartPage /> } />
            </Routes>
            <ShoppingCartTable />
        </main>
    );
}