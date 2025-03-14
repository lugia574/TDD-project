"use server";

import { contentApi } from "@/effects/main/content-api.effect";

export const loadCount = async (search?: string) => {
  const response = await contentApi.counAll(search);
  return response.data.count;
};
