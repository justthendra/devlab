"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowRight, Sparkles, Code2, Video, Palette, Wand2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroModern() {
    const { theme } = useTheme(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const { t } = useLanguage();
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const floatingCards = [
        { icon: <Video size={24} />, color: "bg-pink-500", label: "Video", x: -280, y: -80, delay: 0 },
        { icon: <Code2 size={24} />, color: "bg-blue-500", label: "Code", x: 280, y: -100, delay: 0.2 },
        { icon: <Palette size={24} />, color: "bg-emerald-500", label: "Design", x: -60, y: 120, delay: 0.4 },
        { icon: <Wand2 size={24} />, color: "bg-violet-500", label: "AI", x: -200, y: 50, delay: 0.1 },
    ];

    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

            {/* Floating Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingCards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: card.x, y: card.y + 100 }}
                        animate={{ opacity: 0.6, y: card.y }}
                        transition={{ delay: card.delay + 0.5, duration: 1 }}
                        style={{ y: i % 2 === 0 ? y1 : y2, x: card.x }}
                        className={`
              absolute left-1/2 top-1/2 hidden lg:flex items-center gap-3 p-3 pr-5 rounded-2xl
              backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-2xl
              ${theme === 'dark' ? 'bg-[rgba(20,20,20,0.4)]' : 'bg-[rgba(255,255,255,0.4)]'}
            `}
                    >
                        <div className={`p-2 rounded-xl text-white ${card.color} shadow-lg`}>
                            {card.icon}
                        </div>
                        <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                            {card.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 backdrop-blur-md
            bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span className="text-xs font-bold tracking-wide uppercase">{t("hero.badge") || "New Generation Tools"}</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                >
                    <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                        {t("hero.title1") || "Master Your"}
                    </span>
                    <br className="hidden md:block" />
                    <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                        {t("hero.title2") || "Digital Workflow"}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed
            ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
          `}
                >
                    {t("hero.description") || "Privacy-first, browser-based tools for developers and creators. No uploads, no waiting, just instant results."}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/tools"
                        className="group relative px-8 py-4 rounded-2xl font-bold text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-cyan-600 transition-transform duration-300 group-hover:scale-105" />
                        <span className="relative flex items-center gap-2">
                            {t("hero.exploreTools") || "Explore All Tools"} <ArrowRight size={18} />
                        </span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bottom fade for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
}
