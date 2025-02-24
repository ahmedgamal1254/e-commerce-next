"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ الطريقة الحديثة
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = () => {
  return (
    <div className="reviews">
        <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className="p-6 bg-gray-200 text-center">⭐ Review 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-6 bg-gray-200 text-center">⭐ Review 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-6 bg-gray-200 text-center">⭐ Review 3</div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default MySwiper;
