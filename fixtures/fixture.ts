import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { NavBarPage } from '../pages/components/nav-bar';

type Fixtures = {
    homePage: HomePage;
    navBarPage: NavBarPage;
};
export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    navBarPage: async ({ page }, use) => {
        await use(new NavBarPage(page));
    }
});