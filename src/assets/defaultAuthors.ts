export interface Author {
    name: string;
    books: string[]
}

export const authors = [
    {name: "Фёдор Михайлович Достоевский", books: []} as Author,
    {name: "Пушкин Александр Сергеевич", books: []} as Author,      
    {name: "Жюль Верн", books: []} as Author,
    {name: "Теодор Драйзер", books: []} as Author,
    {name: "Толстой Лев Николаевич", books: []} as Author
]