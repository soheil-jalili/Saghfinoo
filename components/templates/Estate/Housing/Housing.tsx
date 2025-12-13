import Badge from "@/components/module/Badge/Badge";
import Image from "next/image";
import React from "react";

type Prop = {
  className?: string;
  image: string;
  title: string;
  description: string;
  lineClampDescriptionSm?: number | null;
  widthTitle?: string | null;
  imageHeight?: number;
  paddingBottom?: string | null;
};
const Housing: React.FC<Prop> = ({
  className,
  image,
  title,
  description,
  lineClampDescriptionSm = 1,
  widthTitle = null,
  paddingBottom = null,
  imageHeight,
}) => {
  return (
    <div
      className={`mx-4 md:ml-0 md:mr-10.5 lg:mr-[65px] xl:mx-0 ${className}`}
    >
      <section className="w-full border border-gray-5 rounded-2xl pb-7.5 sm:pb-[21px]">
        <Image
          src={image}
          width={830}
          height={imageHeight}
          alt={title}
          className="w-full overflow-hidden rounded-t-2xl"
        />
        <div className="mx-2 sm:mx-4">
          <Badge className="mt-[19px] sm:mt-[9px] w-[101px] h-5.5 sm:w-[115px] sm:h-7.5 mb-2">
            <p className="p-1">زمان مطالعه: ۱۰ دقیقه</p>
          </Badge>
          <div className={`${widthTitle !== null ? `w-${widthTitle}` : ""} `}>
            <h4
              className={`text-gray-11 text-xs sm:text-2xl font-bold-shabnam! mb-2`}
            >
              {title}
            </h4>
            <p
              className={`text-gray-10 text-[10px] sm:text-lg w-full
              ${paddingBottom !== null ? `pb-${paddingBottom}` : ""}
                ${
                  lineClampDescriptionSm !== null ? "line-clamp-2" : null
                } sm:line-clamp-${
                lineClampDescriptionSm !== null ? lineClampDescriptionSm : null
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Housing;
