"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
    Video, Music, Scissors, Image as ImageIcon, Layers,
    Code2, FileJson, Palette, QrCode, Wand2, Calculator, Regex
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ToolsBentoGrid() {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const categories = [
        {
            title: "Media Magic",
            description: "Process video and audio instantly.",
            className: "md:col-span-2 md:row-span-2",
            gradient: "from-pink-500 via-rose-500 to-red-500",
            tools: [
                { name: "MP4 to WebM", path: "/tools/mp4towebm", icon: <Video size={18} /> },
                { name: "Video Trimmer", path: "/tools/videotrimmer", icon: <Scissors size={18} /> },
                { name: "MP3 Converter", path: "/tools/mp4tomp3", icon: <Music size={18} /> },
                { name: "Video to GIF", path: "/tools/videotogif", icon: <Layers size={18} /> },
            ]
        },
        {
            title: "Image Studio",
            description: "Optimize, resize, and edit images.",
            className: "md:col-span-1 md:row-span-2",
            gradient: "from-emerald-400 via-teal-500 to-green-500",
            tools: [
                { name: "Compressor", path: "/tools/image-compressor", icon: <ImageIcon size={18} /> },
                { name: "Background Remover", path: "/tools/background-remover", icon: <Wand2 size={18} /> },
                { name: "Resizer", path: "/tools/image-resizer", icon: <Layers size={18} /> },
            ]
        },
        {
            title: "Dev Utilities",
            description: "Format, minify, and generate.",
            className: "md:col-span-1 md:row-span-1",
            gradient: "from-blue-400 via-indigo-500 to-violet-500",
            tools: [
                { name: "Code Formatter", path: "/tools/formatter", icon: <Code2 size={18} /> },
                { name: "JSON Viewer", path: "/tools/formatter", icon: <FileJson size={18} /> },
            ]
        },
        {
            title: "Design & Colors",
            description: "CSS Generators and Palettes.",
            className: "md:col-span-2 md:row-span-1",
            gradient: "from-orange-400 via-amber-500 to-yellow-500",
            tools: [
                { name: "CSS Glow", path: "/tools/cssglow", icon: <Wand2 size={18} /> },
                { name: "Color Palette", path: "/tools/colorpalette", icon: <Palette size={18} /> },
                { name: "QR Generator", path: "/tools/qrcode", icon: <QrCode size={18} /> },
            ]
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-12 text-center">
                <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Powerful Tools Suite
                </h2>
                <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Everything you need in one place. No installations, no sign-ups.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(140px,auto)]">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`
              relative overflow-hidden rounded-3xl p-5 border transition-all duration-300
              ${cat.className}
              ${theme === 'dark'
                                ? 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]'
                                : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80'}
            `}
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className={`text-lg font-bold mb-1 bg-linear-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                                    {cat.title}
                                </h3>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                    {cat.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                                {cat.tools.map((tool) => (
                                    <Link
                                        key={tool.path}
                                        href={tool.path}
                                        className={`
                        flex items-center gap-2 p-2 rounded-lg transition-all group
                        ${theme === 'dark'
                                                ? 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                                                : 'bg-slate-50 hover:bg-slate-100'}
                      `}
                                    >
                                        <div className={`
                            p-1.5 rounded-md transition-all text-white shadow-md
                            bg-linear-to-br ${cat.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110
                        `}>
                                            {tool.icon}
                                        </div>
                                        <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                                            {tool.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Background Decorative Gradient */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${cat.gradient} blur-3xl opacity-5 z-0 rounded-full translate-x-1/2 -translate-y-1/2`} />
                    </motion.div>
                ))}

                {/* Call to Action Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`
                md:col-span-3 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8
                bg-linear-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 border border-emerald-500/20
            `}
                >
                    <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            Explore the full collection
                        </h3>
                        <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                            30+ developer tools ready to use in your browser
                        </p>
                    </div>
                    <Link
                        href="/tools"
                        className="px-8 py-3 rounded-xl font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-lg shadow-emerald-500/20"
                    >
                        View All Tools
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
