import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ActivityBody from "../components/ActivityBody";

function TiepSucTriThuc() {
  let response = {
    category: "tiep-suc-tri-thuc",
    data: [
      {
        banner: "tiep-suc-tri-thuc-tre-600x450.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 1) NGÀY 23/7/2017",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
        key: 1,
      },
      {
        banner: "tiep-suc-tri-thuc-2017-9.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 2 - 13.08.2017)",
        description:
          "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
        key: 2,
      },
      {
        banner: "tiep-suc-tri-thuc-tre-600x450.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 1) NGÀY 23/7/2017",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
        key: 1,
      },
      {
        banner: "tiep-suc-tri-thuc-2017-9.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 2 - 13.08.2017)",
        description:
          "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
        key: 2,
      },
      {
        banner: "tiep-suc-tri-thuc-tre-600x450.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 1) NGÀY 23/7/2017",
        description:
          "THÔNG TIN CHƯƠNG TRÌNH Xin chân thành cảm ơn các nhà hảo tâm, các thành[...]",
        key: 1,
      },
      {
        banner: "tiep-suc-tri-thuc-2017-9.jpg",
        images: [""],
        title: "TIẾP SỨC TRI THỨC 2017 (ĐỢT 2 - 13.08.2017)",
        description:
          "Danh sách nhà hảo tâm  chương trình cháo tình thương bệnh viện 115 Hồ Chí[...]",
        key: 2,
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
      <Section title={"HOẠT ĐỘNG TIẾP SỨC TRI THỨC"} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
      <Footer />
    </>
  );
}

export default TiepSucTriThuc;
