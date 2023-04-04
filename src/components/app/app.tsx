import React from 'react';
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home-page";
import { CartPage } from "../pages/cart-page";

import { Book } from "../../services/book-service";

export type BookService = {
    getBooks: () => Book[],
}

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/cart" element={ <CartPage /> } />
            </Routes>
        </div>
    );
}

export default App;