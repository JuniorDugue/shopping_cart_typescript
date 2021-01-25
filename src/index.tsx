import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./styles/globalStyles";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
