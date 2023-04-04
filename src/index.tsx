import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import { ErrorBoundary } from "./components/error-boundary";

import { BookStoreServiceProvider } from "./components/book-store-service-context";
import { BookStoreService } from "./services/book-service";
import { store } from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const bookStoreService = new BookStoreService();

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <ErrorBoundary>
                <BookStoreServiceProvider value={ bookStoreService }>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </BookStoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);
