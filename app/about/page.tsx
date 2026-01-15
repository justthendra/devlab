"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Github, Mail, Globe, Cpu, Users, Code, Zap, MessageCircle } from "lucide-react";
import { FaDiscord, FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const techStack = [
    { icon: <SiNextdotjs size={32} />, name: "Next.js 14" },
    { icon: <SiTypescript size={32} className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiTailwindcss size={32} className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiFramer size={32} />, name: "Framer Motion" },
    { icon: <FaReact size={32} className="text-blue-400" />, name: "React" },
    { icon: <Zap size={32} className="text-yellow-400" />, name: "WebAssembly" },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-dot-pattern selection:bg-emerald-500/30">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 md:mb-32 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium">
            {t("about.title")}
          </div>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b ${theme === 'dark' ? 'from-white to-white/60' : 'from-slate-900 to-slate-600'}`}>
            {t("about.hero.tagline")}
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t("about.hero.subtext")}
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {/* Card 1 */}
          <div className={`p-8 rounded-2xl border backdrop-blur-xl transition hover:border-emerald-500/30
            ${theme === 'dark'
              ? 'bg-[#111111]/5 border-white/10 hover:border-emerald-500/50 hover:bg-linear-to-br from-[#111111]/5 to-emerald-500/10'
              : 'bg-white border-slate-100 hover:border-emerald-500/30 shadow-lg shadow-slate-200/50 hover:bg-linear-to-br from-white to-emerald-50'}
            `}
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
              <Globe size={24} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{t("about.vision.title")}</h3>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {t("about.vision.desc")}
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-8 rounded-2xl border backdrop-blur-xl transition hover:border-blue-500/30
            ${theme === 'dark'
              ? 'bg-[#111111]/5 border-white/10 hover:border-emerald-500/50 hover:bg-linear-to-br from-[#111111]/5 to-emerald-500/10'
              : 'bg-white border-slate-100 hover:border-emerald-500/30 shadow-lg shadow-slate-200/50 hover:bg-linear-to-br from-white to-emerald-50'}
            `}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
              <Users size={24} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{t("about.developer.title")}</h3>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {t("about.developer.desc")}
            </p>
          </div>
        </motion.div>

        {/* Timeline / Journey Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{t("about.timeline.title")}</h2>
          <div className="relative border-l-2 border-slate-700/50 pl-8 ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-12">
            {[
              { year: "2025", title: t("about.timeline.2025.title"), desc: t("about.timeline.2025.desc") },
              { year: "2026", title: t("about.timeline.2026.title"), desc: t("about.timeline.2026.desc") },
              { year: "2027", title: t("about.timeline.2027.title"), desc: t("about.timeline.2027.desc") }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-emerald-500" />
                <h3 className="text-xl font-bold text-emerald-400">{item.year}</h3>
                <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h4>
                <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Developer Profile */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className={`max-w-4xl mx-auto p-1 border rounded-3xl bg-linear-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20`}>
            <div className={`rounded-[22px] p-8 md:p-12 backdrop-blur-xl
                ${theme === "dark" ? "bg-[#0B0C0E]" : "bg-white"}
              `}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar Placeholder */}
                <div className="relative group shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-emerald-400 to-blue-500 p-1">
                    <a href="https://discord.com/users/267373400022843393" target="_blank" rel="noreferrer" className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                      {/* You can replace this with an actual Image component later */}
                      <Image
                        src="https://cdn.discordapp.com/avatars/267373400022843393/a_23d3937f3d7b7335419b959d2b4e0636.gif?size=80"
                        alt="Avatar"
                        width={128}
                        height={128}
                      />
                    </a>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full border-2 border-[#0B0C0E]">
                    Dev
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>JustThendra</h3>
                  <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    A passionate Full Stack Developer focused on building intuitive, beautiful, and high-performance web applications. Dedicated to open source and community-driven development.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Link
                      href="https://github.com/Thendra"
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${theme === 'dark' ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-700/50' : 'border-slate-200 bg-slate-300 hover:bg-slate-400'}`}
                    >
                      <Github size={20} className={theme === 'dark' ? 'text-white' : 'text-slate-800'} />
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>GitHub</span>
                    </Link>
                    <Link
                      href="https://discord.com/users/267373400022843393"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-700 bg-indigo-700/30 hover:bg-indigo-600/50 transition-colors"
                    >
                      <FaDiscord size={20} className={theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'} />
                      <span className={`font-medium ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>Discord</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-32 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{t("about.techStack.title")}</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">{t("about.techStack.desc")}</p>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border w-32 md:w-40 transition-all duration-300
                  ${theme === "dark"
                    ? "bg-[#111111]/5 border-white/10 hover:border-emerald-500/50 hover:bg-linear-to-br from-[#111111]/5 to-emerald-500/10"
                    : "bg-white border-slate-100 hover:border-emerald-500/30 shadow-lg shadow-slate-200/50 hover:bg-linear-to-br from-white to-emerald-50"
                  }
                `}
              >
                <div className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-slate-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-[100px] -z-10 rounded-full opacity-50" />

          <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{t("about.community.title")}</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
            {t("about.community.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.gg/JWx8qJ7B8W"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium transition-all transform hover:scale-105 shadow-lg shadow-[#5865F2]/25"
            >
              <FaDiscord size={20} />
              {t("about.community.discord")}
            </a>
            <a
              href="https://github.com/justthendra/devlab"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-full border font-medium transition-all transform hover:scale-105
                  ${theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-900"
                }
                `}
            >
              <Github size={20} />
              {t("about.community.github")}
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
