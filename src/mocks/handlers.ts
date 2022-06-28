// eslint-disable-next-line
import { rest } from "msw";

export const posts = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  {
    userId: 2,
    id: 5,
    title: "second post title",
    body: "second post body",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(posts))
  ),
];
