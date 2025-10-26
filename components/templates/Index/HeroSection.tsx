import NavSearch from "@/components/module/NavSearch";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero__section flex items-center flex-col justify-center text-center px-4 sm:px-0">
      <div className="flex flex-col gap-3 text-white mb-10.5 sm:mb-18 mt-[37px] sm:mt-31">
        <h1 className="text-base sm:text-[54px] font-bold font-bold-shabnam">
          سقفینو؛ سقفی برای همه
        </h1>
        <h3 className="text-xs sm:text-[32px] font-bold font-bold-shabnam max-w-[214px] sm:max-w-none leading-[1.8]">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>

      <NavSearch />
    </section>
  );
};

export default HeroSection;
