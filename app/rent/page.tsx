import RentalCard from "@/components/module/RentalCard/RentalCard";
import FilterRent from "@/components/templates/Rent/FilterRent";
import Image from "next/image";
import React from "react";

const RentPage: React.FC = () => {
  return (
    <section className="container">
      <FilterRent />
      <div className="flex justify-between gap-6 mb-14">
        <div className="flex flex-wrap gap-x-6 gap-y-4 justify-between flex-1 content-start">
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
