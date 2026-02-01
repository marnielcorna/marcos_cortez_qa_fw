import { Page, Locator } from '@playwright/test';

export class BasePage {
	protected readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	protected async HardWaitForDemoPurposes(): Promise<void> {
		await this.page.waitForTimeout(300);
	}
}
