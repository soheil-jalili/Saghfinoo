import Image from "next/image";

type NamadLogoType = {
  className: string;
};

const NamadLogo: React.FC<NamadLogoType> = ({ className }: NamadLogoType) => {
  return (
    <div className={`flex justify-end ml-12.5 mt-7  ${className}`}>
      <Image
        src={"/assets/images/footer/namad.png"}
        alt="Namad Logo"
        width={35}
        height={36}
      />
    </div>
  );
};
export default NamadLogo;
