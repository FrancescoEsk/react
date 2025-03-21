import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ForecastPage from "./pages/ForecastPage/ForecastPage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/forecast" element={<ForecastPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
