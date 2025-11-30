"use client";

import ColorPaletteTool from "@/components/ColorPaletteTool";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";


export default function ColorPalettePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - Color Palette Extractor</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Color Palette Extractor
          </span>
        </h1>
        <p className="text-sm text-slate-300 mb-8 py-3 text-center max-w-2xl mx-auto">
          Use it to extract the{" "}
          <span className="text-emerald-400 font-semibold">
            dominant color palette
          </span>{" "}
          from Dribbble, Behance, in-game screenshots, or UI designs. Use it as a reference for glow, gradient, and background designs.
        </p>
      </motion.div>

      <ColorPaletteTool />
    </div>
  );
}
