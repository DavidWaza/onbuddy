"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
//   Timeline,
  CheckSquare,
  Users,
//   HeartHandshake,
  SignOut,
  CaretLeft,
  CaretRight,
  HourglassLow,
} from "@phosphor-icons/react";
import { HeartHandshake } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: <House size={20} /> },
  { label: "Timeline", href: "/timeline", icon: <HourglassLow size={20} /> },
  { label: "Tasks", href: "/tasks", icon: <CheckSquare size={20} /> },
  { label: "People", href: "/people", icon: <Users size={20} /> },
  {
    label: "Relationships",
    href: "/relationships",
    icon: <HeartHandshake size={20} />,
  },
];

interface SidebarProps {
  user: {
    name: string;
    email: string;
  };
  onSignOut?: () => void;
}

export default function Sidebar({ user, onSignOut }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-7.5 border-b border-gray-100">
        {!collapsed && (
          <span className="text-lg text-gray-900 font-black">
            OnBuddy
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {collapsed ? <CaretRight size={18} className="text-gray-500"  /> : <CaretLeft size={18} className="text-gray-500" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition
              ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-100 p-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
            {user.name.charAt(0)}
          </div>

          {!collapsed && (
            <div className="text-sm">
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-gray-500 text-xs">{user.email}</p>
            </div>
          )}
        </div>

        <button
          onClick={onSignOut}
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-red-50 hover:text-red-600 transition"
        >
          <SignOut size={18} />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
