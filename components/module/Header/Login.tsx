import React from "react";

const Login: React.FC = () => {
  return (
    <div className="z-50 bg-white w-150 h-103 rounded-2xl p-8">
      <div className="flex justify-center flex-col items-center">
        <h4 className="font-bold-shabnam! mb-[17px] text-2xl text-gray-12">
          ورود
        </h4>
        <p className="text-base text-gray-11 mb-0.5">به سقفینو خوش آمدید</p>
        <p className="text-gray-11 text-base mb-6">
          لطفا برای ورود شماره موبایل خود را وارد کنید
        </p>
        <input
          type="text"
          className="w-full border border-info-input p-4 outline-0 rounded-lg mb-4"
        />
      </div>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          name="accept-rule"
            className="appearance-none w-6 h-6 border border-gray-400 rounded-lg checked:bg-info-input checked:border-info-input checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMi41TDMuNSA3TDIgNS41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==')] checked:bg-center checked:bg-no-repeat checked:bg-contain"
        />
        <p className="text-gray-8 text-sm">
          با <span className="text-primary">قوانین سقفینو</span> موافق هستم
        </p>
      </div>

      <button className="primary__btn mt-17">ورود</button>
    </div>
  );
};

export default Login;
