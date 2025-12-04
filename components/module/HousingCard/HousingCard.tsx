import React from "react";
import Badge from "../Badge/Badge";
import Image from "next/image";

const HousingCard: React.FC = () => {
  return (
    <div className="mx-4 lg:mx-[65px] md:mx-10.5 xl:mx-0">
      <article className="border border-gray-5 rounded-2xl overflow-x-hidden pb-[15px]">
        <Image
          src={"/assets/images/news/housing-card.png"}
          width={377}
          height={143}
          alt="Housing Card"
          className="w-full h-[143px]"
        />
        <div className="px-2">
          <Badge className="w-[97px] h-5.5 sm:w-[115px] sm:h-7.5 mb-1.5 mt-1 sm:mt-6">
            <p className="p-1">زمان مطالعه: ۶ دقیقه</p>
          </Badge>
          <h5 className="text-gray-11 text-xs sm:text-xl text-ellipsis line-clamp-2 pl-0! font-bold-shabnam! leading-[140%]">
            بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و
            متریال اولیه و مصالح خارجی
          </h5>
        </div>
      </article>
    </div>
  );
};

export default HousingCard;
