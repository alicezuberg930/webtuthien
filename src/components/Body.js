import { importAll } from "../utils/import_img";
import "../styles/colors.css";
const images = importAll(
  require.context("../assets/preview", false, /\.(png|jpe?g|svg)$/)
);

export default function Body() {
  return (
    <div className="container">
      <div className="pt-5 pb-5 row justify-content-center dotted-horizontal-divider">
        <div className="col-lg-6 col-md-12">
          <img src={images["preview_1.jpg"]} width={550} height={300} />
        </div>
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          <h3 className="main-theme font-weight-bold">Cháo Tình Thương</h3>
          <span>
            Chủ nhật tuần thứ 3 hàng tháng, nhóm ánh sáng thực hiện chương trình
            cháo tình thương, cháo được phát tại 4 bệnh viện ở TP.HCM: Nhi Đồng
            1, Bình Dân, Chợ Rẫy, 115...
          </span>
        </div>
      </div>
      <div className="pt-5 pb-5 row justify-content-center dotted-horizontal-divider">
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          <h3 className="main-theme font-weight-bold">Phát Quà Thường Niên</h3>
          <span>
            Hàng năm Nhóm ánh sáng thực hiện những chương trình phát quà cho các
            hoàn cảnh khó khăn tại các tỉnh miền tây và miền đông nam bộ
          </span>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={images["preview_2.jpg"]} width={550} height={300} />
        </div>
      </div>
      <div className="pt-5 pb-5 row justify-content-center dotted-horizontal-divider">
        <div className="col-lg-6 col-md-12">
          <img src={images["preview_3.jpg"]} width={550} height={300} />
        </div>
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          <h3 className="main-theme font-weight-bold">Bước Tiếp Cùng Nhau</h3>
          <span>
            Hỗ trợ trẻ em có nguy cơ ngưng việc học và cùng hỗ trợ hoàn cảnh lẻ
            không còn khả năng lao động
          </span>
        </div>
      </div>
      <div className="pt-5 pb-5 row justify-content-center dotted-horizontal-divider">
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          <h3 className="main-theme font-weight-bold">Phát quà thường niên</h3>
          <span>
            Hàng năm Nhóm ánh sáng thực hiện những chương trình phát quà cho các
            hoàn cảnh khó khăn tại các tỉnh miền tây và miền đông nam bộ
          </span>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={images["preview_4.jpg"]} width={550} height={300} />
        </div>
      </div>
    </div>
  );
}
