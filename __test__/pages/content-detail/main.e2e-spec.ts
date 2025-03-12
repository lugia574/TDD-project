import { test, expect } from "@playwright/test";
import { contentFixture } from "../../fixture/content-fixture";
import { userFixture } from "../../fixture/user-fixture";
import { BaseHelper } from "../../playwright/base-helper";

const getUrl = (id: string): string => `/contents/${id}`;

test.describe("header", () => {
  test('is not sign-in, "로그인" link is visible', async ({
    page,
    context,
  }) => {
    const content = contentFixture[0];
    const url = getUrl(content.id);
    await page.goto(url);
    await expect(
      page.getByTestId("header").getByRole("link", { name: "로그인" })
    ).toBeVisible();
  });

  test('is sign-in, "user-menu" is visible', async ({ page, context }) => {
    const helper = new BaseHelper(page, context);
    const content = contentFixture[0];
    const user = userFixture[0];
    const url = getUrl(content.id);

    await helper.signIn(user.nickname);
    // const browserCookies = await page.evaluate(() => document.cookie);
    // console.log("브라우저에서 확인한 쿠키:", browserCookies);

    await page.goto(url);
    await page.reload();
    await expect(
      page.getByTestId("header").getByRole("button", { name: "user-menu" })
    ).toBeVisible();
  });

  test('is visit, "{작성자} 블로그" is visible', async ({ page, context }) => {
    const content = contentFixture[0];
    const user = userFixture[0];
    const url = getUrl(content.id);
    await page.goto(url);
    await expect(
      page.getByTestId("header").getByText(`${user.nickname}님의 블로그`)
    ).toBeVisible();
  });
});
