import { faker } from "@faker-js/faker";
import { test, describe, expect } from "vitest";
import { uploadImg } from "./image.effect";

describe("uploadImge", () => {
  test("if ok, return type string", async () => {
    const imageFile = new File([], faker.string.alpha() + ".png");

    const res = await uploadImg(imageFile);
    expect(typeof res).toEqual("string");
  });
});
