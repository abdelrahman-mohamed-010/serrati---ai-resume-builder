import Archive from "./Archive";
import Export from "./Export";
import NextStepButton from "./NextStepButton";
import PreviousStepButton from "./PreviousStepButton";
import Save from "./Save";
import TabSwitcher from "./TabSwitcher";
import ToggleSideBar from "./ToggleSideBar";

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-6 shadow-md">
      <div className="w-1/2 flex items-center gap-2">
        <h1 className="text-2xl font-raqaa  -translate-y-1 text-secondary font-semibold">
          سيرتي
        </h1>
        <ToggleSideBar />
        <div className="w-[1.2px] h-6 bg-gray-200 mr-1.5"></div>
        <TabSwitcher />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-4">
        <div className="flex gap-4">
          <NextStepButton />
          <PreviousStepButton />
        </div>
        <div className="w-[1.2px] h-6 bg-gray-200"></div>
        <Archive />
        <Save />
        <Export />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
