"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Mp4ToWebmTool from "@/components/Mp4ToWebmTool";

export default function Mp4ToWebmPage() {
  const { theme } = useTheme();

  return (
    <div
          className={`
            min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
            ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}
          `}
        >
          <title>DevLab - MP4 to WEBM</title>
          {/* Orb effect */}
          <div className="absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.15)] blur-[180px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-50px] right-[-40px] w-[350px] h-[350px] bg-[rgba(0,150,255,0.15)] blur-[200px] rounded-full animate-pulse" />
          <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
    
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center max-w-3xl mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                MP4 → WEBM Converter
              </span>
            </h1>
    
            <p
              className={`
                text-sm md:text-base
                ${theme === "dark" ? "text-slate-300" : "text-slate-600"}
              `}
            >
              Upload your MP4 and DevLab will produce an optimized WEBM.  
              <br />
              <span
                className={`
                  font-medium
                  ${theme === "dark" ? "text-emerald-400" : "text-blue-600"}
                `}
              >
                Fast conversion — entirely in your browser.
              </span>
            </p>
          </motion.div>
    
          {/* Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative z-10 w-full max-w-3xl"
          >
            <Mp4ToWebmTool />
          </motion.div>
        </div>
  );
}
