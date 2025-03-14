import { headerTest } from "@__tests__/playwright/shared-test";
import { test, expect } from "@playwright/test";
import { Helper } from "./helper";
import { contentFixture } from "@__tests__/fixture/content-fixture";

const url = "/contents";
test.describe("header", () => {
  headerTest(url);
});

test.describe("init", () => {});

test.describe("search", () => {});

test.describe("sort", () => {});

test.describe("pagination", () => {
  test("pages", async ({ page, context }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];

    await test.step("if visit, page 3 is invisible, page 2 is visible", async () => {
      await helper.gotoTargetPage(true);

      await expect(helper.getPageButton(3)).toBeHidden();
      await expect(helper.getPageButton(2)).toBeVisible();
    });
    await test.step("if search with title, page only one", async () => {
      await helper.getSearchInput.fill(content.title);
      await helper.getSearchInput.press("Enter");

      await expect(helper.getPageButton(2)).toBeHidden();
      await expect(helper.getPageButton(1)).toBeVisible();
    });
  });

  test("pageLoc", async ({ page, context }) => {
    const helper = new Helper(page, context);

    await test.step("if visit, page 1 is selected and page 2 is not selected", async () => {
      await helper.gotoTargetPage(true);
      await expect(helper.getPageButton(1)).toHaveAttribute(
        "data-selected",
        "true"
      );
      await expect(helper.getPageButton(2)).toHaveAttribute(
        "data-selected",
        "false"
      );
    });
    await test.step("if click 2,page 2 is selected and page 1 is not selected", async () => {
      await helper.getPageButton(2).click();

      await expect(helper.getPageButton(2)).toHaveAttribute(
        "data-selected",
        "true"
      );
      await expect(helper.getPageButton(1)).toHaveAttribute(
        "data-selected",
        "false"
      );
    });
  });
});
