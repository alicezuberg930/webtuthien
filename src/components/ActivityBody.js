import { importAll } from "../utils/import_img";
const images = importAll(
  require.context("../assets/activity_image", false, /\.(png|jpe?g|svg)$/)
);

export default function ActivityBody({ cardInfos }) {
  return (
    <div className="container">
      {cardInfos.numberOfCardsPerRow.map((cardNumber, index) => {
        return (
          <div className="row mt-5 mb-5" key={cardNumber}>
            {cardInfos.mainArray
              .slice(index * 2, index * 2 + 2)
              .map((main, mainIndex) => {
                return (
                  <div className="col-sm-12 col-lg-6" key={mainIndex}>
                    <div className="shadow-lg card w-100">
                      <img
                        style={{ objectFit: "cover", height: "16rem" }}
                        className="card-img-top"
                        src={images[main.image]}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{main.title}</h5>
                        {/* <p className="card-text">{chao.description}</p> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
