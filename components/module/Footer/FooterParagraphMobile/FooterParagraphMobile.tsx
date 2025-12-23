type FooterParagraphMobileType = {
  className: string;
};

const FooterParagraphMobile: React.FC<FooterParagraphMobileType> = ({
  className,
}: FooterParagraphMobileType) => {
  return (
    <p className={`text-gray-9 text-[10px] px-4 line-clamp-3 ${className}`}>
      سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. ملک
      مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک معتمد
      و متخصص شهرتان در ارتباط باشید.
    </p>
  );
};

export default FooterParagraphMobile;
