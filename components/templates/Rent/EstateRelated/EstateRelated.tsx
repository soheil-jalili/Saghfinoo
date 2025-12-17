"use client";
import React from "react";
import EstateCard from "../../Estate/EstateCard/EstateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const EstateRelated: React.FC = () => {
  return (
    <div className="w-full rounded-none sm:rounded-lg bg-gray-2 px-4 sm:px-6 lg:px-10 py-6 sm:mb-14">
      <h4 className="pb-4 text-xs sm:text-2xl text-gray-11 font-bold-shabnam!">
        دفاتر املاک مرتبط
      </h4>

      <EstateCard
        id={"1"}
        icon={`/assets/images/realestates/realestates-logo1.png`}
        ad_enable={2000}
        agent="مشاور املاک توسی"
        location="تهران، نیاوران، سه راه یاسر"
        rate="4/9"
        commentNumber={15}
        className="w-50 sm:w-72"
      />
    </div>
  );
};

export default EstateRelated;
