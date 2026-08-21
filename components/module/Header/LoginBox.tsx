"use client";
import React, { useEffect } from "react";
import AcceptRule from "./AcceptRule";
import { useForm } from "react-hook-form";
import LoginWithPhoneNumberType from "@/types/loginWithPhoneNumberTypes";

type LoginBoxType = {
  signupHandler: (data: LoginWithPhoneNumberType) => void;
  className?: string;
};

const LoginBox: React.FC<LoginBoxType> = ({ signupHandler, className }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginWithPhoneNumberType>({
    defaultValues: {
      phone: "",
      acceptRule: false,
    },
  });

  useEffect(() => {
    setFocus("phone");
  }, [setFocus]);

  return (
    <div className={`${className} flex flex-col h-full`}>
      <div className="flex flex-col items-center justify-center text-center grow">
        <h4 className="font-bold-shabnam! mb-[17px] text-2xl text-gray-12">
          ورود
        </h4>
        <p className="text-base text-gray-11 mb-0.5">به سقفینو خوش آمدید</p>
        <p className="text-gray-11 text-base mb-6">
          لطفا برای ورود شماره موبایل خود را وارد کنید
        </p>
        <input
          type="text"
          className="login__register__input text-left w-full"
          dir="ltr"
          {...register("phone", {
            required: {
              value: true,
              message: "شماره تلفن ضروری هستش",
            },
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره تلفن معتبر نیست (مثال: 09123456789)",
            },
          })}
        />
        {errors.phone && (
          <p className="pt-2 text-red-500 text-sm w-full text-right" dir="rtl">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="my-4">
        <AcceptRule
          size={"size-6"}
          radius="rounded-lg"
          id="accept-rule-desktop"
          register={register}
        />
      </div>

      <button
        className="primary__btn mt-auto w-full"
        onClick={handleSubmit(signupHandler)}
      >
        ورود
      </button>
    </div>
  );
};

export default LoginBox;
