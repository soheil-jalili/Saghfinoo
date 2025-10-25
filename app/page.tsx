import Estate from "@/components/templates/Index/Estate";
import Features from "@/components/templates/Index/Features";
import HeroSection from "@/components/templates/Index/HeroSection";
import React from "react";

const Index: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <Features />
      <Estate />
    </main>
  );
};

export default Index;
