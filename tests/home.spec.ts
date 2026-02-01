import { test } from '../fixtures/fixture';

test.describe('Home Page test cases', () => {
    test.beforeEach(async () => {
        console.log('Dummy Login for future implementation');
    });

    test.afterEach(async () => {
        console.log('Test completed.');
    });

    test('Validate Home Page sections visibility',
        { tag: ['@regression', '@home'] }, async ({ homePage }) => {
            await homePage.goto();
            await homePage.expectedHomePageVisibility();
        });
});
