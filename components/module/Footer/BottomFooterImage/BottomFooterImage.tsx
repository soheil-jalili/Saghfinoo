import Image from "next/image";

const BottomFooterImage: React.FC = () => {
  return (
    <Image
      src={"/assets/images/footer/footer_illustration.png"}
      alt="Footer Illustration"
      width={736}
      height={123}
      className="mx-auto mt-[50px] max-[300]:h-auto! sm:w-auto lg:w-184 max-sm:px-4 max-sm:w-81 max-sm:h-15"
    />
  );
};

export default BottomFooterImage;
