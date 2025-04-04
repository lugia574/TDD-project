import { faker } from "@faker-js/faker";
import { test, describe, expect } from "vitest";
import { validateBody, validateTitle } from "./content.validation";

describe("validateTitle", () => {
  test.each([
    { title: faker.string.sample(1), expected: false },
    { title: faker.string.sample(81), expected: false },
    { title: faker.string.sample(2), expected: true },
  ])("($title.length) $title -> $expected", ({ title, expected }) => {
    const res = validateTitle(title);
    expect(res).toEqual(expected);
  });
});

describe("validateBody", () => {
  test.each([
    { body: faker.string.sample(20001), expected: false },
    { body: faker.string.sample(20000), expected: true },
  ])("($body.length) $body -> $expected", ({ body, expected }) => {
    const res = validateBody(body);
    expect(res).toEqual(expected);
  });
});
