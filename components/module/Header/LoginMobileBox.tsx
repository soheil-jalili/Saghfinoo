import React from "react";
import AcceptRule from "./AcceptRule";
import Image from "next/image";
import CloseBtnMobile from "./CloseBtnMobile";

type LoginMobileBoxType = {
  closeLoginHandler: () => void;
  signupHandler: () => void;
};

const LoginMobileBox: React.FC<LoginMobileBoxType> = ({
  closeLoginHandler,
  signupHandler,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 pt-4">
        <CloseBtnMobile closeLoginHandler={closeLoginHandler} />
        <Image
          src={"/assets/images/Logo.png"}
          width={140}
          height={56}
          alt="Saghfinoo Logo"
          className="mb-16"
        />

        <p className="text-gray-12 text-xl font-bold-shabnam! mb-[63px]">
          ورود / ثبت نام
        </p>
        <p className="text-sm text-gray-11 mb-10">
          لطفا برای ورود یا ثبت نام شماره موبایل خود را وارد کنید
        </p>

        <input type="text" className="login__register__input" />
      </div>

      <div className="px-4">
        <AcceptRule size="size-4" radius="rounded-sm" />
        <button className="primary__btn mt-16" onClick={signupHandler}>
          ورود
        </button>
      </div>
    </div>
  );
};

export default LoginMobileBox;
