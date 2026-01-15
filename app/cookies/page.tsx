"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Cookie, ShieldCheck } from "lucide-react";

export default function CookiesPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-32 px-6 flex justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-8 rounded-2xl border backdrop-blur-xl transition-colors ${theme === "dark"
                        ? "bg-slate-900/10 border-slate-800"
                        : "bg-white/40 border-slate-200"
                        }`}
                >
                    <div className="mb-8 border-b pb-6 border-slate-200 dark:border-slate-800 flex items-start justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent flex items-center gap-3">
                                <Cookie className="text-orange-400" size={40} />
                                {t("pages.cookies.title") || "Cookie Policy"}
                            </h1>
                            <p className="opacity-60 text-sm mt-2">
                                {t("pages.cookies.lastUpdated") || "Last updated: January 2026"}
                            </p>
                        </div>
                    </div>

                    <div className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
                        <p className="mb-6 text-lg leading-relaxed opacity-90">{t("pages.cookies.intro")}</p>

                        <div className={`p-6 rounded-xl border mt-8 ${theme === 'dark' ? 'bg-slate-900/10 border-slate-800' : 'bg-white/40 border-slate-100'}`}>
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <ShieldCheck className="text-emerald-400" />
                                {t("pages.cookies.sections.whatare.title")}
                            </h3>
                            <p className="opacity-80 leading-relaxed mb-6">{t("pages.cookies.sections.whatare.content")}</p>

                            <h3 className="text-xl font-bold mb-3 mt-8 flex items-center gap-2">
                                <ShieldCheck className="text-emerald-400" />
                                {t("pages.cookies.sections.howweuse.title")}
                            </h3>
                            <p className="opacity-80 leading-relaxed">{t("pages.cookies.sections.howweuse.content")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
