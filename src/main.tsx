import "@carbon/react/index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/queryClient.ts";
import { App } from "./App.tsx";
import { config } from "./config.ts";
import { ConfigContext } from "./context/config/ConfigContext.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ConfigContext value={config}>
          <App />
        </ConfigContext>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
