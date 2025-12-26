"use client";

import AcceptCode from "@/components/module/Header/AcceptCode";
import React from "react";

const Verify: React.FC = () => {
  return (
    <>

      <div className="sm:h-screen flex items-center justify-center sm:bg-gray-3">
        <AcceptCode className="sm:bg-white w-full sm:w-150 sm:h-102 p-4 sm:p-8 sm:rounded-2xl flex items-center flex-col" />
      </div>
    </>
  );
};

export default Verify;
