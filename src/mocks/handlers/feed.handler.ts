import { rest } from "msw";
import { feedDB } from "../databases/feed.database";

const BASE_URL = "https://test";

export const userHandler = [
  rest.get(`${BASE_URL}/api/v1/feeds`, (req, res, ctx) => {
    const tokenWithBearer = req.headers.get("authorization");
    if (!tokenWithBearer) return res(ctx.status(400));

    const token = tokenWithBearer.split("Bearer ")[1];
    if (token) {
      const page = (Number(req.url.searchParams.get("page")) || 1) - 1;

      return res(
        ctx.json(
          feedDB.feed.findMany({
            take: 5,
            skip: page * 5,
            orderBy: { createAt: "desc" },
          })
        )
      );
    } else {
      return res(ctx.status(400, "EXPIRED_TOKEN"));
    }
  }),
  rest.get(`${BASE_URL}/api/v1/feeds/:id`, (req, res, ctx) => {
    const tokenWithBearer = req.headers.get("authorization");
    if (!tokenWithBearer) return res(ctx.status(400));

    const token = tokenWithBearer.split("Bearer ")[1];
    if (token) {
      const { id } = req.params;
      const feed =
        typeof id === "string" &&
        feedDB.feed.findFirst({ where: { id: { equals: id } } });
      if (feed) {
        return res(ctx.json(feed));
      } else {
        return res(ctx.status(404));
      }
    } else {
      return res(ctx.status(400, "EXPIRED_TOKEN"));
    }
  }),
];
