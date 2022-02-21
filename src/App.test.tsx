import { expect, it, describe } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { posts } from "./mocks/handlers";
import App from "./App";

describe("App", () => {
  it("should render snapshot", async () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="App"
      >
        <h1>
          Hello
        </h1>
        <span
          aria-label="loading"
        >
          Loading...
        </span>
        <ul />
      </div>
    `);
    const hello = screen.getByRole("heading", { name: "Hello" });

    expect(hello).toBeDefined();

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeDefined();
    });
  });

  it("should render test posts", async () => {
    render(<App />);
    const hello = screen.getByRole("heading", { name: "Hello" });

    expect(hello).toBeDefined();
    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeDefined();
    });
  });
});
