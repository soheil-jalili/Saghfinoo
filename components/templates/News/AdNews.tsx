import Image from "next/image";
import React from "react";

const AdNews: React.FC = () => {
  return (
    <section
      className="bg-gray-2 rounded-2xl flex flex-col-reverse md:flex-row sm:items-center justify-between sm:px-8 px-4 gap-8 py-[25.5px] mx-4 md:mx-10.5 lg:mx-[65px] xl:mx-0
    "
    >
      <div>
        <h3 className="text-gray-12 text-sm md:text-base lg:text-[32px] font-bold-shabnam! mb-4 sm:mb-6">
          در سقفینو همیشه خانه‌ای منتظر شماست
        </h3>
        <p className="text-xs mb-3 sm:mb-16 text-gray-11 md:text-base lg:text-2xl leading-[140%] font-medium-shabnam! w-full xl:w-201.5">
          چه به‌دنبال پیدا کردن یک خانه دلنشین هستید و یا مدیر آژانس املاک و یا
          یک مشاور مستقل هستید، ما همیشه کنار شما هستیم.
        </p>
      </div>
      <Image
        src={"/assets/images/news/illustration.png"}
        alt="Ad Image"
        width={290}
        height={318}
        className="w-[177px] h-[177px] sm:w-72.5 sm:h-79.5 mx-auto"
      />
    </section>
  );
};

export default AdNews;
