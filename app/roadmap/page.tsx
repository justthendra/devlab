"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function RoadmapPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const roadmapItems = t("pages.roadmap.items", { returnObjects: true }) as any[];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed": return "text-emerald-400";
            case "in-progress": return "text-blue-400";
            case "planned": return "text-slate-400";
            default: return "text-slate-400";
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed": return <CheckCircle2 className={getStatusColor(status)} />;
            case "in-progress": return <Clock className={getStatusColor(status)} />;
            case "planned": return <Circle className={getStatusColor(status)} />;
            default: return <Circle />;
        }
    }

    return (
        <div className="min-h-screen py-32 px-6 flex justify-center">
            <div className="max-w-4xl w-full">
                <div className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent"
                    >
                        {t("pages.roadmap.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="opacity-70"
                    >
                        {t("pages.roadmap.desc")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.isArray(roadmapItems) && roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 bg-transparent
                        ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}
                        ${item.status === 'completed'
                                    ? 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/5'
                                    : item.status === 'in-progress'
                                        ? 'hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] hover:bg-blue-500/5'
                                        : 'hover:border-slate-500/50 hover:shadow-[0_0_30px_-10px_rgba(100,116,139,0.3)] hover:bg-slate-500/5'
                                }
                    `}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-2 rounded-lg bg-opacity-10 ${item.status === 'completed' ? 'bg-emerald-500/10' :
                                    item.status === 'in-progress' ? 'bg-blue-500/10' : 'bg-slate-500/10'
                                    }`}>
                                    {getStatusIcon(item.status)}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                    item.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-500/10 text-slate-400'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
