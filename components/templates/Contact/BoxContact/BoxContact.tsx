import Link from "next/link";
import React from "react";

const BoxContact: React.FC = () => {
  return (
    <div className="border border-primary-tint-4 flex items-stretch sm:w-[439px] sm:h-55 mx-auto my-15.5">
      <div className="flex items-center gap-2 flex-col flex-1 text-center justify-center">
        <p className="text-gray-11 text-xs sm:text-base">دفتر مرکزی سقفینو</p>
        <p className="text-gray-9 text-[10px] sm:text-sm">
          شهرک گلستان، خیابان هوانیروز، ساختمان اداری کاج، طبقه ۱
        </p>
      </div>

      <div className="bg-primary-shade-1 flex items-center  justify-center flex-col flex-1">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-6"
        >
          <path
            d="M19.9969 23.6167C16.4469 23.6167 13.5469 20.7333 13.5469 17.1667C13.5469 13.6 16.4469 10.7333 19.9969 10.7333C23.5469 10.7333 26.4469 13.6167 26.4469 17.1833C26.4469 20.75 23.5469 23.6167 19.9969 23.6167ZM19.9969 13.2333C17.8302 13.2333 16.0469 15 16.0469 17.1833C16.0469 19.3667 17.8135 21.1333 19.9969 21.1333C22.1802 21.1333 23.9469 19.3667 23.9469 17.1833C23.9469 15 22.1635 13.2333 19.9969 13.2333Z"
            fill="white"
          />
          <path
            d="M20.0027 37.9333C17.5361 37.9333 15.0527 37 13.1194 35.15C8.20273 30.4166 2.7694 22.8666 4.8194 13.8833C6.6694 5.73331 13.7861 2.08331 20.0027 2.08331C20.0027 2.08331 20.0027 2.08331 20.0194 2.08331C26.2361 2.08331 33.3527 5.73331 35.2027 13.9C37.2361 22.8833 31.8027 30.4166 26.8861 35.15C24.9527 37 22.4694 37.9333 20.0027 37.9333ZM20.0027 4.58331C15.1527 4.58331 8.9194 7.16665 7.2694 14.4333C5.4694 22.2833 10.4027 29.05 14.8694 33.3333C17.7527 36.1166 22.2694 36.1166 25.1527 33.3333C29.6027 29.05 34.5361 22.2833 32.7694 14.4333C31.1027 7.16665 24.8527 4.58331 20.0027 4.58331Z"
            fill="white"
          />
        </svg>

        <Link href={"/"} className="text-white text-xs sm:text-base">
          جست‌وجو با گوگل مَپ
        </Link>
      </div>
    </div>
  );
};

export default BoxContact;
