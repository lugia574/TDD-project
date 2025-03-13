/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from "@playwright/test";
import { contentFixture } from "../../fixture/content-fixture";
import { userFixture } from "../../fixture/user-fixture";
import { Helper } from "./helper";
import { faker, he } from "@faker-js/faker";
import { localizeDate } from "@/libs/sub-string";

const getUrl = (id: string): string => `/contents/${id}`;

test.describe("guard", () => {
  test('if content not found, redirect to "/contents"', async ({
    page,
    context,
  }) => {
    const helper = new Helper(page, context);

    const id = faker.string.uuid();

    await helper.goToTargetPage(id, false);
    await helper.strictHaveUrl("/contents");
  });
});

test.describe("main", () => {
  test("is visit, fetch ok", async ({ page, context }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];
    const user = userFixture[0];

    await helper.goToTargetPage(content.id, true);

    await expect(helper.getMain.getByText(content.title)).toBeVisible();
    await expect(helper.getMain.getByText(user.nickname)).toBeVisible();
    await expect(
      helper.getMain.getByText(localizeDate(content.createdAt))
    ).toBeVisible();
    await expect(helper.getMain.getByText(content.body)).toBeVisible();
  });
});

test.describe("author-aside", () => {
  test("is visit, fetch ok", async ({ page, context }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];
    const user = userFixture[0];

    await helper.goToTargetPage(content.id, true);

    await expect(
      helper.getAuthorAside.getByAltText(user.nickname)
    ).toHaveAttribute("src", user.imgUrl);
    await expect(helper.getAuthorAside.getByText(user.nickname)).toBeVisible();
  });
});

test.describe("comment-section", () => {
  test('if not sign-in and click textarea, redirect to "/users/sign-in"', async ({
    page,
    context,
  }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];

    await helper.goToTargetPage(content.id, true);

    await helper.getCommentSection.getByRole("textbox").click();
    await helper.strictHaveUrl("/users/sign-in");
  });

  test("if sign-in and click textarea, not redirect", async ({
    page,
    context,
  }) => {
    const helper = new Helper(page, context);
    const content = contentFixture[0];
    const user = userFixture[0];

    await helper.signIn(user.nickname);
    await helper.goToTargetPage(content.id, true);

    await helper.getCommentSection.getByRole("textbox").click();
    await expect(page).not.toHaveURL("/users/sign-in");
  });
});
