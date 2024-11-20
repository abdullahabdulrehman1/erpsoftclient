import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import {
  FaClipboardList,
  FaFileInvoice,
  FaTruck,
  FaUndo,
  FaBoxOpen,
  FaExchangeAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      id: "general",
      name: "General",
      subItems: [
        {
          path: "/requisition-general",
          name: "Requisition General",
          icon: <FaClipboardList />,
        },
        { path: "/po-general", name: "PO General", icon: <FaFileInvoice /> },
        { path: "/grn-general", name: "GRN General", icon: <FaTruck /> },
        {
          path: "/grn-return-general",
          name: "GRN Return General",
          icon: <FaUndo />,
        },
        { path: "/issue-general", name: "Issue General", icon: <FaBoxOpen /> },
        {
          path: "/issue-return-general",
          name: "Issue Return General",
          icon: <FaExchangeAlt />,
        },
        // { path: "/general-adjustment", name: "General Adjustment", icon: <FaAdjust /> },
      ],
    },
    // Add more main menu items as needed
  ];

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-4 pt-16 lg:pt-4">
          <nav>
            {menuItems.map((menuItem) => (
              <div key={menuItem.id} className="mb-4">
                <div className="text-lg font-semibold mb-2 text-center text-gray-400">
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
                    <span className="mr-3">{item.icon}</span>
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
