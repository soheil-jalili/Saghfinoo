import React from "react";
import AcceptRule from "./AcceptRule";

type LoginBoxType = {
  signupHandler: () => void;
};

const LoginBox: React.FC<LoginBoxType> = ({ signupHandler }) => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h4 className="font-bold-shabnam! mb-[17px] text-2xl text-gray-12">
          ورود
        </h4>
        <p className="text-base text-gray-11 mb-0.5">به سقفینو خوش آمدید</p>
        <p className="text-gray-11 text-base mb-6">
          لطفا برای ورود شماره موبایل خود را وارد کنید
        </p>
        <input type="text" className="login__register__input" />
      </div>
      <AcceptRule size={'size-6'}  radius="rounded-lg" id="accept-rule-desktop"/>

      <button className="primary__btn mt-17" onClick={signupHandler}>
        ورود
      </button>
    </div>
  );
};

export default LoginBox;
