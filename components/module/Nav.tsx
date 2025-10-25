"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav: React.FC = () => {
  const [sticky, setSticky] = useState(false);

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
        sticky ? "w-full top-0 shadow-md" : "container top-10 rounded-2xl"
      } bg-white flex items-center fixed left-0 right-0 z-50 h-[115px] *:text-gray-10 px-8 transition-all duration-300`}
    >
      <Link href="/" className="ml-10">
        <Image
          src="/assets/images/logo.png"
          alt="Saghfinoo Logo"
          width={131}
          height={63}
        />
      </Link>

      <ul className="flex items-center gap-6 ml-auto hover:*:text-gray-11 transition-all">
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
          className="text-base hover:text-gray-11 transition-all"
        >
          ورود
        </Link>
        <Link
          href="/add-post"
          className="border border-primary p-4 rounded-lg text-primary text-sm"
        >
          ثبت آگهی
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
