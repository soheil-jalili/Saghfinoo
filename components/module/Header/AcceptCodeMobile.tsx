import React from "react";
import CloseBtnMobile from "./CloseBtnMobile";

const AcceptCodeMobile: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 pt-4">
      <CloseBtnMobile closeLoginHandler={() => false} />
    </div>
  );
};

export default AcceptCodeMobile;
