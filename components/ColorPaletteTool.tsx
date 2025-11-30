"use client";

import { useState, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { Copy, Upload, Image as ImageIcon } from "lucide-react";

type PaletteColor = {
  hex: string;
  count: number;
  ratio: number;
};

export default function ColorPaletteTool() {
  const { theme } = useTheme();

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [colors, setColors] = useState<PaletteColor[]>([]);
  const [processing, setProcessing] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [gradientMode, setGradientMode] = useState<"linear" | "radial">("linear");
  const [gradientCss, setGradientCss] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Görsel seçildiğinde çalışır
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    setError(null);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setColors([]);
    setGradientCss(null);
    extractColors(url);
  };

  // Canvas ile baskın renkleri bul
  const extractColors = useCallback((url: string) => {
    setProcessing(true);
    setError(null);

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const maxSide = 120;
        const scale = Math.min(maxSide / img.width, maxSide / img.height, 1);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas could not be created.");

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const colorMap = new Map<string, number>();
        let totalSamples = 0;

        // Her 3. pikselde 1 örnek al (performans için)
        const step = 4 * 3;
        for (let i = 0; i < data.length; i += step) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a < 128) continue; // çok transparanları at

          // Hafif quantization
          const rq = Math.round(r / 32) * 32;
          const gq = Math.round(g / 32) * 32;
          const bq = Math.round(b / 32) * 32;

          const hex = rgbToHex(
            clampColor(rq),
            clampColor(gq),
            clampColor(bq)
          );

          const prev = colorMap.get(hex) ?? 0;
          colorMap.set(hex, prev + 1);
          totalSamples++;
        }

        if (!totalSamples || colorMap.size === 0) {
          throw new Error("Color data could not be read.");
        }

        const palette: PaletteColor[] = Array.from(colorMap.entries())
          .map(([hex, count]) => ({
            hex,
            count,
            ratio: count / totalSamples,
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);

        setColors(palette);
      } catch (err: any) {
        console.error(err);
        setError(err?.message || "An error occurred while extracting colors.");
        setColors([]);
      } finally {
        setProcessing(false);
      }
    };

    img.onerror = () => {
      setProcessing(false);
      setError("An error occurred while loading the image.");
    };

    img.src = url;
  }, []);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const generateGradient = (baseHex: string) => {
    if (colors.length < 2) return;

    const second =
      colors.find((c) => c.hex !== baseHex)?.hex || colors[1].hex;

    const css =
      gradientMode === "linear"
        ? `linear-gradient(135deg, ${baseHex}, ${second})`
        : `radial-gradient(circle, ${baseHex}, ${second})`;

    setGradientCss(css);
  };

  return (
    <div
      className={`
        relative p-7 rounded-2xl max-w-5xl mx-auto shadow-xl border
        ${theme === "dark"
          ? "bg-[#0a0a0a13] border-[rgba(255,255,255,0.1)]"
          : "bg-white border-gray-200"
        }
      `}
    >
      <h2
        className={`text-xl font-semibold mb-1 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        Color Palette Extractor & Gradient Generator
      </h2>
      <p
        className={`text-[13px] mb-6 ${
          theme === "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Upload an image, DevLab will extract the{" "}
        <span
          className={
            theme === "dark"
              ? "text-emerald-400 font-semibold"
              : "text-emerald-600 font-semibold"
          }
        >
          dominant color palette
        </span>{" "}
        extracted. From the color box, you can{" "}
        <span className="font-semibold">copy HEX</span> or{" "}
        <span className="font-semibold">generate CSS gradient</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
        {/* Sol: upload & preview */}
        <div className="space-y-4 text-[12px]">
          {/* Upload alanı */}
          <div
            className={`flex flex-col items-center justify-center px-5 py-7 rounded-xl border border-[rgba(48,48,48,0.4)]
              ${
                theme === "dark"
                  ? "bg-[#07080842] text-slate-200"
                  : "bg-slate-50 text-slate-800"
              }
              cursor-pointer hover:border-emerald-400/80 transition`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-6 h-6 mb-2 opacity-80" />
            <span className="text-[12px] font-medium">
              Click to upload an image
            </span>
            <span className="text-[11px] opacity-70 mt-1">
              PNG, JPG, WEBP • Medium-sized images recommended
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Küçük preview */}
          {imageUrl && (
            <div className="mt-2 flex items-center gap-3">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-[rgba(48,48,48,0.4)] bg-black">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-[11px] text-slate-400">
                <p>
                  Dominant colors are found by pixel sampling from the uploaded image. The most frequent
                  colors are identified.
                </p>
                {processing && (
                  <p className="mt-1 text-emerald-400">
                    🎨 Extracting colors...
                  </p>
                )}
              </div>
            </div>
          )}

          {!imageUrl && !processing && (
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>
                No image uploaded yet. Once you select an image, the dominant palette will appear here.
              </span>
            </div>
          )}

          {error && (
            <p className="text-[11px] text-rose-400 mt-1">{error}</p>
          )}
        </div>

        {/* Sağ: palette & gradient */}
        <div
          className={`
            rounded-2xl border p-4 flex flex-col gap-3
            ${
              theme === "dark"
                ? "bg-[#04040500] border-[rgba(48,48,48,0.7)]"
                : "bg-slate-50 border-slate-300"
            }
          `}
        >
          <div className="flex items-center justify-between mb-1">
            <span
              className={`text-[11px] uppercase tracking-[0.18em] ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Palette
            </span>
            <span className="text-[11px] text-slate-500">
              {colors.length > 0
                ? `${colors.length} renk bulundu`
                : "Color waiting"}
            </span>
          </div>

          {/* Palet kartları */}
          {colors.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-[11px] text-slate-500">
              Upload an image to extract the color palette.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {colors.map((c) => (
                <div
                  key={c.hex}
                  className={`
                    group rounded-xl border text-left p-2 flex flex-col gap-1
                    ${
                      theme === "dark"
                        ? "border-[rgba(48,48,48,0.7)] bg-[#06060710]"
                        : "border-slate-300 bg-white"
                    }
                    transition
                  `}
                >
                  <div
                    className="w-full h-10 rounded-md border border-black/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="flex items-center justify-between text-[11px] mt-1">
                    <span
                      className={
                        theme === "dark"
                          ? "text-slate-100 font-medium"
                          : "text-slate-800 font-medium"
                      }
                    >
                      {c.hex}
                    </span>
                    <span className="text-slate-500 text-[10px]">
                      {(c.ratio * 100).toFixed(1)}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-1 text-[10px]">
                    <button
                      type="button"
                      onClick={() => handleCopyHex(c.hex)}
                      className="flex items-center gap-1 text-slate-400 cursor-pointer hover:text-slate-100 transition"
                    >
                      <Copy className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                      {copiedHex === c.hex ? "Copied" : "Copy"}
                    </button>

                    <button
                      type="button"
                      onClick={() => generateGradient(c.hex)}
                      className="px-2 py-1 rounded-md border cursor-pointer border-[#272727] hover:bg-[#18181838] transition"
                    >
                      🎨 Gradient
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gradient alanı */}
          {gradientCss && (
            <div className="mt-4 p-3 rounded-xl border border-slate-600 bg-[#060607ef]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[12px] font-medium text-slate-100">
                  Generated Gradient
                </h3>
                <button
                  className="text-[11px] px-2 py-1 rounded-md border border-slate-500 hover:bg-[#111827] transition"
                  onClick={() =>
                    navigator.clipboard.writeText(gradientCss || "")
                  }
                >
                  📋 Copy CSS
                </button>
              </div>

              <div
                className="w-full h-20 rounded-md mb-2 shadow-inner"
                style={{ background: gradientCss }}
              />

              <pre className="text-[11px] bg-black/40 p-2 rounded-md text-slate-200 overflow-x-auto">
{gradientCss}
              </pre>

              <div className="flex gap-2 mt-2">
                <button
                  className={`text-[10px] px-2 py-1 border rounded-md ${
                    gradientMode === "linear"
                      ? "bg-emerald-500 text-white border-emerald-400"
                      : "border-slate-600 text-slate-300"
                  }`}
                  onClick={() => setGradientMode("linear")}
                >
                  ⬆️ Linear
                </button>
                <button
                  className={`text-[10px] px-2 py-1 border rounded-md ${
                    gradientMode === "radial"
                      ? "bg-blue-500 text-white border-blue-400"
                      : "border-slate-600 text-slate-300"
                  }`}
                  onClick={() => setGradientMode("radial")}
                >
                  🔵 Radial
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Yardımcı fonksiyonlar */

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function clampColor(v: number) {
  return Math.max(0, Math.min(255, v));
}

