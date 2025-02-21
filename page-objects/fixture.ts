import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
export default test