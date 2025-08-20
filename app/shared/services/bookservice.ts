import { getAllBooks } from "../dao/mockBookDao";

export const BookService = () => {

    const searchBooks = () => {
        const results = getAllBooks();

        return results;
    };

    return {
        searchBooks: searchBooks
    }
}