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
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-18.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-19.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-20.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-21.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-22.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-23.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-24.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-25.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-26.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-27.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-28.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-29.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-30.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-31.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-32.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-33.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-34.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-35.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-36.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-37.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-38.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-39.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-40.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-41.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-42.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-43.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-44.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-45.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-46.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-47.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-48.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-49.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-50.jpg",
          "mua-he-yeu-thuong-2018-tinh-ninh-thuan-51.jpg",
        ],
        title: "Mùa Hè Yêu Thương 2018 Tỉnh Ninh Thuận",
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để 
        mang đến gần 200 phần quà cho các em có hoàn cảnh khó khăn tại Trường Tiểu Học Phước Tiến B, Thôn Suối Ruau, Xã Phước Tiến, 
        Huyện Bắc Ái, Tỉnh Ninh Thuận. Kính chúc sức khỏe và may mắn sẽ đến với mọi người.`,
        key: 1,
      },
      {
        banner: "mua-dong-am-ap-2017-20-600x450.jpg",
        images: [
          "mua-dong-am-ap-2017-1.jpg",
          "mua-dong-am-ap-2017-2.jpg",
          "mua-dong-am-ap-2017-3.jpg",
          "mua-dong-am-ap-2017-4.jpg",
          "mua-dong-am-ap-2017-5.jpg",
          "mua-dong-am-ap-2017-6.jpg",
          "mua-dong-am-ap-2017-7.jpg",
          "mua-dong-am-ap-2017-8.jpg",
          "mua-dong-am-ap-2017-9.jpg",
          "mua-dong-am-ap-2017-10.jpg",
          "mua-dong-am-ap-2017-11.jpg",
          "mua-dong-am-ap-2017-12.jpg",
          "mua-dong-am-ap-2017-13.jpg",
          "mua-dong-am-ap-2017-14.jpg",
          "mua-dong-am-ap-2017-15.jpg",
          "mua-dong-am-ap-2017-16.jpg",
          "mua-dong-am-ap-2017-17.jpg",
          "mua-dong-am-ap-2017-18.jpg",
          "mua-dong-am-ap-2017-19.jpg",
        ],
        title: "MÙA ĐÔNG ẤM ÁP 2017 (Ngày 02.12.2017)",
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân, các bạn bè gần xa đã cùng chung tay thực hiện chương trình MÙA ĐÔNG ẤM 
        ÁP 2017 (đêm ngày 02.12.2017). Trao tặng 70 phần quà (mền, dầu gió, mì gói, bánh mì…) cho người vô gia cư, lao động về khuya. * Lưu ý: 
        mền & sữa còn dư sẽ chuyển sang chương trình Cánh Én Mùa Xuân (27.01.2018 tại U Minh, Cà Mau).`,
        key: 2,
      },
      {
        banner: "vui-mua-trung-thu-2017-24-768x512.jpg",
        images: [
          "vui-mua-trung-thu-2017-0.jpg",
          "vui-mua-trung-thu-2017-1.jpg",
          "vui-mua-trung-thu-2017-2.jpg",
          "vui-mua-trung-thu-2017-3.jpg",
          "vui-mua-trung-thu-2017-4.jpg",
          "vui-mua-trung-thu-2017-5.jpg",
          "vui-mua-trung-thu-2017-6.jpg",
          "vui-mua-trung-thu-2017-7.jpg",
          "vui-mua-trung-thu-2017-8.jpg",
          "vui-mua-trung-thu-2017-9.jpg",
          "vui-mua-trung-thu-2017-10.jpg",
          "vui-mua-trung-thu-2017-11.jpg",
          "vui-mua-trung-thu-2017-12.jpg",
          "vui-mua-trung-thu-2017-13.jpg",
          "vui-mua-trung-thu-2017-14.jpg",
          "vui-mua-trung-thu-2017-15.jpg",
        ],
        title: "VUI MÙA TRUNG THU 30.09.2017 (TIỀN GIANG)",
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để trao tặng 303 phần quà (trong 
        đó có 70 phần đặc biệt dành cho các bé khó khăn) tại trường tiểu học Phước Trung 2, Ấp Tân Xuân, Xã Phước Trung, Huyện Gò Công Đông, Tỉnh Tiền Giang.
        Kính chúc sức khoẻ đến với mọi người!`,
        key: 3,
      },
      {
        banner: "canh-en-mua-xuan-23-768x512.jpg",
        images: [
          "canh-en-mua-xuan-0.jpg",
          "canh-en-mua-xuan-1.jpg",
          "canh-en-mua-xuan-2.jpg",
          "canh-en-mua-xuan-3.jpg",
          "canh-en-mua-xuan-4.jpg",
          "canh-en-mua-xuan-5.jpg",
          "canh-en-mua-xuan-6.jpg",
          "canh-en-mua-xuan-7.jpg",
          "canh-en-mua-xuan-8.jpg",
          "canh-en-mua-xuan-9.jpg",
          "canh-en-mua-xuan-10.jpg",
          "canh-en-mua-xuan-11.jpg",
          "canh-en-mua-xuan-12.jpg",
          "canh-en-mua-xuan-13.jpg",
          "canh-en-mua-xuan-14.jpg",
          "canh-en-mua-xuan-15.jpg",
          "canh-en-mua-xuan-16.jpg",
        ],
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
