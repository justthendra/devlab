"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-32 px-6 flex justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-8 rounded-2xl border backdrop-blur-xl transition-colors ${theme === "dark" ? "bg-slate-900/10 border-slate-800" : "bg-white/40 border-slate-200"
                        }`}
                >
                    <div className="mb-8 border-b pb-6 border-slate-200 dark:border-slate-800">
                        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            {t("pages.privacy.title") || "Privacy Policy"}
                        </h1>
                        <p className="opacity-60 text-sm">
                            {t("pages.privacy.lastUpdated") || "Last updated: January 2026"}
                        </p>
                    </div>

                    <div className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
                        <p className="mb-6">{t("pages.privacy.intro") || "Your privacy is important to us."}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">{t("pages.privacy.sections.collect.title") || "Information We Collect"}</h3>
                        <p className="mb-4 text-opacity-80 opacity-80">{t("pages.privacy.sections.collect.content")}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">{t("pages.privacy.sections.usage.title") || "How We Use Information"}</h3>
                        <p className="mb-4 text-opacity-80 opacity-80">{t("pages.privacy.sections.usage.content")}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">{t("pages.privacy.sections.cookies.title") || "Cookies"}</h3>
                        <p className="mb-4 text-opacity-80 opacity-80">{t("pages.privacy.sections.cookies.content")}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
