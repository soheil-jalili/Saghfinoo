import React from "react";
import AcceptCodeTimer from "./AcceptCodeTimer";

const AcceptCode: React.FC = () => {
  const acceptCodeHandler = () => { };
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h4 className="font-bold-shabnam! mb-10 text-2xl text-gray-12">
          کد تائید
        </h4>
        <p className="text-base text-gray-11 mb-1">
          کد ارسال‌شده به شماره ۰۹۱۲۳۳۳۴۴۵۵ را وارد کنید
        </p>
        <button className="text-gray-9 text-base cursor-pointer mb-6">
          ویرایش شماره موبایل
        </button>

        <div className="flex gap-5 mb-4 *:rounded-lg *:outline-0 *:text-center *:text-[28px] *:text-gray-11">
          <input
            type="number"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]"
          />

          <input
            type="number"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]"
          />

          <input
            type="number"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]"
          />

          <input
            type="number"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]"
          />

          <input
            type="number"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]"
          />
        </div>
      </div>

      <AcceptCodeTimer fontSize="text-sm" />

      <button className="primary__btn mb-8" onClick={acceptCodeHandler}>
        تائید
      </button>
    </div>
  );
};

export default AcceptCode;
