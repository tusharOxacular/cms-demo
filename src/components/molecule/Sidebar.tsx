"use client";

import Link from "next/link";
import React, { useState } from "react";
import SidebarButtonwithDropdown from "@/components/atoms/SidebarComponents/SidebarButtonwithDropdown";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger menu for mobile view */}
      <div className="sm:hidden fixed top-0 left-0 z-50 bg-gray-800 w-full flex justify-between items-center px-4 py-3 shadow-md">
        <div className="flex items-center">
          <img
            src="/assets/images/logo.webp"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>
        <button
          onClick={toggleSidebar}
          className="flex flex-col justify-between h-6 w-7"
          aria-label="Toggle Sidebar"
        >
          <span
            className={`block h-1 rounded w-full bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 rounded w-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 rounded w-full bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-center py-2 pr-4 mb-4">
            <img
              src="/assets/images/logo.webp"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <SidebarButtonwithDropdown
                name="Colleges"
                child={[
                  { name: "Add College", path: "/college/addCollege" },
                  { name: "Manage College", path: "/college/manageCollege" },
                ]}
              />
            </li>
            <li>
              <SidebarButtonwithDropdown
                name="Exams"
                child={[
                  { name: "Add Exams", path: "/exams/addExam" },
                  { name: "Manage Exams", path: "/exams/manageExams" },
                ]}
              />
            </li>
            <li>
              <SidebarButtonwithDropdown
                name="Users"
                child={[
                  { name: "Add Users", path: "/users/addUser" },
                  { name: "Manage Users", path: "/users/manageUsers" },
                ]}
              />
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
