import Link from "next/link";
import React from "react";

const RelatedLinkTitle: React.FC<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <div className="flex items-center justify-center bg-white w-24 h-6 sm:w-36 sm:h-9 text-gray-10 border border-gray-3 rounded-sm text-xs sm:text-xl">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default RelatedLinkTitle;
