import React from "react";
import CloseBtnMobile from "./CloseBtnMobile";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import AcceptCodeTimer from "./AcceptCodeTimer";
import LoginInputMobile from "./LoginInputMobile";

type AcceptCodeMobileType = {
  closeLoginHandler: () => void
}

const AcceptCodeMobile: React.FC<AcceptCodeMobileType> = ({ closeLoginHandler }) => {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-center items-center pt-4">
        <div className="flex justify-between items-start w-full mb-4">
          <button className="cursor-pointer">
            <GoArrowRight onClick={() => { }} className="w-6 h-6" />
          </button>
          <CloseBtnMobile closeLoginHandler={closeLoginHandler} marginRight={false} />
        </div>

        <Image src={'/assets/images/Logo.png'} alt="Logo Saghfinoo" width={80} height={39} className="mb-16" />

        <p className="text-gray-12 font-bold-shabnam! text-xl mb-12">کد تائید</p>

        <div className="text-center mb-8">
          <p className="text-gray-11 text-sm mb-1">
            کد ارسال‌شده به شماره ۰۹۱۲۳۳۳۴۴۵۵ را وارد کنید
          </p>
          <button className="text-gray-9 text-sm cursor-pointer">
            ویرایش شماره موبایل
          </button>
        </div>

        <LoginInputMobile />

      </div>
      <AcceptCodeTimer fontSize="text-[10px]" />
      <button className="primary__btn">تائید</button>
    </div>
  );
};

export default AcceptCodeMobile;
