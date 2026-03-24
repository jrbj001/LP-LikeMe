import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Home } from "./screens/Home";
import { Termos } from "./screens/Termos";
import { Privacy } from "./screens/Privacy";
import "./responsive.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TERMS} element={<Termos />} />
        <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
