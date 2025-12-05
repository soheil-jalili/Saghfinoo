import React from "react";
import HousingCard from "@/components/module/HousingCard/HousingCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import Housing from "@/components/templates/Estate/Housing/Housing";
import MainNewsItem from "@/components/templates/News/MainNewsItem";
import AdNews from "@/components/templates/News/AdNews";

const News: React.FC = () => {
  return (
    <div className="container">
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
        <div className="flex flex-col gap-4 md:flex-1 xl:flex-1">
          <HousingCard />
          <HousingCard />
        </div>
      </div>
      <TitlePage
        title="ساخت و ساز"
        className="mt-10 sm:mt-14! px-4  md:px-10.5 lg:px-[65px] xl:px-0 text-gray-12"
      />

      <AdNews />

    </div>
  );
};

export default News;
