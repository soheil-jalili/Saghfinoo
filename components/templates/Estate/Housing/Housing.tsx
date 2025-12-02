import Badge from "@/components/module/Badge/Badge";
import Image from "next/image";
import React from "react";

const Housing: React.FC = () => {
  return (
    <div className="mx-4 lg:mx-[65px] md:mx-10.5 xl:mx-0">
      <section
        className="w-full border border-gray-5 rounded-2xl pb-7.5 sm:pb-[21px]"
      >
        <Image
          src={"/assets/images/news/housing.png"}
          width={830}
          height={375}
          alt="Housing"
          className="w-full overflow-hidden rounded-t-2xl"
        />
        <div className="mx-2 sm:mx-4">
          <Badge className="mt-[19px] sm:mt-[9px] w-[101px] h-5.5 sm:w-[115px] sm:h-7.5 mb-2">
            <p className="p-1">زمان مطالعه: ۱۰ دقیقه</p>
          </Badge>
          <h4 className="text-gray-11 text-xs sm:text-2xl font-bold-shabnam! mb-2">
            خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های
            کم‌ارتفاع و یا خانه‌های ویلایی ؟
          </h4>
          <p className="text-gray-10 text-[10px] sm:text-lg w-full line-clamp-2 sm:line-clamp-1  overflow-hidden">
            زلزله یکی از حوادث طبیعی است که نمی‌توان زمان و مکان وقوع زلزله آن
            را بصورت دقیق پیش‌بینی کرد. به همین دلیل اکثر افراد در هنگام زلزله
            نمی‌دانند که باید چه واکنشی از خود نشان دهند؛ حتی بسیاری از افراد تا
            چند دقیقه پس از وقوع زلزله هنوز نمی‌دانند که زلزله رخ داده است.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Housing;
