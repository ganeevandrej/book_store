import React from "react";

import { BookStoreServiceConsumer } from "../book-store-service-context";
import { BookStoreServiceType } from "../../services/book-service";

interface withBookServiceContextType {
    bookServiceContext: BookStoreServiceType,
}

export const withBookServiceContext = () => <T extends withBookServiceContextType>(
    Wrapped: React.ComponentType<T>)  => {
    return (props: Omit<T, 'bookServiceContext'>) => {
        return (
            <BookStoreServiceConsumer>
                { (bookServiceContext) => {
                    return <Wrapped { ...props as T } bookServiceContext={ bookServiceContext } />
                } }
            </BookStoreServiceConsumer>
        );
    }
}