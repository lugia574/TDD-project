import { BaseHelper } from "@__tests__/playwright/base-helper";
import { BrowserContext, Page, expect } from "@playwright/test";

export class Helper extends BaseHelper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  getUrl(id: string): string {
    return `/contents/${id}`;
  }

  async goToTargetPage(id: string, assert: boolean) {
    const url = this.getUrl(id);
    await this.page.goto(url);

    if (assert) await expect(this.page).toHaveURL(url);
  }
}
