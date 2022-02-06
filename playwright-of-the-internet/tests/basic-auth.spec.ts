import { test, expect } from '@playwright/test';

const PAGE_URL = "http://the-internet.herokuapp.com/basic_auth";

test('Test basic authentification', async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });
  const page = await context.newPage();
  await page.goto(PAGE_URL);
  const loginSuccessful = page.locator("text=Congratulations!");
  await expect(loginSuccessful).toBeVisible();
});




