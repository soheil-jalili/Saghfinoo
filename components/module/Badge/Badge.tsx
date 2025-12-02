import React from "react";
type Prop = {
  children: React.ReactNode;
  className?: string;
};
const Badge: React.FC<Prop> = ({ children, className }: Prop) => {
  return (
    <div
      className={`flex items-center justify-center bg-gray-2 text-gray-11 text-center text-[10px] sm:text-xs rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
