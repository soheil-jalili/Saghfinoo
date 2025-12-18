"use client";
import React from "react";
import TitleRent from "../TitleRent/TitleRent";
import RelatedLinkTitle from "../RelatedLinkTitle/RelatedLinkTitle";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const RelatedLink: React.FC = () => {
  return (
    <div className="w-150 rounded-none sm:rounded-lg bg-gray-2 px-4 sm:px-6 lg:px-10 py-6 sm:mb-14">
      <TitleRent title="لینک‌های مرتبط" />

      <Swiper
        className="mySwiper"
        spaceBetween={16}
        slidesPerView={3.5}
      >
        {Array.from({ length: 9 }).map((item) => {
          return (
            <SwiperSlide>
              <RelatedLinkTitle title="املاک در نارمک" href="/" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RelatedLink;
