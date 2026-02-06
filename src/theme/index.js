import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export function makeTheme(mode = "dark") {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
    palette,
    typography,
    components,
  });
}
