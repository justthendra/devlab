"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const languageFlags: Record<Language, string> = {
    en: "🇬🇧",
    tr: "🇹🇷",
    de: "🇩🇪",
    fr: "🇫🇷",
    es: "🇪🇸",
};

const languageNames: Record<Language, string> = {
    en: "English",
    tr: "Türkçe",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
};

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const languages: Language[] = ["en", "tr", "de", "fr", "es"];

    return (
        <div ref={dropdownRef} className="relative">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`
          flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs border transition
          ${theme === "dark"
                        ? "bg-[rgba(24,24,24,0.05)] border-[rgba(255,255,255,0.15)] text-slate-300 hover:border-emerald-400"
                        : "bg-[rgba(255,255,255,0.8)] border-[rgba(0,0,0,0.27)] text-slate-700 hover:border-emerald-500"
                    }
        `}
            >
                <Globe className="w-3.5 h-3.5" />
                <span>{languageFlags[language]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`
              absolute right-0 mt-2 w-36 rounded-xl border backdrop-blur-md overflow-hidden z-50
              ${theme === "dark"
                                ? "bg-[rgba(18,18,23,0.95)] border-[rgba(255,255,255,0.1)]"
                                : "bg-white border-[rgba(0,0,0,0.1)]"
                            }
              shadow-lg
            `}
                    >
                        {languages.map((lang) => (
                            <motion.button
                                key={lang}
                                whileHover={{ x: 2 }}
                                onClick={() => {
                                    setLanguage(lang);
                                    setIsOpen(false);
                                }}
                                className={`
                  w-full flex items-center gap-2 px-3 py-2 text-xs transition
                  ${language === lang
                                        ? "text-emerald-400 bg-[rgba(0,255,200,0.1)]"
                                        : theme === "dark"
                                            ? "text-slate-300 hover:text-emerald-300 hover:bg-[rgba(255,255,255,0.05)]"
                                            : "text-slate-700 hover:text-emerald-500 hover:bg-[rgba(0,0,0,0.05)]"
                                    }
                `}
                            >
                                <span className="text-sm">{languageFlags[lang]}</span>
                                <span>{languageNames[lang]}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
