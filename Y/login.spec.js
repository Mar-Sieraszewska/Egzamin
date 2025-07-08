// @ts-check
import { test, expect } from '@playwright/test'
import { Gdpr } from '../pages/gdpr.js';
import { Login } from '../pages/login.js';

test('zaloguj się', async ({ page }) => {
 const gdpr = new Gdpr(page);
 const login = new Login(page);

    await page.goto(login.url);
    await gdpr.acceptGdpr();
    await login.logInWithCredentials(process.env.EMAIL, process.env.PASSWORD);

   

    await expect(page.locator('text=Logged in as ${process.env.TESTUSER}')).toBeVisible();
});
