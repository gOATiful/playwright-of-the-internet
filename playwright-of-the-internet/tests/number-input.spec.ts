import { test, expect } from '@playwright/test';

const PAGE_URL = "http://the-internet.herokuapp.com/inputs";

test('Insert a number to an input field.', async ({ page }) => {
  const text = '1337'
  await page.goto(PAGE_URL);
  // find the input field:
  const numberInput = page.locator('.example > input:nth-child(2)');
  await numberInput.type(text);
});
