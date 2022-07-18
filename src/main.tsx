import App from "./App";
import "open-props/style";
import { StrictMode } from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
