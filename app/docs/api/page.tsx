"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

type Section = {
  title: string;
  code: string;
};

export default function ApiPage() {
  const { theme } = useTheme();

  const sections: Section[] = [
    {
      title: "🧱 Tool Component Structure",
      code: `// 🔌 Tool composition (example MP4 → WEBM)
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: false }); // FFmpeg instance
await ffmpeg.load();

await ffmpeg.FS("writeFile", "input.mp4", await fetchFile(selectedFile));
await ffmpeg.run("-i", "input.mp4", "-c:v", "libvpx", "-c:a", "libvorbis", "output.webm");

const data = ffmpeg.FS("readFile", "output.webm");
const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/webm" }));`,
    },
    {
      title: "🎯 Change Format (e.g., MP4 → MP3)",
      code: `// Just change the output format.
await ffmpeg.run("-i", "input.mp4", "-vn", "-c:a", "libmp3lame", "output.mp3");`,
    },
    {
      title: "📊 Track Progress",
      code: `ffmpeg.setProgress(({ ratio }) => {
  setProgress(Math.round(ratio * 100));  // send ratio to UI
});`,
    },
    {
      title: "🎚 Apply Quality Profile",
      code: `const qualityArgs =
  quality === "fast"   ? ["-preset", "ultrafast", "-b:v", "512k"] :
  quality === "medium" ? ["-preset", "fast", "-b:v", "1M"] :
                          ["-preset", "slow", "-b:v", "2M"];`,
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <title>DevLab - API & Modularity</title>
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
          📦 API & Modularity
        </h1>

        {/* Açıklama */}
        <p
          className={`text-sm md:text-base mb-8 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DevLab runs each converter as an independent React component. FFmpeg is not global—each tool creates its own instance. This provides isolation, stability, and safety.
        </p>

        {/* Kod örnekleri */}
        <div className="space-y-6">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`
                p-4 rounded-xl border backdrop-blur-md
                ${
                  theme === "dark"
                    ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                    : "bg-white border-gray-200 text-slate-800"
                }
              `}
            >
              <div className="font-semibold mb-2">{sec.title}</div>
              <pre
                className={`
                  text-xs font-mono whitespace-pre-wrap p-3 rounded
                  ${
                    theme === "dark"
                      ? "bg-[#1212167c] text-emerald-300"
                      : "bg-slate-200 text-slate-800"
                  }
                `}
              >
                {sec.code}
              </pre>
            </motion.div>
          ))}
        </div>

        {/* Yapı Şeması */}
        <div className="mt-10">
          <h3
            className={`text-lg font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            🔨 Tool Architecture
          </h3>

          <div
            className={`text-xs rounded-lg p-4 ${
              theme === "dark"
                ? "bg-[rgba(0,255,200,0.08)] text-emerald-300"
                : "bg-[rgba(0,200,255,0.15)] text-slate-700"
            }`}
          >
            Frontend (Next.js / React) → FFmpeg Instance → WebAssembly FS →
            Processing → Output (Blob URL) → User download
          </div>
        </div>

        {/* Geri / İleri linkleri */}
        <div className="mt-10 flex justify-between text-xs">
          <Link href="/docs/ffmpeg">
            <span className="opacity-60 hover:opacity-90 transition">
              ← FFmpeg Technology
            </span>
          </Link>
          <Link href="/docs/faq">
            <span className="opacity-60 hover:opacity-90 transition">
              FAQ →
            </span>
          </Link>
        </div>
      </motion.div>
  );
}
