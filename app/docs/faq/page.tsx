"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"];

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
        {t("docs.faq.title")}
      </h1>

      <p
        className={`text-sm md:text-base mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {t("docs.faq.description")}
      </p>

      {/* FAQ Listesi */}
      <div className="space-y-4">
        {faqKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`
              p-4 rounded-xl border backdrop-blur-md
              ${theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                : "bg-white border-gray-200 text-slate-700"
              }
            `}
          >
            <p className="font-semibold">{t(`docs.faq.questions.${key}.q`)}</p>
            <p className="mt-1 text-xs opacity-80">{t(`docs.faq.questions.${key}.a`)}</p>
          </motion.div>
        ))}
      </div>

      {/* Son Not */}
      <div
        className={`
          mt-10 p-4 rounded-lg text-xs
          ${theme === "dark"
            ? "bg-[rgba(0,255,150,0.08)] text-emerald-300"
            : "bg-[rgba(150,255,200,0.15)] text-emerald-800"
          }
        `}
      >
        {t("docs.faq.helpNote")}
      </div>

      {/* Docs bitiş alanı */}
      <div className="mt-10 flex justify-between text-xs">
        <Link href="/docs/api">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.faq.prevPage")}
          </span>
        </Link>
        <Link href="/docs">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.faq.backToDocs")}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
