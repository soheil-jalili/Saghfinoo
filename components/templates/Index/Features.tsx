import React from "react";
import FeatureItem from "./FeatureItem";
import Title from "@/components/module/Title";

const Features: React.FC = () => {
  return (
    <section className="container">
      <Title
        title="سقفینو چطور به خانه‌دار شدن شما کمک می‌کند"
        className="px-4 mt-14 sm:mt-26 mb-5 sm:mb-8"
      />
      <div className="grid grid-cols-3 gap-6">
        <FeatureItem
          image="/assets/images/features/illustration1.png"
          title="به آسانی یک خانه اجاره کنید"
          description="در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید."
          buttonType="اجاره خانه"
          route="/"
        />
        <FeatureItem
          image="/assets/images/features/illustration2.png"
          title="خانه مورد علاقه‌تان را بخرید"
          description="بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد.
ما علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد."
          buttonType="خرید خانه"
          route="/"
        />
        <FeatureItem
          image="/assets/images/features/illustration3.png"
          title="مالک هستید؟"
          description="آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟
پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید."
          buttonType="ثبت آگهی"
          route="/"
        />
      </div>
    </section>
  );
};

export default Features;
