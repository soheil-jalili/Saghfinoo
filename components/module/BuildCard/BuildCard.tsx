import React from "react";
import Badge from "../Badge/Badge";
import Image from "next/image";
import Link from "next/link";

const BuildCard: React.FC = () => {
  return (
    <div className="flex items-center gap-2 rounded-xl overflow-hidden border border-gray-2 pr-4 h-[235px]">
      <div>
        <Badge className="w-[115px] h-7.5 mb-2">
          <p className="p-1">زمان مطالعه: ۴ دقیقه</p>
        </Badge>
        <Link
          href={"/"}
          className="line-clamp-2 text-ellipsis text-gray-11 text-xs sm:text-xl font-bold-shabnam! leading-[140%]"
        >
          نظارت بر روند ساخت و سازها در دستور کار مدیران شهری همه شهرها باشد
        </Link>
      </div>

      <Image
        src={"/assets/images/news/build-card.png"}
        alt="Build-Card"
        width={296}
        height={235}
        className="h-full"
      />
    </div>
  );
};

export default BuildCard;
