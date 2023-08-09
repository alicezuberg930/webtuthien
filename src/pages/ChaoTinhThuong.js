import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { importAll } from "../utils/import_img";
const images = importAll(
  require.context("../assets/chao_tinh_thuong", false, /\.(png|jpe?g|svg)$/)
);

function ChaoTinhThuong() {
  let chaoArray = [
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "Cháo Tình Thương T07.2018",
      description:
        "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
      key: 1,
    },
    {
      image: "chao-tinh-thuong-2.jpg",
      title: "Chương trình Cháo tình thương bệnh viện 115 năm 2018",
      description:
        "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
      key: 2,
    },
    {
      image: "chao-tinh-thuong-3.jpg",
      title: "CHÁO TÌNH THƯƠNG TẠI BV BÌNH DÂN VÀO NGÀY 21.01.2018",
      description:
        "Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện[...]",
      key: 3,
    },
    {
      image: "chao-tinh-thuong-4.jpg",
      title: "CHÁO TÌNH THƯƠNG 17.12.2017 (BV.115)",
      description: "No description",
      key: 4,
    },
    {
      image: "chao-tinh-thuong-5.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 5,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 5,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 6,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 7,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 8,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 9,
    },
    {
      image: "chao-tinh-thuong-1.jpg",
      title: "CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)",
      description: "No description",
      key: 10,
    },
  ];
  let tempChao = [];
  for (let i = 0; i < chaoArray.length / 2; i++) {
    tempChao.push(i);
  }
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        {tempChao.map((chap, index) => {
          return (
            <div className="row" key={index}>
              {chaoArray.slice(index + 2, index * 2 + 2).map((chao) => {
                return (
                  <div className="col-6" key={index}>
                    <div className="card w-100">
                      <img
                        className="card-img-top"
                        src={images[chao.image]}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{chao.title}</h5>
                        <p className="card-text">{chao.description}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default ChaoTinhThuong;
