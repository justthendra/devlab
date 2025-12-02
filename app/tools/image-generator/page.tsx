"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ImageGeneratorTool from "@/components/ImageGeneratorTool";

export default function AIImageGeneratorPage() {
  const { theme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto w-full px-5 pb-16 mt-24">

      {/* Başlık */}
      <h1
        className="
          text-3xl md:text-5xl font-bold text-center mb-4 
          bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 
          bg-clip-text text-transparent
        "
      >
        AI Image Generator
      </h1>

      {/* Açıklama */}
      <p
        className={`text-sm mb-8 text-center ${
          theme === "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Enter a descriptive prompt and generate high-quality AI images using
        state-of-the-art SD3 technology. Every image is created instantly through
        DevLab’s smart generation pipeline.
      </p>

      {/* Araç */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <ImageGeneratorTool />
      </motion.div>
    </div>
  );
}
