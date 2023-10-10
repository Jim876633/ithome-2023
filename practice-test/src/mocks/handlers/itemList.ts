import { rest } from "msw";
import { faker } from "@faker-js/faker";
export let data = [
  { title: "test1", id: 1 },
  { title: "test2", id: 2 },
  { title: "test3", id: 3 },
];

export default [
  // Handles a POST /login request
  rest.get("/itemList/content", (req, res, ctx) => {
    const response = faker.helpers.arrayElement([
      res(ctx.status(200), ctx.json({ data: { text: "Redux-toolkit Query" } })),
      res(
        ctx.status(500),
        ctx.json({ code: "0001", message: "Internal server error" })
      ),
    ]);
    return response;
  }),
  rest.get("/itemList/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data }));
  }),
  rest.post("/itemList/add", async (req, res, ctx) => {
    const reqBody = await req.json();

    data.push(reqBody);
    return res(ctx.status(200), ctx.json({ data }));
  }),
  rest.delete("/itemList/delete", async (req, res, ctx) => {
    const reqBody = await req.json();
    data = data.filter((item) => item.id !== reqBody.id);
    return res(ctx.status(200), ctx.json({ data }));
  }),
];
