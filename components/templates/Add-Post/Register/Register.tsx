"use client";

import LoginBox from "@/components/module/Header/LoginBox";
import LogoCloseBtn from "@/components/module/LogoCloseBtn/LogoCloseBtn";
import Image from "next/image";
import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <LogoCloseBtn />

      <div className="sm:h-screen flex items-center justify-center sm:bg-gray-3">
        <LoginBox
          signupHandler={() => {}}
          className="w-150 sm:bg-white rounded-2xl px-8 pb-8 pt-[31px]"
        />
      </div>
    </>
  );
};

export default Register;
