/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from "@playwright/test";
import { contentFixture } from "../../fixture/content-fixture";
import { userFixture } from "../../fixture/user-fixture";
import { BaseHelper } from "../../playwright/base-helper";
import { Helper } from "./helper";
import { faker } from "@faker-js/faker";
import { headerTest } from "@__tests__/playwright/shared-test";

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

test.describe("header", () => {
  const content = contentFixture[0];
  const url = getUrl(content.id);
  headerTest(url);

  test('is visit, "{작성자} 블로그" is visible', async ({ page, context }) => {
    const helper = new Helper(page, context);

    const content = contentFixture[0];
    const user = userFixture[0];

    await helper.goToTargetPage(content.id, false);
    await expect(
      page.getByTestId("header").getByText(`${user.nickname}님의 블로그`)
    ).toBeVisible();
  });
});
