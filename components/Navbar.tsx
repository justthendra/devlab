"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Tools", path: "/tools" },
    { label: "About", path: "/about" },
    { label: "Docs", path: "/docs" },
  ];

  return (
    <div className="w-full flex justify-center mt-6 fixed top-0 z-50 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          max-w-4xl w-full mx-4 px-4 py-2 flex items-center gap-6
          rounded-full pointer-events-auto backdrop-blur-md border
          transition-all duration-300
          ${theme === "dark"
            ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.06)]"
            : "bg-[rgba(216,216,216,0.48)]  border-[rgba(0,0,0,0.07)]"
          }

        `}
      >
        {/* Logo */}
        <Link href="/" className="text-sm font-semibold mr-auto">
          <Image
          src="/DevLabnew.png"
          alt="devLab Logo"
          width={34}
          height={34}
          className="transition-transform group-hover:scale-105"
        />
        </Link>

        {/* Menü */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <motion.div whileHover={{ scale: 1.1 }} key={item.path}>
                <Link
                  href={item.path}
                  className={`
                    relative text-sm transition-all duration-300
                    ${isActive
                      ? `font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"
                      }`
                      : `${theme === "dark"
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                      }`
                    }
                  `}
                >
                  {item.label}

                  {/* Alt çizgi animasyonu */}
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      className={`
                        absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-5 rounded-full
                        bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500
                      `}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Tema butonu */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`
            w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
            border backdrop-blur-sm cursor-pointer
            ${theme === "dark"
              ? "bg-[rgba(19,16,16,0.03)] border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.15)]"
              : "bg-[rgba(255,255,255,0.5)] border-[rgba(0,0,0,0.12)] hover:bg-[rgba(255,255,255,0.7)]"
            }
          `}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-blue-500" />
          )}
        </motion.button>
      </motion.nav>
    </div>
  );
}


