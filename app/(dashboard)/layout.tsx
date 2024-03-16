import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { ModalProvider } from "@/components/modal-provider";
import { UseProProvider } from "@/context/use-pro-model";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubcription } from "@/lib/subsciption";
const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubcription();
  return (
    <UseProProvider>
      <ModalProvider />
      <div className="relative h-full">
        <div
          className=" hidden h-full bg-gray-900 md:fixed
        md:inset-y-0 md:flex md:w-72 md:flex-col"
        >
          <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
        </div>
        <main className="md:pl-72">
          <NavBar /> {children}
        </main>
      </div>
    </UseProProvider>
  );
};
export default DashBoardLayout;
