"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Search } from "lucide-react";
import { useState, useMemo } from "react";

const TOOL_INDEX = [
  {
    name: "MP4 → WEBM",
    path: "/tools/mp4towebm",
    keywords: ["mp4", "webm", "video", "convert"],
  },
  {
    name: "MP4 → MP3",
    path: "/tools/mp4tomp3",
    keywords: ["mp4", "mp3", "audio"],
  },
  {
    name: "JPG → WEBP",
    path: "/tools/jpgtowebp",
    keywords: ["jpg", "webp", "image"],
  },
  {
    name: "GIF Optimize",
    path: "/tools/gifoptimize",
    keywords: ["gif", "optimize"],
  },
  {
    name: "JSON/Lua Formatter",
    path: "/tools/formatter",
    keywords: ["json", "lua", "format"],
  },
  {
    name: "QR Code Generator",
    path: "/tools/qrcode",
    keywords: ["qr", "qrcode", "qr code"],
  },
  {
    name: "Color Palette Extractor",
    path: "/tools/colorpalette",
    keywords: ["color", "palette", "extractor"],
  },
  {
    name: "CSS Glow Generator",
    path: "/tools/cssglow",
    keywords: ["css", "glow", "gradient"],
  },
  {
    name: "JS Beautify & Minify",
    path: "/tools/jsbeautify",
    keywords: ["js", "javascript", "beautify", "minify"],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const navItems = [
    { label: "Tools", path: "/tools" },
    { label: "About", path: "/about" },
    { label: "Docs", path: "/docs" },
  ];

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return TOOL_INDEX.filter((t) => {
      return (
        t.name.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }).slice(0, 6);
  }, [query]);

  const handleSearchEnter = () => {
    if (results.length > 0) {
      router.push(results[0].path);
      setFocused(false);
      setQuery("");
    } else if (query.trim()) {
      router.push("/tools");
      setFocused(false);
    }
  };

  return (
    <div className="w-full flex justify-center mt-6 fixed top-0 z-50 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          max-w-5xl w-full mx-4 px-4 py-2 flex items-center gap-4
          rounded-full pointer-events-auto
          backdrop-blur-md border
          ${
            theme === "dark"
              ? "bg-[rgba(12,12,14,0.09)] border-[rgba(255,255,255,0.06)]"
              : "bg-[rgba(245,245,247,0.92)] border-[rgba(0,0,0,0.06)]"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-1">
          <span
            className={`hidden sm:inline text-sm font-semibold tracking-wide ${
              theme === "dark" ? "text-slate-100" : "text-slate-900"
            }`}
          >
            DevLab
          </span>
        </Link>

        {/* Orta kısım: nav linkler + search */}
        <div className="flex items-center gap-4 flex-1">
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xs font-medium transition ${
                    isActive
                      ? theme === "dark"
                        ? "text-emerald-300"
                        : "text-emerald-600"
                      : theme === "dark"
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative ml-auto">
            <div
              className={`
                flex items-center gap-1 px-3 py-1.5 rounded-full text-xs
                border transition-colors w-40 sm:w-52
                ${
                  theme === "dark"
                    ? "bg-[rgba(12,14,17,0.04)] border-[rgba(88,88,88,0.4)]"
                    : "bg-[rgba(248,249,252,0.9)] border-[rgba(90,90,90,0.4)]"
                }
              `}
            >
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchEnter();
                  }
                }}
                placeholder="Search tools…"
                className={`
                  bg-transparent outline-none text-[11px] flex-1
                  ${
                    theme === "dark"
                      ? "text-slate-100 placeholder:text-slate-500"
                      : "text-slate-800 placeholder:text-slate-500"
                  }
                `}
              />
            </div>

            {/* Sonuç dropdown'u */}
            {focused && results.length > 0 && (
              <div
                className={`
                  absolute mt-1 right-0 left-0 rounded-2xl text-[11px] z-40
                  border shadow-lg overflow-hidden
                  ${
                    theme === "dark"
                      ? "bg-[rgba(17,20,26,0.3)] border-[rgba(104,104,104,0.35)]"
                      : "bg-white border-[rgba(148,163,184,0.45)]"
                  }
                `}
              >
                {results.map((tool) => (
                  <button
                    key={tool.path}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      router.push(tool.path);
                      setQuery("");
                      setFocused(false);
                    }}
                    className={`
                      w-full text-left px-3 py-1.5 cursor-pointer hover:bg-[rgba(41,41,41,0.09)]
                      ${
                        theme === "dark"
                          ? "text-slate-200"
                          : "text-slate-800"
                      }
                    `}
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tema butonu + profil */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`
            w-8 h-8 flex items-center justify-center rounded-full
            border transition cursor-pointer
            ${
              theme === "dark"
                ? "bg-[rgba(9,10,12,0.25)] border-[rgba(100,100,100,0.4)] hover:border-[rgba(179,179,179,0.4)]"
                : "bg-[rgba(243,244,246,0.95)] border-[rgba(148,163,184,0.4)]"
            }
          `}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-500" />
          )}
        </motion.button>
      </motion.nav>
    </div>
  );
}
