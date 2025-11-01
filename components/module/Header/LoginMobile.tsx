"use client";

import React, { useState } from "react";
import LoginMobileBox from "./LoginMobileBox";
import AcceptCodeMobile from "./AcceptCodeMobile";

type LoginMobileType = {
  showLoginModel: boolean;
  closeLoginHandler: () => void;
};

const LoginMobile: React.FC<LoginMobileType> = ({
  closeLoginHandler,
  showLoginModel,
}) => {
  const [openCode, setCodeOpen] = useState<boolean>(false);
  const signupHandler = () => {
    setCodeOpen(true);
  };

  return (
    <div
      className={`md:hidden fixed transition-all bg-white inset-0 w-full ${showLoginModel ? "right-0" : "right-full"
        }`}
    >
      {openCode ? (
        <AcceptCodeMobile
          closeLoginHandler={closeLoginHandler}
        />
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
