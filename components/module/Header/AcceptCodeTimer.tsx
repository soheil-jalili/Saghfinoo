"use client";
import React, { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";

type AcceptCodeTimerType = {
  fontSize: "text-sm" | "text-[10px]";
};

const AcceptCodeTimer: React.FC<AcceptCodeTimerType> = ({ fontSize }) => {
  const [timeLeft, setTimeLeft] = useState<number>(180);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minute = Math.floor(timeLeft / 60);
  const second = timeLeft % 60;
  const isDoneTime = timeLeft === 0;

  return (
    <div className="flex gap-1">
      <GoClock color="#CBCBCB" />
      <p className={`mb-11 text-gray-6 ${fontSize}`}>
        {isDoneTime ? (
          <>
            <button className="cursor-pointer">دریافت مجدد کد</button>
          </>
        ) : (
          <>
            <span className="text-primary">
              {minute.toString().padStart(2, "0")}:
              {second.toString().padStart(2, "0")}
            </span>{" "}
            تا دریافت مجدد کد
          </>
        )}
      </p>
    </div>
  );
};

export default AcceptCodeTimer;
