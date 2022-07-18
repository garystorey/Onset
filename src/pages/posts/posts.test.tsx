import { posts } from "../../mocks/handlers";
import Posts from "./posts";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { expect, it, describe } from "vitest";

const queryClient = new QueryClient();
/*eslint-disable-next-line */
const noop = () => {};

const renderPosts = () => {
  const utils = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    </QueryClientProvider>
  );

  const snapshot = utils.container.firstChild;
  return {
    ...utils,
    snapshot,
  };
};

describe("App", () => {
  it("should render test posts", async () => {
    renderPosts();
    await waitFor(noop);
    const onset = screen.getByRole("heading");
    expect(onset).toBeDefined();

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeDefined();
    });
  });
});
