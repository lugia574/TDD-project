import { gen } from "@__tests__/generator";

export const uploadImg = async (imageFile: File) => {
  // 실제 api >> upload 된 src 의 url 리턴
  return gen.img();
};
