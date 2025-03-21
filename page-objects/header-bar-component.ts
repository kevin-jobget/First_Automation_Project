import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderBarComponent {
  readonly page: Page;
  readonly profileImageIcon: Locator

  constructor(page: Page) {
    this.page = page;  
    // this.profileImageIcon = page.getByTestId("SS")
  }

  async clickProfileImage(initials) {
    await this.page.getByTestId(initials).click()
  }

//   async clickProfileImageNotDynamic() {
//    await this.profileImageIcon.click()
//   }

}