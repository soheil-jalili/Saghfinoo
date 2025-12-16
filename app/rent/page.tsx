import RentalCard from "@/components/module/RentalCard/RentalCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import FilterRent from "@/components/templates/Rent/FilterRent";
import SelectBox from "@/components/templates/Rent/SelectBoxFilter/SelectBox";
import Image from "next/image";
import React from "react";
import Select from "react-select/base";

const RentPage: React.FC = () => {
  return (
    <section className="container">
      <FilterRent />
      <div className="flex justify-between gap-x-6 mb-14">
        <div className="flex-1">
          <TitlePage title="املاک اجاره‌ای" className="mb-2! mt-0!" />
          <div className="flex justify-between mb-[27px] sm:mb-8">
            <p className="text-primary text-sm sm:text-lg hidden sm:block">
              ۴۷.۵۰۷ مورد یافت شد
            </p>
            <p className="text-primary text-sm sm:text-lg sm:hidden">
              ۴۷.۵۰۷ مورد
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 justify-between content-start mb-10 sm:mb-14">
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 justify-between content-start mb-10 sm:mb-14">
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 justify-between content-start">
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
            <RentalCard
              image={"/assets/images/rent/rent.png"}
              title="رهن و اجاره آپارتمان نوساز"
              address="۹۵ متر، محدوه آزادی خیابان جی"
              mortgage="250 میلیون تومان"
              rentPrice="15 میلیون تومان"
              date={"۱ ساعت پیش"}
            />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={"/assets/images/map/map.png"}
            alt="Map"
            width={600}
            height={751}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default RentPage;
