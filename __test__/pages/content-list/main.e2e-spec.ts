import { headerTest } from "@__tests__/playwright/shared-test";
import { test, expect } from "@playwright/test";
import { Helper } from "./helper";
import { contentFixture } from "@__tests__/fixture/content-fixture";

const url = "/contents";

test.describe("header", () => {
  headerTest.notSignIn(url);
  headerTest.signIn(url);
});

test.describe("items", () => {
  test("pagination", async ({ page, context }) => {
    const helper = new Helper(page, context);

    await test.step("if visit, 12 items are visible", async () => {
      await helper.gotoTargetPage();
      await expect(helper.getContentItems).toHaveCount(12);
    });
    await test.step("if click page 2, 2 items are visible", async () => {
      await helper.getPageButton(2).click();
      await expect(helper.getContentItems).toHaveCount(2);
    });
  });

  test("sort", async ({ page, context }) => {
    const helper = new Helper(page, context);

    await test.step("if visit, sort option '최신순' is selected and contents[1] is first item", async () => {
      await helper.gotoTargetPage();
      await expect(helper.getSortOption).toHaveValue("created-at-desc");
      await expect(helper.getContentItems.first()).toContainText(
        contentFixture[1].title
      );
    });
    await test.step("if select '제목순', contents[2] is first item", async () => {
      await helper.getSortOption.selectOption({ label: "제목순" });
      await expect(helper.getContentItems.first()).toContainText(
        contentFixture[2].title
      );
    });
  });
  test.describe("search", () => {
    test("if search with part of title, find only that content", async ({
      page,
      context,
    }) => {
      const helper = new Helper(page, context);
      const content = contentFixture[3];
      const search = content.title.slice(0, 10);

      await helper.gotoTargetPage();
      await helper.getSearchInput.fill(search);
      await helper.getSearchInput.press("Enter");

      await expect(helper.getContentItems).toHaveCount(1);
      await expect(helper.getContentItems).toContainText(content.title);
    });
  });
});

test.describe("pagination", () => {
  test("pages", async ({ page, context }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];

    await test.step("if visit, page 3 is invisible, page 2 is visible", async () => {
      await helper.gotoTargetPage();

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
      await helper.gotoTargetPage();
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
