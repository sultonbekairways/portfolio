// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { quotesList } from "./quoteList";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Queotes() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className="mySwiper"
    >
      {quotesList.map(({ person, title }, i) => (
        <SwiperSlide key={`${person}`}>
          <div className="quotes-wrapper">
            <img
              src={`/static/quotes/${person}.jpg`}
              alt={person}
              loading="lazy"
            />
            <p>
              {title} <br /> - {person}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
