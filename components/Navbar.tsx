"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Menu, X } from "lucide-react";

// 🔍 Arama içeriği
const tools = [
  { name: "🎬 MP4 → WEBM", path: "/tools/mp4towebm" },
  { name: "🎧 MP4 → MP3", path: "/tools/mp4tomp3" },
  { name: "📷 JPG → WEBP", path: "/tools/jpgtowebp" },
  { name: "🌀 GIF Optimize", path: "/tools/gifoptimize" },
  { name: "🎨 Gradient Generator", path: "/tools/cssglow" },
  { name: "🧠 JSON + Lua Formatter", path: "/tools/formatter" },
  { name: "🔣 QR Code Generator", path: "/tools/qrcode" },
  { name: "🎧 MP3 Downloader", path: "/tools/mp3downloader" },
  { name: "🎨 AI Image Generator", path: "/tools/image-generator" },
];

const navItems = [
  { label: "Tools", path: "/tools" },
  { label: "Docs", path: "/docs" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<typeof tools>([]);

  // Arama filtreleme
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
  }, [query]);

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
          <span
            className={`text-sm font-semibold ${
              theme === "dark" ? "text-slate-200" : "text-slate-900"
            }`}
          >
            DevLab
          </span>
        </Link>

        {/* 📌 Desktop Menü */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm transition ${
                  isActive
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

        {/* 🔍 Arama alanı (desktop) */}
        <div className="hidden md:block relative">
          <div
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border w-52
              ${theme === "dark"
                ? "bg-[rgba(15,15,18,0.09)] border-[rgba(255,255,255,0.07)]"
                : "bg-white border-slate-300"}
            `}
          >
            <Search className="w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
              placeholder="Search tools..."
              className="bg-transparent outline-none text-xs flex-1 text-slate-300"
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

        {/* ☀️ Tema butonu */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-500" />
          )}
        </motion.button>

        {/* 📱 Menü butonu */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </motion.nav>

      {/* 📱 Mobile Menü Panel */}
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
            {/* Arama */}
            <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg border">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools..."
                onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
                className="bg-transparent flex-1 text-sm outline-none"
              />
            </div>

            {/* Sonuçlar */}
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

            {/* Menü Elemanları */}
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
