"use client";

import { useTheme } from "@/app/hooks/useTheme";

const Admin = ({ email }) => {
  const { theme } = useTheme();

  return (
    <div>
      <div
        className={`text-[22px] lg:text-[28px] font-bold mb-1 ${
          theme ? "text-[#333333]" : "text-[#dddddd]"
        }`}
      >
        Dashboard
      </div>
      <div className={`mb-8 text-[13px] lg:text-[15px] ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
        Welcome back.
      </div>

      <div
        className={`p-6 sm:p-8 rounded-lg border-[1px] w-full max-w-[480px] ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        <div className={`text-[13px] mb-4 ${theme ? "text-[#999999]" : "text-[#777777]"}`}>
          Account
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className={`text-[13px] ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
              Email
            </span>
            <span className={`text-[13px] font-medium ${theme ? "text-[#333333]" : "text-[#dddddd]"}`}>
              {email}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-[13px] ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
              Role
            </span>
            <span className={`text-[13px] font-medium ${theme ? "text-[#333333]" : "text-[#dddddd]"}`}>
              Administrator
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-[13px] ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
              Signed in via
            </span>
            <span className={`text-[13px] font-medium ${theme ? "text-[#333333]" : "text-[#dddddd]"}`}>
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
