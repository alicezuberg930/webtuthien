import "./styles/common_style.css";
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
import NewsPage from "./pages/NewsPage";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/webtuthien" element={<IndexPage />} />
      <Route path="/webtuthien/design" element={<DesignPage />} />
      <Route path="/webtuthien/photoshoot" element={<PhotoshootPage />} />
      <Route path="/webtuthien/video" element={<VideoPage />} />
      <Route path="/webtuthien/chao-tinh-thuong" element={<ChaoTinhThuong />} />
      <Route
        path="/webtuthien/chuong-trinh-thuong-nien"
        element={<ChuongTrinhThuongNien />}
      />
      <Route path="/webtuthien/ho-tro-hoan-canh" element={<HoTroHoanCanh />} />
      <Route
        path="/webtuthien/tiep-suc-tri-thuc"
        element={<TiepSucTriThuc />}
      />
      <Route path="/webtuthien/rule" element={<RulePage />} />
      <Route path="/webtuthien/criteria" element={<CriteriaPage />} />
      <Route path="/webtuthien/structure" element={<StructurePage />} />
      <Route path="/webtuthien/contact" element={<ContactPage />} />
      <Route path="/webtuthien/news" element={<NewsPage />} />
      <Route
        path="/webtuthien/chao-tinh-thuong/details"
        element={<ActivityDetailsPage />}
      />
      <Route
        path="/webtuthien/chuong-trinh-thuong-nien/details"
        element={<ActivityDetailsPage />}
      />
      <Route
        path="/webtuthien/ho-tro-hoan-canh/details"
        element={<ActivityDetailsPage />}
      />
      <Route
        path="/webtuthien/tiep-suc-tri-thuc/details"
        element={<ActivityDetailsPage />}
      />
    </Routes>
  );
}

export default App;
