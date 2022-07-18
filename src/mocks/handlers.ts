// eslint-disable-next-line
import { rest } from "msw";

export const repo = {
  id: 1234567,
  node_id: "R_kgDOG4CQUQ",
  name: "Onset",
  full_name: "garystorey/Onset",
  private: false,
  description: "The beginning of something, especially something unpleasant.",
  stargazers_count: 100,
  watchers_count: 25,
  language: "TypeScript",
  topics: [
    "msw",
    "open-props",
    "prettier-eslint",
    "react",
    "react-router-dom",
    "testing-library-react",
    "typescript",
    "vite",
    "vitest",
  ],
  open_issues: 0,
  watchers: 0,
  subscribers_count: 1,
};

export const handlers = [
  rest.get("https://api.github.com/repos/garystorey/Onset", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(repo))
  ),
];
