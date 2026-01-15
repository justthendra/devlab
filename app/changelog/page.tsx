"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { GitCommit, Calendar } from "lucide-react";

export default function ChangelogPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const changelog = t("pages.changelog.versions", { returnObjects: true }) as any[];

    return (
        <div className="min-h-screen py-32 px-6 flex justify-center">
            <div className="max-w-3xl w-full">
                <div className="mb-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
                    >
                        {t("pages.changelog.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="opacity-70"
                    >
                        {t("pages.changelog.desc")}
                    </motion.p>
                </div>

                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-12">
                    {Array.isArray(changelog) && changelog.map((version, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] 
                                ${theme === 'dark'
                                    ? 'bg-transparent border-slate-800 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] hover:bg-orange-500/5'
                                    : 'bg-transparent border-slate-200 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.2)] hover:bg-orange-500/5'
                                }
                            `}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <GitCommit size={24} className="text-orange-500" />
                                        {version.version}
                                    </h2>
                                    <span className="flex items-center gap-2 text-sm opacity-50 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} />
                                        {version.date}
                                    </span>
                                </div>
                                <p className="opacity-80 leading-relaxed">
                                    {version.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
