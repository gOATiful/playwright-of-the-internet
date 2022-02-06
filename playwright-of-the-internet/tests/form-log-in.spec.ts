import { test, expect } from '@playwright/test';

const PAGE_URL = 'http://the-internet.herokuapp.com/login';

test('Log in via form fields', async ({ page }) => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!'
  await page.goto(PAGE_URL);
  const usernameField = page.locator('[name=username]');
  const passwordField = page.locator('[name=password]');
  const loginButton = page.locator('button >> text=Login')
  // fill in username and password
  await usernameField.type(username);
  await passwordField.type(password);
  await loginButton.click();

  const loginSuccess = page.locator('a >> text=Logout');
  await expect(loginSuccess).toBeEnabled()
});
