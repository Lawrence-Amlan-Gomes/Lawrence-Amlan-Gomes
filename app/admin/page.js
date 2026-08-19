import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Admin from "@/components/Admin";

const ADMIN_EMAIL = "amlangomes@gmail.com";

export default async function AdminPage() {
  const session = await auth();
  if (session?.user?.email !== ADMIN_EMAIL) {
    redirect("/login");
  }
  return <Admin email={session.user.email} />;
}
