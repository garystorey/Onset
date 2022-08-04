import App from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "open-props/style"
import { StrictMode } from "react"
import { render } from "react-dom"

const queryClient = new QueryClient()

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
)
