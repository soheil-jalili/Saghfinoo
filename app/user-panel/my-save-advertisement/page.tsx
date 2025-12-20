import NotFoundMySaveAdvertisement from "@/components/templates/User-Panel/MySaveAdvertisement/NotFoundMySaveAdvertisement/NotFoundMySaveAdvertisement";
import UserPanelLayout from "@/components/templates/User-Panel/UserPanelLayout";
import React from "react";

const MySaveAdvertisement: React.FC = () => {
  return (
    <UserPanelLayout>
      <div className="border border-gray-5 rounded-2xl flex flex-col items-center justify-center">
        <NotFoundMySaveAdvertisement />
      </div>
    </UserPanelLayout>
  );
};

export default MySaveAdvertisement;
