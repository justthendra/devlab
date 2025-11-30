"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

type FAQ = {
  q: string;
  a: string;
};

export default function FAQPage() {
  const { theme } = useTheme();

  const faqs: FAQ[] = [
    {
      q: "📌 Why does conversion take long?",
      a: "Processing uses your device's CPU. Larger files take longer to convert.",
    },
    {
      q: "🚨 Stuck at 'FFmpeg loading…'?",
      a: "On first launch, FFmpeg WebAssembly files are fetched and cached in memory. Slow connections can delay this. Try refreshing the page.",
    },
    {
      q: "🔒 Is my file uploaded to the internet?",
      a: "No. Everything happens in your browser. No data is sent to any server or external service.",
    },
    {
      q: "📱 Does it work on mobile?",
      a: "Mobile browsers may perform worse. For stability, a desktop browser is recommended.",
    },
    {
      q: "🎞 Conversion stopped or the progress bar froze—how to fix?",
      a: "Your browser memory may be full. Refresh and try again. Chrome tends to handle large files better.",
    },
    {
      q: "🖥 Which browsers are supported?",
      a: "Chrome, Edge, and Brave work well. Safari may have reduced WebAssembly performance.",
    },
    {
      q: "🔌 Is the GPU used?",
      a: "No. Browser-based FFmpeg uses only the CPU; GPU acceleration isn't supported.",
    },
    {
      q: "🧩 Can other formats (GIF, MP3, etc.) be added?",
      a: "Yes. New tools can be added by adjusting FFmpeg command parameters while keeping the same structure.",
    },
    {
      q: "🧠 Access to source code or docs?",
      a: "Coming soon on GitHub. DevLab is designed with a modular, extensible architecture.",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - Frequently Asked Questions</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
          ❓ Frequently Asked Questions
        </h1>

        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Common issues and solutions when using DevLab.
        </p>

        {/* FAQ Listesi */}
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className={`
                p-4 rounded-xl border backdrop-blur-md
                ${
                  theme === "dark"
                    ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                    : "bg-white border-gray-200 text-slate-700"
                }
              `}
            >
              <p className="font-semibold">{f.q}</p>
              <p className="mt-1 text-xs opacity-80">{f.a}</p>
            </motion.div>
          ))}
        </div>

        {/* Son Not */}
        <div
          className={`
            mt-10 p-4 rounded-lg text-xs
            ${
              theme === "dark"
                ? "bg-[rgba(0,255,150,0.08)] text-emerald-300"
                : "bg-[rgba(150,255,200,0.15)] text-emerald-800"
            }
          `}
        >
          📬 Need help? Support and GitHub issue tracking will be available soon.
        </div>

        {/* Docs bitiş alanı */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs/api">
            <span className="opacity-60 hover:opacity-90 transition">
              ← API & Modularity
            </span>
          </Link>
          <Link href="/docs">
            <span className="opacity-60 hover:opacity-90 transition">
              Back to documentation home →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
