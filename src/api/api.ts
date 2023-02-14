import axios from "axios";

const Api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes"
});

export const getBooks = async (author: string) => {
    const {data: {items}} = await Api.get("", { params: {
        q: author
    } });

    const books: string[] = [];
    items.forEach(({volumeInfo: {title}}: {volumeInfo: {[key:string]: any}}) => books.push(title));
    
    return books;
}