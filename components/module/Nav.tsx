import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="container bg-white flex items-center rounded-2xl fixed top-10 left-0 right-0 z-50 px-8 h-[115px] *:text-gray-10">
      <Link href={"/"} className="ml-10">
        <Image
          src={"/assets/images/logo.png"}
          alt="Saghfinoo Logo"
          width={131}
          height={63}
        />
      </Link>

      <ul className="flex items-center gap-6 **:hover:text-gray-11 transition-all">
        <li>
          <Link href={"/rent"}>اجاره</Link>
        </li>
        <li>
          <Link href={"/rent"}>خرید</Link>
        </li>
        <li>
          <Link href={"/rent"}>املاک و مستغلات</Link>
        </li>
        <li>
          <Link href={"/rent"}>مشاورین املاک</Link>
        </li>
        <li>
          <Link href={"/rent"}>اخبار روز</Link>
        </li>
      </ul>
      
      <div className="flex items-center gap-9 mr-auto">
        <Link href={"/signin"} className="text-base hover:text-gray-11 transition-all">
          ورود
        </Link>
        <Link
          href={"/add-post"}
          className="border border-primary p-4 rounded-lg text-primary text-sm"
        >
          ثبت آگهی
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
