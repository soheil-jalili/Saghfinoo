import Image from "next/image";
import React from "react";
import MyAdvertisementTitle from "./MyAdvertisementTitle";
import Button from "@/components/module/Button/Button";

const NotAdvertisement: React.FC = () => {
  return (
    <>
      <MyAdvertisementTitle />
      <div className="flex  flex-col items-center justify-center">
        <Image
          src="/assets/images/user-panel/my-advertisement/not-found.png"
          width={359.9957580566406}
          height={343.0648498535156}
          alt="not-found-advertisement"
          className="mb-[31px] w-[212.0585174560547px] h-[202.07833862304688px] md:w-[359.9957580566406px] md:h-[343.0648498535156px]"
        />
        <p className="mb-2 sm:mb-1 font-bold-shabnam! text-xl sm:text-2xl text-gray-10">
          هنوز آگهی‌ای ثبت نکردید!
        </p>
        <p className="mb-8 text-sm md:text-lg lg:text-xl  text-gray-9 max-lg:px-4.5 text-center">
          با ثبت رایگان آگهی هر جا که هستید به‌سرعت ملک‌تان را معامله کنید
        </p>
        <Button
          className="w-39 h-8 sm:w-69.5 sm:h-10 mb-24 sm:mb-11"
          onClick={() => {}}
        >
          ثبت آگهی
        </Button>
      </div>
    </>
  );
};

export default NotAdvertisement;
