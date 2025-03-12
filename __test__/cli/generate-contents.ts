import { list } from "radashi";
import { gen } from "../generator";
import { objectToString } from "../libs/object-to-string";

const main = (len: number) => {
  const instance = list(0, len - 1).map(() => gen.content.instance());
  const instanceToString = objectToString(instance);
  console.log(instanceToString);
};

main(1);
