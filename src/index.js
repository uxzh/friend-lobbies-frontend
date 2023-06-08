import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createTheme, NextUIProvider } from "@nextui-org/react";

// color theme se
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#007AFF",
      secondary: "#5856D6",
      success: "#4CD964",
      warning: "#FF9500",
      error: "#FF3B30",
      background: "#EFEFF4",
      text: "#000000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
