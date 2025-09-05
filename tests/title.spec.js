const {test, expect} = require('@playwright/test');

test('valida el titulo exacto', async ({page}) => {
    // abre la pagina example.com
    await page.goto('https://example.com');
    await sleep(5000);
    // verifica que el titulo excato sea "Example Domain"
    await expect(page).toHaveTitle('Example Domain');
  });
test('valida el titulo con regex(contiene palabra)', async ({page}) => {
    // abre la pagina example.com
    await page.goto('https://example.com');
    await sleep(5000);
    // verificamos palabra
    await expect(page).toHaveTitle(/Example/);
  });

function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    });
    }