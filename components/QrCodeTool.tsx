"use client";

import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import QRCode from "react-qr-code";
import { Copy, Download } from "lucide-react";

export default function QrCodeTool() {
  const { theme } = useTheme();
  const [text, setText] = useState("https://thendra.dev");
  const [size, setSize] = useState(220);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const qrWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleDownloadPng = () => {
    if (!text) return;

    try {
      setDownloading(true);

      const wrapper = qrWrapperRef.current;
      if (!wrapper) {
        console.error("QR code container not found");
        setDownloading(false);
        return;
      }

      const svgElement = wrapper.querySelector("svg") as SVGSVGElement | null;
      if (!svgElement) {
        console.error("SVG not found");
        setDownloading(false);
        return;
      }

      const serializer = new XMLSerializer();
      const svgData = serializer.serializeToString(svgElement);

      const img = new Image();
      const canvas = document.createElement("canvas");
      const scale = 4;
      canvas.width = size * scale;
      canvas.height = size * scale;

      img.onload = () => {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setDownloading(false);
          return;
        }

        ctx.fillStyle = bgColor || "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (!blob) {
            setDownloading(false);
            return;
          }
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "qrcode.png";
          a.click();
          URL.revokeObjectURL(url);
          setDownloading(false);
        });
      };

      img.src =
        "data:image/svg+xml;base64," +
        window.btoa(unescape(encodeURIComponent(svgData)));
    } catch (e) {
      console.error(e);
      setDownloading(false);
    }
  };

  return (
    <div
      className={`
        relative p-7 rounded-2xl max-w-4xl mx-auto shadow-xl border
        ${theme === "dark"
          ? "bg-[#0a0b0c04] border-[rgba(48,48,48,0.36)]"
          : "bg-white border-[rgba(0,0,0,0.07)]"
        }
      `}
    >
      <h2
        className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"
          }`}
      >
        QR Code Generator
      </h2>
      <p
        className={`text-[13px] mb-6 ${theme === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
      >
        Enter a link, text, or any content; DevLab will generate a{" "}
        <span
          className={
            theme === "dark" ? "text-emerald-400 font-semibold" : "text-emerald-600 font-semibold"
          }
        >
          high-resolution QR code
        </span>{" "}
        for you. You can download it as a PNG.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
        {/* Sol taraf: form */}
        <div className="space-y-4 text-[12px]">
          <div className="flex items-center justify-between gap-2">
            <label className="text-slate-300 text-[12px]">Text / URL</label>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center cursor-pointer gap-1 px-2 py-1 rounded-md border border-[rgba(48,48,48,0.36)] text-[11px] text-slate-200 hover:bg-[#141414c2] transition"
            >
              {copied ? (
                <>
                  <span className="text-emerald-400">✔</span> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Copy Text
                </>
              )}
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="https://..."
            className="w-full rounded-lg border border-[rgba(48,48,48,0.4)] bg-[#07080842] text-xs text-slate-100 p-3 font-mono focus:outline-none focus:border-emerald-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Boyut */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-300 text-[11px]">Size</span>
                <span className="text-slate-400 text-[11px]">{size}px</span>
              </div>
              <input
                type="range"
                min={160}
                max={320}
                step={10}
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Renkler */}
            <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
              <span className="text-slate-300 text-[11px]">Foreground</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-7 h-7 rounded-full border border-slate-500 bg-transparent cursor-pointer"
                />
                <span className="text-[10px] text-slate-400">{fgColor}</span>
              </div>
              <span className="text-slate-300 text-[11px]">Background</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-7 h-7 rounded-full border border-slate-500 bg-transparent cursor-pointer"
                />
                <span className="text-[10px] text-slate-400">{bgColor}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownloadPng}
            disabled={!text || downloading}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold
              bg-gradient-to-r from-emerald-500 to-cyan-500 text-white
              hover:opacity-90 disabled:opacity-40 cursor-pointer transition"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Downloading..." : "Download as PNG"}
          </button>
        </div>

        {/* Sağ taraf: preview */}
        <div
          className={`
            rounded-2xl border p-4 flex items-center justify-center
            ${theme === "dark"
              ? "bg-[#0c0d0f00] border-[rgba(48,48,48,0.36)]"
              : "bg-slate-50 border-slate-300"
            }
          `}
        >
          <div className="inline-flex flex-col items-center gap-3">
            <div
              ref={qrWrapperRef}
              className="rounded-2xl p-4 bg-[#020308] border border-slate-800 shadow-[0_0_32px_rgba(45,212,191,0.25)]"
              style={{ backgroundColor: bgColor }}
            >
              {text ? (
                <QRCode
                  value={text}
                  size={size}
                  bgColor={bgColor || "#ffffff"}
                  fgColor={fgColor || "#000000"}
                  style={{ width: size, height: size }}
                />
              ) : (
                <div className="w-[200px] h-[200px] flex items-center justify-center text-[11px] text-slate-400">
                  Create QR code by entering text.
                </div>
              )}
            </div>
            <span className="text-[11px] text-slate-400">
              Preview • Right click → “Save image as” to use.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
