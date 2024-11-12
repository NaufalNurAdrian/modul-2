"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Tambahkan ini untuk styling pagination
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      className="w-screen h-[50vh] md:h-[75vh] lg:h-screen" // Mengatur tinggi responsif
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true // Optional untuk tampilan pagination yang lebih dinamis
      }}
      onSlideChange={() => console.log("slide change")}
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
