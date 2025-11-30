"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    FFmpeg?: {
      createFFmpeg: (opts: any) => any;
      fetchFile: (file: File | string) => Promise<Uint8Array>;
    };
  }
}

type Quality = "low" | "medium" | "high";

export default function GifOptimizeTool() {
  const [ffmpegReady, setFfmpegReady] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [quality, setQuality] = useState<Quality>("medium");
  const { theme } = useTheme();

  useEffect(() => {
    const loadFFmpeg = async () => {
      try {
        setStatus("FFmpeg loading...");

        if (!window.FFmpeg) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "/ffmpeg/ffmpeg.min.js";
            script.onload = () => resolve(true);
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }

        setFfmpegReady(true);
        setStatus("");
      } catch (err) {
        console.error(err);
        setStatus("❌ FFmpeg failed to load. Please check the public/ffmpeg folder.");
      }
    };

    loadFFmpeg();
  }, []);

  const handleOptimize = async () => {
    if (!selectedFile || !window.FFmpeg || loading) return;

    setLoading(true);
    setProgress(0);
    setOutputUrl(null);
    setStatus("Optimizing...");

    let interval: number | null = null;
    interval = window.setInterval(() => {
      setProgress((p) => (p && p < 85 ? p + 3 : p));
    }, 500);

    try {
      const { createFFmpeg, fetchFile } = window.FFmpeg;

      const ffmpeg = createFFmpeg({ log: false, corePath: "/ffmpeg/ffmpeg-core.js" });

      await ffmpeg.load();
      setProgress(15);

      const inputData = await fetchFile(selectedFile);
      ffmpeg.FS("writeFile", "input.gif", inputData);
      setProgress(35);

      let optimizeArgs = ["-vf", "fps=15,scale=640:-1"]; // Medium

      if (quality === "low") optimizeArgs = ["-vf", "fps=10,scale=480:-1"];
      else if (quality === "high") optimizeArgs = ["-vf", "fps=25,scale=720:-1"];

      await ffmpeg.run(
        "-i",
        "input.gif",
        ...optimizeArgs,
        "-loop",
        "0",
        "-gifflags",
        "-transdiff",
        "output.gif"
      );

      setProgress(95);

      const data = ffmpeg.FS("readFile", "output.gif");
      const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));

      setOutputUrl(url);
      setProgress(100);
      setStatus("✔ Optimize completed!");

      ffmpeg.FS("unlink", "input.gif");
      ffmpeg.FS("unlink", "output.gif");
    } catch (err: any) {
      console.error(err);
      setStatus("🚨 Error: " + (err.message || "Unknown error"));
    } finally {
      if (interval) window.clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl border transition-colors 
        ${theme === "dark"
          ? "bg-transparent border-[rgba(255,255,255,0.07)]"
          : "bg-white border-[rgba(0,0,0,0.1)]"
        }`}
    >
      <h2 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>
        GIF Optimize Tool
      </h2>
      <p className={`text-[13px] mb-6 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
        Reduce GIF size, lower FPS, and optimize.{" "}
        <span className="font-semibold text-emerald-400">Runs in the browser – no file upload.</span>
      </p>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl px-6 py-7 cursor-pointer hover:border-emerald-400 hover:bg-slate-900/30 transition">
        <span className={`${theme === "dark" ? "text-slate-100" : "text-slate-900"} text-sm font-medium`}>
          📤 Select GIF file
        </span>
        <input
          type="file"
          accept="image/gif"
          className="hidden"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />
      </label>

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
              quality === key ? "shadow-[0_0_12px_rgba(0,255,150,0.7)] text-white" : "hover:bg-[#0e121a] text-slate-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={handleOptimize}
        disabled={!selectedFile || loading}
        className="mt-6 w-full py-3 text-sm rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 disabled:opacity-40"
      >
        {loading ? "Optimizing..." : "Optimize GIF"}
      </button>

      {outputUrl && (
        <div className="mt-6 space-y-2">
          <img src={outputUrl} alt="optimized" className="w-full rounded-lg border" />
          <a href={outputUrl} download="optimized.gif" className="block text-center py-2 rounded-lg bg-slate-800 text-emerald-300">
            Download Optimized GIF
          </a>
        </div>
      )}

      {!ffmpegReady && <p className="mt-2 text-[11px] text-yellow-400">🔄 FFmpeg loading...</p>}
    </div>
  );
}
