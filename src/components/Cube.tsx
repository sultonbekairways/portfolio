// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

const videoList = ["Workout", "Winter Sport", "Dota 2", "Fun"];

const Cube = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
      >
        {videoList.map((title, i) => (
          <SwiperSlide>
            <div className="video-wrapper">
              <h3 className="video-wrapper__title">{title}</h3>
              <video
                src={`/static/cube/video${i}.mp4`}
                poster={`/static/cube/video${i}.jpg`}
                className="video-wrapper__video"
                controls
              ></video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cube;
