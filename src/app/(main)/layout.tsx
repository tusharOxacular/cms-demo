import Sidebar from "@/components/molecule/Sidebar";

interface DashboardLayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<DashboardLayoutPageProps> = (props) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-400">
      <Sidebar />
      <div className="sm:ml-64 max-h-screen w-full overflow-auto">
        {props.children}
      </div>
    </div>
  );
};

export default LayoutPage;
