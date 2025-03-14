import { contentFixture } from "@__tests__/fixture/content-fixture";
import { test, describe, expect } from "vitest";
import { contentApi } from "./content-api.effect";
import { omit } from "radashi";
import { userFixture } from "@__tests__/fixture/user-fixture";
import { ContentView } from "@/domains/content/content.type";

describe("contentApi", () => {
  test("countAll", async () => {
    const search = contentFixture[0].title;
    const response = await contentApi.counAll(search);
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
