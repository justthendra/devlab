"use client";

import { motion } from "framer-motion";
import JpgToWebpTool from "@/components/JpgToWebpTool";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function JpgToWebpPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`
        min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
        ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}
      `}
    >
      <title>DevLab - JPG to WEBP</title>
      <div className="absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.15)] blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-50px] right-[-40px] w-[350px] h-[350px] bg-[rgba(0,150,255,0.15)] blur-[200px] rounded-full animate-pulse" />
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-3xl mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            {t("pageHeaders.jpgtowebp.title")}
          </span>
        </h1>

        <p className={`text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
          {t("pageHeaders.jpgtowebp.desc1")}
          <br />
          <span className={`font-medium ${theme === "dark" ? "text-emerald-400" : "text-blue-600"}`}>
            {t("pageHeaders.jpgtowebp.desc2")}
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <JpgToWebpTool />
      </motion.div>
    </div>
  );
}
