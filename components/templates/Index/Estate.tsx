import Title from "@/components/module/Title";
import React from "react";
import EstateItem from "./EstateItem";

const Estate: React.FC = () => {
  return (
    <section className="container">
      <Title title="در سقفینو دنبال چه نوع ملکی هستید" className="mt-22 mb-8" />

      <div className="grid grid-cols-4 gap-6">
        <EstateItem
          image="/assets/images/estate/image1.png"
          price="28.900"
          title="خانه مسکونی"
        />
        <EstateItem
          image="/assets/images/estate/image2.png"
          price="309.798"
          title="آپارتمان و برج"
        />
        <EstateItem
          image="/assets/images/estate/image3.png"
          price="946"
          title="ویلا"
        />
        <EstateItem
          image="/assets/images/estate/image4.png"
          price="27.339"
          title="تجاری و اداری"
        />
      </div>
    </section>
  );
};

export default Estate;
