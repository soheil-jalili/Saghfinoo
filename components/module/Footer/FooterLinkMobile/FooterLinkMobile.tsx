import Link from "next/link";

type FooterLinkMobileType = {
  className: string;
};

const FooterLinkMobile: React.FC<FooterLinkMobileType> = ({ className }) => {
  return (
    <div
      className={`flex gap-3 min-[320px]:gap-[83px] text-[10px] px-4 pt-4 text-gray-11 mb-[29px] ${className}`}
    >
      <Link href={"/"}>بیشترین جست‌وجوها</Link>
      <Link href={"/"}>بازارهای املاک و مستغلات</Link>
    </div>
  );
};

export default FooterLinkMobile;
