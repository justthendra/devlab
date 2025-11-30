"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

type FeatureItem = {
  title: string;
  desc: string;
};

type ExampleItem = {
  quality: string;
  cmd: string;
};

export default function FFmpegPage() {
  const { theme } = useTheme();

  const features: FeatureItem[] = [
    {
      title: "🎬 Video Codec: libvpx",
      desc: "Open-source VP8/VP9 codec used for WebM. Highly compatible with browsers.",
    },
    {
      title: "🔊 Audio Codec: libvorbis",
      desc: "Optimized for web-based audio compression. Lightweight and widely supported.",
    },
    {
      title: "⚙ Processing Type: WebAssembly + WASM FS",
      desc: "FFmpeg operates on a virtual filesystem within the browser (FS API).",
    },
    {
      title: "🧵 Multi-core Usage",
      desc: "Can utilize multiple CPU cores where the browser permits (Web Worker support).",
    },
    {
      title: "🧪 Preset Support",
      desc: "Speed → ultrafast • Balanced → fast • Quality → slow preset profiles are used.",
    },
  ];

  const examples: ExampleItem[] = [
    {
      quality: "⚡ Fast (Quick)",
      cmd: "ffmpeg -i input.mp4 -vf scale=854:-1 -c:v libvpx -preset ultrafast -b:v 512k -c:a libvorbis output.webm",
    },
    {
      quality: "🎯 Balanced (Medium)",
      cmd: "ffmpeg -i input.mp4 -vf scale=1280:-1 -c:v libvpx -preset fast -b:v 1M -c:a libvorbis output.webm",
    },
    {
      quality: "💎 High Quality",
      cmd: "ffmpeg -i input.mp4 -c:v libvpx -preset slow -b:v 2M -c:a libvorbis output.webm",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - FFmpeg Technology</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
          ⚙️ FFmpeg Technology
        </h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DevLab performs media conversions using a browser-run{" "}
          <span className="font-semibold">FFmpeg WebAssembly core</span>.
          FFmpeg binaries are compiled to WebAssembly and controlled via JavaScript.
        </p>

        {/* Özellik listesi */}
        <div className="space-y-4">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`
                p-4 rounded-xl border text-sm backdrop-blur-md
                ${
                  theme === "dark"
                    ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                    : "bg-white border-gray-200 text-slate-700"
                }
              `}
            >
              <div className="font-semibold mb-1">{item.title}</div>
              <p className="text-xs opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Örnek komutlar */}
        <h3
          className={`mt-10 mb-3 text-lg font-semibold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          🎚 Quality Profile Examples (FFmpeg CLI Logic)
        </h3>

        <div className="space-y-4">
          {examples.map((ex) => (
            <div
              key={ex.quality}
              className={`
                p-3 rounded-lg border text-xs font-mono
                ${
                  theme === "dark"
                    ? "bg-[#0d0d0f67] border-[rgba(255,255,255,0.08)] text-emerald-300"
                    : "bg-slate-200 border-slate-300 text-slate-800"
                }
              `}
            >
              <div className="font-semibold mb-1">{ex.quality}</div>
              <pre className="whitespace-pre-wrap">{ex.cmd}</pre>
            </div>
          ))}
        </div>

        {/* Uyarı Notu */}
        <div
          className={`
            mt-8 p-4 rounded-lg text-xs
            ${
              theme === "dark"
                ? "bg-[rgba(77,77,77,0.05)] text-yellow-300"
                : "bg-[rgba(255,255,0,0.15)] text-yellow-700"
            }
          `}
        >
          ⚠ Note: The WebAssembly-based FFmpeg build cannot use GPU acceleration or hardware encoders. All processing uses your CPU and is subject to browser limitations.
        </div>

        {/* Geri / İleri linkleri */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs/security">
            <span className="opacity-60 hover:opacity-90 transition">
              ← Security & Privacy
            </span>
          </Link>
          <Link href="/docs/api">
            <span className="opacity-60 hover:opacity-90 transition">
              API / Modularity →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
