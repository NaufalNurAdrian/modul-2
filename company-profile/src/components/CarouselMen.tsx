"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function CarouselMan() {
    return(
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
          src="/men1.mp4" 
          autoPlay 
          loop 
          muted 
          className="object-cover w-full h-full" 
        />
        <div className="flex flex-col gap-5 absolute top-2/3 left-28 text-white text-xl md:text-3xl">
           <h1 className="text-start ">Hoodie & sweetshirt</h1>
           <p className="text-lg">keeps you warm with easy movement</p>
        </div>
      </SwiperSlide>

      {/* Slide dengan gambar */}
      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/men2.jpg" alt="baju" fill className="object-cover" />
        <div className="flex flex-col gap-5 absolute top-2/3 left-28 text-white text-xl md:text-3xl">
           <h1 className="text-start ">Hoodie & sweetshirt</h1>
           <p className="text-lg">keeps you warm with easy movement</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/men3.jpg" alt="baju" fill className="object-cover" />
        <div className="flex flex-col gap-5 absolute top-2/3 left-28 text-white text-xl md:text-3xl">
           <h1 className="text-start ">Hoodie & sweetshirt</h1>
           <p className="text-lg">keeps you warm with easy movement</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/men4.jpg" alt="baju" fill className="object-cover" />
        <div className="flex flex-col gap-5 absolute top-2/3 left-28 text-white text-xl md:text-3xl">
           <h1 className="text-start ">Hoodie & sweetshirt</h1>
           <p className="text-lg">keeps you warm with easy movement</p>
        </div>
      </SwiperSlide>
    </Swiper>
    )
}