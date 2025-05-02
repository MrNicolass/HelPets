import React from "react";
import { FaChartBar, FaUserFriends, FaBell, FaCog, FaSignOutAlt, FaPaw, FaBuilding, FaUserCheck, FaExclamationTriangle } from "react-icons/fa";

const menuItems = [
  { label: "Lorem", icon: <FaChartBar /> },
  { label: "Ipsum", icon: <FaPaw /> },
  { label: "is", icon: <FaUserFriends /> },
  { label: "Simply", icon: <FaExclamationTriangle /> },
  { label: "Dummy", icon: <FaBell /> },
  { label: "Text", icon: <FaCog /> },
];

export default function Navbar() {
  return (
    <aside className="bg-[#F5F7FA] w-64 min-h-screen flex flex-col justify-between border-r border-gray-200">
      <div>
        <div className="flex flex-col items-center py-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 mb-2 overflow-hidden">
            {/* Logo  */}
            <img src="/images/Captura de tela 2025-05-02 154153.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg text-gray-700 mb-6">Logo</span>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, idx) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-8 py-3 text-gray-700 hover:bg-blue-100 transition-colors text-base font-medium ${idx === 1 ? "bg-blue-100 text-blue-700" : ""}`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center justify-between py-8 border-t border-gray-200 px-6 gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 overflow-hidden">
          <img src="/images/Captura de tela 2025-05-02 154153.png" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col flex-1 items-start ml-3">
          <span className="font-semibold text-gray-700 leading-tight">Nome</span>
          <span className="text-xs text-gray-400 leading-tight">Jabatan</span>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors text-xl ml-2">
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
} 