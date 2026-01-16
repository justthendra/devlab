"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Github, Mail, Globe, Cpu, Users, Code, Zap, MessageCircle } from "lucide-react";
import { FaDiscord, FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiFivem } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import { useDiscordPresence, getStatusColor, getStatusText, getActivityText } from "@/lib/useDiscordPresence";
import Image from "next/image";

export default function AboutPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { status: discordStatus, loading: discordLoading } = useDiscordPresence();

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

        {/* Developer Profile - Bento Grid Style */}
        <motion.div variants={itemVariants} className="mb-32">
          <h2 className={`text-3xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
            {t("about.developer.title")}
          </h2>
          <p className={`text-center mb-12 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
            {t("about.developer.subtitle")}
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">

              {/* Main Profile Card - Spans 2 columns and 2 rows */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-3xl p-6 md:p-8
                  ${theme === 'dark' ? 'bg-[#0c0c0c3a]' : 'bg-white'} 
                  border ${theme === 'dark' ? 'border-emerald-500/30' : 'border-slate-200'}
                  transition-all duration-500`}
              >
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header: Avatar + Info */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/30">
                        <a href="https://discord.com/users/267373400022843393" target="_blank" rel="noreferrer" className="block w-full h-full">
                          <Image
                            src="https://cdn.discordapp.com/avatars/267373400022843393/a_23d3937f3d7b7335419b959d2b4e0636.gif?size=128"
                            alt="JustThendra"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-xl md:text-2xl font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          Thendra
                        </h3>
                        <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400 uppercase tracking-wider">
                          Pro
                        </span>
                      </div>
                      <p className="text-emerald-400 font-medium text-sm mb-2">{t("about.developer.role")}</p>
                      {/*<div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${discordStatus ? getStatusColor(discordStatus.discord_status) : 'bg-slate-500'} ${discordStatus?.discord_status === 'online' ? 'animate-pulse' : ''}`} />
                        <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                          {discordLoading ? 'Loading...' : discordStatus ? getStatusText(discordStatus.discord_status, t) : 'Offline'}
                        </span>
                      </div>*/}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {t("about.developer.bio")}
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { value: "8+", label: t("about.developer.stats.years") },
                      { value: "50+", label: t("about.developer.stats.projects") },
                      { value: "10K+", label: t("about.developer.stats.linesPerDay") },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className={`text-center py-3 rounded-xl
                          ${theme === 'dark' ? 'bg-[#0c0c0c73]' : 'bg-slate-100'}`}
                      >
                        <div className="text-lg md:text-xl font-bold text-emerald-400">
                          {stat.value}
                        </div>
                        <div className={`text-[10px] uppercase tracking-wider font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Status Card - Dynamic Discord Status */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-3xl p-5
                  ${discordStatus?.discord_status === 'online'
                    ? (theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50')
                    : discordStatus?.discord_status === 'idle'
                      ? (theme === 'dark' ? 'bg-yellow-500/10' : 'bg-yellow-50')
                      : discordStatus?.discord_status === 'dnd'
                        ? (theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50')
                        : (theme === 'dark' ? 'bg-slate-500/10' : 'bg-slate-50')
                  } 
                  border ${discordStatus?.discord_status === 'online'
                    ? (theme === 'dark' ? 'border-emerald-500/20' : 'border-emerald-200')
                    : discordStatus?.discord_status === 'idle'
                      ? (theme === 'dark' ? 'border-yellow-500/20' : 'border-yellow-200')
                      : discordStatus?.discord_status === 'dnd'
                        ? (theme === 'dark' ? 'border-red-500/20' : 'border-red-200')
                        : (theme === 'dark' ? 'border-slate-500/20' : 'border-slate-200')
                  }
                  hover:shadow-lg transition-all duration-300`}
              >
                <div className="absolute top-3 right-3">
                  <div className={`w-3 h-3 rounded-full ${discordStatus ? getStatusColor(discordStatus.discord_status) : 'bg-slate-500'} ${discordStatus?.discord_status === 'online' ? 'animate-pulse' : ''}`} />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div className={`text-sm font-medium ${discordStatus?.discord_status === 'online'
                    ? (theme === 'dark' ? 'text-emerald-400/70' : 'text-emerald-600/70')
                    : discordStatus?.discord_status === 'idle'
                      ? (theme === 'dark' ? 'text-yellow-400/70' : 'text-yellow-600/70')
                      : discordStatus?.discord_status === 'dnd'
                        ? (theme === 'dark' ? 'text-red-400/70' : 'text-red-600/70')
                        : (theme === 'dark' ? 'text-slate-400/70' : 'text-slate-600/70')
                    }`}>
                    {t("about.developer.status.title")}
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${discordStatus?.discord_status === 'online'
                      ? (theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600')
                      : discordStatus?.discord_status === 'idle'
                        ? (theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600')
                        : discordStatus?.discord_status === 'dnd'
                          ? (theme === 'dark' ? 'text-red-400' : 'text-red-600')
                          : (theme === 'dark' ? 'text-slate-400' : 'text-slate-600')
                      }`}>
                      {discordLoading ? 'Loading...' : discordStatus ? getStatusText(discordStatus.discord_status, t) : 'Offline'}
                    </div>
                    <div className={`text-xs ${discordStatus?.discord_status === 'online'
                      ? (theme === 'dark' ? 'text-emerald-400/60' : 'text-emerald-600/60')
                      : discordStatus?.discord_status === 'idle'
                        ? (theme === 'dark' ? 'text-yellow-400/60' : 'text-yellow-600/60')
                        : discordStatus?.discord_status === 'dnd'
                          ? (theme === 'dark' ? 'text-red-400/60' : 'text-red-600/60')
                          : (theme === 'dark' ? 'text-slate-400/60' : 'text-slate-600/60')
                      }`}>
                      {discordStatus?.activities?.[0]?.name
                        ? getActivityText(discordStatus.activities[0].type, discordStatus.activities[0].name, t)
                        : t("about.developer.status.openTo")
                      }
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-3xl p-5
                  ${theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-50'} 
                  border ${theme === 'dark' ? 'border-orange-500/20' : 'border-orange-200'}
                  hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300`}
              >
                <div className="flex flex-col h-full justify-between">
                  <Globe size={24} className={`${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`} />
                  <div>
                    <div className={`text-lg font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                      {t("about.developer.location.country")}
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-orange-400/60' : 'text-orange-600/60'}`}>
                      UTC+3: <span className="text-orange-400/60">●</span> {t("about.developer.location.timezone")}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills Card - Spans 2 columns */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl p-6
                  ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'} 
                  border ${theme === 'dark' ? 'border-blue-500/20' : 'border-blue-200'}
                  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
              >
                <div className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-blue-400/70' : 'text-blue-600/70'}`}>
                  {t("about.developer.skills.title")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <FaReact size={16} />, label: "React", color: "text-blue-400" },
                    { icon: <SiNextdotjs size={16} />, label: "Next.js", color: theme === 'dark' ? "text-white" : "text-black" },
                    { icon: <SiTypescript size={16} />, label: "TypeScript", color: "text-blue-500" },
                    { icon: <FaNodeJs size={16} />, label: "Node.js", color: "text-green-500" },
                    { icon: <SiTailwindcss size={16} />, label: "Tailwind", color: "text-cyan-400" },
                    { icon: <FaDocker size={16} />, label: "Docker", color: "text-blue-400" },
                    { icon: <Code size={16} />, label: "Lua", color: "text-purple-400" },
                    { icon: <SiFivem size={16} />, label: "FiveM", color: "text-orange-400" },
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                        ${theme === 'dark' ? 'bg-blue-500/20 hover:bg-blue-500/30' : 'bg-blue-100 hover:bg-blue-200'}
                        transition-all duration-200 cursor-default`}
                    >
                      <span className={skill.color}>{skill.icon}</span>
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{skill.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* GitHub Card */}
              <motion.a
                href="https://github.com/justthendra"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-3xl p-5 cursor-pointer
                  ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50'} 
                  border ${theme === 'dark' ? 'border-purple-500/20' : 'border-purple-200'}
                  hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group`}
              >
                <div className="flex flex-col h-full justify-between">
                  <Github size={24} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-500'} group-hover:scale-110 transition-transform`} />
                  <div>
                    <div className={`text-lg font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                      GitHub
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-purple-400/60' : 'text-purple-600/60'}`}>
                      @justthendra
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Discord Card */}
              <motion.a
                href="https://discord.com/users/267373400022843393"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative overflow-hidden rounded-3xl p-5 cursor-pointer
                  bg-[#5865F2]/20 hover:bg-[#5865F2]/30
                  border border-[#5865F2]/30
                  hover:shadow-lg hover:shadow-[#5865F2]/20 transition-all duration-300 group"
              >
                <div className="flex flex-col h-full justify-between">
                  <FaDiscord size={24} className="text-[#5865F2] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-lg font-bold text-[#5865F2]">
                      Discord
                    </div>
                    <div className="text-xs text-[#5865F2]/60">
                      {t("about.developer.discord.addMe")}
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Quote Card - Spans 2 columns */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl p-6
                  ${theme === 'dark' ? 'bg-linear-to-br from-purple-500/10 to-blue-500/10' : 'bg-linear-to-br from-purple-50 to-blue-50'} 
                  border ${theme === 'dark' ? 'border-purple-500/20' : 'border-purple-200'}
                  hover:shadow-lg transition-all duration-300`}
              >
                <MessageCircle size={20} className={`mb-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-500'}`} />
                <blockquote className={`text-lg italic font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t("about.developer.quote.text")}
                </blockquote>
                <div className={`mt-3 text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                  {t("about.developer.quote.author")}
                </div>
              </motion.div>

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
