import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./theme";
import { CartProvider } from "./store/cart";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <BrowserRouter basename="/3doodles/">
          <App />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
