"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function DocsPage() {
  const { theme } = useTheme();

  const sections = [
    {
      title: "🚀 Getting Started",
      link: "/docs/getting-started",
      desc: "Quick start guide for using DevLab.",
      gradient: "from-green-400 to-blue-400",
    },
    {
      title: "🧠 How It Works",
      link: "/docs/how-it-works",
      desc: "Browser-based FFmpeg pipeline and WebAssembly model.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "🔒 Security & Privacy",
      link: "/docs/security",
      desc: "No files are uploaded. All processing happens on-device.",
      gradient: "from-yellow-400 to-red-400",
    },
    {
      title: "⚙️ FFmpeg Technology",
      link: "/docs/ffmpeg",
      desc: "Libraries used, version details, and optimal quality settings.",
      gradient: "from-indigo-400 to-purple-400",
    },
    {
      title: "📦 API / Modularity",
      link: "/docs/api",
      desc: "Developer integration and tool modules overview.",
      gradient: "from-pink-400 to-red-400",
    },
    {
      title: "❓ Frequently Asked Questions",
      link: "/docs/faq",
      desc: "Troubleshooting, performance, and support.",
      gradient: "from-teal-400 to-cyan-400",
    },
  ];

  return (
    <div
      className={`
        min-h-screen w-full flex flex-col justify-start items-center py-24 px-6
        ${theme === "dark" ? "bg-transparent" : "bg-transparent"}
      `}
    >
      {/* Sayfa geçiş animasyonu */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Başlık */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-3"
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-gray-400 bg-clip-text text-transparent">
            Documentation
          </span>
        </motion.h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base max-w-2xl mx-auto mb-12 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Technical documentation for DevLab: build process, security model,
          and developer information.
        </p>

        {/* Bölüm kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section) => (
            <Link key={section.link} href={section.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  cursor-pointer p-5 rounded-xl text-left border transition
                  ${
                    theme === "dark"
                      ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.06)] text-slate-200"
                      : "bg-white border-gray-200 text-slate-800 hover:shadow-[0_0_15px_rgba(0,150,255,0.15)]"
                  }
                `}
              >
                <h3 className={`text-lg font-semibold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                  {section.title}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {section.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
