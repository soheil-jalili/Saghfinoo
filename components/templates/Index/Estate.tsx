'use client'
import Title from "@/components/module/Title";
import React from "react";
import MainCard from "./MainCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Estate: React.FC = () => {
  return (
    <section className="container">
      <Title
        title="در سقفینو دنبال چه نوع ملکی هستید"
        className="mt-12 sm:mt-22 mb-5 sm:mb-8 px-4 md:px-0"
      />

      <Swiper
        className="mySwiper px-4!"
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          335: {
            slidesPerView: 1.3,
          },
          489: {
            slidesPerView: 1.6,
          },

          642: {
            slidesPerView: 1.9,
          },
          734: {
            slidesPerView: 2.2,
          },
          825: {
            slidesPerView: 2.5,
          },
          917: {
            slidesPerView: 2.8,
          },

          1011: {
            slidesPerView: 3.1,
          },

          1100: {
            slidesPerView: 3.4,
          },

          1195: {
            slidesPerView: 3.7,
          },

          1220: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <MainCard
            image="/assets/images/estate/image1.png"
            price="28.900"
            title="خانه مسکونی"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MainCard
            image="/assets/images/estate/image2.png"
            price="309.798"
            title="آپارتمان و برج"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MainCard
            image="/assets/images/estate/image3.png"
            price="946"
            title="ویلا"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MainCard
            image="/assets/images/estate/image4.png"
            price="27.339"
            title="تجاری و اداری"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Estate;
