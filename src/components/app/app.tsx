import React from 'react';

import { withBookServiceContext } from "../hok";

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
            App
        </div>
    );
}

export default withBookServiceContext()(App);