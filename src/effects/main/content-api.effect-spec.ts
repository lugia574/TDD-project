import { contentFixture } from "@__tests__/fixture/content-fixture";
import { test, describe, expect } from "vitest";
import { contentApi } from "./content-api.effect";
import { omit } from "radashi";
import { userFixture } from "@__tests__/fixture/user-fixture";
import { ContentView } from "@/domains/content/content.type";
import { contentSortOption } from "@/domains/content/content.constant";

describe("contentApi", () => {
  test("findAll", async () => {
    const pageTake = 12;
    const pageNum = 1;
    const sort = contentSortOption.titleAsc;

    const response = await contentApi.findAll({ pageTake, pageNum, sort });
    const expected = contentFixture[2].title;

    expect(response.status).toEqual(200);
    expect(response.data.contents[0].title).toEqual(expected);
  });

  test("countAll", async () => {
    const search = contentFixture[0].title;
    const response = await contentApi.countAll(search);
    const expected = 1;

    expect(response.status).toEqual(200);
    expect(response.data.count).toEqual(expected);
  });
  test("findOne", async () => {
    const content = contentFixture[0];
    const author = userFixture[0];

    const id = content.id;
    const expected: ContentView = {
      ...omit(content, ["authorId"]),
      author,
    };

    const response = await contentApi.findOne(id);

    expect(response.status).toEqual(200);
    if (response.status !== 200) throw new Error();
    expect(response.data.content).toEqual(expected);
  });
});
