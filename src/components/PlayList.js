import React from "react";

function IFrameItems(index, videos) {
  return (
    <div className="d-flex justify-content-center">
      {videos.slice(index * 3, index * 3 + 3).map((video) => {
        const VideoID = "https://www.youtube-nocookie.com/embed/" + video;
        return (
          <div className="mr-3">
            <iframe
              title={video}
              key={video}
              width={330}
              height={200}
              src={VideoID}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: "0px" }}
            />
          </div>
        );
      })}
    </div>
  );
}

const PlayList = ({ id, videos }) => {
  let VideoArray = [];
  for (let i = 0; i < videos.length / 3; i++) {
    VideoArray.push(i);
  }
  return (
    <div className="container mt-4 mb-4">
      <div id={id} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {VideoArray.map((video, index) => {
            return (
              <>
                {index == 0 ? (
                  <div className="carousel-item active">
                    {IFrameItems(index, videos)}
                  </div>
                ) : (
                  <div className="carousel-item">
                    {IFrameItems(index, videos)}
                  </div>
                )}
              </>
            );
          })}
          <a
            className="carousel-control-prev main-theme"
            href={"#" + id}
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={"#" + id}
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
