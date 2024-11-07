"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Recomendation() {
  return (
    <div className="flex flex-col pb-10 pt-8 px-4 md:px-8 lg:px-20">
      <div className="flex justify-center p-6 text-xl md:text-2xl lg:text-3xl font-extrabold">
        Recomendation for you
      </div>
      <div>
        <Swiper
          spaceBetween={10} // Jarak antar slide
          slidesPerView={1} // Set default tampilan untuk layar kecil
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {[...Array(10)].map((_, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="card bg-base-100 w-full max-w-sm shadow-lg rounded-lg overflow-hidden">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-lg font-semibold">Shoes!</h2>
                  <p className="text-sm text-gray-600">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
