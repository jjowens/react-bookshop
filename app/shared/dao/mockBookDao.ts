const data = [{"bookID": 1, "title": "The Stand", "genre": "Horror","authors": [{"authorID": 1, "firstname": "Stephen", "lastname": "King"}]}, 
            {"bookID": 2, "title": "Rolling Heads", "genre": "Horror", "authors": [{"authorID": 2, "firstname": "Josh", "lastname": "Winning"}]}, 
            {"bookID": 3, "title": "The Last Seance", "genre": "Supernatural", "authors": [{"authorID": 3, "firstname": "Agatha", "lastname": "Christie"}]},
            {"bookID": 4, "title": "Fahreinheit 451", "genre": "Science Fiction", "authors": [{"authorID": 3, "firstname": "Ray", "lastname": "Bradbury"}]},
            {"bookID": 5, "title": "Rum Punch", "genre": "Crime", "authors": [{"authorID": 3, "firstname": "Elmore", "lastname": "Leonard"}]},
            {"bookID": 6, "title": "Notes from a small island", "genre": "Travel", "authors": [{"authorID": 3, "firstname": "Bill", "lastname": "Bryson"}]},
];

export const getAllBooks = () => {
    return data;
} 

export const searchBooks = (wildcard?: boolean, title?:string, author?:string, genre?:string) => {
    return data;
} 