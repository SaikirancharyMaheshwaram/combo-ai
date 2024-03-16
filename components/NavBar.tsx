import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubcription } from "@/lib/subsciption";

export const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubcription();
  return (
    <div className="flex items-center  p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
