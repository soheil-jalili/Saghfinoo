"use client";

import Title from "@/components/module/Title";
import React from "react";
import MainCard from "./MainCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const News: React.FC = () => {
  return (
    <section className="container mb-14 lg:mb-26">
      <Title
        title="آخرین اخبار املاک را از سقفینو دنبال کنید"
        className="md:mt-26 mb-5 md:mb-8 px-4"
      />

      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".next__icon",
          }}
          modules={[Navigation]}
          className="mySwiper px-4!"
          spaceBetween={16}
          slidesPerView={1.3}
          breakpoints={{
            900: {
              spaceBetween: 24,
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <MainCard
              image="/assets/images/news/image1.png"
              title="رکود بازار مسکن؛فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان"
              titleClass="px-5"
              routeTitle="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainCard
              image="/assets/images/news/image2.png"
              title="خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های"
              titleClass="px-5"
              routeTitle="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainCard
              image="/assets/images/news/image3.png"
              title="بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی"
              titleClass="px-5"
              routeTitle="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainCard
              image="/assets/images/news/image4.png"
              title="شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد بازار مزایده شده است. "
              titleClass="px-5"
              routeTitle="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainCard
              image="/assets/images/news/image3.png"
              title="بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی"
              titleClass="px-5"
              routeTitle="/"
            />
          </SwiperSlide>
        </Swiper>

        <div className="hidden next__icon absolute top-1/2 -translate-y-1/2 left-0 w-16 h-16 rounded-full md:flex items-center justify-center bg-white shadow-lg cursor-pointer z-10 hover:bg-gray-100 transition">
          <svg
            width="11"
            height="22"
            viewBox="0 0 11 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.80625 21.6719C9.56875 21.6719 9.33125 21.5844 9.14375 21.3969L0.99375 13.2469C-0.33125 11.9219 -0.33125 9.74687 0.99375 8.42188L9.14375 0.271875C9.50625 -0.090625 10.1062 -0.090625 10.4688 0.271875C10.8313 0.634375 10.8313 1.23438 10.4688 1.59688L2.31875 9.74687C1.71875 10.3469 1.71875 11.3219 2.31875 11.9219L10.4688 20.0719C10.8313 20.4344 10.8313 21.0344 10.4688 21.3969C10.2812 21.5719 10.0438 21.6719 9.80625 21.6719Z"
              fill="#353535"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default News;
