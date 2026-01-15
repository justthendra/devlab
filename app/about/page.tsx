"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Github, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const infoCards = [
    {
      title: t("about.whyDevlab.title"),
      desc: t("about.whyDevlab.desc"),
    },
    {
      title: t("about.technology.title"),
      desc: t("about.technology.desc"),
    },
    {
      title: t("about.vision.title"),
      desc: t("about.vision.desc"),
    },
    {
      title: t("about.developer.title"),
      desc: t("about.developer.desc"),
    },
  ];

  return (
    <div
      className={`
        min-h-screen w-full flex justify-center items-start py-48 px-6 relative
        transition-colors duration-300
        ${theme === "dark" ? "bg-transparent" : "bg-transparent"}
      `}
    >
      <title>DevLab - About</title>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {t("about.title")}
          </span>
        </motion.h1>

        {/* Description */}
        <p
          className={`text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"
            } mb-10 max-w-2xl mx-auto`}
        >
          {t("about.description")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {infoCards.map((info, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`
                p-5 rounded-xl text-left backdrop-blur-md border transition
                ${theme === "dark"
                  ? "bg-[rgba(11,12,14,0.08)] border-[rgba(255,255,255,0.05)] text-slate-200 hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300"
                  : "bg-white border-gray-200 text-slate-700 hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300"
                }
              `}
            >
              <h3 className="text-lg font-semibold mb-1 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                {info.title}
              </h3>
              <p className="text-sm opacity-85">{info.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-col items-center"
        >
          <p
            className={`text-sm mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
          >
            {t("about.contact")}
          </p>

          <div className="flex gap-3">
            {[
              {
                icon: <Github size={16} />,
                label: "GitHub",
                href: "https://github.com/justthendra",
              },
              {
                icon: <FaDiscord size={16} />,
                label: "Discord",
                href: "https://discord.gg/JWx8qJ7B8W",
              },
              {
                icon: <Mail size={16} />,
                label: "Email",
                href: "mailto:thendracreative@gmail.com",
              },
            ].map(({ icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-lg text-xs border transition
                  ${theme === "dark"
                    ? "bg-[rgba(15,13,13,0.05)] border-[rgba(255,255,255,0.12)] text-slate-300 hover:bg-[rgba(31,31,31,0.15)] hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300"
                    : "bg-[rgba(0,0,0,0.03)] border-[rgba(0,0,0,0.1)] text-slate-700 hover:bg-[rgba(0,0,0,0.07)] hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300"
                  }
                `}
              >
                {icon}
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
