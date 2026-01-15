"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ImageGeneratorTool from "@/components/ImageGeneratorTool";
import { useLanguage } from "@/lib/LanguageContext";

export default function AIImageGeneratorPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto w-full px-5 pb-16 mt-24">

      {/* Başlık */}
      <h1
        className="
          text-3xl md:text-5xl font-bold text-center mb-4 
          bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 
          bg-clip-text text-transparent
        "
      >
        {t("pageHeaders.imagegenerator.title")}
      </h1>

      {/* Açıklama */}
      <p
        className={`text-sm mb-8 text-center ${theme === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
      >
        {t("pageHeaders.imagegenerator.desc1")}
        <br />
        <span className="text-emerald-400 font-medium">{t("pageHeaders.imagegenerator.desc2")}</span>
      </p>

      {/* Araç */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <ImageGeneratorTool />
      </motion.div>
    </div>
  );
}
