import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ActivityBody from "../components/ActivityBody";

function ChaoTinhThuong() {
  let mainArray = [
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
  ];
  let numberOfCardsPerRow = [];
  for (let i = 0; i < mainArray.length / 2; i++) {
    numberOfCardsPerRow.push("unique_" + i);
  }
  return (
    <>
      <Header />
      <Section title={"HOẠT ĐỘNG CHÁO TÌNH THƯƠNG"} />
      <ActivityBody cardInfos={{ mainArray, numberOfCardsPerRow }} />
      <Footer />
    </>
  );
}

export default ChaoTinhThuong;
