import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ActivityBody from "../components/ActivityBody";

function ChuongTrinhThuongNien() {
  let response = {
    category: "chao-tinh-thuong",
    data: [
      {
        banner: "mua-he-yeu-thuong-2018-43-768x512.jpg",
        images: [
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-1.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-2.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-3.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-4.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-5.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-6.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-7.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-8.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-9.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-10.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-11.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-12.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-13.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-14.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-15.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-16.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-17.jpg",
        ],
        title: "Mùa Hè Yêu Thương 2018 Tỉnh Ninh Thuận",
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để 
        mang đến gần 200 phần quà cho các em có hoàn cảnh khó khăn tại Trường Tiểu Học Phước Tiến B, Thôn Suối Ruau, Xã Phước Tiến, 
        Huyện Bắc Ái, Tỉnh Ninh Thuận. Kính chúc sức khỏe và may mắn sẽ đến với mọi người.`,
        key: 1,
      },
      {
        banner: "mua-dong-am-ap-2017-20-600x450.jpg",
        images: [""],
        title: "MÙA ĐÔNG ẤM ÁP 2017 (Ngày 02.12.2017)",
        description:
          "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí Minh[...]",
        key: 2,
      },
      {
        banner: "vui-mua-trung-thu-2017-24-768x512.jpg",
        images: [""],
        title: "VUI MÙA TRUNG THU 30.09.2017 (TIỀN GIANG)",
        description:
          "Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên[...]",
        key: 3,
      },
      {
        banner: "canh-en-mua-xuan-23-768x512.jpg",
        images: [""],
        title: "CÁNH ÉN MÙA XUÂN 2017 - ĐỒNG THÁP (08.01.2017)",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành viên và[...]",
        key: 4,
      },
      {
        banner: "mua-he-yeu-thuong-2017-17-768x512.jpg",
        images: [""],
        title: "MÙA HÈ YÊU THƯƠNG 2017 (Ngày 29.04.2017)",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành viên và[...]",
        key: 5,
      },
      {
        banner: "cung-be-den-truong-2017-35-768x543.jpg",
        images: [""],
        title: "CÙNG BÉ ĐẾN TRƯỜNG 2017 (ngày 27.08.2017)",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành viên và[...]",
        key: 5,
      },
      {
        banner: "tet-trung-thu-2016-32-768x512.jpg",
        images: [""],
        title: "VUI MÙA TRUNG THU 10.09.2016 (TRÀ VINH)",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành viên và[...]",
        key: 6,
      },
      {
        banner: "mua-dong-am-ap-2016-40.jpg",
        images: [""],
        title: "MÙA ĐÔNG ẤM ÁP 2016 (NGÀY 10.12.2016)",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành viên và[...]",
        key: 7,
      },
    ],
  };
  let numberOfCardsPerRow = [];
  for (let i = 0; i < response.data.length / 2; i++) {
    numberOfCardsPerRow.push("unique_" + i);
  }
  return (
    <>
      <Header />
      <Section title={"HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN"} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
      <Footer />
    </>
  );
}

export default ChuongTrinhThuongNien;
