"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  codes: string[];
}

const LoginInput: React.FC = () => {
  const { register, setFocus, setValue } = useForm<FormValues>({
    defaultValues: {
      codes: ["", "", "", "", ""],
    },
  });

  useEffect(() => {
    setFocus("codes.0");
  }, [setFocus]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setValue(`codes.${index}` as const, val);

    if (val && index < 4) {
      setFocus(`codes.${index + 1}` as const);
    }
  };

  return (
    <div dir="ltr" className="flex gap-5 mb-4 *:rounded-lg *:outline-0 *:text-center *:text-[28px] *:text-gray-11">
      {[0, 1, 2, 3, 4].map((index) => {
        const { onChange, ...restRegister } = register(
          `codes.${index}` as const,
          {
            required: true,
            pattern: /^[0-9]$/,
          }
        );

        return (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
            maxLength={1}
            {...restRegister}
            onChange={(e) => {
              onChange(e);
              handleInputChange(e, index);
            }}
          />
        );
      })}
    </div>
  );
};

export default LoginInput;