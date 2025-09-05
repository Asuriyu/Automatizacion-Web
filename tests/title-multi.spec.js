const { test, expect } = require('@playwright/test');

const casos = [
    { name: "caso 1", url: 'https://example.com', esperado: 'Example Domain' },
    { name: "caso 2", url: 'https://example.com', esperado: /Example/ },
    { name: "caso 3", url: 'https://www.google.com', esperado: 'Google' },
    { name: "caso 4 - Wikipedia", url: 'https://www.wikipedia.org', esperado: 'Wikipedia' },
    { name: "caso 5 - GitHub regex", url: 'https://github.com', esperado: /GitHub/ }
];

for (const { name, url, esperado } of casos) {
    test(`valida el título de ${name}`, async ({ page }) => {
        // abre la página
        await page.goto(url);
        await sleep(2000); // espera 2s
        // verificamos título
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
