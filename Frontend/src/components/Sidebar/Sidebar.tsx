"use client";

import { MENU_ITEMS } from "@/constants/menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SidebarContent = (
    <div className="flex flex-col justify-between h-full relative">
      {/* Collapse Toggle (Desktop Only) */}
      {!isMobile && (
        <button
          onClick={() => setCollapsed(!isCollapsed)}
          className="absolute top-4 right-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
          aria-label="Alternar sidebar"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      )}

      <div>
        <div className="flex flex-col items-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 mb-2 overflow-hidden">
            <img
              src="/images/Captura de tela 2025-05-02 154153.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg text-gray-700 mb-6 dark:text-gray-100">
              Logo
            </span>
          )}
        </div>

        <nav className="flex flex-col gap-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.label}
                href={item.to}
                onClick={() => isMobile && setDrawerOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors
                  ${
                    isActive
                      ? "bg-blue-100/20 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-100 hover:bg-blue-100/50"
                  }
                `}
              >
                <span className="text-xl">{<item.icon />}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center justify-center py-6 border-t border-gray-600 gap-3 px-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 overflow-hidden">
          <img
            src="/images/Captura de tela 2025-05-02 154153.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col flex-1 items-start ml-2">
            <span className="font-semibold text-gray-200 leading-tight">
              Dashboard
            </span>
            <span className="text-xs text-gray-400 leading-tight">Ipsum</span>
          </div>
        )}
        <button
          className="text-gray-400 dark:text-gray-300 hover:text-red-500 text-xl ml-2"
          aria-label="Sair"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 text-2xl text-gray-700 dark:text-white"
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <FaBars />
        </button>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside
          className={`bg-[#F5F7FA] dark:bg-gray-500 min-h-screen border-r border-gray-600 transition-all duration-300
          ${isCollapsed ? "w-20" : "w-64"}`}
        >
          {SidebarContent}
        </aside>
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobile && isDrawerOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-40 bg-[#F5F7FA] w-64 h-screen border-r border-gray-600 dark:bg-gray-500"
          >
            {SidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
