export interface Book {
    id: number,
    title: string,
    author: string
}

export class BookStoreService {
    getBooks(): Book[] {
        return [
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
        ];
    }
}