import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-3 sm:mb-22 flex-row-reverse">
      <button className="cursor-pointer">
        <svg
          className="size-5 sm:size-6"
          viewBox="0 0 24 24"
          fill="#CBCBCB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.0013 3.32998C14.8113 3.32998 14.6213 3.39998 14.4713 3.54998L7.95125 10.07C6.89125 11.13 6.89125 12.87 7.95125 13.93L14.4713 20.45C14.7613 20.74 15.2413 20.74 15.5312 20.45C15.8212 20.16 15.8212 19.68 15.5312 19.39L9.01125 12.87C8.53125 12.39 8.53125 11.61 9.01125 11.13L15.5313 4.60998C15.8212 4.31998 15.8212 3.83998 15.5313 3.54998C15.3813 3.40998 15.1912 3.32998 15.0013 3.32998Z" />
        </svg>
      </button>
      <div className="flex items-center justify-center border  rounded-lg text-gray-13  sm:h-[33px] sm:w-[33px] w-6 h-6 font-medium-shabnam! text-xs sm:text-sm border-info-input shadow-input cursor-pointer">
        1
      </div>
      <div className="flex items-center justify-center border border-gray-4 rounded-lg text-gray-13  sm:h-[33px] sm:w-[33px] w-6 h-6 font-medium-shabnam! text-xs sm:text-sm cursor-pointer">
        2
      </div>
      <div className="flex items-center justify-center border border-gray-4 rounded-lg text-gray-13  sm:h-[33px] sm:w-[33px] w-6 h-6 font-medium-shabnam! text-xs sm:text-sm cursor-pointer">
        3
      </div>

      <button className="cursor-pointer">
        <svg
          className="size-5 sm:size-6"
          viewBox="0 0 24 24"
          fill="#0C0C0C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.91156 3.32998C8.72156 3.32998 8.53156 3.39998 8.38156 3.54998C8.09156 3.83998 8.09156 4.31998 8.38156 4.60998L14.9016 11.13C15.3816 11.61 15.3816 12.39 14.9016 12.87L8.38156 19.39C8.09156 19.68 8.09156 20.16 8.38156 20.45C8.67156 20.74 9.15156 20.74 9.44156 20.45L15.9616 13.93C16.4716 13.42 16.7616 12.73 16.7616 12C16.7616 11.27 16.4816 10.58 15.9616 10.07L9.44156 3.54998C9.29156 3.40998 9.10156 3.32998 8.91156 3.32998Z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
