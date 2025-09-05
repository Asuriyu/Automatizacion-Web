const { test, expect } = require('@playwright/test');

test('valida el título exacto de Wikipedia', async ({ page }) => {
  // abre Wikipedia
  await page.goto('https://www.wikipedia.org');
  await sleep(5000);
  // verifica el título exacto
  await expect(page).toHaveTitle('Wikipedia');
});

test('valida el título de GitHub con regex', async ({ page }) => {
  // abre GitHub
  await page.goto('https://github.com');
  await sleep(5000);
  // verifica que contenga la palabra GitHub
  await expect(page).toHaveTitle(/GitHub/);
});

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
