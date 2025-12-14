import React from "react";
import HousingCard from "@/components/module/HousingCard/HousingCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import Housing from "@/components/templates/Estate/Housing/Housing";
import MainNewsItem from "@/components/templates/News/MainNewsItem";
import AdNews from "@/components/templates/News/AdNews";
import BuildCard from "@/components/module/BuildCard/BuildCard";
import Pagination from "@/components/module/Pagination/Pagination";

const News: React.FC = () => {
  return (
    <div className="container overflow-x-hidden">
      <TitlePage
        title="اخبار املاک"
        className="px-4 md:px-10.5 lg:px-[65px] xl:px-0"
      />

      <MainNewsItem />

      <TitlePage
        title="مسکن"
        className="mt-10 sm:mt-14! px-4 md:px-10.5 lg:px-[65px] xl:px-0"
      />

      <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap mb-10 sm:mb-14">
        <Housing
          className="md:flex-1 xl:flex-[2.7]"
          image="/assets/images/news/housing.png"
          imageHeight={375}
          title="خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های ویلایی ؟"
          description=" زلزله یکی از حوادث طبیعی است که نمی‌توان زمان و مکان وقوع زلزله آن
            را بصورت دقیق پیش‌بینی کرد. به همین دلیل اکثر افراد در هنگام زلزله
            نمی‌دانند که باید چه واکنشی از خود نشان دهند؛ حتی بسیاری از افراد تا
            چند دقیقه پس از وقوع زلزله هنوز نمی‌دانند که زلزله رخ داده است."
        />
        <div className="flex flex-col gap-4 md:flex-1 xl:flex-1 w-full">
          <HousingCard />
          <HousingCard />
        </div>
      </div>

      <TitlePage
        title="ساخت و ساز"
        className="mt-10 sm:mt-14! px-4 md:px-10.5 lg:px-[65px] xl:px-0 text-gray-12"
      />

      <div className="grid grid-cols-2 mb-22 gap-x-6 gap-y-4 px-4 md:px-10.5 lg:px-[65px] xl:px-0">
        <BuildCard />
        <BuildCard />
        <BuildCard />
        <BuildCard />
      </div>

      <AdNews />

      <TitlePage
        title="اجاره"
        className="mt-14 sm:mt-22 px-4 md:px-10.5 lg:px-[65px] xl:px-0 text-gray-12"
      />

      <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap mb-10 sm:mb-14">
        <Housing
          className="md:flex-1 xl:flex-[2.7]"
          image="/assets/images/news/key.png"
          title="چرا سرعت اجاره بهای مسکن در شهرهای کم جمعیت بیشتر از شهرهای  پر جمعیت است؟"
          description="تورم اجاره مسکن در شهرهای کوچک به شکل محسوس بیشتر از شهرهای بزرگ است؛ این فاصله یا بیش‌فعالی روند هزینه اجاره‌نشینی در شهرهای کم‌جمعیت مختص یکی دو سال اخیر نیست، اما در عصر جهش قیمت، چشمگیرتر شده است."
          lineClampDescriptionSm={null}
          widthTitle={"200"}
          imageHeight={563}
          paddingBottom={"8"}
        />
        <div className="flex flex-col gap-4 md:flex-1 xl:flex-1 w-full">
          <HousingCard />
          <HousingCard />
          <HousingCard />
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default News;
