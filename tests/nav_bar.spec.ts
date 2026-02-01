import { test } from '../fixtures/fixture';

test.describe('Navigation Bar visibility.', () => {
    test.beforeEach(async () => {
        console.log('Dummy Login for future implementation');
    });

    test.afterEach(async () => {
        console.log('Test completed.');
    });

    test('Validate Navigation Bar is visible on Home Page',
        { tag: ['@regression', '@navbar'] }, async ({ homePage, navBarPage }) => {
            await homePage.goto();
            await navBarPage.expectedNavBarIsVisibility();
        });
});
