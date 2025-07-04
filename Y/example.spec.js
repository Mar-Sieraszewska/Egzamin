// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Automation Exercise');
  await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
});
