import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./index.scss";

export const ImagesGalary = ({ images }: { images: string[] | undefined }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images?.map((image) => {
        return (
          <SwiperSlide>
            <img className="slide__img" src={image} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
