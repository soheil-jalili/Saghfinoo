import Button from "@/components/module/Button/Button";
import Image from "next/image";
import React from "react";

const NotFoundMySaveAdvertisement: React.FC = () => {
  return (
    <>
      <Image
        alt="not-found"
        src={"/assets/images/user-panel/save-advertisement/rent-not-found.png"}
        width={457}
        height={339}
        className="mb-[47px] sm:mb-7 w-68 h-50.5 sm:w-[457px] sm:h-[339px]"
      />

      <h4 className="text-gray-10 text-xl sm:text-2xl mb-1 sm:mb-2 font-bold-shabnam! text-center">
        هنوز آگهی‌ای ذخیره نکردید!
      </h4>
      <p className="text-gray-9 text-sm sm:text-xl mb-6 sm:mb-8 text-center max-sm:px-1">
        صفحه املاک اجاره‌ای سقفینو را ببینید و از میان آن‌ها آگهی‌های دلخواه را
        ذخیره کنید
      </p>

      <Button className="w-39 h-8 sm:w-71.5 sm:h-10 mb-25.5 sm:mb-9.5">
        املاک اجاره‌ای
      </Button>
    </>
  );
};

export default NotFoundMySaveAdvertisement;
