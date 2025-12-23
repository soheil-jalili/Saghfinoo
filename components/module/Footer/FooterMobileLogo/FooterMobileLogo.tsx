import Image from "next/image";

type FooterMobileLogo = {
  className: string;
};
const FooterMobileLogo: React.FC<FooterMobileLogo> = ({
  className,
}: FooterMobileLogo) => {
  return (
    <>
      <Image
        src={"/assets/images/Logo.png"}
        width={64}
        height={31}
        alt="Saghfinoo Logo"
        className={`${className}`}
      />
    </>
  );
};

export default FooterMobileLogo;
