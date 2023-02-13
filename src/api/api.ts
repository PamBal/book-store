import axios from "axios";

const Api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes"
});

export const getBooks = async (author: string) => {
    const {data} = await Api.get("", { params: {
        q: author
    } });
    
    return data;
}