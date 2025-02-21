import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.preprod.jobget.com/hire/');
  await page.getByPlaceholder('youremail@company.com').click();
  await page.getByPlaceholder('youremail@company.com').fill('shivang@yopmail.com')
  await page.getByPlaceholder('Password').fill('qwerty');
  await page.getByRole('button', { name: "Log in"}).click();
});