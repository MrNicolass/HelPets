// components/SidebarWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar/Sidebar";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";

  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
