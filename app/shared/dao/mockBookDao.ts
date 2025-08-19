const data = [{"bookID": 1, "title": "The Stand", "genre": "Horror","authors": [{"authorID": 1, "firstname": "Stephen", "lastname": "King"}]}, 
            {"bookID": 2, "title": "Rolling Heads", "genre": "Horror", "authors": [{"authorID": 2, "firstname": "Josh", "lastname": "Winning"}]}, 
            {"bookID": 3, "title": "The Last Seance", "genre": "Supernatural", "authors": [{"authorID": 3, "firstname": "Agatha", "lastname": "Christie"}]},
            {"bookID": 4, "title": "Fahreinheit 451", "genre": "Science Fiction", "authors": [{"authorID": 4, "firstname": "Ray", "lastname": "Bradbury"}]},
            {"bookID": 5, "title": "Rum Punch", "genre": "Crime", "authors": [{"authorID": 5, "firstname": "Elmore", "lastname": "Leonard"}]},
            {"bookID": 6, "title": "Notes from a small island", "genre": "Travel", "authors": [{"authorID": 6, "firstname": "Bill", "lastname": "Bryson"}]},
            {"bookID": 7, "title": "Pride and Prejudice", "genre": "Fiction", "authors": [{"authorID": 7, "firstname": "Jane", "lastname": "Austen"}]},
            {"bookID": 8, "title": "The catcher in the rye", "genre": "Fiction", "authors": [{"authorID": 8, "firstname": "J.D.", "lastname": "Salinger"}]},
            {"bookID": 9, "title": "Wuthering Heights", "genre": "Fiction", "authors": [{"authorID": 9, "firstname": "Emily", "lastname": "Bronte"}]},
            {"bookID": 10, "title": "Great Expectations", "genre": "Fiction", "authors": [{"authorID": 10, "firstname": "Charles", "lastname": "Dickens"}]},
            {"bookID": 11, "title": "Moby Dick", "genre": "Fiction", "authors": [{"authorID": 11, "firstname": "Herman", "lastname": "Melville"}]},
            {"bookID": 12, "title": "Catch-22", "genre": "Fiction", "authors": [{"authorID": 12, "firstname": "Joseph", "lastname": "Heller"}]},
];

export const getAllBooks = () => {
    return data;
} 

export const searchBooks = (title?:string, author?:string, genre?:string) => {
    let filteredBooks = data;

    if (title) {
        const titleLower = title.toLowerCase().trim();
        filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(titleLower));
    }
    
    if (genre) {
        const genreLower = genre.toLowerCase().trim();
        filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase().includes(genreLower));
    }    
    
    if (author) {
        const authorLower = author.toLowerCase().trim();
        filteredBooks = filteredBooks.filter(book => 
            book.authors.some(a => `${a.firstname.toLowerCase()} ${a.lastname.toLowerCase()}`.includes(authorLower))
        );
    }

    return filteredBooks;
} 