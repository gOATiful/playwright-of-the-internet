import { test, expect } from '@playwright/test';

const PAGE_URL = "http://the-internet.herokuapp.com/broken_images";

const IMG_TYPES = ["jpg", "png", "gif"];

test('Test if all images can be loaded', async ({ page }) => {
  // Listen for all console events and handle errors
  var imagesLoadedSuccessful = true;
  page.on('response', (response) => {
    if (response.status() == 404) {
      IMG_TYPES.forEach(async type => {
        if (response.url().toLocaleLowerCase().includes(type)) {
          imagesLoadedSuccessful = false;
        }
      });
    }
    console.log('<<', response.status(), response.url())
  });

  await page.goto(PAGE_URL);
  await page.waitForLoadState('networkidle');
  
  expect(imagesLoadedSuccessful).toBe(true);
});




