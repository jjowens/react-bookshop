import { type BookType } from "~/shared/types/book.types";

interface BookProps {
    children?: React.ReactNode;
    book: BookType
}

export const BookComponent: React.FC<BookProps> = ({children, book}) => {
    console.log("My Authors: {0}", book.authors);

    return (<div>
                <p>{book.title}</p>
                { (book.authors) ? 
                    <p>{book.authors[0].firstname} {book.authors[0].lastname}</p>
                    : <></>
                }
                <p>{book.genre}</p>
                {children}
            </div>);
};