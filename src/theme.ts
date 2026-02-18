import { createTheme } from "@mui/material/styles";

const midnight = "#141318";
const sand = "#F4F0EA";
const clay = "#C8B39B";
const accent = "#F2A65A";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: midnight },
    secondary: { main: accent },
    text: { primary: midnight },
    background: { default: sand },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    h1: { fontFamily: "Playfair Display, serif", fontSize: "3rem", fontWeight: 700 },
    h2: { fontFamily: "Playfair Display, serif", fontSize: "2.25rem", fontWeight: 700 },
    h3: { fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 12,
        },
      },
    },
  },
});

export const tokens = { midnight, sand, clay, accent };
