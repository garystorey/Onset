import { posts } from "../../mocks/handlers"
import Posts from "./posts"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { expect, it, describe } from "vitest"

const queryClient = new QueryClient()
/*eslint-disable-next-line */
const noop = () => {}

const renderPosts = () => {
  const utils = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    </QueryClientProvider>
  )

  const snapshot = utils.container.firstChild
  return {
    ...utils,
    snapshot,
  }
}

describe("App", () => {
  it("should render test posts", async () => {
    renderPosts()
    const onset = await screen.findByRole("heading")
    expect(onset).toBeDefined()

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeDefined()
    })
  })
})
