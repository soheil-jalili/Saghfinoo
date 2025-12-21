import MySaveAdvertisementItem from "@/components/templates/User-Panel/MySaveAdvertisement/MySaveAdvertisementItem/MySaveAdvertisementItem";
import UserPanelLayout from "@/components/templates/User-Panel/UserPanelLayout";
import React from "react";

const MySaveAdvertisement: React.FC = () => {
  return (
    <UserPanelLayout>
      <div className="border border-gray-5 rounded-2xl">
        {/* <NotFoundMySaveAdvertisement /> */}

        <MySaveAdvertisementItem />
      </div>
    </UserPanelLayout>
  );
};

export default MySaveAdvertisement;
