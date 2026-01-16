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
  const { t, language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<{ name: string; path: string }[]>([]);

  // Language flags for mobile menu
  const languageFlags: Record<string, string> = {
    en: "🇬🇧",
    tr: "🇹🇷",
    de: "🇩🇪",
    fr: "🇫🇷",
    es: "🇪🇸",
  };

  const languageNames: Record<string, string> = {
    en: "English",
    tr: "Türkçe",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
  };

  const languages = ["en", "tr", "de", "fr", "es"];

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
    <div className="w-full flex justify-center mt-6 fixed top-0 z-50 px-4 sm:px-0">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          max-w-5xl w-full px-5 py-3 flex items-center gap-4 h-16
          backdrop-blur-xl border rounded-full pointer-events-auto shadow-sm
          ${theme === "dark"
            ? "bg-[rgba(18,18,23,0.39)] border-[rgba(255,255,255,0.08)] shadow-black/20"
            : "bg-[rgba(255,255,255,0.7)] border-[rgba(0,0,0,0.05)] shadow-slate-200/50"}
        `}
      >
        {/* 🔥 Logo */}
        <Link href="/" className="flex items-center gap-2 mr-auto z-10">
          <Image
            src={theme === "dark" ? "/DevLab.png" : "/DevLabDark.png"}
            alt="DevLab Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className={`font-bold text-lg hidden sm:block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            DevLab
          </span>
        </Link>

        {/* 📌 Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 backdrop-blur-sm px-2 py-1.5 rounded-full border border-transparent">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-1.5 text-sm font-medium transition-colors"
                onMouseEnter={() => setFocused(false)} // Clear search focus if hovering menu
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-nav-active"
                    className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-400/10' : 'bg-black/5'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${isActive
                  ? (theme === 'dark' ? "text-white" : "text-black")
                  : (theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900")
                  }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 🔍 Search area (desktop) */}
        <div className="hidden md:block relative group">
          <div
            className={`
              flex items-center gap-2 px-3 py-2 rounded-full text-xs border w-60 transition-all duration-300
              ${focused ? 'ring-2 ring-emerald-500/20 w-64' : ''}
              ${theme === "dark"
                ? "bg-white/5 border-white/10 focus-within:bg-black/20"
                : "bg-black/5 border-black/5 focus-within:bg-white"}
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
              className={`bg-transparent outline-none text-xs flex-1 ${theme === "dark" ? "text-slate-300 placeholder:text-slate-600" : "text-slate-900 placeholder:text-slate-500"}`}
            />
          </div>

          <AnimatePresence>
            {focused && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`
                  absolute top-full right-0 mt-3 w-80 rounded-2xl border backdrop-blur-xl
                  shadow-2xl overflow-hidden z-50
                  ${theme === 'dark'
                    ? 'bg-[#121215]/90 border-white/10 shadow-black/50'
                    : 'bg-white/90 border-black/5 shadow-slate-200/50'}
                `}
              >
                <div className="p-2">
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 px-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    Results
                  </div>
                  {results.slice(0, 5).map((r) => (
                    <Link
                      key={r.path}
                      href={r.path}
                      className={`
                        flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors
                        ${theme === 'dark'
                          ? 'text-slate-300 hover:text-white hover:bg-white/10'
                          : 'text-slate-700 hover:text-black hover:bg-black/5'}
                      `}
                    >
                      <Search size={14} className="opacity-50" />
                      <span className="text-sm">{r.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🌐 Language & Theme (Desktop) */}
        <div className="hidden md:flex items-center gap-3 pl-2 border-l border-white/10">
          <LanguageSelector />
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${theme === "dark" ? "hover:bg-white/10 text-yellow-300" : "hover:bg-black/5 text-indigo-500"}`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* 📱 Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/5 text-black'}`}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.nav>

      {/* 📱 Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`
              fixed top-24 left-0 right-0 mx-4 p-5 rounded-3xl
              backdrop-blur-2xl z-40 shadow-2xl border
              ${theme === "dark"
                ? "bg-[#121215]/95 border-white/10 shadow-black/50"
                : "bg-white/95 border-black/5 shadow-xl"}
            `}
          >
            {/* Search */}
            <div className={`flex items-center gap-3 mb-6 px-4 py-3 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
              <Search className="w-5 h-5 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("navbar.searchPlaceholder")}
                onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
                className={`bg-transparent flex-1 text-base outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                autoFocus
              />
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="mb-6 rounded-2xl bg-black/20 p-2 max-h-48 overflow-y-auto">
                {results.map((r) => (
                  <Link
                    key={r.path}
                    href={r.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <Search size={14} />
                    {r.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Menu Items */}
            <div className="flex flex-col gap-2 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    flex items-center justify-between px-4 py-3 text-base font-medium rounded-2xl transition-all
                    ${theme === 'dark'
                      ? 'text-slate-300 hover:bg-white/10 hover:text-white hover:pl-6'
                      : 'text-slate-600 hover:bg-black/5 hover:text-black hover:pl-6'}
                  `}
                >
                  {item.label}
                  <div className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-black/10'}`} />
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className={`pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Theme</span>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10 text-yellow-300' : 'bg-black/5 border-black/5 text-indigo-500'}`}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </span>
                </button>
              </div>

              <div>
                <span className={`text-sm font-medium block mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Language</span>
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as any);
                        setTimeout(() => setMenuOpen(false), 200);
                      }}
                      className={`
                          flex items-center gap-2 px-3 py-2 rounded-xl border transition-all shrink-0
                          ${language === lang
                          ? "bg-emerald-500/10 border-emerald-500/50"
                          : theme === "dark"
                            ? "bg-white/5 border-white/5"
                            : "bg-gray-50 border-gray-100"}
                        `}
                    >
                      <span className="text-lg">{languageFlags[lang]}</span>
                      <span className={`text-xs font-bold uppercase ${language === lang ? "text-emerald-400" : theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {lang}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
