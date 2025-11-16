import Image from "next/image";
import React from "react";

type ServiceItemType = {
  image: string;
  title: string;
};

const ServiceItem: React.FC<ServiceItemType> = ({
  image,
  title,
}: ServiceItemType) => {
  return (
    <div className="max-[350px]:w-full h-58 bg-white overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-2 py-6 px-4 shadow-md w-46">
      <Image src={image} alt={title} width={62.19} height={80} />
      <p className="text-lg text-service-black font-regular-shabnam text-center mt-2 max-w-[152px] line-clamp-3">
        {title}
      </p>
    </div>
  );
};

export default ServiceItem;
