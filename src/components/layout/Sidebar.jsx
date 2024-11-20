import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const Sidebar = () => {
  const menuItems = [
    {
      id: "general",
      name: "General",
      subItems: [
        { path: "/requisition-general", name: "Requisition General" },
        { path: "/po-general", name: "PO General" },
        { path: "/grn-general", name: "GRN General" },
        { path: "/grn-return-general", name: "GRN Return General" },
        { path: "/issue-general", name: "Issue General" },
        { path: "/issue-return-general", name: "Issue Return General" },
        { path: "/general-adjustment", name: "General Adjustment" },
      ],
    },
    // Add more main menu items as needed
  ];

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40 
          h-screen w-64 
          bg-gray-800 text-white
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-4 pt-16 lg:pt-4">
          <nav>
            {menuItems.map((menuItem) => (
              <div key={menuItem.id} className="mb-4">
                <div className="text-lg font-semibold mb-2 text-center text-gray-300">
                  {menuItem.name}
                </div>
                {menuItem.subItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        toggleSidebar();
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center p-3 mb-2 rounded-lg hover:bg-gray-700 transition-colors ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;