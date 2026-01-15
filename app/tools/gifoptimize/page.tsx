"use client";

import { motion } from "framer-motion";
import GifOptimizeTool from "@/components/GifOptimizeTool";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function GifOptimizePage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - GIF Optimize</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            {t("pageHeaders.gifoptimize.title")}
          </span>
        </h1>
        <p className={`${theme === "dark" ? "text-slate-300" : "text-slate-600"} text-sm py-6 md:text-base`}>
          {t("pageHeaders.gifoptimize.desc1")}
          <br />
          <span className={`${theme === "dark" ? "text-emerald-400" : "text-blue-600"} font-medium`}>
            {t("pageHeaders.gifoptimize.desc2")}
          </span>
        </p>
      </motion.div>

      <GifOptimizeTool />
    </div>
  );
}
