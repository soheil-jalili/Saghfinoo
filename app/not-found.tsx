import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="pt-[219px] pb-26 px-[109px]">
      <div className="border border-gray-5 w-full h-[654px] rounded-2xl">
        <Link href="/" className="primary__btn">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
