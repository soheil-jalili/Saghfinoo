"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavSearch: React.FC = () => {
  const [state, setState] = useState<"rent" | "buy-house">("rent");
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-7 w-full md:w-[90%] lg:w-204  h-auto sm:h-27 px-4 md:px-7">
      <div className="grid grid-cols-2 mt-3.5 text-center relative">
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-5"></div>

        <button
          onClick={() => setState("rent")}
          className={`pb-2 text-sm sm:text-2xl relative transition-all duration-200  cursor-pointer ${
            state === "rent"
              ? "text-gray-12 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
              : "text-gray-9 hover:text-gray-11"
          }`}
        >
          اجاره
        </button>

        <button
          onClick={() => setState("buy-house")}
          className={`pb-2 text-sm sm:text-2xl relative transition-all duration-200 cursor-pointer  ${
            state === "buy-house"
              ? "text-gray-12 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
              : "text-gray-9 hover:text-gray-11"
          }`}
        >
          خرید
        </button>
      </div>

      <div className="my-3 flex items-center gap-2">
        <Link href={`/${state}?search=${searchInput}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
              fill="#353535"
            />
            <path
              d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z"
              fill="#353535"
            />
          </svg>
        </Link>

        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          placeholder="شهر مورد نظر را جست‌وجو کنید"
          className="max-[267px]:text-[10px] max-[238px]:placeholder:text-transparent text-xs sm:text-lg placeholder:text-gray-10 sm:placeholder:text-gray-11 w-full outline-0"
        />
      </div>
    </div>
  );
};

export default NavSearch;
