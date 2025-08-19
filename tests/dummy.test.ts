import { test, expect, type Page } from '@playwright/test';


test.describe('Dummy Test', () => {
    test('should return 13', () => {
        const result = "13"
        expect(result).toBe("13");
    });

    test('should NOT return 13', () => {
        const result = "100"
        expect(result).not.toBe("13");
    });
});