import Archive from "./Archive";
import Export from "./Export";
import NextStepButton from "./NextStepButton";
import PreviousStepButton from "./PreviousStepButton";
import Save from "./Save";

const DashboardNavbar = () => {
  return (
    <nav className=" fkex justify-between items-center p-4">
      <div>
        <Export />
        <Save />
        <Archive />
        <PreviousStepButton />
        <NextStepButton />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
