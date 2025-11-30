"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function HowItWorksPage() {
  const { theme } = useTheme();

  const steps = [
    {
      title: "📂 1. File is loaded in the browser",
      desc: "Your video is selected from your device; it is never sent to a server.",
    },
    {
      title: "⚙️ 2. FFmpeg WebAssembly starts",
      desc: "FFmpeg runs via a WASM core controlled by JavaScript (client-side).",
    },
    {
      title: "💻 3. Video is processed in memory",
      desc: "Algorithms begin conversion and optimize based on the selected quality.",
    },
    {
      title: "🚀 4. Output file is created",
      desc: "The resulting WebM file is produced in memory and provided for download.",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - How It Works</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
          🧠 How It Works
        </h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DevLab runs FFmpeg technology via WebAssembly directly in your browser. Conversion uses your device's CPU and no data is sent to any server.
        </p>

        {/* Süreç kutuları */}
        <div className="space-y-4">
          {steps.map((s, i) => (
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
              <span className="font-semibold">{s.title}</span>
              <br />
              <span>{s.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Teknik tablo */}
        <div className="mt-10">
          <h3
            className={`text-lg font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            📊 Technical Comparison
          </h3>

          <table
            className={`w-full text-xs rounded-lg overflow-hidden ${
              theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] text-slate-300"
                : "bg-white text-slate-700"
            }`}
          >
            <thead>
              <tr className={theme === "dark" ? "bg-[rgba(15,15,17,0.46)]" : "bg-slate-200"}>
                <th className="p-2">Feature</th>
                <th className="p-2">Browser-based</th>
                <th className="p-2">Server-based</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Privacy</td>
                <td className="p-2 text-emerald-400 font-semibold">✔ High</td>
                <td className="p-2 text-rose-400">✘ Low</td>
              </tr>
              <tr>
                <td className="p-2">Performance</td>
                <td className="p-2">Device CPU power</td>
                <td className="p-2">Shared server resources</td>
              </tr>
              <tr>
                <td className="p-2">Speed</td>
                <td className="p-2">High (local processing)</td>
                <td className="p-2">Medium</td>
              </tr>
              <tr>
                <td className="p-2">Security Risk</td>
                <td className="p-2 text-emerald-400 font-semibold">Low</td>
                <td className="p-2 text-rose-400">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Geri & İleri bağlantılar */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs">
            <span className="opacity-60 hover:opacity-90 transition">
              ← Documentation
            </span>
          </Link>
          <Link href="/docs/security">
            <span className="opacity-60 hover:opacity-90 transition">
              Security & Privacy →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
