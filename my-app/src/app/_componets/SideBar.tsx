"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import {
  Home,
  Calendar,
  Info,
  Layers,
  Phone,
  MapPin,
  MoreVertical,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname(); 

  // Menu Items
  const menus = [
    { name: "Home", icon: <Home size={22} />, path: "/" },
    { name: "Schedule", icon: <Calendar size={22} />, path: "/schedule" },
    { name: "About", icon: <Info size={22} />, path: "/about" },
    { name: "Programs", icon: <Layers size={22} />, path: "/programs" },
    { name: "Contact", icon: <Phone size={22} />, path: "/contact" },
    { name: "Location", icon: <MapPin size={22} />, path: "/location" },
  ];

  return (
    <>
      {/* Mobile three-dot menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg"
        >
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        // animate={{ width: open ? 240 : 70 }}
        className={`
          h-screen bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800
          p-4 pt-6 text-white shadow-2xl flex flex-col fixed top-0 left-0 z-40
          transition-all
          ${mobileOpen ? "block" : "hidden"} lg:flex
        `}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-4 top-6 bg-blue-500 rounded-full p-2 shadow-lg hidden lg:block"
        >
          {open ? "←" : "→"}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <motion.div
            animate={{ rotate: open ? 360 : 0 }}
            transition={{ duration: 0.7 }}
            className="w-10 h-10 bg-white text-blue-600 font-bold flex items-center justify-center rounded-full"
          >
            S
          </motion.div>
          {open && <h1 className="text-2xl font-semibold">Sympos2k25</h1>}
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2">
          {menus.map((menu, i) => {
            const isActive = pathname === menu.path; 
            return (
              <Link href={menu.path} key={i}>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`
                    flex items-center gap-4 cursor-pointer p-3 rounded-xl
                    ${isActive ? "bg-blue-500 shadow-lg" : "hover:bg-blue-500/40"}
                  `}
                >
                  {menu.icon}
                  {open && <span className="text-lg">{menu.name}</span>}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
