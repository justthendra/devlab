"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();

  const featuredTools = [
    {
      title: "🎬 MP4 → WEBM Converter",
      desc: "Browser-based, quality-controlled video converter.",
      link: "/tools/mp4towebm",
      gradient: "from-green-400 via-emerald-500 to-cyan-400",
      tag: "Video Tool",
    },
    {
      title: "✨ JavaScript Beautify & Minify",
      desc: "Instantly format or minimize JS code.",
      link: "/tools/jsbeautify",
      gradient: "from-yellow-400 via-amber-500 to-orange-400",
      tag: "Dev Tool",
    },
  ];

  const quickLinks = [
    { label: "All Tools", href: "/tools" },
    { label: "JSON/Lua Formatter", href: "/tools/formatter" },
    { label: "QR Code Generator", href: "/tools/qrcode" },
    { label: "Color Palette Extractor", href: "/tools/colorpalette" },
  ];

  const textMain = theme === "light" ? "text-slate-900" : "text-white";
  const textSub = theme === "light" ? "text-slate-600" : "text-slate-300";

  return (
    <div className="min-h-screen px-6 pb-20 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] text-slate-300 mb-4 ${theme === "dark" ? "bg-[rgba(22,22,22,0.05)] border border-[rgba(148,163,184,0.3)] text-slate-300" : "bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-slate-700"}`}>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>DevLab • Browser-based toolset</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Convert, Optimize,
              </span>
              <br />
              <span className={textMain}> from a single hub.</span>
            </h1>

            <p className={`${textSub} text-sm md:text-base max-w-xl mt-3`}>
              DevLab offers video, audio, image, and code tools{" "}
              <span className="font-semibold text-emerald-400">
                entirely in the browser
              </span>{" "}
              no installation, no account – just open and use.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950
                  hover:opacity-90 hover:-translate-y-[1px] transition"
              >
                Explore Tools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

  
            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
                Quick Links
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1 rounded-full ${theme === "dark" ? "bg-[rgba(22,22,22,0.05)] border border-[rgba(148,163,184,0.3)] text-slate-300 hover:border-emerald-400 hover:text-emerald-200" : "bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-slate-700 hover:border-emerald-600 hover:text-emerald-500"} transition`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full space-y-4">
            {featuredTools.map((tool, idx) => (
              <Link key={tool.link} href={tool.link}>
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="cursor-pointer rounded-2xl p-[1px] py-1"
                >
                  <div
                    className={`
                      rounded-2xl px-4 py-4 flex flex-col gap-2
                      bg-[rgba(11,11,12,0.04)] border border-[rgba(148,163,184,0.35)]
                    `}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] text-slate-400">{tool.tag}</p>
                      <span className="text-[10px] text-slate-500">
                        Featured Tool
                      </span>
                    </div>
                    <h3
                      className={`text-[15px] font-semibold bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`}
                    >
                      {tool.title}
                    </h3>
                    <p className="text-[12px] text-slate-400">{tool.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
    
  );
}
