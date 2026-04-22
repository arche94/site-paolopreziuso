import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Paolo Preziuso — Software Engineer");
  await expect(page.locator("header.site-chrome")).toBeVisible();
  await expect(page.locator("main h1")).toContainText("Paolo Preziuso");
  await expect(page.locator("section#work")).toBeVisible();
  await expect(page.locator("section#contact")).toBeVisible();
  await expect(page.locator('section#contact a[href*="github"]')).toBeVisible();
});

test("no console errors on load", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  expect(errors).toHaveLength(0);
});
