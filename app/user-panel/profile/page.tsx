import Profile from "@/components/templates/User-Panel/Profile";
import Sidebar from "@/components/templates/User-Panel/Sidebar";
import UserPanelLayout from "@/components/templates/User-Panel/UserPanelLayout";
import { headers } from "next/headers";
import React from "react";

const UserPanel: React.FC = async () => {
  return (
    <UserPanelLayout>
      <Profile />
    </UserPanelLayout>
  );
};

export default UserPanel;
