"use client";

import React, { useState } from "react";
import LoginBox from "./LoginBox";

const Login: React.FC = () => {
  const [openCode, setCodeOpen] = useState<boolean>(false);
  const signupHandler = () => {
    setCodeOpen(true);
  };
  return (
    <div className="z-50 bg-white w-150 h-103 rounded-2xl p-8">
      {openCode ? (
        <div>
          <h4 className="font-bold-shabnam! mb-10 text-center text-2xl text-gray-12">
            کد تائید
          </h4>
          <button className="primary__btn">تائید</button>
        </div>
      ) : (
        <LoginBox signupHandler={signupHandler} />
      )}
    </div>
  );
};

export default Login;
