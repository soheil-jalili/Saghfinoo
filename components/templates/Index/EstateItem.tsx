import Image from "next/image";
import React from "react";

type EstateItemType = {
  image: string;
  price: string;
  title: string;
};

const EstateItem: React.FC<EstateItemType> = ({
  image,
  price: size,
  title,
}: EstateItemType) => {
  return (
    <div className="h-85 bg-gray-2 rounded-lg overflow-hidden shadow-secondary">
      <Image src={image} alt={title} width={288} height={239} />
      <div className="flex flex-col -space-y-1 items-center my-4">
        <h5 className="text-xl text-gray-10 font-bold-shabnam font-bold">
          {size}
        </h5>
        <p className="text-gray-10 font-regular-shabnam text-base">{title}</p>
      </div>
    </div>
  );
};

export default EstateItem;
