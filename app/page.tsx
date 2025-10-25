import Estate from "@/components/templates/Index/Estate";
import Features from "@/components/templates/Index/Features";
import HeroSection from "@/components/templates/Index/HeroSection";
import News from "@/components/templates/Index/News";
import Services from "@/components/templates/Index/Services";
import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

const Index: React.FC = () => {
  return (
    <Main>
      <HeroSection />
      <Features />
      <Estate />
      <Services />
      <News />
    </Main>
  );
};

export default Index;
