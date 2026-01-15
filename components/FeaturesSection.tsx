"use client";

import { useTheme } from "next-themes";
import { Shield, Zap, Layout, Coffee } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FeaturesSection() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const features = [
        {
            icon: <Shield className="text-emerald-500" size={32} />,
            title: t("middle.features.browserBased"),
            desc: t("middle.features.browserBasedDesc")
        },
        {
            icon: <Zap className="text-amber-500" size={32} />,
            title: t("middle.features.fast"),
            desc: t("middle.features.fastDesc")
        },
        {
            icon: <Layout className="text-blue-500" size={32} />,
            title: t("middle.features.uiux"),
            desc: t("middle.features.uiuxDesc")
        },
        {
            icon: <Coffee className="text-purple-500" size={32} />,
            title: t("middle.features.productivity"),
            desc: t("middle.features.productivityDesc")
        }
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`
                group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
                ${theme === 'dark'
                                    ? 'bg-[#111111]/5 border-white/10 hover:border-emerald-500/50 hover:bg-linear-to-br from-[#111111]/5 to-emerald-500/10'
                                    : 'bg-white border-slate-100 hover:border-emerald-500/30 shadow-lg shadow-slate-200/50 hover:bg-linear-to-br from-white to-emerald-50'}
              `}
                        >
                            <div className={`mb-4 inline-flex p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-emerald-500/20' : 'bg-slate-50 group-hover:bg-emerald-100'}`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
