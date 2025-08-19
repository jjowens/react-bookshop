import { test, expect, type Page } from '@playwright/test';
import { searchBooks } from 'app/shared/dao/mockBookDao';

test.describe('Mock Data - Search Books', () => {
    test('- return all books', () => {
        const books = searchBooks();
        expect(books.length).toBeGreaterThan(0);
    });

    test('- find Rum Punch book', () => {
        const books = searchBooks("rum punch");
        expect(books.length).toBe(1);
        expect(books[0].title).toBe("Rum Punch");
        expect(books[0].genre).toBe("Crime");
        expect(books[0].authors[0].firstname).toBe("Elmore");
        expect(books[0].authors[0].lastname).toBe("Leonard");
    });

    test('- find books by Charles Dickens', () => {
        const books = searchBooks("", "Charles Dickens");
        expect(books.length).toBe(1);
        expect(books[0].title).toBe("Great Expectations");
        expect(books[0].genre).toBe("Fiction"); 
        expect(books[0].authors[0].firstname).toBe("Charles");
        expect(books[0].authors[0].lastname).toBe("Dickens");
    });

    test('- find Rum Punch book. Extra spaces', () => {
        const books = searchBooks(" rum punch ");
        expect(books.length).toBe(1);
        expect(books[0].title).toBe("Rum Punch");
        expect(books[0].genre).toBe("Crime");
        expect(books[0].authors[0].firstname).toBe("Elmore");
        expect(books[0].authors[0].lastname).toBe("Leonard");
    });

    test('- find books by Charles Dickens. Extra spaces', () => {
        const books = searchBooks("", " Charles Dickens ");
        expect(books.length).toBe(1);
        expect(books[0].title).toBe("Great Expectations");
        expect(books[0].genre).toBe("Fiction"); 
        expect(books[0].authors[0].firstname).toBe("Charles");
        expect(books[0].authors[0].lastname).toBe("Dickens");
    });
});