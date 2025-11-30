"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function GettingStartedPage() {
  const { theme } = useTheme();

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - Getting Started</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          🚀 Getting Started
        </h1>

        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DevLab is a modern platform for media conversion that runs entirely in your browser. No files are uploaded; conversions happen 100% on your device.
        </p>

        {/* Adımlar */}
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Choose a tool",
              desc: "Pick the converter you need from the home page or Tools Hub (e.g., MP4 → WEBM).",
            },
            {
              step: "2",
              title: "Upload your file",
              desc: "Drag and drop or click to select your video/image. Nothing is sent to the internet.",
            },
            {
              step: "3",
              title: "Pick a quality",
              desc: "Choose fast, medium, or high quality (FFmpeg parameters are applied automatically).",
            },
            {
              step: "4",
              title: "Convert and download",
              desc: "Conversion happens entirely in the browser and provides a downloadable output.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`
                p-4 rounded-xl border text-sm backdrop-blur-md
                ${
                  theme === "dark"
                    ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                    : "bg-white border-gray-200 text-slate-700"
                }
              `}
            >
              <span className="text-green-400 font-bold text-lg">{step.step}.</span>{" "}
              <span className="font-semibold">{step.title}</span> – {step.desc}
            </motion.div>
          ))}
        </div>

        {/* Araçlara yönlendirme */}
        <div className="mt-8">
          <Link href="/tools">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`px-5 py-3 rounded-lg text-center text-sm cursor-pointer transition
                ${
                  theme === "dark"
                    ? "bg-[rgba(0,255,200,0.12)] hover:bg-[rgba(0,255,200,0.18)] text-slate-200"
                    : "bg-[rgba(0,200,255,0.15)] hover:bg-[rgba(0,200,255,0.25)] text-slate-800"
                }
              `}
            >
              Go to Tools Hub →
            </motion.div>
          </Link>
        </div>

        {/* Geri butonu */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs">
            <span className="opacity-60 hover:opacity-90 transition">
              ← Documentation
            </span>
          </Link>
          <Link href="/docs/how-it-works">
            <span className="opacity-60 hover:opacity-90 transition">
              How It Works →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
