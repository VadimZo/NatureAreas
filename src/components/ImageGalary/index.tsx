import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./index.scss";
import { Image } from "../../constants";

export const ImagesGalary = ({ images }: { images: Image[] | undefined }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      {images?.map((image, i) => {
        const { url } = image;
        return (
          <SwiperSlide key={i}>
            <img
              style={{ aspectRatio: 87 / 61 }}
              className="slide__img"
              src={url}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
