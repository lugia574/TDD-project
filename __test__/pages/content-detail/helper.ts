import { BaseHelper } from "@__tests__/playwright/base-helper";
import { BrowserContext, Locator, Page, expect } from "@playwright/test";

export class Helper extends BaseHelper {
  readonly getMain: Locator;
  readonly getAuthorAside: Locator;
  readonly getCommentSection: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.getMain = page.getByRole("main");
    this.getAuthorAside = page.getByTestId("author-aside");
    this.getCommentSection = page.getByTestId("comment-section");
  }

  getUrl(id: string): string {
    return `/contents/${id}`;
  }

  async goToTargetPage(id: string, assert: boolean) {
    const url = this.getUrl(id);
    // console.log("🚀 생성된 URL:", url);

    await this.page.goto(url);
    // console.log("🔍 현재 페이지 URL:", this.page.url());
    if (assert === true) await expect(this.page).toHaveURL(url);
  }
}
