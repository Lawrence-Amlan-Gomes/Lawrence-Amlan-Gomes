import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import AdminShell from "@/components/AdminShell";

const ADMIN_EMAIL = "amlangomes@gmail.com";

export default async function AdminLayout({ children }) {
  const session = await auth();
  if (session?.user?.email !== ADMIN_EMAIL) {
    redirect("/login");
  }

  return <AdminShell email={session.user.email}>{children}</AdminShell>;
}
