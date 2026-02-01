import { Page, Locator, expect } from '@playwright/test';
import { TEXTS } from '../resources/constants/texts';
import { Env } from '../config/env';
import { BasePage } from './base-page';


export class HomePage extends (BasePage) {
    private readonly welcomeSection: Locator;
    private readonly startInvestingSection: Locator;
    private readonly howBestCityWorksSection: Locator;
    private readonly featuredInvestmentsSection: Locator;
    private readonly whyChooseBestCitySection: Locator;
    private readonly latestInsightsSection: Locator;
    private readonly faqSection: Locator;
    private readonly readyToStartSection: Locator;

    constructor(page: Page) {
        super(page);

        this.welcomeSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.WELCOME_MESSAGE }) });
        this.startInvestingSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.START_INVESTING_HEADING }) });
        this.howBestCityWorksSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.HOW_BESTCITY_WORKS_HEADING }) });
        this.featuredInvestmentsSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.FEATURED_INVESTMENTS_HEADING }) });
        this.whyChooseBestCitySection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.WHY_CHOOSE_BESTCITY_HEADING }) });
        this.latestInsightsSection = page.locator('div.container.bg-white.py-24', { has: page.getByRole('heading', { name: TEXTS.LATEST_INSIGHTS_HEADING, exact: true})});
        this.faqSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.FAQ_HEADING }) });
        this.readyToStartSection = page.locator('section', { has: this.page.getByRole('heading', { name: TEXTS.READY_TO_START_HEADING }) });

    }

    async goto(): Promise<void> {
        await this.page.goto(`${Env.BASE_URL}`);
    }

    async expectedHomePageVisibility(): Promise<void> {
        await this.validateSectionVisibility(this.welcomeSection);
        await this.validateSectionVisibility(this.startInvestingSection);
        await this.validateSectionVisibility(this.howBestCityWorksSection);
        await this.validateSectionVisibility(this.featuredInvestmentsSection);
        await this.validateSectionVisibility(this.whyChooseBestCitySection);
        await this.validateSectionVisibility(this.latestInsightsSection);
        await this.validateSectionVisibility(this.faqSection);
        await this.validateSectionVisibility(this.readyToStartSection);
    }
    async validateSectionVisibility(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
        await this.HardWaitForDemoPurposes();
        await expect(locator).toBeVisible();
        
    }
}   