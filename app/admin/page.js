import { auth } from "@/app/auth";
import Admin from "@/components/Admin";

export default async function AdminPage() {
  const session = await auth();
  return <Admin email={session?.user?.email} />;
}
