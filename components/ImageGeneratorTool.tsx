"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Loader2, ImageIcon } from "lucide-react";

export default function ImageGeneratorTool() {
  const { theme } = useTheme();
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        alert("⚠️ API Hatası: " + (await res.text()));
        setLoading(false);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (e) {
      alert("Beklenmeyen hata: " + e);
    }

    setLoading(false);
  };

  return (
    <div
      className={`
        relative p-7 rounded-2xl max-w-3xl mx-auto shadow-xl border
        transition-all duration-300
        ${
          theme === "dark"
            ? "bg-[#0a0b0c15] border-[rgba(255,255,255,0.08)]"
            : "bg-white border-slate-300"
        }
      `}
    >
      <h2
        className={`text-xl font-semibold mb-1 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        AI Image Generator
      </h2>

      <p
        className={`text-[13px] mb-6 ${
          theme === "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Describe anything. DevLab uses powerful AI to generate an image for you.
      </p>

      <textarea
        rows={3}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="A futuristic neon cyberpunk city at night..."
        className={`
          w-full rounded-lg p-3 text-sm mb-4 resize-none
          ${
            theme === "dark"
              ? "bg-[#0f0f1204] text-white border border-[rgba(255,255,255,0.12)]"
              : "bg-slate-100 border border-slate-300 text-slate-900"
          }
        `}
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        disabled={loading}
        onClick={handleGenerate}
        className={`
          w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition
          ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90"
          }
        `}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Generating...
          </>
        ) : (
          <>
            <ImageIcon className="w-4 h-4" />
            Generate Image
          </>
        )}
      </motion.button>

      {/* Preview */}
      <div className="mt-6 flex justify-center">
        {imageUrl ? (
          <motion.img
            key={imageUrl}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            src={imageUrl}
            className="rounded-xl shadow-lg border border-[rgba(255,255,255,0.15)] max-w-full"
            alt="Generated"
          />
        ) : (
          <div
            className={`
              w-full py-10 text-center text-sm rounded-lg
              ${
                theme === "dark"
                  ? "text-slate-500 border border-[rgba(255,255,255,0.1)]"
                  : "text-slate-500 border border-slate-300"
              }
            `}
          >
            No image yet — enter a prompt above.
          </div>
        )}
      </div>
    </div>
  );
}
