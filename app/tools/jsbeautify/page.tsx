"use client";

import JsBeautifierTool from "@/components/JsBeautifier";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";


export default function JsBeautifyPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - JavaScript Beautify & Minify</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            JavaScript Beautify & Minify
          </span>
        </h1>
        <p className="text-slate-300 py-3 text-sm mb-6">
          Easily format, tidy, or minify your JavaScript code.
        </p>
      </motion.div>

      <JsBeautifierTool />
    </div>
  );
}
