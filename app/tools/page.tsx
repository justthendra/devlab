"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function ToolsPage() {
  const { theme } = useTheme();

  const tools = [
  {
    title: "🎬 MP4 → WEBM",
    link: "/tools/mp4towebm",
    desc: "Browser-based format converter.",
    gradient: "from-green-400 via-emerald-500 to-cyan-400",
  },
  {
    title: "🎧 MP4 → MP3",
    link: "/tools/mp4tomp3",
    desc: "Convert video to audio.",
    gradient: "from-indigo-400 via-purple-500 to-pink-400",
  },
  {
    title: "🖼 JPG → WEBP",
    link: "/tools/jpgtowebp",
    desc: "Image optimization.",
    gradient: "from-yellow-400 via-orange-500 to-amber-400",
  },
  {
    title: "🌀 GIF Optimize",
    link: "/tools/gifoptimize",
    desc: "GIF compression.",
    gradient: "from-green-300 via-lime-500 to-yellow-300",
  },
  {
    title: "🎵 MP3 Downloader",
    link: "/tools/mp3downloader",
    desc: "Download MP3s from YouTube and other services.",
    gradient: "from-purple-400 via-fuchsia-500 to-red-400",
  },
  {
    title: "🌈 CSS Glow Generator",
    link: "/tools/cssglow",
    desc: "Customizable CSS glow/orb generator.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-400",
  },
  {
    title: "🧩 JSON/Lua Formatter",
    link: "/tools/formatter",
    desc: "Paste your code and format it.",
    gradient: "from-sky-400 via-teal-500 to-emerald-400",
  },
  {
    title: "🔗 QR Code Generator",
    link: "/tools/qrcode",
    desc: "Create customizable QR codes.",
    gradient: "from-orange-400 via-red-500 to-pink-400",
  },
  {
    title: "🎨 Color Palette Extractor",
    link: "/tools/colorpalette",
    desc: "Extract dominant color palettes from images.",
    gradient: "from-rose-400 via-pink-500 to-violet-400",
  },
  {
    title: "✨ JavaScript Beautify & Minify",
    link: "/tools/jsbeautify",
    desc: "JavaScript formatting and minification.",
    gradient: "from-yellow-400 via-amber-500 to-orange-400",
  },
  {
    title: "🖼 AI Image Generator",
    link: "/tools/image-generator",
    desc: "Generate images from text prompts using AI.",
    gradient: "from-pink-400 via-purple-500 to-indigo-400",
  },
];


  return (
    <div
      className={`
        min-h-screen w-full flex justify-center items-start px-6 pt-24 pb-12 relative
        ${theme === "dark" ? "bg-transparent" : "bg-transparent"}
      `}
    >
      <title>DevLab - Tools Hub</title>
      <motion.div
        initial={{ opacity: 0, y: 30 }}    // biraz daha aşağıdan gelsin
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Başlık */}
        <motion.h1
          initial={{ scale: 1.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-[#9999FF] bg-clip-text text-transparent">
            Tools Hub
          </span>
        </motion.h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base max-w-2xl mx-auto mb-12 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Browser-based media conversion tools.
          <br />
          <span className={`${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
            No data is uploaded to any server.
          </span>
        </p>

        {/* Araç Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link key={tool.link} href={tool.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  cursor-pointer p-5 rounded-xl text-left transition border
                  ${
                    theme === "dark"
                      ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.06)] text-slate-200 hover:shadow-[0_0_25px_rgba(0,255,220,0.3)]"
                      : "bg-white border-gray-200 text-slate-800 hover:shadow-[0_0_15px_rgba(0,150,255,0.15)]"
                  }
                `}
              >
                <h3 className={`text-lg font-semibold bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`}>
                  {tool.title}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {tool.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
