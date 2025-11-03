import React from "react";
import AcceptCodeTimer from "./AcceptCodeTimer";
import LoginInput from "./LoginInput";

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

        <LoginInput />

      </div>

      <AcceptCodeTimer fontSize="text-sm" />

      <button className="primary__btn mb-8" onClick={acceptCodeHandler}>
        تائید
      </button>
    </div>
  );
};

export default AcceptCode;
