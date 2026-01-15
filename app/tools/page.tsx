"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Search, Monitor, Image as ImageIcon, Code, Hash, Smartphone,
  FileVideo, Music, Download, Scissors, Film,
  FileImage, Zap, Minimize, Crop, FileDigit, Palette, Wand2, ScanText,
  FileCode, Terminal, FileJson, Hash as HashIcon, Link as LinkIcon, Fingerprint, Lock, QrCode, FileType
} from "lucide-react";

export default function ToolsPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Define categories
  const categories = useMemo(() => ([
    { id: "video_audio", title: t("tools.common.catVideoAudio") || "Video & Audio", icon: <Monitor size={20} /> },
    { id: "image", title: t("tools.common.catImage") || "Images & Graphics", icon: <ImageIcon size={20} /> },
    { id: "developer", title: t("tools.common.catDev") || "Developer & Utilities", icon: <Code size={20} /> },
  ]), [t]);

  const allTools = useMemo(() => [
    // Video & Audio
    {
      id: "mp4towebm",
      category: "video_audio",
      title: t("toolNames.mp4towebm"),
      link: "/tools/mp4towebm",
      desc: t("toolDescriptions.mp4towebm"),
      gradient: "from-green-400 via-emerald-500 to-cyan-400",
      textColor: "text-green-400",
      icon: <FileVideo size={24} />,
    },
    {
      id: "mp4tomp3",
      category: "video_audio",
      title: t("toolNames.mp4tomp3"),
      link: "/tools/mp4tomp3",
      desc: t("toolDescriptions.mp4tomp3"),
      gradient: "from-indigo-400 via-purple-500 to-pink-400",
      textColor: "text-indigo-400",
      icon: <Music size={24} />,
    },
    {
      id: "mp3downloader",
      category: "video_audio",
      title: t("toolNames.mp3downloader"),
      link: "/tools/mp3downloader",
      desc: t("toolDescriptions.mp3downloader"),
      gradient: "from-purple-400 via-fuchsia-500 to-red-400",
      textColor: "text-purple-400",
      icon: <Download size={24} />,
    },
    {
      id: "videotrimmer",
      category: "video_audio",
      title: t("toolNames.videotrimmer"),
      link: "/tools/videotrimmer",
      desc: t("toolDescriptions.videotrimmer"),
      gradient: "from-red-400 via-rose-500 to-pink-400",
      textColor: "text-red-400",
      icon: <Scissors size={24} />,
    },
    {
      id: "videotogif",
      category: "video_audio",
      title: t("toolNames.videotogif"),
      link: "/tools/videotogif",
      desc: t("toolDescriptions.videotogif"),
      gradient: "from-indigo-400 via-purple-500 to-violet-400",
      textColor: "text-indigo-400",
      icon: <Film size={24} />,
    },

    // Image
    {
      id: "jpgtowebp",
      category: "image",
      title: t("toolNames.jpgtowebp"),
      link: "/tools/jpgtowebp",
      desc: t("toolDescriptions.jpgtowebp"),
      gradient: "from-yellow-400 via-orange-500 to-amber-400",
      textColor: "text-yellow-400",
      icon: <FileImage size={24} />,
    },
    {
      id: "gifoptimize",
      category: "image",
      title: t("toolNames.gifoptimize"),
      link: "/tools/gifoptimize",
      desc: t("toolDescriptions.gifoptimize"),
      gradient: "from-green-300 via-lime-500 to-yellow-300",
      textColor: "text-green-300",
      icon: <Zap size={24} />,
    },
    {
      id: "imageresizer",
      category: "image",
      title: t("toolNames.imageresizer"),
      link: "/tools/imageresizer",
      desc: t("toolDescriptions.imageresizer"),
      gradient: "from-blue-400 via-cyan-500 to-teal-400",
      textColor: "text-blue-400",
      icon: <Minimize size={24} />,
    },
    {
      id: "imagecropper",
      category: "image",
      title: t("toolNames.imagecropper"),
      link: "/tools/imagecropper",
      desc: t("toolDescriptions.imagecropper"),
      gradient: "from-purple-400 via-pink-500 to-rose-400",
      textColor: "text-purple-400",
      icon: <Crop size={24} />,
    },
    {
      id: "imagecompressor",
      category: "image",
      title: t("toolNames.imagecompressor"),
      link: "/tools/imagecompressor",
      desc: t("toolDescriptions.imagecompressor"),
      gradient: "from-orange-400 via-red-500 to-pink-400",
      textColor: "text-orange-400",
      icon: <FileDigit size={24} />,
    },
    {
      id: "svgtopng",
      category: "image",
      title: t("toolNames.svgtopng"),
      link: "/tools/svgtopng",
      desc: t("toolDescriptions.svgtopng"),
      gradient: "from-violet-400 via-purple-500 to-fuchsia-400",
      textColor: "text-violet-400",
      icon: <FileImage size={24} />,
    },
    {
      id: "backgroundremover",
      category: "image",
      title: t("toolNames.backgroundremover"),
      link: "/tools/backgroundremover",
      desc: t("toolDescriptions.backgroundremover"),
      gradient: "from-blue-400 via-indigo-500 to-violet-400",
      textColor: "text-blue-400",
      icon: <Wand2 size={24} />,
    },
    {
      id: "imagetotext",
      category: "image",
      title: t("toolNames.imagetotext"),
      link: "/tools/imagetotext",
      desc: t("toolDescriptions.imagetotext"),
      gradient: "from-emerald-400 via-teal-500 to-cyan-400",
      textColor: "text-emerald-400",
      icon: <ScanText size={24} />,
    },
    {
      id: "colorpalette",
      category: "image",
      title: t("toolNames.colorpalette"),
      link: "/tools/colorpalette",
      desc: t("toolDescriptions.colorpalette"),
      gradient: "from-rose-400 via-pink-500 to-violet-400",
      textColor: "text-rose-400",
      icon: <Palette size={24} />,
    },
    {
      id: "imageGenerator",
      category: "image",
      title: t("toolNames.imageGenerator"),
      link: "/tools/image-generator",
      desc: t("toolDescriptions.imageGenerator"),
      gradient: "from-pink-400 via-purple-500 to-indigo-400",
      textColor: "text-pink-400",
      icon: <Wand2 size={24} />,
    },

    // Developer & Utilities
    {
      id: "formatter",
      category: "developer",
      title: t("toolNames.formatter"),
      link: "/tools/formatter",
      desc: t("toolDescriptions.formatter"),
      gradient: "from-sky-400 via-teal-500 to-emerald-400",
      textColor: "text-sky-400",
      icon: <FileCode size={24} />,
    },
    {
      id: "jsbeautify",
      category: "developer",
      title: t("toolNames.jsbeautify"),
      link: "/tools/jsbeautify",
      desc: t("toolDescriptions.jsbeautify"),
      gradient: "from-yellow-400 via-amber-500 to-orange-400",
      textColor: "text-yellow-400",
      icon: <FileJson size={24} />,
    },
    {
      id: "htmlbeautify",
      category: "developer",
      title: t("toolNames.htmlbeautify"),
      link: "/tools/htmlbeautify",
      desc: t("toolDescriptions.htmlbeautify"),
      gradient: "from-orange-400 via-amber-500 to-yellow-400",
      textColor: "text-orange-400",
      icon: <FileType size={24} />,
    },
    {
      id: "cssminify",
      category: "developer",
      title: t("toolNames.cssminify"),
      link: "/tools/cssminify",
      desc: t("toolDescriptions.cssminify"),
      gradient: "from-pink-400 via-rose-500 to-red-400",
      textColor: "text-pink-400",
      icon: <FileType size={24} />,
    },
    {
      id: "markdown",
      category: "developer",
      title: t("toolNames.markdown"),
      link: "/tools/markdown",
      desc: t("toolDescriptions.markdown"),
      gradient: "from-blue-400 via-indigo-500 to-purple-400",
      textColor: "text-blue-400",
      icon: <FileCode size={24} />,
    },
    {
      id: "regex",
      category: "developer",
      title: t("toolNames.regex"),
      link: "/tools/regex",
      desc: t("toolDescriptions.regex"),
      gradient: "from-yellow-400 via-amber-500 to-orange-400",
      textColor: "text-yellow-400",
      icon: <Terminal size={24} />,
    },
    {
      id: "base64",
      category: "developer",
      title: t("toolNames.base64"),
      link: "/tools/base64",
      desc: t("toolDescriptions.base64"),
      gradient: "from-green-400 via-emerald-500 to-teal-400",
      textColor: "text-green-400",
      icon: <FileDigit size={24} />,
    },
    {
      id: "urlencoder",
      category: "developer",
      title: t("toolNames.urlencoder"),
      link: "/tools/urlencoder",
      desc: t("toolDescriptions.urlencoder"),
      gradient: "from-orange-400 via-red-500 to-rose-400",
      textColor: "text-orange-400",
      icon: <LinkIcon size={24} />,
    },
    {
      id: "uuid",
      category: "developer",
      title: t("toolNames.uuid"),
      link: "/tools/uuid",
      desc: t("toolDescriptions.uuid"),
      gradient: "from-violet-400 via-purple-500 to-fuchsia-400",
      textColor: "text-violet-400",
      icon: <Fingerprint size={24} />,
    },
    {
      id: "hash",
      category: "developer",
      title: t("toolNames.hash"),
      link: "/tools/hash",
      desc: t("toolDescriptions.hash"),
      gradient: "from-cyan-400 via-blue-500 to-indigo-400",
      textColor: "text-cyan-400",
      icon: <Lock size={24} />,
    },
    {
      id: "qrcode",
      category: "developer",
      title: t("toolNames.qrcode"),
      link: "/tools/qrcode",
      desc: t("toolDescriptions.qrcode"),
      gradient: "from-orange-400 via-red-500 to-pink-400",
      textColor: "text-orange-400",
      icon: <QrCode size={24} />,
    },
    {
      id: "cssglow",
      category: "developer",
      title: t("toolNames.cssglow"),
      link: "/tools/cssglow",
      desc: t("toolDescriptions.cssglow"),
      gradient: "from-cyan-400 via-blue-500 to-indigo-400",
      textColor: "text-cyan-400",
      icon: <Zap size={24} />,
    },
  ], [t]);


  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return allTools;
    const lowerQuery = searchQuery.toLowerCase();
    return allTools.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.desc.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, allTools]);

  return (
    <div
      className={`
        min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
        ${theme === "dark" ? "bg-transparent" : "bg-[#f8fafc]"}
      `}
    >
      <title>DevLab - Tools Hub</title>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {t("toolsPage.title")}
          </span>
        </h1>

        <p className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          {t("toolsPage.description")}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto group">
          <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${theme === "dark" ? "text-slate-500 group-focus-within:text-blue-400" : "text-slate-400 group-focus-within:text-blue-500"}`}>
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder={t("navbar.searchPlaceholder") || "Search tools..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-4 pl-12 pr-6 rounded-full text-lg shadow-sm border transition-all duration-300 outline-none
                    ${theme === "dark"
                ? "bg-[#1a1b1e3f] border-slate-700/10 text-white placeholder-slate-500 focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                : "bg-white border-gray-200/10 text-slate-800 focus:border-blue-400 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              }`}
          />
        </div>
      </motion.div>

      <div className="max-w-7xl w-full space-y-16">
        {categories.map((cat) => {
          const toolsInCategory = filteredTools.filter(t => t.category === cat.id);
          if (toolsInCategory.length === 0) return null;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-slate-800 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                  {cat.icon}
                </div>
                <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                  {cat.title}
                </h2>
                <div className={`flex-1 h-px ml-4 ${theme === "dark" ? "bg-slate-800" : "bg-gray-200"}`}></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence>
                  {toolsInCategory.map((tool) => (
                    <Link key={tool.link} href={tool.link} className="block h-full">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        className={`
                                        h-full p-6 rounded-2xl border transition-all duration-300 group relative overflow-visible
                                        ${theme === "dark"
                            ? "bg-[#0b0c0f] border-slate-800 hover:border-slate-600"
                            : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"
                          }
                                    `}
                      >
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                                        bg-gradient-to-br ${tool.gradient} blur-[2px] -z-10
                                    `} style={{ margin: '-1px' }}></div>

                        <div className={`absolute inset-[1px] rounded-[15px] -z-10
                                        ${theme === "dark" ? "bg-[#0b0c0f]" : "bg-white"}
                                    `}></div>

                        <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                        bg-gradient-to-br ${tool.gradient} pointer-events-none
                                    `}></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 backdrop-blur-md
                                                ${theme === "dark"
                                ? "bg-slate-800/40 group-hover:bg-slate-700/60"
                                : "bg-slate-100/50 group-hover:bg-slate-200/70"}
                                            `}>
                              <div className={`text-xl font-bold bg-gradient-to-br ${tool.gradient} bg-clip-text text-transparent`}>
                                <span className={`flex items-center justify-center w-full h-full ${tool.textColor || (theme === "dark" ? "text-slate-200" : "text-slate-700")}`}>
                                  {tool.icon}
                                </span>
                              </div>
                            </div>
                          </div>

                          <h3 className={`text-lg font-bold mb-2 transition-all duration-300 bg-gradient-to-r ${tool.gradient} bg-clip-text
                              ${theme === "dark"
                              ? "text-slate-100 group-hover:text-transparent"
                              : "text-slate-800 group-hover:text-transparent"
                            }
                          `}>
                            {tool.title}
                          </h3>

                          <p className={`text-sm leading-relaxed flex-grow ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                            {tool.desc}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p>No tools found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
