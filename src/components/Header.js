import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/colors.css";
import { importAll } from "../utils/import_img";
const images = importAll(
  require.context("../assets/other", false, /\.(png|jpe?g|svg)$/)
);

export default function Header() {
  return (
    <header id="header-bar" className="bg-light">
      <nav className="navbar navbar-expand-md navbar-dark font-weight-bold d-flex">
        <a href="/" className="position-relative">
          <img
            src={images["logo-nhom anh sang.png"]}
            width="50"
            height="50"
            className="d-inline-block mr-3"
          />
        </a>
        <button
          style={{ background: "purple" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-text collapse navbar-collapse d-flex flex-column align-items-start">
          <div className="collapse navbar-collapse navbar-nav d-flex flex-column align-items-end">
            <h4 className="main-theme collapse navbar-collapse navbar-nav">
              ÁNH SÁNG TỪ THIỆN
            </h4>
            <span className="text-dark collapse navbar-collapse">
              Since 2010
            </span>
          </div>
        </span>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto justify-content-end flex-grow-1">
            <li className="nav-item vertical-divider pr-3 pl-3">
              <a className="nav-link">
                <span className="main-theme">Giới thiệu</span>
              </a>
            </li>
            <li className="nav-item vertical-divider pl-3 pr-3 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "purple" }}
              >
                <span className="">Hoạt động</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/chao-tinh-thuong" className="text-decoration-none">
                  <a className="dropdown-item main-theme" href="#">
                    Cháo tình thương
                  </a>
                </Link>
                <Link
                  to="/chuong-trinh-thuong-nien"
                  className="text-decoration-none"
                >
                  <a className="dropdown-item main-theme" href="#">
                    Chương trình thường niên
                  </a>
                </Link>
                <Link to="/ho-tro-hoan-canh" className="text-decoration-none">
                  <a className="dropdown-item main-theme" href="#">
                    Hỗ trợ hoàn cảnh
                  </a>
                </Link>
                <Link to="/tiep-suc-tri-thuc" className="text-decoration-none">
                  <a className="dropdown-item main-theme" href="#">
                    Tiếp sức tri thức
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item vertical-divider pl-3 pr-3">
              <Link to="/video" className="text-decoration-none">
                <span className="nav-link">
                  <span className="main-theme">Video</span>
                </span>
              </Link>
            </li>
            <li className="nav-item vertical-divider pl-3 pr-3 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "purple" }}
              >
                <span className="">Dịch vụ</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/design" className="text-decoration-none">
                  <a className="dropdown-item main-theme" href="#">
                    Thiết kế
                  </a>
                </Link>
                <Link to="/photoshoot" className="text-decoration-none">
                  <a className="dropdown-item main-theme" href="#">
                    Chụp ảnh
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3">
              <a className="nav-link">
                <span className="main-theme">Liên hệ</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
