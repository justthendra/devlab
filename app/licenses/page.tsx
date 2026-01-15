"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function LicensesPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const libraries = t("pages.licenses.libraries", { returnObjects: true }) as any[];

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
                    <div className="mb-8 border-b pb-6 border-slate-200 dark:border-slate-800">
                        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-3">
                            <BookOpen className="text-cyan-400" size={40} />
                            {t("pages.licenses.title") || "Licenses"}
                        </h1>
                        <p className="opacity-70 mt-2 text-lg">
                            {t("pages.licenses.intro")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.isArray(libraries) && libraries.map((lib, index) => (
                            <div key={index} className={`p-4 rounded-xl border flex justify-between items-center ${theme === 'dark' ? 'bg-slate-900/10 border-slate-800 hover:border-slate-700' : 'bg-white/40 border-slate-200 shadow-sm'
                                }`}>
                                <span className="font-semibold">{lib.name}</span>
                                <span className="text-xs px-2 py-1 rounded bg-slate-500/10 text-slate-500 font-mono">
                                    {lib.license}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
