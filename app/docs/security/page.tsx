"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function SecurityPage() {
  const { theme } = useTheme();

  const items = [
    {
      icon: "🧱",
      title: "Files are never sent to a server",
      desc: "All processing happens within the browser. No media is transmitted to DevLab servers or third-party services.",
    },
    {
      icon: "👁️‍🗨️",
      title: "Full privacy",
      desc: "Conversion occurs only on the user's device, providing maximum privacy.",
    },
    {
      icon: "🛡️",
      title: "FFmpeg runs in a sandbox",
      desc: "WebAssembly-based FFmpeg runs in browser isolation (sandbox) and cannot access your local system.",
    },
    {
      icon: "📁",
      title: "No data is stored",
      desc: "Temporary files are cleaned from browser memory after completion. The app does not create cookies or logs.",
    },
    {
      icon: "🔍",
      title: "Transparent processing",
      desc: "No network requests are made during conversion. This can be easily verified in developer tools.",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - Security & Privacy</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-red-400 to-cyan-400 bg-clip-text text-transparent">
          🔒 Security & Privacy
        </h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DevLab works entirely in the browser. No files are sent over the internet; all conversions happen on your device. This architecture ensures maximum privacy and security.
        </p>

        {/* Maddeler */}
        <div className="space-y-4">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`
                p-4 rounded-xl border text-sm backdrop-blur-md
                ${
                  theme === "dark"
                    ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                    : "bg-white border-gray-200 text-slate-700"
                }
              `}
            >
              <span className="text-lg font-bold">{s.icon}</span>{" "}
              <span className="font-semibold">{s.title}</span>
              <p className="mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ek Bilgi */}
        <div
          className={`mt-10 p-4 rounded-lg text-xs ${
            theme === "dark" ? "bg-[rgba(0,255,200,0.08)] text-emerald-300" : "bg-[rgba(0,200,255,0.12)] text-emerald-800"
          }`}
        >
          💡 <strong>Note:</strong> An internet connection is only used once to download FFmpeg WebAssembly files. No internet is required during conversion.
        </div>

        {/* Geri & İleri bağlantılar */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs/how-it-works">
            <span className="opacity-60 hover:opacity-90 transition">
              ← How It Works
            </span>
          </Link>
          <Link href="/docs/ffmpeg">
            <span className="opacity-60 hover:opacity-90 transition">
              FFmpeg Technology →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
