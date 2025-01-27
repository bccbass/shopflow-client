import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./UserContext";
import ThemeProvider from "./ThemeProvider.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider >
          <App />
          </ThemeProvider>
          <ReactQueryDevtools />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
