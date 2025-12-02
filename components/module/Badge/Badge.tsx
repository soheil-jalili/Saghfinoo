import React from "react";
type Prop = {
  children: React.ReactNode;
  className?: string;
};
const Badge: React.FC<Prop> = ({ children, className }: Prop) => {
  return (
    <div className={`bg-gray-2 text-gray-11 text-center ${className}`}>{children}</div>
  );
};

export default Badge;
