import React from "react";

type TitleType = {
  title: string;
  className?: string;
};

const Title: React.FC<TitleType> = ({ title, className }: TitleType) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-sm sm:text-[32px] font-bold-shabnam font-bold text-gray-11">
        {title}
      </h3>
    </div>
  );
};

export default Title;
