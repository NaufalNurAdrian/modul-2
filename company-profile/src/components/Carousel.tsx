"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      className="w-full h-[50vh] md:h-[75vh] lg:h-screen" // Mengatur tinggi responsif
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* Slide dengan video */}
      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <video 
          src="/uniqlo-vidio.mp4" 
          autoPlay 
          loop 
          muted 
          className="object-cover w-full h-full" 
        />
      </SwiperSlide>

      {/* Slide dengan gambar */}
      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/uniqlo.jpg" alt="baju" fill className="object-cover" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/uniqlo2.jpg" alt="baju" fill className="object-cover" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/uniqlo3.jpg" alt="baju" fill className="object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
