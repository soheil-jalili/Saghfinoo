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
        sticky ? "w-full top-0 shadow-md" : "container md:top-10 md:rounded-2xl"
      } bg-white flex items-center fixed left-0 right-0 z-50 h-14.5 md:h-[115px] *:text-gray-10 px-4 md:px-8 transition-all duration-300 justify-between max-[267px]:px-2`}
    >
      <HiMiniBars3
        className="flex md:hidden cursor-pointer"
        size={24}
        onClick={() => setOpenMenu(true)}
      />
      <Link href="/" className="md:ml-5  lg:ml-10">
        <Image
          src="/assets/images/logo.png"
          alt="Saghfinoo Logo"
          width={131}
          height={63}
          className="w-18 h-[35px] md:w-[131px] md:h-[63]"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto hover:*:text-gray-11 transition-all">
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

      <div className="flex items-center gap-4 lg:gap-9 max-[267px]:hidden">
        <Link
          href="/signin"
          className="hidden md:block text-base hover:text-gray-11 transition-all"
        >
          ورود
        </Link>
        <Link
          href="/add-post"
          className="border border-primary px-4 py-2 rounded-lg text-primary text-xs sm:text-sm font-medium-shabnam!"
        >
          ثبت آگهی
        </Link>
      </div>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  );
};

export default Nav;
