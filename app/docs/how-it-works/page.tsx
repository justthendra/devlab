"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HowItWorksPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const steps = ["step1", "step2", "step3", "step4"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl w-full"
    >
      <title>DevLab - How It Works</title>
      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
        {t("docs.howItWorks.title")}
      </h1>

      {/* Açıklama */}
      <p
        className={`text-sm md:text-base mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {t("docs.howItWorks.description")}
      </p>

      {/* Süreç kutuları */}
      <div className="space-y-4">
        {steps.map((key, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              p-4 rounded-xl border text-sm backdrop-blur-md
              ${theme === "dark"
                ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.05)] text-slate-200"
                : "bg-white border-gray-200 text-slate-700"
              }
            `}
          >
            <span className="font-semibold">{t(`docs.howItWorks.steps.${key}.title`)}</span>
            <br />
            <span>{t(`docs.howItWorks.steps.${key}.desc`)}</span>
          </motion.div>
        ))}
      </div>

      {/* Teknik tablo */}
      <div className="mt-10">
        <h3
          className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"
            }`}
        >
          {t("docs.howItWorks.comparison.title")}
        </h3>

        <table
          className={`w-full text-xs rounded-lg overflow-hidden ${theme === "dark"
              ? "bg-[rgba(19,20,22,0.23)] text-slate-300"
              : "bg-white text-slate-700"
            }`}
        >
          <thead>
            <tr className={theme === "dark" ? "bg-[rgba(15,15,17,0.46)]" : "bg-slate-200"}>
              <th className="p-2">{t("docs.howItWorks.comparison.feature")}</th>
              <th className="p-2">{t("docs.howItWorks.comparison.browserBased")}</th>
              <th className="p-2">{t("docs.howItWorks.comparison.serverBased")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">{t("docs.howItWorks.comparison.privacy")}</td>
              <td className="p-2 text-emerald-400 font-semibold">{t("docs.howItWorks.comparison.privacyHigh")}</td>
              <td className="p-2 text-rose-400">{t("docs.howItWorks.comparison.privacyLow")}</td>
            </tr>
            <tr>
              <td className="p-2">{t("docs.howItWorks.comparison.performance")}</td>
              <td className="p-2">{t("docs.howItWorks.comparison.deviceCpu")}</td>
              <td className="p-2">{t("docs.howItWorks.comparison.sharedServer")}</td>
            </tr>
            <tr>
              <td className="p-2">{t("docs.howItWorks.comparison.speed")}</td>
              <td className="p-2">{t("docs.howItWorks.comparison.speedHigh")}</td>
              <td className="p-2">{t("docs.howItWorks.comparison.speedMedium")}</td>
            </tr>
            <tr>
              <td className="p-2">{t("docs.howItWorks.comparison.securityRisk")}</td>
              <td className="p-2 text-emerald-400 font-semibold">{t("docs.howItWorks.comparison.riskLow")}</td>
              <td className="p-2 text-rose-400">{t("docs.howItWorks.comparison.riskHigh")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Geri & İleri bağlantılar */}
      <div className="mt-10 flex justify-between text-xs">
        <Link href="/docs">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.howItWorks.backToDocs")}
          </span>
        </Link>
        <Link href="/docs/security">
          <span className="opacity-60 hover:opacity-90 transition">
            {t("docs.howItWorks.nextPage")}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
