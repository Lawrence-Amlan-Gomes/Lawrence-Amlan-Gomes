"use client";

import { signOut } from "next-auth/react";
import { useTheme } from "@/app/hooks/useTheme";

const Admin = ({ email }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen w-full flex justify-center items-center px-[10%] sm:px-0 ${
        theme ? "bg-[#ffffff]" : "bg-[#000000]"
      }`}
    >
      <div
        className={`p-8 sm:p-10 rounded-lg border-[1px] w-full sm:w-[420px] text-center ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        <div
          className={`text-[22px] lg:text-[28px] font-bold mb-4 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          Admin
        </div>
        <div
          className={`mb-8 text-[13px] lg:text-[15px] ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          {email}
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className={`w-full text-[14px] lg:text-[16px] h-[48px] lg:h-[56px] cursor-pointer rounded-md border-[1px] ${
            theme
              ? "bg-red-700 border-red-700 hover:bg-white hover:text-red-700"
              : "bg-red-800 border-red-800 hover:bg-black hover:text-red-600"
          } text-white`}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Admin;
