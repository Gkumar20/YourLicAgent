"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItemsBase = [
    { name: "My Profile", path: "/page/myprofile/user", icon: "👤" },
    { name: "Our Agents", path: "/page/ouragent", icon: "🧑‍💼" },
    { name: "Our Clients", path: "/page/ourclient", icon: "🧑‍🤝‍🧑" },
    { name: "Our Plans", path: "/page/plan", icon: "📋" },
    // Admin will be conditionally added
    { name: "Myageny Society", path: "/page/society", icon: "🏢" },
    // Login/Logout will be conditionally added
];

const fixedItems = [
    { name: "Home", path: "/page/home", icon: "🏠" },
    { name: "Chat", path: "/page/chat", icon: "💬" },
];


import { useEffect, useMemo, useState as useReactState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useReactState(null);
    const [loadingUser, setLoadingUser] = useReactState(true);
    const [isLoggedIn, setIsLoggedIn] = useReactState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (path) =>
        pathname === path || (path === "/page/home" && pathname === "/");

    // Fetch user by id from localStorage
    useEffect(() => {
        const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        let valid = !!userId;
        // Optionally check JWT validity (client-side, not secure)
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (!payload || !payload.userId || payload.exp * 1000 < Date.now()) {
                    valid = false;
                }
            } catch {
                valid = false;
            }
        }
        setIsLoggedIn(valid);
        if (!userId || !valid) {
            setUser(null);
            setLoadingUser(false);
            return;
        }
        fetch(`/api/user/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.user);
                setLoadingUser(false);
            })
            .catch(() => {
                setUser(null);
                setLoadingUser(false);
            });
    }, []);

    // Memoize navItems to include Admin only if isAdmin
    const navItems = useMemo(() => {
        let items = [...navItemsBase];

        if (!loadingUser && user && user.isAdmin) {
            items = [
                ...items.slice(0, 4),
                { name: "Admin", path: "/page/admin", icon: "🛡️" },
                ...items.slice(4)
            ];
        }

        if (!loadingUser && user) {
            items = [
                {
                    name: "My Profile",
                    path: user.isAgent ? "/page/myprofile/agent" : "/page/myprofile/user",
                    icon: "👤"
                },
                ...items.slice(1)
            ];
        }


        // Add Login or Logout
        if (!loadingUser) {
            if (isLoggedIn) {
                items.push({ name: "Logout", path: "#logout", icon: "🚪" });
            } else {
                items.push({ name: "Login", path: "/page/auth/login", icon: "🔐" });
            }
        }

        return items;
    }, [user, loadingUser, isLoggedIn]);

    // Logout handler
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
            window.location.href = '/page/auth/login';
        }
    };

    return (
        <nav className="w-full bg-white shadow-md py-2 px-4 z-50 sticky top-0">
            {/* Mobile Top Bar */}
            <div className="flex justify-between items-center md:hidden">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/myageny_logo.png"
                        alt="Myageny Logo"
                        width={36}
                        height={36}
                    />
                </div>

                {/* Fixed Icons (Home, Chat, Login/Logout) */}
                <div className="flex items-center gap-4">
                    {fixedItems.map((item) => (
                        <Link href={item.path} key={item.name} onClick={closeMenu}>
                            <span
                                className={`text-2xl transition duration-200 ${isActive(item.path)
                                    ? "text-blue-600 animate-bounce"
                                    : "text-gray-700"
                                    }`}
                            >
                                {item.icon}
                            </span>
                        </Link>
                    ))}
                    {/* Menu toggle */}
                    <button onClick={toggleMenu} className="text-gray-800 text-2xl">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Desktop Full Menu */}
            <ul className="hidden md:flex justify-center items-center gap-6 mt-2">
                {[...fixedItems, ...navItems].map((item) => (
                    <li key={item.name} className="relative flex flex-col items-center group">
                        {item.name === 'Logout' ? (
                            <button onClick={handleLogout} className="flex flex-col items-center px-2 bg-transparent border-none outline-none cursor-pointer">
                                <span
                                    className={`transition-all duration-300 text-3xl text-red-600 animate-bounce`}
                                >
                                    {item.icon}
                                </span>
                                <span className="text-xs mt-1 font-semibold text-red-700">{item.name}</span>
                            </button>
                        ) : (
                            <Link href={item.path} className="flex flex-col items-center px-2">
                                <span
                                    className={`transition-all duration-300 ${isActive(item.path)
                                        ? "text-3xl text-blue-600 animate-bounce"
                                        : "text-xl text-gray-500 group-hover:text-blue-400"
                                        }`}
                                >
                                    {item.icon}
                                </span>
                                <span
                                    className={`text-xs mt-1 font-semibold ${isActive(item.path)
                                        ? "text-blue-700"
                                        : "text-gray-600 group-hover:text-blue-400"
                                        }`}
                                >
                                    {item.name}
                                </span>
                                {isActive(item.path) && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                                )}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Dropdown (Only navItems) */}
            {isOpen && (
                <ul className="md:hidden mt-3 flex flex-col gap-3">
                    {navItems.map((item) => (
                        <li key={item.name} onClick={closeMenu}>
                            {item.name === 'Logout' ? (
                                <button onClick={handleLogout} className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-100 bg-transparent border-none outline-none cursor-pointer w-full">
                                    <span className="text-2xl text-red-600 animate-bounce">{item.icon}</span>
                                    <span className="text-sm font-semibold text-red-700">{item.name}</span>
                                </button>
                            ) : (
                                <Link
                                    href={item.path}
                                    className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-100"
                                >
                                    <span
                                        className={`text-2xl ${isActive(item.path) ? "text-blue-600 animate-bounce" : "text-gray-600"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    <span
                                        className={`text-sm font-semibold ${isActive(item.path) ? "text-blue-700" : "text-gray-800"
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
