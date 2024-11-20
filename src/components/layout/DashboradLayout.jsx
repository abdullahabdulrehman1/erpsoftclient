import React from "react";
import { SidebarProvider } from "../../context/SidebarContext";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}

          <main className="w-full">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
