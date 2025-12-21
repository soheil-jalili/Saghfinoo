import RentalCard from "@/components/module/RentalCard/RentalCard";
import ClearAllAdvertisement from "../ClearAllAdvertisement/ClearAllAdvertisement";

const MySaveAdvertisementItem: React.FC = () => {
  return (
    <>
      <div className="px-6 pt-6 sm:pt-8">
        <h4 className="text-gray-11 text-xs sm:text-2xl mb-3 sm:mb-4 font-bold-shabnam!">
          آگهی‌های ذخیره‌شده
        </h4>

        <ClearAllAdvertisement/>
      </div>
      <div className="flex gap-x-4 gap-y-3 flex-wrap w-[750px] px-4 pt-8 pb-10 sm:pt-[37px] sm:pb-10.5 sm:pr-[97px]">
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
    </>
  );
};

export default MySaveAdvertisementItem;
