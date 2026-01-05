"use client";

import SearchInputCity from "@/components/module/SearchInputCity/SearchInputCity";
import React from "react";
import dynamic from "next/dynamic";

const SelectBox = dynamic(() => import("../SelectBoxFilter/SelectBox"), {
  ssr: false,
});

const FilterRent: React.FC = () => {
  return (
    <div className="mt-6 lg:mt-18 xl:mt-22 hidden md:flex items-baseline justify-between lg:px-[57px] xl:px-0 gap-x-2">
      <div>
        <SelectBox />
      </div>
      <SearchInputCity />
    </div>
  );
};

export default FilterRent;
