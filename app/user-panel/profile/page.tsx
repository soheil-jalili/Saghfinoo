import Profile from "@/components/templates/User-Panel/Profile";
import UserPanelLayout from "@/components/templates/User-Panel/UserPanelLayout";
import React from "react";

const UserPanel: React.FC = async () => {
  return (
    <UserPanelLayout>
      <Profile />
    </UserPanelLayout>
  );
};

export default UserPanel;
