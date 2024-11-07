'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Data } from "./data";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselProducts() {
  return (
    <div className="w-screen h-[70vh] px-10 py-20">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }} // Set pagination ke elemen di luar Swiper
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {Data.map((product, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <Link href={product.href} className="group flex flex-col items-center gap-4 w-full h-full" target="_blank">
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <span className="text-lg font-medium text-gray-800 text-center mt-4 transition duration-300 ease-in-out group-hover:border-b-2 group-hover:border-red-500 group-hover:text-red-500">
                {product.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination custom di luar Swiper */}
      <div className="custom-pagination flex justify-center mt-8"></div>
    </div>
  );
}
