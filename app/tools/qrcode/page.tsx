"use client";

import QrCodeTool from "@/components/QrCodeTool";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function QrCodePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative 
      ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
    >
      <title>DevLab - QR Code Generator</title>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            QR Code Generator
          </span>
        </h1>
        <p className="text-sm text-slate-300 mb-8 py-3 text-center max-w-2xl mx-auto">
          Create customizable
          <span className="text-emerald-400 font-semibold"> QR codes</span> like in DevLab.
          <br />Encode text, URLs, WiFi info, and more. Adjust color, size, and error correction level.
          Download as<span className="text-cyan-400 font-semibold"> PNG</span> or share directly.
        </p>
      </motion.div>

      <QrCodeTool />
    </div>
  );
}
