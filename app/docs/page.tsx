"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { Rocket, Book, Shield, Cpu, Code, HelpCircle, ArrowRight } from "lucide-react";

export default function DocsPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const sections = [
    {
      key: "gettingStarted",
      link: "/docs/getting-started",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-emerald-400 to-teal-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      hoverBorder: "group-hover:border-emerald-500/50",
      textClass: "text-emerald-400",
      hoverText: "group-hover:text-emerald-400"
    },
    {
      key: "howItWorks",
      link: "/docs/how-it-works",
      icon: <Book className="w-6 h-6" />,
      gradient: "from-blue-400 to-indigo-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      hoverBorder: "group-hover:border-blue-500/50",
      textClass: "text-blue-400",
      hoverText: "group-hover:text-blue-400"
    },
    {
      key: "security",
      link: "/docs/security",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-violet-400 to-purple-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      hoverBorder: "group-hover:border-violet-500/50",
      textClass: "text-violet-400",
      hoverText: "group-hover:text-violet-400"
    },
    {
      key: "ffmpeg",
      link: "/docs/ffmpeg",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-amber-400 to-orange-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      hoverBorder: "group-hover:border-amber-500/50",
      textClass: "text-amber-400",
      hoverText: "group-hover:text-amber-400"
    },
    {
      key: "api",
      link: "/docs/api",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-pink-400 to-rose-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      hoverBorder: "group-hover:border-pink-500/50",
      textClass: "text-pink-400",
      hoverText: "group-hover:text-pink-400"
    },
    {
      key: "faq",
      link: "/docs/faq",
      icon: <HelpCircle className="w-6 h-6" />,
      gradient: "from-cyan-400 to-sky-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hoverBorder: "group-hover:border-cyan-500/50",
      textClass: "text-cyan-400",
      hoverText: "group-hover:text-cyan-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-dot-pattern selection:bg-emerald-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000`} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium">
            {t("docs.hero.title")}
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b ${theme === 'dark' ? 'from-white to-white/60' : 'from-slate-900 to-slate-600'}`}>
            {t("docs.hero.title")}
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t("docs.hero.subtitle")}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.key} href={section.link} className="group">
              <motion.div
                whileHover={{ y: -5 }}
                className={`
                  h-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                  ${theme === "dark"
                    ? `bg-[#11111136] border-white/5 ${section.hoverBorder} hover:bg-[#11111160]`
                    : `bg-white/60 border-slate-200 ${section.hoverBorder} hover:bg-white/80 shadow-sm`
                  }
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${section.bg} ${section.border} border`}>
                  <div className={`${section.textClass}`}>
                    {section.icon}
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-2 transition-colors ${section.hoverText} ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                  {t(`docs.sections.${section.key}.title`)}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t(`docs.sections.${section.key}.desc`)}
                </p>

                <div className={`flex items-center text-xs font-medium ${section.textClass} opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300`}>
                  {t("docs.readGuide")} <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
