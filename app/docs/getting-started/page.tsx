"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function GettingStartedPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const steps = [
    { key: "step1", step: "1" },
    { key: "step2", step: "2" },
    { key: "step3", step: "3" },
    { key: "step4", step: "4" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl w-full"
    >
      <title>DevLab - Getting Started</title>
      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
        {t("docs.gettingStarted.title")}
      </h1>

      <p
        className={`text-sm md:text-base mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {t("docs.gettingStarted.description")}
      </p>

      {/* Adımlar */}
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`
              p-4 rounded-xl border text-sm backdrop-blur-md
              ${theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                : "bg-white border-gray-200 text-slate-700"
              }
            `}
          >
            <span className="text-green-400 font-bold text-lg">{step.step}.</span>{" "}
            <span className="font-semibold">{t(`docs.gettingStarted.steps.${step.key}.title`)}</span> – {t(`docs.gettingStarted.steps.${step.key}.desc`)}
          </motion.div>
        ))}
      </div>

      {/* Araçlara yönlendirme */}
      <div className="mt-8">
        <Link href="/tools">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`px-5 py-3 rounded-lg text-center text-sm cursor-pointer transition
              ${theme === "dark"
                ? "bg-[rgba(0,255,200,0.12)] hover:bg-[rgba(0,255,200,0.18)] text-slate-200"
                : "bg-[rgba(0,200,255,0.15)] hover:bg-[rgba(0,200,255,0.25)] text-slate-800"
              }
            `}
          >
            {t("docs.gettingStarted.goToTools")}
          </motion.div>
        </Link>
      </div>

      {/* Geri butonu */}
      <div className="mt-10 flex justify-between text-xs">
        <Link href="/docs">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.gettingStarted.backToDocs")}
          </span>
        </Link>
        <Link href="/docs/how-it-works">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.gettingStarted.nextPage")}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
