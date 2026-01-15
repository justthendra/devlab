"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function FFmpegPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const detailKeys = ["d1", "d2", "d3", "d4"];

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
        {t("docs.ffmpeg.title")}
      </h1>

      {/* Açıklama */}
      <p
        className={`text-sm md:text-base mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {t("docs.ffmpeg.description")}
      </p>

      {/* Özellik listesi */}
      <div className="space-y-4">
        {detailKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`
              p-4 rounded-xl border text-sm backdrop-blur-md
              ${theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                : "bg-white border-gray-200 text-slate-700"
              }
            `}
          >
            <div className="font-semibold mb-1">{t(`docs.ffmpeg.details.${key}.title`)}</div>
            <p className="text-xs opacity-80">{t(`docs.ffmpeg.details.${key}.desc`)}</p>
          </motion.div>
        ))}
      </div>

      {/* Geri / İleri linkleri */}
      <div className="mt-10 flex justify-between text-xs">
        <Link href="/docs">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.ffmpeg.backToDocs")}
          </span>
        </Link>
        <Link href="/docs/api">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.ffmpeg.nextPage")}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
