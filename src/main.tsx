import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.ts";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home.page.tsx";
import "./index.css";
import ArticlePage from "./pages/article.page.tsx";
import ArticlesPage from "./pages/articles.page.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./pages/layouts/app.layout.tsx";
import SettingsPage from "./pages/settings.page.tsx";
import { AuthProvider } from "./providers/auth.provider.tsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={1}
          preventDuplicate
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="articles" element={<ArticlesPage />} />
                  <Route path="articles/:id" element={<ArticlePage />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
