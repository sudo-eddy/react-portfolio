const { test, expect } = require('@playwright/test');

test('main', async ({ page }) => {
    await page.goto('http://localhost:3000');
});