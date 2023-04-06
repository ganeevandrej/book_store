import { BookType } from "../reducers/types";

export interface BookStoreServiceType {
    _data: BookType[],
    getBooks: () => Promise<BookType[]>
}

export class BookStoreService {

    _data = [
        {
            id: 1,
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler",
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: "Release It!",
            author: "Michael T. Nygard",
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        }
    ]

    getBooks(): Promise<BookType[]> {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if(Math.random() > 0.75) {
                    reject(new Error("Something bad happened"));
                } else {
                    resolve(this._data);
                }
            }, 1000);
        })
    }
}