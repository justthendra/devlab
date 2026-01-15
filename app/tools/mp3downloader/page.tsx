"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Mp3DownloaderTool from "@/components/Mp3DownloaderTool";
import { useLanguage } from "@/lib/LanguageContext";

export default function Mp3DownloaderPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`
        min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
        ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}
      `}
    >
      <title>DevLab - MP3 Downloader</title>
      {/* Orb effect */}
      <div className="absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.15)] blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-50px] right-[-40px] w-[350px] h-[350px] bg-[rgba(0,150,255,0.15)] blur-[200px] rounded-full animate-pulse" />
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-3xl mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t("pageHeaders.mp3downloader.title")}
          </span>
        </h1>

        <p
          className={`
            text-sm md:text-base py-2
            ${theme === "dark" ? "text-slate-300" : "text-slate-600"}
          `}
        >
          {t("pageHeaders.mp3downloader.desc1")}
          <br />
          <span
            className={`
              font-medium
              ${theme === "dark" ? "text-emerald-400" : "text-blue-600"}
            `}
          >
            {t("pageHeaders.mp3downloader.desc2")}
          </span>
        </p>
      </motion.div>

      {/* Tool */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative z-10 w-full max-w-3xl text-center"
      >
        <Mp3DownloaderTool />
      </motion.div>
    </div>
  );
}
