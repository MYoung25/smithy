import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (window === undefined) {
  // server side
  hydrateRoot(document.getElementById("root")!, <App />);
} else {
  // development
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
