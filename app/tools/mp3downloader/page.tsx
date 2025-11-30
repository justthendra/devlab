"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Mp3DownloaderTool from "@/components/Mp3DownloaderTool";

export default function Mp3DownloaderPage() {
  const { theme } = useTheme();

  return (
    <div
              className={`
                min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
                ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}
              `}
            >
              <title>DevLab - MP3 Downloader</title>
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
                <h1 className="text-3xl md:text-5xl font-bold mb-3 line-through">
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MP3 Downloader
                  </span>
                </h1>
        
                <span className="text-white text-xl font-bold no-underline">(Temporarily disabled)</span>
                <p
                  className={`
                    text-sm md:text-base py-2
                    ${theme === "dark" ? "text-slate-300" : "text-slate-600"}
                  `}
                >
                  Enter a YouTube URL and download the audio as an MP3 file. 
                  <br />
                  <span
                    className={`
                      font-medium
                      ${theme === "dark" ? "text-emerald-400" : "text-blue-600"}
                    `}
                  >
                    Fast conversion – entirely in the browser.
                  </span>
                </p>
              </motion.div>
        
              {/* Tool */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 w-full max-w-3xl text-center"
              >
                <Mp3DownloaderTool/>
              </motion.div>
            </div>
  );
}
