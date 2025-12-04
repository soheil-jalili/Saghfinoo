import Button from "@/components/module/Button/Button";
import HousingCard from "@/components/module/HousingCard/HousingCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import Housing from "@/components/templates/Estate/Housing/Housing";
import BoxContainer from "@/components/templates/News/BoxContainer";
import MainNewsItem from "@/components/templates/News/MainNewsItem";
import Image from "next/image";
import React from "react";

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
        <Housing />
        <div className="flex flex-col gap-4">
          <HousingCard />
          <HousingCard />
        </div>
      </div>
    </div>
  );
};

export default News;
