import Button from "@/components/module/Button/Button";
import NotAdvertisement from "@/components/templates/User-Panel/MyAdvertisement/NotAdvertisement";
import UserPanelLayout from "@/components/templates/User-Panel/UserPanelLayout";
import Image from "next/image";
import React from "react";

const MyAdvertisement = () => {
  return (
    <UserPanelLayout>
      <div className="border border-gray-5 rounded-2xl">
        <NotAdvertisement />
      </div>
    </UserPanelLayout>
  );
};

export default MyAdvertisement;


