import { test, expect } from '@playwright/test';
const PAGE_URL = "http://the-internet.herokuapp.com/add_remove_elements/";

test('Add Element and delete it again', async ({ page }) => {
  await page.goto(PAGE_URL);
  await page.locator('text=Add Element').click();
  const delete_button = page.locator('text=Delete')
  expect(delete_button).toHaveCount(1);

  await delete_button.click();
  const search_button = page.locator('text=Delete');
  await expect(search_button).toHaveCount(0);
});
