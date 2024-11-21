import React, { useState, useEffect, useRef } from "react";
import { useSidebar } from "../../context/SidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userNotExist } from "../../redux/reducers/auth";

const Header = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(userNotExist());
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <Link to="/requisition-general">
              <h1 className="hidden lg:block text-xl font-bold text-gray-800 ml-4">
                Inventory Pro
              </h1>
            </Link>
          </div>

          {/* Center section - User Profile */}
          <div className="flex-1 flex items-center justify-center">
            {/* Add any center content here */}
          </div>

          {/* Right section */}
          <div className="flex items-center justify-end relative">
            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-sm font-medium text-gray-700">
                    {/* {user.name} */}Abdullah
                  </span>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {/* {user.initials} */}AB
                    </span>
                  </div>
                  <button
                    onClick={handleDropdownToggle}
                    className="focus:outline-none"
                  >
                    {!isDropdownOpen ? (
                      <FaChevronDown className="text-lg" />
                    ) : (
                      <FaChevronUp className="text-lg" />
                    )}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right--20 mt-40 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
              >
                {user ? (
                  <ul className="py-1">
                    <>
                      <li>
                        <a
                          href="/requisition-general"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <FontAwesomeIcon icon={faHouse} className="mr-2" />
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <FontAwesomeIcon icon={faUser} className="mr-2" />
                          Profile
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className="mr-2"
                          />
                          Logout
                        </button>
                      </li>
                    </>
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
