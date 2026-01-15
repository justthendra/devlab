"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<{ name: string; path: string }[]>([]);

  // Tools list with translations
  const tools = [
    { name: t("toolNames.mp4towebm"), path: "/tools/mp4towebm" },
    { name: t("toolNames.mp4tomp3"), path: "/tools/mp4tomp3" },
    { name: t("toolNames.jpgtowebp"), path: "/tools/jpgtowebp" },
    { name: t("toolNames.gifoptimize"), path: "/tools/gifoptimize" },
    { name: t("toolNames.cssglow"), path: "/tools/cssglow" },
    { name: t("toolNames.formatter"), path: "/tools/formatter" },
    { name: t("toolNames.qrcode"), path: "/tools/qrcode" },
    { name: t("toolNames.mp3downloader"), path: "/tools/mp3downloader" },
    { name: t("toolNames.imageGenerator"), path: "/tools/image-generator" },
  ];

  const navItems = [
    { label: t("navbar.tools"), path: "/tools" },
    { label: t("navbar.docs"), path: "/docs" },
    { label: t("navbar.about"), path: "/about" },
  ];

  // Search filtering
  useEffect(() => {
    if (query.length > 0) {
      setResults(
        tools.filter((tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setResults([]);
    }
  }, [query, t]);

  const handleSearchEnter = () => {
    if (results.length > 0) {
      window.location.href = results[0].path;
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full flex justify-center mt-6 fixed top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          max-w-5xl w-full mx-4 px-4 py-2 flex items-center gap-4
          backdrop-blur-md border rounded-full pointer-events-auto
          ${theme === "dark"
            ? "bg-[rgba(11,11,14,0.09)] border-[rgba(255,255,255,0.07)]"
            : "bg-[rgba(245,245,245,0.6)] border-[rgba(0,0,0,0.1)]"}
        `}
      >
        {/* 🔥 Logo */}
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <Image
            src={theme === "dark" ? "/DevLab.png" : "/DevLabDark.png"}
            alt="DevLab Logo"
            width={32}
            height={32}
          />
        </Link>

        {/* 📌 Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm transition ${isActive
                  ? "text-emerald-400 font-semibold"
                  : theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-800"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* 🔍 Search area (desktop) */}
        <div className="hidden md:block relative">
          <div
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border w-52
              ${theme === "dark"
                ? "bg-[rgba(15,15,18,0.05)] border-[rgba(255,255,255,0.07)]"
                : "bg-white border-[rgba(0,0,0,0.39)]"}
            `}
          >
            <Search className="w-4 h-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
              placeholder={t("navbar.searchPlaceholder")}
              className={`bg-transparent outline-none text-xs flex-1 ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}
            />
          </div>

          <AnimatePresence>
            {focused && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="
                  absolute mt-2 w-full rounded-xl border backdrop-blur-md
                  bg-[rgba(18,18,23,0.18)] border-[rgba(255,255,255,0.07)]
                  shadow-[0_4px_14px_rgba(0,0,0,0.4)] overflow-hidden z-50
                "
              >
                {results.map((r) => (
                  <motion.a
                    key={r.path}
                    href={r.path}
                    whileHover={{ x: 4 }}
                    className="
                      block px-3 py-2 text-xs text-slate-300
                      hover:text-emerald-300 hover:bg-[rgba(255,255,255,0.05)]
                    "
                  >
                    {r.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🌐 Language Selector */}
        <LanguageSelector />

        {/* ☀️ Theme button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${theme === "dark" ? "bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]" : "bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.27)]"}`}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-500" />
          )}
        </motion.button>

        {/* 📱 Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </motion.nav>

      {/* 📱 Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              fixed top-20 right-4 left-4 rounded-xl px-6 py-4
              backdrop-blur-md z-40
              bg-[rgba(24,24,24,0.85)] border-[rgba(255,255,255,0.08)]
            "
          >
            {/* Search */}
            <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg border">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("navbar.searchPlaceholder")}
                onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
                className="bg-transparent flex-1 text-sm outline-none"
              />
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="mb-4 rounded-lg bg-[rgba(255,255,255,0.04)] p-2">
                {results.map((r) => (
                  <motion.a
                    key={r.path}
                    href={r.path}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-1 text-sm text-slate-300 hover:text-emerald-300"
                  >
                    {r.name}
                  </motion.a>
                ))}
              </div>
            )}

            {/* Menu Items */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm border-b border-[rgba(255,255,255,0.07)]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
