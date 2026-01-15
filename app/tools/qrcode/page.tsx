"use client";

import QrCodeTool from "@/components/QrCodeTool";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function QrCodePage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - QR Code Generator</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            {t("pageHeaders.qrcode.title")}
          </span>
        </h1>
        <p className="text-sm text-slate-300 mb-8 py-3 text-center max-w-2xl mx-auto">
          {t("pageHeaders.qrcode.desc1")}
          <br />{t("pageHeaders.qrcode.desc2")}
          <br /><span className="text-cyan-400 font-semibold">{t("pageHeaders.qrcode.desc3")}</span>
        </p>
      </motion.div>

      <QrCodeTool />
    </div>
  );
}
