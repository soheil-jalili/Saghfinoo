"use client";

import React, { useState } from "react";
import LoginMobileBox from "./LoginMobileBox";
import AcceptCodeMobile from "./AcceptCodeMobile";
import LoginWithPhoneNumberType from "@/types/loginWithPhoneNumberTypes";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { appDispatch } from "@/redux/store";
import { setPhone } from "@/redux/slices/loginWithPhoneNumberSlice";

type LoginMobileType = {
  showLoginModel: boolean;
  closeLoginHandler: () => void;
};

const LoginMobile: React.FC<LoginMobileType> = ({
  closeLoginHandler,
  showLoginModel,
}) => {
  const [openCode, setCodeOpen] = useState<boolean>(false);
  const dispatch = useDispatch<appDispatch>();
  const signupHandler = (data: LoginWithPhoneNumberType) => {
    if (data.acceptRule === false) {
      toast.error("قبول قوانین الزامی است");
      return;
    }

    setCodeOpen(true);
    dispatch(setPhone(data.phone));
  };

  return (
    <div
      className={`md:hidden fixed transition-all bg-white inset-0 w-full ${
        showLoginModel ? "right-0" : "right-full"
      }`}
    >
      {openCode ? (
        <AcceptCodeMobile closeLoginHandler={closeLoginHandler} />
      ) : (
        <LoginMobileBox
          closeLoginHandler={closeLoginHandler}
          signupHandler={signupHandler}
        />
      )}
    </div>
  );
};

export default LoginMobile;
