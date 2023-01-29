import { rest } from "msw";
import { userDB } from "../databases";

const BASE_URL = "https://test";

export const userHandler = [
  rest.get(`${BASE_URL}/api/v1/users/me`, (req, res, ctx) => {
    const tokenWithBearer = req.headers.get("authorization");
    if (!tokenWithBearer) return res(ctx.status(400));

    const token = tokenWithBearer.split("Bearer ")[1];
    if(token){
      return res(
        ctx.json(
          userDB.user.findFirst({
            where: { email: { equals: "insung9546@gmail.com" } },
          })
        )
      );
    } else {
      return res(ctx.status(400, "EXPIRED_TOKEN"));
    }
  }),
  rest.post(`${BASE_URL}/api/v1/users/pushToken`, async (req, res, ctx) => {
    const tokenWithBearer = req.headers.get("authorization");
    if (!tokenWithBearer) return res(ctx.status(400));

    const token = tokenWithBearer.split("Bearer ")[1];

    console.log("[MOCK] pushToken", +new Date(token) - +new Date(), token);

    if (new Date(token) > new Date()) {
      const body = await req.json();
      console.log("[MOCK]", body.pushToken);
      if (body.pushToken) {
        try {
          const user = userDB.user.update({
            where: { email: { equals: "insung9546@gmail.com" } },
            data: {
              pushToken: userDB.pushToken.create({ token: body.pushToken }),
            },
          });
          console.log("[MOCK]: ", user);
        } catch (e) {
          console.log("[MOCK]: ", e);
        }

        return res(ctx.json(true));
      } else {
        return res(ctx.status(401, "푸시토큰이 없음"));
      }
    } else {
      return res(ctx.status(400, "EXPIRED_TOKEN"));
    }
  }),
];
