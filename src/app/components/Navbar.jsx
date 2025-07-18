"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/page/home", icon: "🏠" },
  { name: "My Profile", path: "/page/myprofile/user", icon: "👤" },
  { name: "Our Agents", path: "/page/ouragent", icon: "🧑‍💼" },
  { name: "Our Clients", path: "/page/ourclient", icon: "🧑‍🤝‍🧑" },
  { name: "Our Plans", path: "/page/plan", icon: "📋" },
  { name: "Chat", path: "/page/chat", icon: "💬" },
  { name: "Admin", path: "/page/admin", icon: "🛡️" },
  { name: "Myageny Society", path: "/page/society", icon: "🏢" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow-md py-2 px-4 flex justify-center z-50 sticky top-0">
      <ul className="flex gap-2 md:gap-6 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path === "/page/home" && pathname === "/");
          return (
            <li key={item.name} className="relative flex flex-col items-center group">
              <Link href={item.path} className="flex flex-col items-center px-2 md:px-4 py-1 group">
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-3xl md:text-4xl animate-bounce text-blue-600"
                      : "text-xl md:text-2xl text-gray-500 group-hover:text-blue-400"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xs md:text-sm mt-1 font-semibold transition-colors duration-200 ${
                    isActive ? "text-blue-700" : "text-gray-600 group-hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;