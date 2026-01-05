"use client";

import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";

type OptionType = {
  value: string | number;
  label: string;
};

const regionOptions: OptionType[] = [
  { value: "tehran", label: "تهران" },
  { value: "tabriz", label: "تبریز" },
  { value: "shiraz", label: "شیراز" },
];

const typeOptions: OptionType[] = [
  { value: "apartment", label: "آپارتمان" },
  { value: "villa", label: "ویلایی" },
  { value: "land", label: "زمین" },
  { value: "office", label: "اداری" },
];

const priceOptions: OptionType[] = [
  { value: "0-1B", label: "تا ۱ میلیارد" },
  { value: "1B-3B", label: "۱ تا ۳ میلیارد" },
  { value: "3B-6B", label: "۳ تا ۶ میلیارد" },
  { value: "6B+", label: "بیشتر از ۶ میلیارد" },
];

const areaOptions: OptionType[] = [
  { value: "0-50", label: "۰–۵۰ متر" },
  { value: "50-100", label: "۵۰–۱۰۰ متر" },
  { value: "100-150", label: "۱۰۰–۱۵۰ متر" },
  { value: "150+", label: "بیشتر از ۱۵۰ متر" },
];

const moreFiltersOptions: OptionType[] = [
  { value: "parking", label: "پارکینگ" },
  { value: "elevator", label: "آسانسور" },
  { value: "storage", label: "انباری" },
  { value: "balcony", label: "بالکن" },
];

const singleStyles: StylesConfig<OptionType, false> = {
  control: (base) => ({
    ...base,
    minHeight: 48,
    borderRadius: 8,
    direction: "rtl",
  }),
  menu: (base) => ({
    ...base,
    direction: "rtl",
  }),
};

const multiStyles: StylesConfig<OptionType, true> = {
  control: (base) => ({
    ...base,
    minHeight: 48,
    borderRadius: 8,
    direction: "rtl",
  }),
  menu: (base) => ({
    ...base,
    direction: "rtl",
  }),
};

const SelectBox: React.FC = () => {
  const [region, setRegion] = useState<OptionType | null>(null);
  const [type, setType] = useState<OptionType | null>(null);
  const [price, setPrice] = useState<OptionType | null>(null);
  const [area, setArea] = useState<OptionType | null>(null);

  const [more, setMore] = useState<readonly OptionType[]>([]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select<OptionType, false>
        styles={singleStyles}
        value={region}
        onChange={setRegion}
        options={regionOptions}
        placeholder="منطقه"
        components={{ IndicatorSeparator: () => null }}
      />

      <Select<OptionType, false>
        styles={singleStyles}
        value={type}
        onChange={setType}
        options={typeOptions}
        placeholder="نوع ملک"
        components={{ IndicatorSeparator: () => null }}
      />

      <Select<OptionType, false>
        styles={singleStyles}
        value={price}
        onChange={setPrice}
        options={priceOptions}
        placeholder="قیمت"
        components={{ IndicatorSeparator: () => null }}
      />

      <Select<OptionType, false>
        styles={singleStyles}
        value={area}
        onChange={setArea}
        options={areaOptions}
        placeholder="متراژ"
        components={{ IndicatorSeparator: () => null }}
      />

      <Select<OptionType, true>
        styles={multiStyles}
        value={more}
        onChange={setMore}
        options={moreFiltersOptions}
        isMulti
        closeMenuOnSelect={false}
        placeholder="فیلترهای بیشتر"
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
};

export default SelectBox;
