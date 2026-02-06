"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { makeTheme } from "./makeTheme";

export const ThemeModeContext = React.createContext({
  mode: "dark",
  toggleTheme: () => {},
});

const emotionCache = createCache({
  key: "mui",
  prepend: true,
});

export default function ThemeProviderCodexity({ children }) {
  const [mode, setMode] = React.useState("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem("themeMode");
    if (stored === "light" || stored === "dark") {
      setMode(stored);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("themeMode", next);
      return next;
    });
  };

  const theme = React.useMemo(() => makeTheme(mode), [mode]);

  if (!mounted) return null;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </CacheProvider>
  );
}
