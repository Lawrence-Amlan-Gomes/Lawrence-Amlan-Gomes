// app/layout.jsx
import { Roboto } from "next/font/google";
import "./globals.css";
import { dbConnect } from "@/services/mongo";
import ClientLayout from "./ClientLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Lawrence Amlan Gomes",
  description: "Personal Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}