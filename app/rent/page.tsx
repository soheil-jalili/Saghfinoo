import Pagination from "@/components/module/Pagination/Pagination";
import RentalCard from "@/components/module/RentalCard/RentalCard";
import TitlePage from "@/components/module/TitlePage/TitlePage";
import EstateRelated from "@/components/templates/Rent/EstateRelated/EstateRelated";
import FilterNewOld from "@/components/templates/Rent/FilterNewOld/FilterNewOld";
import FilterRent from "@/components/templates/Rent/FilterRent/FilterRent";
import RelatedLink from "@/components/templates/Rent/RelatedLink/RelatedLink";
import Image from "next/image";
import React from "react";

const RentPage: React.FC = () => {
  return (
    <section className="container">
      <FilterRent />
      <div className="flex justify-between gap-x-6 mb-14">
        <div className="flex-1">
          <TitlePage title="املاک اجاره‌ای" className="mb-2! mt-0!" />
          <div className="flex justify-between mb-5 sm:mb-6 place-items-baseline">
            <p className="text-primary text-sm sm:text-lg hidden sm:block">
              ۴۷.۵۰۷ مورد یافت شد
            </p>
            <p className="text-primary text-sm sm:text-lg sm:hidden">
              ۴۷.۵۰۷ مورد
            </p>

            <FilterNewOld />
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

          <EstateRelated />

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

          <RelatedLink />

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

      <Pagination />
    </section>
  );
};

export default RentPage;
