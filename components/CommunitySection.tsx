"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function CommunitySection() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 text-center relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {t("last.contribute") || "Join the Community"}
                </h2>

                <p className={`text-lg mb-10 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {t("last.description") || "DevLab is open source. Contribute, suggest features, or just say hi on Discord."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/justthendra/devlab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto justify-center
              ${theme === 'dark'
                                ? 'bg-[#24292e] text-white hover:bg-[#2f363d]'
                                : 'bg-slate-900 text-white hover:bg-slate-800'}
            `}
                    >
                        <Github size={20} />
                        Star on GitHub
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://discord.gg/JWx8qJ7B8W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-all w-full sm:w-auto justify-center
              bg-[#5865F2] hover:bg-[#4752c4]
            "
                    >
                        <FaDiscord size={20} />
                        Join Discord
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
