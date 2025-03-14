import { ContentView } from "@/domains/content/content.type";
import { contentFixture } from "@__tests__/fixture/content-fixture";
import { userFixture } from "@__tests__/fixture/user-fixture";
import { http, HttpResponse } from "msw";
import { omit } from "radashi";

export const contentHandlers = [
  http.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/contents/count",
    ({ request }) => {
      const url = new URL(request.url);
      const search = url.searchParams.getAll("search");

      const filtered = search
        ? contentFixture.filter((item) => item.title.includes(search))
        : contentFixture;

      const count = filtered.length;

      return HttpResponse.json({
        data: {
          count,
        },
        status: 200,
      });
    }
  ),
  http.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/contents/:id",
    ({ params }) => {
      const { id } = params;
      if (typeof id !== "string")
        return HttpResponse.json({
          status: 400,
        });
      const findItem = contentFixture.find((item) => item.id === id);
      const author = userFixture.find((item) => item.id === findItem?.authorId);
      if (!findItem || !author)
        return HttpResponse.json({
          status: 404,
        });

      const content: ContentView = {
        ...omit(findItem, ["authorId"]),
        author,
      };

      return HttpResponse.json({
        data: {
          content: content,
        },
        status: 200,
      });
    }
  ),

  http.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/contents/:id",
    ({ params }) => {
      const { id } = params;
      if (typeof id !== "string")
        return HttpResponse.json({
          status: 400,
        });
      const findItem = contentFixture.find((item) => item.id === id);
      const author = userFixture.find((item) => item.id === findItem?.authorId);
      if (!findItem || !author)
        return HttpResponse.json({
          status: 404,
        });

      const content: ContentView = {
        ...omit(findItem, ["authorId"]),
        author,
      };

      return HttpResponse.json({
        data: {
          content: content,
        },
        status: 200,
      });
    }
  ),
];
