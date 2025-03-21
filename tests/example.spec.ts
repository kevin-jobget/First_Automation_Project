import { expect } from '@playwright/test';
import test from "../page-objects/fixture"
// import { loginPage } from '../page-objects/login-page';
import { signUpAsAnEmployer } from '../services/user-service';
test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("https://www.preprod.jobget.com/hire/");
});
test('Positive Login', async ({ page, loginPage, headerBarComponenet }) => {
 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("JobGet (Recruiter)");
  //Login Test
  await loginPage.loginBtn.click();
  await page.getByPlaceholder('youremail@company.com').click();
  await page.getByPlaceholder('youremail@company.com').fill('shivang@yopmail.com')
  await page.getByPlaceholder('Password').fill('qwerty');
  await page.getByRole('button', { name: "Log in"}).click();
  await expect(page.getByRole('button', { name: "Post a Job"})).toBeVisible();
});

// test('Negative Login', async ({ page }) => {
 

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("JobGet (Recruiter)");
//   //Login Test
//   const loginPage = new loginPage{"page"}
//   await page.getByPlaceholder('youremail@company.com').click();
//   await page.getByPlaceholder('youremail@company.com').fill('shivang@yopmail.com')
//   await page.getByPlaceholder('Password').fill('qwerty');
//   await page.getByRole('button', { name: "Log in"}).click();
//   await expect(page.getByRole('button', { name: "Post a Job"})).toBeVisible();
// });

// // Logout
// test('Logout', async ({ page }) => {
//   // Expect a title "to contain" a substring.
// await expect(page).toHaveTitle("JobGet (Recruiter)");
// await page.getByPlaceholder('youremail@company.com').click();
// await page.getByPlaceholder('youremail@company.com').fill('shivang@yopmail.com')
// await page.getByPlaceholder('Password').fill('qwerty');
// await page.getByRole('button', { name: "Log in"}).click();
// await page.getByTestId('ST').click();
// await page.getByRole('button', { name: "Log out"}).click();
// await page.getByRole('button', { name: "Logout"}).click();
// await expect(page.getByRole('button', { name: "Log in"})).toBeVisible();
// });

// test('Terms & Conditions', async ({ page }) => {
//   // Expect a title "to contain" a substring.
// await expect(page).toHaveTitle("JobGet (Recruiter)");
// await page.getByRole('link', { name: "Sign up"}).click();
// await expect(page.getByText("Create your employer account")).toBeVisible();
// await page.getByText('Terms & Conditions').click();
// //await expect(page.getByText("Terms of Service")).toBeVisible();
// });

// test('Privacy Policy', async ({ page }) => {
//   // Expect a title "to contain" a substring.
// await expect(page).toHaveTitle("JobGet (Recruiter)");
// await page.getByRole('link', { name: "Sign up"}).click();
// await expect(page.getByText("Create your employer account")).toBeVisible();
// await page.getByText('Privacy Policy').click();
// //await expect(page.getByText("Terms of Service")).toBeVisible();
// });


// test('Signup', async ({ page }) => {
//   // Expect a title "to contain" a substring.
// await expect(page).toHaveTitle("JobGet (Recruiter)");
// await page.getByRole('link', { name: "Sign up"}).click();
// await expect(page.getByText("Create your employer account")).toBeVisible();
// await page.getByPlaceholder("e.g. John Smith").click();
// await page.getByPlaceholder('e.g. John Smith').fill('Test QA')
// await page.getByPlaceholder("e.g. CVS").click();
// await page.getByPlaceholder('e.g. CVS').fill('Test')
// await page.getByPlaceholder("youremail@company.com").click();
// //await page.getByPlaceholder('e.g. CVS').fill('Test')
// });