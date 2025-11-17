
import Sidebar from "@/components/templates/User-Panel/Sidebar";
import React from "react";

const UserPanelLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="w-[90%] container pt-6 pb-14 md:pt-16 md:pb-26 ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-4 lg:grid-cols-[288px_1fr] lg:gap-6">
        <Sidebar />
        {children}
      </div>
    </section>
  );
};

export default UserPanelLayout;
