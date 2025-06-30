// @ts-check
import { test, expect } from '@playwright/test'

class Gdpr {
    constructor(page) {
        this.page = page;
        this.gdprButton = page.locator('.fc-cta-consent');
    }
    
    async acceptGdpr() {
        await this.gdprButton.click();
        await expect(this.gdprButton).not.toBeVisible();
    }
    }
    
    module.exports = { Gdpr };