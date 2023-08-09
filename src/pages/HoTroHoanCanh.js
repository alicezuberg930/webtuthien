import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ActivityBody from "../components/ActivityBody";

function HoTroHoanCanh() {
  let mainArray = [
    {
      image: "vu-lan-trang-2017-27-600x450.jpg",
      title: "VU LAN TRẮNG 2017",
      description:
        "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
      key: 1,
    },
    {
      image: "vu-lan-trang-2016-23-768x432.jpg",
      title: "VU LAN TRẮNG 2016",
      description:
        "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
      key: 2,
    },
    {
      image: "cam-thuong-7.jpg",
      title: "HỖ TRỢ HOÀN CẢNH KHÓ KHĂN - CẢM THƯƠNG",
      description:
        "Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện[...]",
      key: 3,
    },
    {
      image: "vu-lan-trang-2017-27-600x450.jpg",
      title: "VU LAN TRẮNG 2017",
      description:
        "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
      key: 1,
    },
    {
      image: "vu-lan-trang-2016-23-768x432.jpg",
      title: "VU LAN TRẮNG 2016",
      description:
        "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
      key: 2,
    },
    {
      image: "cam-thuong-7.jpg",
      title: "HỖ TRỢ HOÀN CẢNH KHÓ KHĂN - CẢM THƯƠNG",
      description:
        "Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện[...]",
      key: 3,
    },
  ];
  let numberOfCardsPerRow = [];
  for (let i = 0; i < mainArray.length / 2; i++) {
    numberOfCardsPerRow.push("unique_" + i);
  }
  return (
    <>
      <Header />
      <Section title={"HOẠT ĐỘNG HỖ TRỢ HOÀN CẢNH"} />
      <ActivityBody cardInfos={{ mainArray, numberOfCardsPerRow }} />
      <Footer />
    </>
  );
}

export default HoTroHoanCanh;
