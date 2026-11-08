import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./localization/react-i18next/config.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
