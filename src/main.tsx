import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
import App from "./App.tsx";
import ExternalRedirect from "./components/ExternalRedirect";
import { RESUME_LINK } from "./data/content";
import NotFound from "./pages/NotFound.tsx";
import ImagePreloader from "./components/ImagePreloader.tsx";
import Snowfall from "react-snowfall";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImagePreloader>
      <BrowserRouter>
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/resume"
            element={<ExternalRedirect to={RESUME_LINK} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ImagePreloader>
  </StrictMode>,
);
