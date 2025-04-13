import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CeritaKami from "./pages/CeritaKami";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cerita-kami" element={<CeritaKami />} />
  </Routes>
);
