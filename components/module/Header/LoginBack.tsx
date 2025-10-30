import React from "react";
import Login from "./Login";

type LoginBackType = {
  show: boolean;
  closeLoginHandler: () => void;
};

const LoginBack: React.FC<LoginBackType> = ({
  show,
  closeLoginHandler,
}: LoginBackType) => {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={closeLoginHandler}
    >
      <div onClick={(e) => e.stopPropagation()} className="rounded-2xl">
        <Login />
      </div>
    </div>
  );
};

export default LoginBack;
