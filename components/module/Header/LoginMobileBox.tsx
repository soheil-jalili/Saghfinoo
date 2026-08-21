import React from "react";
import AcceptRule from "./AcceptRule";
import Image from "next/image";
import CloseBtnMobile from "./CloseBtnMobile";
import { useForm } from "react-hook-form";
import LoginWithPhoneNumberType from "@/types/loginWithPhoneNumberTypes";

type LoginMobileBoxType = {
  closeLoginHandler: () => void;
  signupHandler: (data: LoginWithPhoneNumberType) => void;
};

const LoginMobileBox: React.FC<LoginMobileBoxType> = ({
  closeLoginHandler,
  signupHandler,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginWithPhoneNumberType>({
    defaultValues: {
      phone: "",
      acceptRule: false,
    },
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 pt-4">
        <CloseBtnMobile
          closeLoginHandler={closeLoginHandler}
          marginRight={true}
        />
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

        <input
          type="text"
          className="login__register__input"
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
          <p className="pt-2 pb-8 text-red-500 text-sm w-full text-right" dir="rtl">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="px-4">
        <AcceptRule
          size="size-4"
          radius="rounded-sm"
          id="accept-rule-mobile"
          register={register}
        />
        <button
          className="primary__btn mt-16"
          onClick={handleSubmit(signupHandler)}
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default LoginMobileBox;
