import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import IndexPage from "./pages/IndexPage";
import DesignPage from "./pages/DesignPage";
import PhotoshootPage from "./pages/PhotoshootPage";
import ChaoTinhThuong from "./pages/ChaoTinhThuong";
import ChuongTrinhThuongNien from "./pages/ChuongTrinhThuongNien";
import HoTroHoanCanh from "./pages/HoTroHoanCanh";
import TiepSucTriThuc from "./pages/TiepSucTriThuc";
import RulePage from "./pages/RulePage";
import CriteriaPage from "./pages/CriteriaPage";
import StructurePage from "./pages/StructurePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/photoshoot" element={<PhotoshootPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/chao-tinh-thuong" element={<ChaoTinhThuong />} />
      <Route
        path="/chuong-trinh-thuong-nien"
        element={<ChuongTrinhThuongNien />}
      />
      <Route path="/ho-tro-hoan-canh" element={<HoTroHoanCanh />} />
      <Route path="/tiep-suc-tri-thuc" element={<TiepSucTriThuc />} />
      <Route path="/rule" element={<RulePage />} />
      <Route path="/criteria" element={<CriteriaPage />} />
      <Route path="/structure" element={<StructurePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
