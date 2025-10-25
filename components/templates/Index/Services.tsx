import React from "react";
import ServiceItem from "./ServiceItem";

const Services: React.FC = () => {
  return (
    <section className="container mt-22">
      <div className="text-center mb-10">
        <p className="text-gray-12 text-[32px] font-medium font-medium-shabnam">
          همه به شما مشاوره می‌دهند!
        </p>
        <p className="text-gray-11 text-2xl">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </p>
      </div>

      <div className="grid grid-cols-[repeat(3,184px)] justify-center gap-32">
        <ServiceItem
          image="/assets/images/services/image1.png"
          title="امکان خرید و اجاره ملک در اکثر نقاط کشور"
        />
        <ServiceItem
          image="/assets/images/services/image2.png"
          title="مقایسه و بررسی صدها ملک براحتی و در کمترین زمان "
        />
        <ServiceItem
          image="/assets/images/services/image3.png"
          title="ارتباط آسان با برترین املاک و مشاورین کشور"
        />
      </div>
    </section>
  );
};

export default Services;
