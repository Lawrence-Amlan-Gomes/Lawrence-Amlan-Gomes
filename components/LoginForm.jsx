"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/hooks/useTheme";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

const ADMIN_EMAIL = "amlangomes@gmail.com";

const LoginForm = () => {
  const { theme } = useTheme();
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  useEffect(() => {
    if (session?.user?.email === ADMIN_EMAIL) {
      router.push("/admin");
    }
  }, [session, router]);

  const handleGoogleSignIn = async () => {
    setIsLoadingGoogle(true);
    try {
      await signIn("google");
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  return (
    <div
      className={`h-screen w-full flex justify-center items-center px-[10%] sm:px-0 ${
        theme ? "bg-[#ffffff]" : "bg-[#000000]"
      }`}
    >
      <div
        className={`p-8 sm:p-10 rounded-lg border-[1px] w-full sm:w-[400px] text-center ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        <div
          className={`text-[22px] lg:text-[28px] font-bold mb-6 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          Login
        </div>
        <div className="mb-6 text-red-600 text-[13px] lg:text-[15px] font-medium">
          Only admins can login
        </div>
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoadingGoogle}
          className={`w-full text-[14px] lg:text-[16px] flex items-center justify-center gap-4 h-[48px] lg:h-[56px] cursor-pointer rounded-md py-2 px-4 border-[1px] ${
            theme
              ? "bg-blue-800 text-white border-blue-800 hover:bg-white hover:text-blue-800"
              : "bg-blue-700 text-white border-blue-600 hover:bg-black hover:text-blue-600"
          }`}
        >
          <div className="h-[26px] w-[26px] relative">
            <Image
              priority
              src="/googleIcon.png"
              alt="Google Icon"
              fill
              sizes="26px"
              className="object-cover"
            />
          </div>
          <div>{isLoadingGoogle ? "Logging..." : "Log in with Google"}</div>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
