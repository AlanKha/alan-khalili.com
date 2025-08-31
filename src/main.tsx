import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
import App from "./App.tsx";
import ExternalRedirect from "./components/ExternalRedirect";
import { RESUME_LINK } from "./constants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<ExternalRedirect to={RESUME_LINK} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
