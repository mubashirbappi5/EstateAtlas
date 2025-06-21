import Header from "@/components/dashboard/header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
   
      <Sidebar />

 
      <div className="flex-1 overflow-y-auto p-6">
        <Header/>
        {children}
      </div>
    </div>
  );
}
