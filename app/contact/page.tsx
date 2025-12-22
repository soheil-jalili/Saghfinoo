import BoxContact from "@/components/templates/Contact/BoxContact/BoxContact";
import MainContact from "@/components/templates/Contact/MainContact";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="xl:container rounded-2xl pt-8 pb-6 border border-gray-5 my-16 mx-4 md:mx-10.5 lg:mx-[65px] ml:mx-0">
        <MainContact />
      </div>
      <BoxContact />
    </>
  );
};

export default ContactPage;
