import Image from "next/image";
import Link from "next/link";

type BottomFooterType = {
  className?: string;
};
const BottomFooter: React.FC<BottomFooterType> = ({
  className,
}: BottomFooterType) => {
  return (
    <div
      className={`px-4 xl:px-0 flex items-start justify-between pt-6 max-w-262 mx-auto h-[258px] ${className}`}
    >
      <div>
        <Image
          src="/assets/images/footer/footer_logo.png"
          alt="Saghfinoo Logo"
          width={183}
          height={87}
          className="mb-6"
        />
        <p className="text-base text-gray-11">
          تجربه لذت خانه‌دار شدن سریع و آسان
        </p>
        <p className="text-gray-11 text-xs mt-2 leading-6 w-[230px]">
          سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. ملک
          مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک
          معتمد و متخصص شهرتان در ارتباط باشید.
        </p>
      </div>

      <div>
        <p className="text-gray-11 text-sm mb-2 font-medium-shabnam!">خدمات</p>
        <ul className="text-xs text-gray-9 flex flex-col gap-1">
          <li>
            <Link href="/">اجاره</Link>
          </li>
          <li>
            <Link href="/">خرید</Link>
          </li>
          <li>
            <Link href="/">ثبت رایگان آگهی ملک</Link>
          </li>
          <li>
            <Link href="/">املاک و مستغلات</Link>
          </li>
          <li>
            <Link href="/">مشاورین املاک</Link>
          </li>
          <li>
            <Link href="/">اخبار روز املاک</Link>
          </li>
          <li>
            <Link href="/">سوال ملکی دارید؟</Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-gray-11 text-sm mb-2 font-medium-shabnam!">
          اطلاعات
        </p>
        <ul className="text-xs text-gray-9 flex flex-col gap-1">
          <li>
            <Link href="/">دانلود اپلیکشن سقفینو</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
          <li>
            <Link href="/">داستان ‌سقفینو</Link>
          </li>
          <li>
            <Link href="/">پرسش‌های پرتکرار</Link>
          </li>
          <li>
            <Link href="/">یک سقف؛ بلاگ سقفینو</Link>
          </li>
          <li>
            <Link href="/">حریم شخصی شما</Link>
          </li>
          <li>
            <Link href="/">تعهدات ما و شما</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-1 h-full">
        <p className="text-gray-11 text-sm mb-2 font-medium-shabnam!">
          حساب کاربری
        </p>
        <ul className="text-xs text-gray-9 flex flex-col gap-1">
          <li>
            <Link href="/">پروفایل من</Link>
          </li>
          <li>
            <Link href="/">ملک‌های نشان‌شده</Link>
          </li>
          <li>
            <Link href="/">آگهی‌های من</Link>
          </li>
        </ul>
        <Link href="/" className="mt-auto">
          <Image
            src="/assets/images/footer/namad.png"
            width={49}
            height={50}
            alt="Namad"
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomFooter;
