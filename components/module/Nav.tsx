"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";

const Nav: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 115);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        sticky ? "w-full top-0 shadow-md" : "container sm:top-10 sm:rounded-2xl"
      } bg-white flex items-center fixed left-0 right-0 z-50 h-14.5 sm:h-[115px] *:text-gray-10 px-8 transition-all duration-300 justify-between`}
    >
      <HiMiniBars3
        className="flex sm:hidden cursor-pointer"
        size={24}
        onClick={() => setOpenMenu(true)}
      />

      <Link href="/" className="sm:ml-10">
        <Image
          src="/assets/images/logo.png"
          alt="Saghfinoo Logo"
          width={131}
          height={63}
          className="w-18 h-[35px] sm:w-[131px] sm:h-[63]"
        />
      </Link>

      <ul className="hidden sm:flex items-center gap-6 ml-auto hover:*:text-gray-11 transition-all">
        <li>
          <Link href="/rent">اجاره</Link>
        </li>
        <li>
          <Link href="/buy">خرید</Link>
        </li>
        <li>
          <Link href="/estate">املاک و مستغلات</Link>
        </li>
        <li>
          <Link href="/agents">مشاورین املاک</Link>
        </li>
        <li>
          <Link href="/news">اخبار روز</Link>
        </li>
      </ul>

      <div className="flex items-center gap-9">
        <Link
          href="/signin"
          className="hidden sm:block text-base hover:text-gray-11 transition-all"
        >
          ورود
        </Link>
        <Link
          href="/add-post"
          className="border border-primary px-4 py-2 rounded-lg text-primary text-xs sm:text-sm !font-medium-shabnam"
        >
          ثبت آگهی
        </Link>
      </div>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  );
};

export default Nav;
