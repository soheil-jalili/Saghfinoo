import NavSearch from "@/components/module/NavSearch";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero__section flex items-center flex-col justify-center text-center">
      <div className="flex flex-col gap-3 text-white mb-18 mt-31">
        <h1 className="text-[54px] font-bold font-bold-shabnam">
          سقفینو؛ سقفی برای همه
        </h1>
        <h3 className="text-[32px] font-bold font-bold-shabnam">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>

      <NavSearch />
    </section>
  );
};

export default HeroSection;
