"use client";

import React, { useRef, useState } from "react";
import LoginBox from "./LoginBox";
import { GoClock } from "react-icons/go";
import AcceptCode from "./AcceptCode";

const Login: React.FC = () => {
  const [openCode, setCodeOpen] = useState<boolean>(false);
  const signupHandler = () => {
    setCodeOpen(true);
  };


  return (
    <div className="z-50 bg-white w-150 h-103 rounded-2xl p-8">
      {openCode ? <AcceptCode /> : <LoginBox signupHandler={signupHandler} />}
    </div>
  );
};

export default Login;
