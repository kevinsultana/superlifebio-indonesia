import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CeritaKami from "./pages/Tentang-Kami/CeritaKami";
import Pendiri from "./pages/Tentang-Kami/Pendiri";
import TimManagement from "./pages/Tentang-Kami/TimManagement";
import PabrikGMP from "./pages/Tentang-Kami/PabrikGMP";
import YayasanSuperlife from "./pages/Tentang-Kami/YayasanSuperlife";
import MengapaSuperlife from "./pages/Tentang-Kami/MengapaSuperlife";
import STC30 from "./pages/Produk/STC30";
import SIC from "./pages/Produk/SIC";
import Penghargaan from "./pages/Penghargaan";
import PeringkatKepemimpinan from "./pages/Prestasi/PeringkatKepemimpinan";
import Ketenaran from "./pages/Prestasi/Ketenaran";
import Kampanye from "./pages/Acara/Kampanye";
import KTTKepemimpinan from "./pages/Acara/KTTKepemimpinan";
import KantorGlobal from "./pages/KantorGlobal";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cerita-kami" element={<CeritaKami />} />
    <Route path="/pendiri" element={<Pendiri />} />
    <Route path="/tim-management" element={<TimManagement />} />
    <Route path="/pabrik-gmp" element={<PabrikGMP />} />
    <Route path="/yayasan-superlife" element={<YayasanSuperlife />} />
    <Route path="/mengapa-superlife" element={<MengapaSuperlife />} />
    <Route path="/STC30" element={<STC30 />} />
    <Route path="/SIC" element={<SIC />} />
    <Route path="/penghargaan" element={<Penghargaan />} />
    <Route path="/peringkat-kepemimpinan" element={<PeringkatKepemimpinan />} />
    <Route path="/ketenaran" element={<Ketenaran />} />
    <Route path="/kampanye" element={<Kampanye />} />
    <Route path="/ktt-kepemimpinan" element={<KTTKepemimpinan />} />
    <Route path="/kantor-global" element={<KantorGlobal />} />
  </Routes>
);
