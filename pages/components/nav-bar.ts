import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../base-page';

export class NavBarPage extends BasePage {
  protected readonly navBar: Locator;
  protected readonly desktopMenu: Locator;
  protected readonly logoLink: Locator;
  protected readonly logoText: Locator;
  protected readonly homeLink: Locator;
  protected readonly propertiesLink: Locator;
  protected readonly aboutLink: Locator;
  protected readonly faqLink: Locator;
  protected readonly blogLink: Locator;

  protected readonly connectButton: Locator;

  constructor(page: Page) {
    super(page);

    this.navBar = page.locator('nav');
    this.logoLink = this.navBar.getByRole('link', { name: 'BestCity' });
    this.logoText = this.navBar.getByText('BestCity', { exact: true });
    this.desktopMenu = this.navBar.locator('div.md\\:flex');
    this.homeLink = this.navBar.getByRole('link', { name: 'Home', exact: true });
    this.propertiesLink = this.navBar.getByRole('link', { name: 'Properties', exact: true });
    this.aboutLink = this.navBar.getByRole('link', { name: 'About', exact: true });
    this.faqLink = this.navBar.getByRole('link', { name: 'FAQ', exact: true });
    this.blogLink = this.navBar.getByRole('link', { name: 'Blog', exact: true });

    this.connectButton = this.navBar.getByRole('button', { name: 'Connect' });
  }

  async expectedNavBarIsVisibility(): Promise<void> {
    await expect(this.navBar).toBeVisible();
    await expect(this.logoLink).toBeVisible();
    await expect(this.homeLink).toBeVisible();
    await expect(this.propertiesLink).toBeVisible();
    await expect(this.aboutLink).toBeVisible();
    await expect(this.faqLink).toBeVisible();
    await expect(this.blogLink).toBeVisible();
    await expect(this.connectButton).toBeVisible();
  }
}
