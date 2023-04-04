import React from "react";

import { BookStoreServiceConsumer } from "../book-store-service-context";

interface gjgfj {
    bookServiceContext: any,
}

export const withBookServiceContext = () => <T extends gjgfj>( Wrapped: React.ComponentType<T>) => {
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