"use client";

import React, { useState } from "react";
import LoginMobileBox from "./LoginMobileBox";
import AcceptCodeMobile from "./AcceptCodeMobile";

type LoginType = {
  showLoginModel: boolean;
  closeLoginHandler: () => void;
};

const LoginMobile: React.FC<LoginType> = ({
  closeLoginHandler,
  showLoginModel,
}) => {
  const [openCode, setCodeOpen] = useState<boolean>(false);
  const signupHandler = () => {
    setCodeOpen(true);
  };

  return (
    <div
      className={`md:hidden fixed transition-all bg-white inset-0 w-full ${
        showLoginModel ? "right-0" : "right-full"
      }`}
    >
      {openCode ? (
        <AcceptCodeMobile />
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
