import { rest } from "msw";

const BASE_URL = "https://test";

export const authHandler = [
  rest.post(`${BASE_URL}/api/v2/auth/login`, async (req, res, ctx) => {
    const body = await req.json();
    if (body.email === "test" && body.password === "1") {
      return res(
        ctx.json({
          refreshToken: new Date(Date.now() + 60 * 60 * 1000 * 60).toString(),
          accessToken: new Date(Date.now() + 20 * 1000 * 60 * 60).toString(),
        })
      );
    } else {
      // "result": false,
      // "path": "/api/v2/auth/login",
      // "code": "INVALID_EMAIL_PASSWORD",
      // "status": 400,
      // "timestamp": "2022-09-01T02:01:34.042Z",
      // "reason": "아이디 혹은 패스워드가 틀렸습니다."

      return res(ctx.status(400));
    }
  }),
  rest.post(`${BASE_URL}/api/v2/auth/logout`, (_, res, ctx) => {
    return res(ctx.json(true));
  }),
  rest.post(`${BASE_URL}/api/v2/auth/refresh`, async (req, res, ctx) => {
    const body = await req.json();

    const token = body.refreshToken;
    if (!token) return res(ctx.status(400));

    console.log("*************************", +new Date(token) - +new Date());

    if (new Date(token) > new Date()) {
      return res(
        ctx.delay(1000),
        ctx.json({
          refreshToken: new Date(Date.now() + 60 * 60 * 1000).toString(),
          accessToken: new Date(Date.now() + 20 * 1000).toString(),
        })
      );
    } else {
      return res(ctx.status(400, "EXPIRED_TOKEN"));
    }
  }),
  rest.post(`${BASE_URL}/api/v2/auth/join`, async (req, res, ctx) => {
    const body = await req.json();

    if (body.email.length && body.password.length) {
      return res(
        ctx.json({
          refreshToken: new Date(Date.now() + 60 * 60 * 1000 * 60).toString(),
          accessToken: new Date(Date.now() + 20 * 1000 * 60 * 60).toString(),
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),
];
