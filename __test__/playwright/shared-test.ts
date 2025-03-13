/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from "@playwright/test";
import { BaseHelper } from "./base-helper";
import { userFixture } from "@__tests__/fixture/user-fixture";

export const headerTest = (url: string) => {
  test('is not sign-in, "로그인" link is visible', async ({
    page,
    context,
  }) => {
    await page.goto(url);
    await expect(
      page.getByTestId("header").getByRole("link", { name: "로그인" })
    ).toBeVisible();
  });

  test('is sign-in, "user-menu" is visible', async ({ page, context }) => {
    const helper = new BaseHelper(page, context);
    const user = userFixture[0];

    await helper.signIn(user.nickname);
    // const browserCookies = await page.evaluate(() => document.cookie);
    // console.log("브라우저에서 확인한 쿠키:", browserCookies);

    await page.goto(url);
    await page.reload();
    await expect(
      page.getByTestId("header").getByRole("button", { name: "user-menu" })
    ).toBeVisible();
  });
};
