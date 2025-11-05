import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="pt-12 md:pt-16 pb-14 md:pb-26 px-4 md:px-0 container">
      <div className="md:mt-30 border border-gray-5  mx-auto md:w-[90%] xl:w-full h-[595px] md:h-[654px] rounded-2xl flex flex-col justify-center items-center">
        <Image src={'/assets/images/not-found.png'} width={457} height={340} alt="Not Found" quality={100} className="mb-[27px] w-[271px] h-[202px] sm:w-[457px] sm:h-[340px]" />
        <div className="flex flex-col gap-2 md:gap-1 justify-center items-center px-1 md:px-0 mb-8 text-center">
          <h4 className="text-gray-12 text-xl md:text-2xl font-bold-shabnam!">
            صفحه‌ مورد نظر گم شده!
          </h4>
          <p className="text-gray-11 text-sm md:text-xl">
            املاک به‌سرعت در حال خرید و فروش و اجاره‌اند، از صفحه اصلی گزینه مورد نظر را جست‌وجو کنید.
          </p>
        </div>
        <Link href="/" className="primary__btn w-41! text-xs md:text-sm md:w-[393px]!">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
