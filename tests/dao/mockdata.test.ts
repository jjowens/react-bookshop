import { test, expect, type Page } from '@playwright/test';
import { searchBooks } from 'app/shared/dao/mockBookDao';

test.describe('Mock Data - Search Books', () => {
    test('- return all books', () => {
        const books = searchBooks();
        expect(books.length).toBeGreaterThan(0);
        console.log(books);
    });

    test('- find Rum Punch book', () => {
        const books = searchBooks(true, "run punch");
        expect(books.length).toBe(1);
        console.log(books);
    });

    test('- find books by Charles Dickens', () => {
        const books = searchBooks(true, "", "Charles Dickens");
        expect(books.length).toBe(1);
        console.log(books);
    });
});