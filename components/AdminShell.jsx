"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "@/app/hooks/useTheme";
import { FiGrid, FiMessageSquare, FiExternalLink, FiLogOut, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/testimonials", label: "Testimonials", icon: FiMessageSquare },
];

const AdminShell = ({ email, children }) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const initial = email?.[0]?.toUpperCase() ?? "A";

  const navItemClass = (active) =>
    `flex items-center gap-3 px-4 py-3 rounded-md text-[14px] font-medium transition-colors ${
      active
        ? theme
          ? "bg-blue-800 text-white"
          : "bg-blue-700 text-white"
        : theme
        ? "text-[#555555] hover:bg-[#f3f3f3]"
        : "text-[#aaaaaa] hover:bg-[#111111]"
    }`;

  const SidebarContent = () => (
    <>
      <div
        className={`text-[20px] font-bold px-4 pt-2 pb-6 ${
          theme ? "text-[#333333]" : "text-[#dddddd]"
        }`}
      >
        Admin
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={navItemClass(pathname === item.href)}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
        <Link href="/home" className={navItemClass(false)}>
          <FiExternalLink size={18} />
          View Site
        </Link>
      </nav>

      <div
        className={`mt-6 pt-4 border-t-[1px] ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        <div className="flex items-center gap-3 px-4 mb-4">
          <div
            className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-[14px] font-bold ${
              theme
                ? "bg-blue-800 text-white"
                : "bg-blue-700 text-white"
            }`}
          >
            {initial}
          </div>
          <div
            className={`text-[13px] truncate ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            {email}
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className={`w-full flex items-center justify-center gap-2 text-[14px] h-[44px] cursor-pointer rounded-md border-[1px] ${
            theme
              ? "bg-red-700 border-red-700 hover:bg-white hover:text-red-700"
              : "bg-red-800 border-red-800 hover:bg-black hover:text-red-600"
          } text-white`}
        >
          <FiLogOut size={16} />
          Log Out
        </button>
      </div>
    </>
  );

  return (
    <div className={`min-h-screen w-full flex ${theme ? "bg-[#ffffff]" : "bg-[#000000]"}`}>
      {/* Desktop sidebar */}
      <aside
        className={`hidden sm:flex flex-col w-[240px] shrink-0 min-h-screen px-3 pb-6 pt-20 md:pt-24 border-r-[1px] ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile top bar (sits below the site's fixed mobile navbar) */}
      <div
        className={`sm:hidden fixed top-14 left-0 right-0 z-30 flex items-center justify-between px-5 h-[64px] border-b-[1px] ${
          theme ? "bg-[#ffffff] border-[#dddddd]" : "bg-[#000000] border-[#222222]"
        }`}
      >
        <div className={`text-[18px] font-bold ${theme ? "text-[#333333]" : "text-[#dddddd]"}`}>
          Admin
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className={theme ? "text-[#333333]" : "text-[#dddddd]"}
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-0 z-[60] flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            className={`w-[260px] flex flex-col px-3 py-6 border-l-[1px] ${
              theme ? "bg-[#ffffff] border-[#dddddd]" : "bg-[#000000] border-[#222222]"
            }`}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className={`self-end mb-2 ${theme ? "text-[#333333]" : "text-[#dddddd]"}`}
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 px-6 sm:px-10 pt-36 sm:pt-20 md:pt-24 pb-10">{children}</main>
    </div>
  );
};

export default AdminShell;
