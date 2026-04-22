import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Paolo Preziuso');
  await expect(page.locator('p')).toContainText('Paolo Preziuso — coming soon');
});

test('no console errors on load', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  await page.goto('/');
  expect(errors).toHaveLength(0);
});
