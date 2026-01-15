"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ImageToTextTool from "@/components/ImageToTextTool";
import { useLanguage } from "@/lib/LanguageContext";

export default function ImageToTextPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    return (
        <div className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}`}>
            <title>DevLab - Image to Text (OCR)</title>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center max-w-3xl mb-10"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {t("pageHeaders.imagetotext.title")}
                    </span>
                </h1>
                <p className={`text-sm md:text-base py-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    {t("pageHeaders.imagetotext.desc")}
                </p>
            </motion.div>
            <ImageToTextTool />
        </div>
    );
}
