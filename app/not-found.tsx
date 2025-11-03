import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="pt-16 pb-26 container">
      <div className="border border-gray-5 w-full h-[654px] rounded-2xl flex flex-col justify-center items-center">
        <Image src={'/assets/images/not-found.png'} width={457} height={340} alt="Not Found" quality={100} className="mb-[27px]" />
        <div className="flex flex-col gap-1 justify-center items-center mb-8">
          <h4 className="text-gray-12 text-2xl font-bold-shabnam!">
            صفحه‌ مورد نظر گم شده!
          </h4>
          <p className="text-gray-11 text-xl">
            املاک به‌سرعت در حال خرید و فروش و اجاره‌اند، از صفحه اصلی گزینه مورد نظر را جست‌وجو کنید.
          </p>
        </div>

        <Link href="/" className="primary__btn w-[393px]!">
          بازگشت به صفحه اصلی
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
