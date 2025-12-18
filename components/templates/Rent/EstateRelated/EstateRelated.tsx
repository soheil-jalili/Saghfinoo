"use client";
import React from "react";
import EstateCard from "../../Estate/EstateCard/EstateCard";


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import TitleRent from "../TitleRent/TitleRent";

const EstateRelated: React.FC = () => {
  return (
    <div className="w-150 rounded-none sm:rounded-lg bg-gray-2 px-4 sm:px-6 lg:px-10 py-6 sm:mb-14">
      <TitleRent title=" دفاتر املاک مرتبط" />

      <Swiper
        className="mySwiper"
        spaceBetween={24}
        slidesPerView={1.7}
      >
        <SwiperSlide>
          <EstateCard
            id={"1"}
            icon={`/assets/images/realestates/realestates-logo1.png`}
            ad_enable={2000}
            agent="مشاور املاک توسی"
            location="تهران، نیاوران، سه راه یاسر"
            rate="4/9"
            commentNumber={15}
            className="mb-6 w-50 sm:w-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EstateCard
            id={"1"}
            icon={`/assets/images/realestates/realestates-logo1.png`}
            ad_enable={2000}
            agent="مشاور املاک توسی"
            location="تهران، نیاوران، سه راه یاسر"
            rate="4/9"
            commentNumber={15}
            className="mb-6 w-50 sm:w-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EstateCard
            id={"1"}
            icon={`/assets/images/realestates/realestates-logo1.png`}
            ad_enable={2000}
            agent="مشاور املاک توسی"
            location="تهران، نیاوران، سه راه یاسر"
            rate="4/9"
            commentNumber={15}
            className="mb-6 w-50 sm:w-72"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EstateRelated;
