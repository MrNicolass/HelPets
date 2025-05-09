"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaChartBar,
  FaPaw,
  FaUserFriends,
  FaExclamationTriangle,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { ROUTES } from "../../routes";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const menuItems: MenuItem[] = [
  { label: "Lorem", icon: <FaChartBar />, to: ROUTES.lorem },
  { label: "Ipsum", icon: <FaPaw />, to: ROUTES.ipsum },
  { label: "is", icon: <FaUserFriends />, to: ROUTES.is },
  { label: "Simply", icon: <FaExclamationTriangle />, to: ROUTES.simply },
  { label: "Dummy", icon: <FaBell />, to: ROUTES.dummy },
  { label: "Text", icon: <FaCog />, to: ROUTES.text },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#F5F7FA] w-64 min-h-screen flex flex-col justify-between border-r border-gray-600 dark:bg-gray-500">
      {/* Logo Section */}
      <div className="flex flex-col items-center py-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 mb-2 overflow-hidden">
          <img
            src="/images/Captura de tela 2025-05-02 154153.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold text-lg text-gray-700 dark:text-gray-100 mb-6">Logo</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.label}
              href={item.to}
              className={`flex items-center gap-3 px-8 py-3 text-gray-700 dark:text-gray-100 hover:bg-blue-100/50 transition-colors text-base font-medium ${
                isActive
                  ? "bg-blue-100/20 text-blue-700 dark:text-blue-300"
                  : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="flex items-center justify-between py-8 border-t border-gray-600 dark:border-gray-400 px-6 gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 overflow-hidden">
          <img
            src="/images/Captura de tela 2025-05-02 154153.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 items-start ml-3">
          <span className="font-semibold text-gray-700 dark:text-gray-100 leading-tight">Lorem</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 leading-tight">Ipsum</span>
        </div>
        <button className="text-gray-400 dark:text-gray-300 hover:text-red-500 transition-colors text-xl">
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
}