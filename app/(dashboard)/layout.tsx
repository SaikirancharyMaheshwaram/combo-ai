import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <div
        className="z-[80] hidden h-full bg-gray-900 md:fixed
        md:inset-y-0 md:flex md:w-72 md:flex-col"
      >
        <SideBar />
      </div>
      <main className="md:pl-72">
        <NavBar /> {children}
      </main>
    </div>
  );
};
export default DashBoardLayout;
