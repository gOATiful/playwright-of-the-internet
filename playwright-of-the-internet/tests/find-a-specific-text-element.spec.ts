import { test, expect } from '@playwright/test';

const PAGE_URL = "http://the-internet.herokuapp.com/abtest";

test('Find a specific text element', async ({ page }) => {
  await page.goto(PAGE_URL);
  const headlineText =  page.locator('text=A/B Test Variation 1')
  await expect(headlineText).toHaveCount(1);
});
