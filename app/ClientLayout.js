// app/ClientLayout.jsx
"use client";

import { SessionProvider } from "next-auth/react";
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import ResponseProvider from "./providers/ResponseProvider";
import ThemeWrapper from "@/components/ThemeWrapper";
import TopNavbar from "@/components/TopNavbar";
import TopNavBarWarper from "@/components/TopNavBarWarper";   // ← probably meant TopNavBarWrapper?

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <ResponseProvider>
        <ThemeProvider>
          <AuthProvider>
            <ThemeWrapper>
              <TopNavbar />
              <TopNavBarWarper>{children}</TopNavBarWarper>
              {/* 
                If you have a sidebar toggle or mobile menu button,
                you can place <SideBarHandle /> here or inside ThemeWrapper
              */}
            </ThemeWrapper>
          </AuthProvider>
        </ThemeProvider>
      </ResponseProvider>
    </SessionProvider>
  );
}