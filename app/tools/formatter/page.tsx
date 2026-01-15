"use client";

import CodeFormatterTool from "@/components/CodeFormatterTool";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function FormatterPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - JSON/Lua Formatter</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            {t("pageHeaders.formatter.title")}
          </span>
        </h1>
        <p className="text-sm text-slate-300 mb-8 py-3 text-center max-w-2xl mx-auto">
          {t("pageHeaders.formatter.desc1")}
          <br />
          <span className="text-emerald-400 font-medium">{t("pageHeaders.formatter.desc2")}</span>
        </p>
      </motion.div>

      <CodeFormatterTool />
    </div>
  );
}
