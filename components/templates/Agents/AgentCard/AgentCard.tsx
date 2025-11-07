import Button from "@/components/module/Button/Button";
import AgentCardType from "@/types/agent-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AgentCard: React.FC<AgentCardType> = ({
  id,
  image,
  fullName,
  company,
  rate,
  route,
}) => {
  return (
    <div className="w-full lg:min-w-57.5 rounded-2xl border border-gray-4 py-3 sm:pb-6 sm:pt-4 sm:px-6  px-7 flex flex-col text-center items-center h-[185px] sm:h-82 justify-center">
      <Image
        src={image}
        alt={fullName}
        width={140}
        height={140}
        className="rounded-full w-21.5 h-21.5 sm:w-35 sm:h-35 object-cover mb-2 md:mb-1"
      />

      <Link
        href={route}
        className="text-gray-12 text-sm sm:text-xl font-bold-shabnam mb-1 sm:mb-2"
      >
        {fullName}
      </Link>
      <p className="text-gray-9 text-xs mb-1 sm:mb-2">امتیاز ۴ از ۵</p>
      <p className="text-gray-9 text-xs mb-1 sm:mb-2">{company}</p>

      <Button
        href={route}
        variant="outline"
        className="w-38 h-10 mt-auto lg:m-0 hidden sm:flex transition-all hover:bg-primary hover:text-white duration-100"
      >
        نمایش پروفایل
      </Button>
    </div>
  );
};

export default AgentCard;
