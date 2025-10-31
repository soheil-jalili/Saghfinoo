"use client";
import React from "react";
import ServiceItem from "./ServiceItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Services: React.FC = () => {
  return (
    <section className="container my-12 md:mt-22">
      <div className="text-center mb-5 md:mb-10">
        <p className="text-gray-12 text-sm md:text-[32px] font-medium-shabnam!">
          همه به شما مشاوره می‌دهند!
        </p>
        <p className="text-gray-11 text-xs md:text-2xl">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </p>
      </div>

      <Swiper
        id="services__swiper"
        className="mySwiper px-4!"
        spaceBetween={128}
        slidesPerView={1}
        breakpoints={{
          400: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },

          500: {
            slidesPerView: 2,
            spaceBetween: 16,
          },


          900: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },

          1000: {
            slidesPerView: 3,
            spaceBetween: 128

          },
        }}
      >
        <SwiperSlide>
          <ServiceItem
            image="/assets/images/services/image1.png"
            title="امکان خرید و اجاره ملک در اکثر نقاط کشور"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceItem
            image="/assets/images/services/image2.png"
            title="مقایسه و بررسی صدها ملک براحتی و در کمترین زمان "
          />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceItem
            image="/assets/images/services/image3.png"
            title="ارتباط آسان با برترین املاک و مشاورین کشور"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services;
