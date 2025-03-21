import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { HeaderBarComponent } from './header-bar-component';

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ loginPage: LoginPage, headerBarComponenet: HeaderBarComponent }>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  headerBarComponenet: async ({ page }, use) => {
    const headerBarComponenet = new HeaderBarComponent(page);
    await use(headerBarComponenet);
  },
});
export default test