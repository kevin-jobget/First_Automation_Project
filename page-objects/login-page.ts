import { expect, type Locator, type Page } from '@playwright/test';

export class loginPage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.getByRole("button", {name: "Login"})
    this.emailInput = page.getByRole("textbox", {name: "email address"})
    this.passwordInput = page.getByRole("textbox", {name: "password"})
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

async enterEmail(email: string){
await this.emailInput.fill(email)
}
async entepassword(password: string){
  await this.passwordInput.fill(password)
  }
}