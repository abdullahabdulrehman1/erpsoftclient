import React from "react";
import { useSidebar } from "../../context/SidebarContext";

const Header = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <nav className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex h-16 w-full items-center justify-between">
          {/* Left section */}
          <div className="flex items-center">
            {/* Mobile hamburger button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md bg-gray-800 text-white"
            >
              {isSidebarOpen ? "✕" : "☰"}
            </button>
            <h1 className="hidden sm:block text-xl font-bold text-gray-800 ml-4">
              Inventory Pro
            </h1>
          </div>

          {/* Center section - User Profile */}
          <div className="flex-1 flex items-center justify-center">
            {/* Add any center content here */}
          </div>

          {/* Right section */}
          <div className="flex items-center justify-end">
            {/* Add any right-side content here */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                Abdullah
              </span>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;