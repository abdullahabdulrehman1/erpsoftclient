import React from "react";
import { SidebarProvider } from "../../context/SidebarContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
 
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-grow w-full overflow-hidden p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
  );
};

export default DashboardLayout;