"use client";

import React from "react";
import FooterMobileLogo from "./FooterMobileLogo/FooterMobileLogo";
import FooterTitle from "./FooterTitle/FooterTitle";
import FooterLinkMobile from "./FooterLinkMobile/FooterLinkMobile";
import FooterParagraphMobile from "./FooterParagraphMobile/FooterParagraphMobile";
import FooterLinkMain from "./FooterLinkMain/FooterLinkMain";
import NamadLogo from "./NamadLogo/NamadLogo";
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import BottomFooterImage from "./BottomFooterImage/BottomFooterImage";
import CopyRightFooter from "./CopyRightFooter/CopyRightFooter";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const path = usePathname();
  return (
    <footer
      className={`bg-gray-2 ${
        path.includes("/user-admin") || path.includes("/add-post")
          ? "hidden"
          : "block"
      }`}
    >
      <div className="container">
        <FooterMobileLogo className="sm:hidden pt-12 mr-4" />
        <FooterTitle />
        <FooterLinkMobile className="sm:hidden" />
        <FooterParagraphMobile className="sm:hidden mb-6" />
        <FooterLinkMain className="sm:hidden" />
        <NamadLogo className="sm:hidden" />
        <TopFooter className="hidden sm:flex" />
        <div className="sm:border-b sm:border-b-gray-5"></div>
        <BottomFooter className="max-sm:hidden" />
        <BottomFooterImage />
      </div>
      <CopyRightFooter />
    </footer>
  );
};

export default Footer;
