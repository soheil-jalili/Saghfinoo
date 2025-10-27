import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeatureItemType = {
  image: string;
  title: string;
  description: string;
  buttonType: "خرید خانه" | "ثبت آگهی" | "اجاره خانه";
  route: string;
};

const FeatureItem: React.FC<FeatureItemType> = ({
  title,
  image,
  description,
  buttonType,
  route,
}: FeatureItemType) => {
  return (
    <div className="h-auto sm:h-[511px] rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-gray-2 flex flex-col justify-between outline -outline-offset-1 outline-gray-4 gap-5">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          width={280}
          height={145}
          alt={title}
          className="mb-6"
        />
        <h5 className="mb-3 font-bold font-bold-shabnam text-sm sm:text-xl text-gray-11">
          {title}
        </h5>
        <p className="text-gray-10 text-sm line-clamp-4">{description}</p>
      </div>

      <Link href={route} className="primary__btn">
        {buttonType}
      </Link>
    </div>
  );
};

export default FeatureItem;
