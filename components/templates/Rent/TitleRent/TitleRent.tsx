import React from "react";

const TitleRent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="pb-4 text-xs sm:text-2xl text-gray-11 font-bold-shabnam!">
      {title}
    </h4>
  );
};

export default TitleRent;
