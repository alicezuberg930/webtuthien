import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ActivityBody from "../components/ActivityBody";

function ChuongTrinhThuongNien() {
  let mainArray = [
    {
      image: "mua-he-yeu-thuong-2018-43-768x512.jpg",
      title: "Mùa Hè Yêu Thương 2018 Tỉnh Ninh Thuận",
      description:
        "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
      key: 1,
    },
    {
      image: "mua-dong-am-ap-2017-20-600x450.jpg",
      title: "MÙA ĐÔNG ẤM ÁP 2017 (Ngày 02.12.2017)",
      description:
        "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
      key: 2,
    },
    {
      image: "vui-mua-trung-thu-2017-24-768x512.jpg",
      title: "VUI MÙA TRUNG THU 30.09.2017 (TIỀN GIANG)",
      description:
        "Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện[...]",
      key: 3,
    },
    {
      image: "canh-en-mua-xuan-23-768x512.jpg",
      title: "CÁNH ÉN MÙA XUÂN 2017 - ĐỒNG THÁP (08.01.2017)",
      description: "No description",
      key: 4,
    },
    {
      image: "mua-he-yeu-thuong-2017-17-768x512.jpg",
      title: "MÙA HÈ YÊU THƯƠNG 2017 (Ngày 29.04.2017)",
      description: "No description",
      key: 5,
    },
    {
      image: "cung-be-den-truong-2017-35-768x543.jpg",
      title: "CÙNG BÉ ĐẾN TRƯỜNG 2017 (ngày 27.08.2017)",
      description: "No description",
      key: 5,
    },
    {
      image: "tet-trung-thu-2016-32-768x512.jpg",
      title: "VUI MÙA TRUNG THU 10.09.2016 (TRÀ VINH)",
      description: "No description",
      key: 6,
    },
    {
      image: "mua-dong-am-ap-2016-40.jpg",
      title: "MÙA ĐÔNG ẤM ÁP 2016 (NGÀY 10.12.2016)",
      description: "No description",
      key: 7,
    },
  ];
  let numberOfCardsPerRow = [];
  for (let i = 0; i < mainArray.length / 2; i++) {
    numberOfCardsPerRow.push("unique_" + i);
  }
  return (
    <>
      <Header />
      <Section title={"HOẠT ĐỘNG CHÁO CHƯƠNG TRÌNH THƯỜNG NIÊN"} />
      <ActivityBody cardInfos={{ mainArray, numberOfCardsPerRow }} />
      <Footer />
    </>
  );
}

export default ChuongTrinhThuongNien;
