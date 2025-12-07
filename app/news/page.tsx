import React from "react";
import HousingCard from "@/components/module/HousingCard/HousingCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import Housing from "@/components/templates/Estate/Housing/Housing";
import MainNewsItem from "@/components/templates/News/MainNewsItem";
import AdNews from "@/components/templates/News/AdNews";
import BuildCard from "@/components/module/BuildCard/BuildCard";

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
        className="mt-10 sm:mt-14! px-4  md:px-10.5 lg:px-[65px] xl:px-0"
      />

      <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap mb-10 sm:mb-14">
        <Housing className="md:flex-1 xl:flex-[2.7]" />
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
    </div>
  );
};

export default News;
