"use client";

import React, { useRef, useState } from "react";
import LoginBox from "./LoginBox";
import AcceptCode from "./AcceptCode";
import LoginWithPhoneNumberType from "@/types/loginWithPhoneNumberTypes";
import { setPhone } from "@/redux/slices/loginWithPhoneNumberSlice";
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, appState } from "@/redux/store";
import { toast } from "sonner";

const Login: React.FC = () => {
  const { phone } = useSelector(
    (state: appState) => state.loginWithPhoneNumber,
  );

  const [openCode, setCodeOpen] = useState<boolean>(() =>
    phone ? true : false,
  );

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
    <div className="z-50 bg-white w-150 h-103 rounded-2xl p-8">
      {openCode ? (
        <AcceptCode setCodeOpen={setCodeOpen} />
      ) : (
        <LoginBox signupHandler={signupHandler} />
      )}
    </div>
  );
};

export default Login;
