import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "../../components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import MenuBar from "./menu-bar";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <Navbar />
      <MaxWidthWrapper className="flex grow gap-5 pt-5">
        <MenuBar className="sticky hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-1 py-5 shadow-sm sm:block lg:px-3 xl:w-80" />
        {children}
      </MaxWidthWrapper>
      <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-1 sm:hidden" />
    </SessionProvider>
  );
}
