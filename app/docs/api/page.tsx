"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function ApiPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const featureKeys = ["f1", "f2", "f3", "f4"];

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
        {t("docs.api.title")}
      </h1>

      {/* Açıklama */}
      <p
        className={`text-sm md:text-base mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {t("docs.api.description")}
      </p>

      {/* Özellikler */}
      <div className="space-y-4">
        {featureKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`
              p-4 rounded-xl border text-sm backdrop-blur-md
              ${theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                : "bg-white border-gray-200 text-slate-800"
              }
            `}
          >
            <div className="font-semibold mb-1">{t(`docs.api.features.${key}.title`)}</div>
            <p className="text-xs opacity-80">{t(`docs.api.features.${key}.desc`)}</p>
          </motion.div>
        ))}
      </div>

      {/* Geri / İleri linkleri */}
      <div className="mt-10 flex justify-between text-xs">
        <Link href="/docs">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.api.backToDocs")}
          </span>
        </Link>
        <Link href="/docs/faq">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.api.nextPage")}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
