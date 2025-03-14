import { list } from "radashi";
import { gen } from "../generator";
import { objectToString } from "../libs/object-to-string";
import { userFixture } from "@__tests__/fixture/user-fixture";
import { faker } from "@faker-js/faker";

const main = (len: number) => {
  const instance = list(0, len - 1).map((i) => {
    const user = userFixture[0];
    if (i === 1)
      return gen.content.instance({ authorId: user.id, createdAt: new Date() });
    if (i === 2)
      return gen.content.instance({
        authorId: user.id,
        title: "0_first number zero" + faker.string.sample(),
      });
    return gen.content.instance({ authorId: user.id });
  });

  const instanceToString = objectToString(instance);
  console.log(instanceToString);
};

main(14);
