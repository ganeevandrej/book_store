import React from "react";
import { BookList } from "../../book-list";


export const HomePage: React.FC = (): JSX.Element => {
    const books = [
        {
            id: 1,
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler"
        },
        {
            id: 2,
            title: "Release It!",
            author: "Michael T. Nygard"
        }
    ]

    return (
        <BookList books={books} />
    );
}