import Image from "next/image";
import React from "react";

type MainCardItemType = {
  image: string;
  price?: string;
  title: string;
};

const MainCard: React.FC<MainCardItemType> = ({
  image,
  price,
  title,
}: MainCardItemType) => {
  return (
    <div className="h-85 bg-gray-2 rounded-lg overflow-hidden outline -outline-offset-1 outline-gray-4">
      <Image src={image} alt={title} width={288} height={239} />
      <div className="flex flex-col -space-y-1 items-center my-4">
        {price ? (
          <h5 className="text-xl text-gray-10 font-bold-shabnam font-bold">
            {price}
          </h5>
        ) : null}
        <p className="text-gray-10 font-regular-shabnam text-base">{title}</p>
      </div>
    </div>
  );
};

export default MainCard;
