"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-32 px-6 flex justify-center items-center">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                        {t("pages.contact.title")}
                    </h1>
                    <p className="text-lg opacity-80 mb-8 leading-relaxed">
                        {t("pages.contact.desc")}
                    </p>

                    <div className="space-y-6">
                        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === 'dark' ? 'bg-slate-900/10 border-white/5' : 'bg-white/40 border-slate-100'}`}>
                            <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-sm opacity-50">Email</div>
                                <div className="font-medium">contact@devlab.com</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-8 rounded-2xl border backdrop-blur-xl transition-colors ${theme === "dark" ? "bg-slate-900/10 border-slate-800" : "bg-white/40 border-slate-200"
                        }`}
                >
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium mb-1 block opacity-80">{t("pages.contact.form.name")}</label>
                            <input type="text" className={`w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-pink-500/50 transition-all
                        ${theme === 'dark' ? 'bg-slate-900/10 border-white/10' : 'bg-white/50 border-slate-200'}
                    `} />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1 block opacity-80">{t("pages.contact.form.email")}</label>
                            <input type="email" className={`w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-pink-500/50 transition-all
                        ${theme === 'dark' ? 'bg-slate-900/10 border-white/10' : 'bg-white/50 border-slate-200'}
                    `} />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1 block opacity-80">{t("pages.contact.form.message")}</label>
                            <textarea rows={4} className={`w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none
                        ${theme === 'dark' ? 'bg-slate-900/10 border-white/10' : 'bg-white/50 border-slate-200'}
                    `} />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            <Send size={18} />
                            {t("pages.contact.form.send")}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
