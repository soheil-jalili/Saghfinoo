import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-2">
      <div className="container">
        <FooterTitle />
        <TopFooter />
        <div className="border-b border-b-gray-5"></div>
        <BottomFooter />
        <BottomFooterImage />
      </div>
      <CopyRightFooter />
    </footer>
  );
};

export default Footer;

const FooterTitle: React.FC = () => {
  return (
    <div className="px-4 lg:px-0">
      <h3 className="text-gray-12 text-base sm:text-[32px] pt-12 sm:text-center font-bold font-bold-shabnam pb-4 md:pb-10.5">
        سقفینو؛ سقفی ایده‌آل برای زندگی
      </h3>
      <p className="text-gray-11 text-xs mt-1 max-[360px]:block hidden">تجربه لذت خانه‌دار شدن آنی و آسان</p>
    </div>
  );
};

const TopFooter: React.FC = () => {
  return (
    <>
      <div className="px-4 xl:px-0 flex justify-between pb-6 max-w-262 mx-auto">
        <div>
          <p className="text-sm text-gray-11 mb-2">بازارهای املاک و مستغلات</p>

          <ul className="flex gap-1 flex-col **:text-gray-9 text-xs">
            <li>
              <Link href={"/"}>بازار املاک و مستغلات تهران</Link>
            </li>
            <li>
              <Link href={"/"}>بازار املاک و مستغلات اصفهان</Link>
            </li>
            <li>
              <Link href={"/"}>بازار املاک و مستغلات شمال</Link>
            </li>

            <li>
              <Link
                href={"/"}
                className="flex items-center gap-1 *:text-primary-shade3!"
              >
                <span>مشاهده بیشتر</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 14C9.41693 14 8.83359 13.775 8.39193 13.3334L2.95859 7.90003C2.71693 7.65837 2.71693 7.25837 2.95859 7.0167C3.20026 6.77503 3.60026 6.77503 3.84193 7.0167L9.27526 12.45C9.67526 12.85 10.3253 12.85 10.7253 12.45L16.1586 7.0167C16.4003 6.77503 16.8003 6.77503 17.0419 7.0167C17.2836 7.25837 17.2836 7.65837 17.0419 7.90003L11.6086 13.3334C11.1669 13.775 10.5836 14 10.0003 14Z"
                    fill="#871212"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-gray-11 mb-2">بیشترین جست‌وجوها</p>

          <ul className="flex gap-1 flex-col **:text-gray-9 text-xs">
            <li>
              <Link href={"/"}>آپارتمان نزدیک مترو</Link>
            </li>
            <li>
              <Link href={"/"}>خانه نزدیک بر اصلی خیابان</Link>
            </li>
            <li>
              <Link href={"/"}>آپارتمان تک واحده</Link>
            </li>

            <li>
              <Link
                href={"/"}
                className="flex items-center gap-1 *:text-primary-shade3!"
              >
                <span>مشاهده بیشتر</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 14C9.41693 14 8.83359 13.775 8.39193 13.3334L2.95859 7.90003C2.71693 7.65837 2.71693 7.25837 2.95859 7.0167C3.20026 6.77503 3.60026 6.77503 3.84193 7.0167L9.27526 12.45C9.67526 12.85 10.3253 12.85 10.7253 12.45L16.1586 7.0167C16.4003 6.77503 16.8003 6.77503 17.0419 7.0167C17.2836 7.25837 17.2836 7.65837 17.0419 7.90003L11.6086 13.3334C11.1669 13.775 10.5836 14 10.0003 14Z"
                    fill="#871212"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-gray-11 mb-2">
            پرامتیازترین مشاوران املاک
          </p>

          <ul className="flex gap-1 flex-col **:text-gray-9 text-xs">
            <li>
              <Link href={"/"}>میترا جباری</Link>
            </li>
            <li>
              <Link href={"/"}>حسام‌الدین عزیزی</Link>
            </li>
            <li>
              <Link href={"/"}>بهرام مشعوف</Link>
            </li>

            <li>
              <Link
                href={"/"}
                className="flex items-center gap-1 *:text-primary-shade3!"
              >
                <span>مشاهده بیشتر</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 14C9.41693 14 8.83359 13.775 8.39193 13.3334L2.95859 7.90003C2.71693 7.65837 2.71693 7.25837 2.95859 7.0167C3.20026 6.77503 3.60026 6.77503 3.84193 7.0167L9.27526 12.45C9.67526 12.85 10.3253 12.85 10.7253 12.45L16.1586 7.0167C16.4003 6.77503 16.8003 6.77503 17.0419 7.0167C17.2836 7.25837 17.2836 7.65837 17.0419 7.90003L11.6086 13.3334C11.1669 13.775 10.5836 14 10.0003 14Z"
                    fill="#871212"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium-shabnam! text-gray-11 mb-2">
            با ما در ارتباط باشید
          </p>

          <ul className="flex gap-1 flex-col **:text-gray-9 text-xs">
            <li className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                  fill="#CB1B1B"
                />
                <path
                  d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                  fill="#CB1B1B"
                />
              </svg>

              <Link href={"/"} className="text-xs text-gray-9">
                تلفن
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                  fill="#CB1B1B"
                />
              </svg>

              <Link href={"/"} className="text-xs text-gray-9">
                اینستاگرام
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="21.5" height="21.5" rx="10.75" fill="#CB1B1B" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.86604 10.6365C7.99988 9.27109 10.0896 8.37096 11.1352 7.93606C14.1206 6.69433 14.7409 6.47863 15.1453 6.47151C15.2342 6.46994 15.433 6.49198 15.5618 6.59649C15.6706 6.68474 15.7005 6.80395 15.7148 6.88762C15.7291 6.97129 15.747 7.16188 15.7328 7.31081C15.571 9.01064 14.871 13.1357 14.5149 15.0395C14.3642 15.8451 14.0675 16.1152 13.7802 16.1416C13.1559 16.1991 12.6819 15.7291 12.0772 15.3327C11.1311 14.7125 10.5966 14.3264 9.67821 13.7212C8.61684 13.0218 9.30488 12.6374 9.90975 12.0092C10.068 11.8447 12.8186 9.3429 12.8718 9.11594C12.8785 9.08756 12.8847 8.98175 12.8218 8.92588C12.759 8.87001 12.6662 8.88912 12.5992 8.90431C12.5044 8.92585 10.9929 9.92488 8.06483 11.9014C7.63581 12.196 7.24721 12.3395 6.89904 12.332C6.51521 12.3237 5.77687 12.115 5.22799 11.9366C4.55477 11.7177 4.01971 11.602 4.0663 11.2304C4.09057 11.0368 4.35715 10.8388 4.86604 10.6365Z"
                  fill="white"
                />
              </svg>

              <Link href={"/"} className="text-xs text-gray-9">
                تلگرام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const BottomFooter: React.FC = () => {
  return (
    <div className="px-4 xl:px-0 flex items-start justify-between pt-6 max-w-262 mx-auto h-[258px]">
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

const BottomFooterImage: React.FC = () => {
  return (
    <Image
      src={"/assets/images/footer/footer_illustration.png"}
      alt="Footer Illustration"
      width={736}
      height={123}
      className="mx-auto mt-[50px]"
    />
  );
};

const CopyRightFooter = () => {
  return (
    <div className="hidden md:block py-8 bg-gray-3 text-center text-xs text-gray-8">
      <p>حقوق این سایت متعلق به سقفینو است</p>
    </div>
  );
};
