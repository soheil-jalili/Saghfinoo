import LoginWithPhoneNumberType from "@/types/loginWithPhoneNumberTypes";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type AcceptRuleType = {
  size: "size-4" | "size-6";
  radius: "rounded-lg" | "rounded-sm";
  id: string;
  register: UseFormRegister<LoginWithPhoneNumberType>;
};

const AcceptRule: React.FC<AcceptRuleType> = ({
  size,
  radius,
  id,
  register,
}) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        id={id}
        className={`appearance-none border border-gray-400 checked:bg-info-input checked:border-info-input checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMi41TDMuNSA3TDIgNS41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==')] checked:bg-center checked:bg-no-repeat checked:bg-contain ${radius} ${size}`}
        {...register("acceptRule")}
      />
      <label className="text-gray-8 text-sm cursor-pointer" htmlFor={id}>
        با <span className="text-primary">قوانین سقفینو</span> موافق هستم
      </label>
    </div>
  );
};

export default AcceptRule;
