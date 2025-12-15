"use client";

import SearchInputCity from "@/components/module/SearchInputCity/SearchInputCity";
import React from "react";
import dynamic from "next/dynamic";

const SelectBox = dynamic(() => import("./SelectBoxFilter/SelectBox"), {
  ssr: false,
});



const FilterRent: React.FC = () => {
  return (
    <div className="mt-6 sm:mt-22 flex items-baseline justify-between">
      <div>
        <SelectBox />
      </div>
      <SearchInputCity />
    </div>
  );
};

export default FilterRent;
