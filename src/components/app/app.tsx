import React from 'react';
import { Route, Routes } from "react-router-dom";

import { withBookServiceContext } from "../hok";

import { HomePage } from "../pages/home-page";
import { CartPage } from "../pages/cart-page";

import { Book } from "../../services/book-service";

export interface AppProps {
    bookServiceContext: BookService
}

export type BookService = {
    getBooks: () => Book[],
}

const App: React.FC<AppProps> = ({ bookServiceContext }): JSX.Element => {
    console.log(bookServiceContext.getBooks());
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/cart" element={ <CartPage /> } />
            </Routes>
        </div>
    );
}

export default withBookServiceContext()(App);