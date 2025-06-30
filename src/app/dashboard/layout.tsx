'use client';

import { useState } from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";



const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);


 

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile (with overlay) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative z-50 w-64">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-0">
  {/* Menu button on mobile only */}
  <div className="md:hidden">
    <button onClick={() => setSidebarOpen(true)}>
      <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
    </button>
  </div>

  {/* Header component */}
  <div className="w-full">
    <Header />
  </div>
</div>

        {/* Main content */}
       
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
      
      </div>
      
    </div>
  );
}
export default DashboardLayout;
