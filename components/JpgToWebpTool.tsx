"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

type Quality = "low" | "medium" | "high";

export default function JpgToWebpTool() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [quality, setQuality] = useState<Quality>("medium");
  const { theme } = useTheme();

  const handleConvert = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setOutputUrl(null);

    const qualityValue = quality === "low" ? 0.5 : quality === "medium" ? 0.75 : 1;

    try {
      const imageBitmap = await createImageBitmap(selectedImage);
      const canvas = document.createElement("canvas");
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(imageBitmap, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setOutputUrl(URL.createObjectURL(blob));
          }
          setLoading(false);
        },
        "image/webp",
        qualityValue
      );
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div
      className={`
        relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl 
        border transition-colors duration-300
        ${theme === "dark"
          ? "bg-transparent border-[rgba(255,255,255,0.07)]"
          : "bg-white border-[rgba(0,0,0,0.1)]"
        }
      `}
    >
      {/* Başlık */}
      <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-1`}>
        JPG / PNG → WEBP Converter
      </h2>
      <p className={`text-[13px] ${theme === "dark" ? "text-slate-200" : "text-slate-700"} mb-6`}>
        Convert and optimize images to WebP format.{" "}
        <span className="font-semibold text-emerald-400">Runs entirely in the browser.</span>
      </p>

      {/* Dosya seçimi */}
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl px-6 py-7 cursor-pointer hover:border-emerald-400 hover:bg-slate-900/30 transition duration-300">
        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-100" : "text-slate-900"}`}>
          📸 Select image (JPG, PNG)
        </span>
        <input
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={(e) => {
            setSelectedImage(e.target.files?.[0] || null);
            setOutputUrl(null);
          }}
        />
      </label>

      {/* Quality selection */}
      <div className="mt-4 flex gap-2 text-[11px]">
        {[
          { key: "low", label: "⚡ Low" },
          { key: "medium", label: "🎯 Medium" },
          { key: "high", label: "💎 High" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setQuality(key as Quality)}
            className={`px-3 py-1.5 rounded-lg border transition ${
              quality === key
                ? "shadow-[0_0_12px_rgba(0,255,150,0.7)] text-white"
                : "hover:bg-[#0e121a] text-slate-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* İşlem butonu */}
      <button
        onClick={handleConvert}
        disabled={!selectedImage || loading}
        className="mt-6 w-full py-3 text-sm rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90 disabled:opacity-30"
      >
        {loading ? "Converting..." : "Convert to WEBP"}
      </button>

      {/* Önizleme & İndirme */}
      {outputUrl && (
        <div className="mt-6 space-y-2">
          <img src={outputUrl} alt="converted" className="w-full rounded-lg border border-slate-700" />
          <a href={outputUrl} download="converted.webp" className="block w-full text-center py-2 rounded-lg bg-slate-800 text-emerald-300">
            WEBP Download
          </a>
        </div>
      )}
    </div>
  );
}
