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

type Quality = "fast" | "medium" | "high";

export default function Mp4ToWebmTool() {
  const [ffmpegReady, setFfmpegReady] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [quality, setQuality] = useState<Quality>("fast");
  const { theme } = useTheme();

  // FFmpeg scriptini yükle
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
          setStatus("❌ FFmpeg failed to load. Check the public/ffmpeg folder.");
      }
    };

    loadFFmpeg();
  }, []);

  // Dönüştürme işlemi
  const handleConvert = async () => {
    if (!selectedFile || !window.FFmpeg || loading) return;

    setLoading(true);
    setProgress(0);
    setOutputUrl(null);
    setStatus("Conversion started...");

    let interval: number | null = null;
    interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev === null) return 10;
        if (prev < 85) return prev + 3;
        return prev;
      });
    }, 500);

    try {
      const { createFFmpeg, fetchFile } = window.FFmpeg;

      const ffmpeg = createFFmpeg({
        log: false,
        corePath: "/ffmpeg/ffmpeg-core.js",
      });

      setStatus("Starting FFmpeg...");
      await ffmpeg.load();
      setProgress(15);

      setStatus("Processing video...");
      const inputData = await fetchFile(selectedFile);
      ffmpeg.FS("writeFile", "input.mp4", inputData);
      setProgress(30);

      let videoArgs: string[] = [];
      if (quality === "fast") {
        videoArgs = ["-vf", "scale=854:-1", "-c:v", "libvpx", "-preset", "ultrafast", "-b:v", "512k"];
      } else if (quality === "medium") {
        videoArgs = ["-vf", "scale=1280:-1", "-c:v", "libvpx", "-preset", "fast", "-b:v", "1M"];
      } else {
        videoArgs = ["-c:v", "libvpx", "-preset", "slow", "-b:v", "2M"];
      }

      setStatus("Conversion in progress...");
      setProgress(45);

      await ffmpeg.run("-i", "input.mp4", ...videoArgs, "-c:a", "libvorbis", "output.webm");

      setStatus("Preparing output...");
      setProgress(95);

      const data = ffmpeg.FS("readFile", "output.webm");
      const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/webm" }));

      setOutputUrl(url);
      setProgress(100);
      setStatus("✔ Conversion completed!");

      ffmpeg.FS("unlink", "input.mp4");
      ffmpeg.FS("unlink", "output.webm");
    } catch (err: any) {
      console.error(err);
      setStatus("🚨 Error: " + (err?.message || "Unknown error"));
      setProgress(null);
    } finally {
      if (interval) window.clearInterval(interval);
      setLoading(false);
    }
  };

  const qualityLabel = quality === "fast" ? "Fast" : quality === "medium" ? "Medium" : "High";

  return (
    <div
      className={`
        relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl border
        transition-colors duration-300
        ${theme === "dark"
          ? "bg-transparent border-[rgba(255,255,255,0.05)]"
          : "bg-white border-gray-200"
        }

      `}
    >
      {/* Başlık */}
      <div className="relative z-10">
        <h2 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>
          MP4 → WEBM Converter
        </h2>
        <p className={`text-[13px] mb-6 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
          Select your MP4 video, and DevLab will convert it to WEBM format right in your browser.{" "}
          <span className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}>
            Nothing is uploaded to any server.
          </span>
        </p>
      </div>

      {/* Dosya seçimi */}
      <label
        className="flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl px-6 py-7 cursor-pointer transition hover:border-indigo-400 hover:bg-slate-900/30"
      >
        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-100" : "text-slate-900"}`}>
          📁 Select MP4 video
        </span>
        <span className={`text-[11px] mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Click or drag and drop
        </span>
        <input
          type="file"
          accept="video/mp4"
          className="hidden"
          onChange={(e) => {
            setSelectedFile(e.target.files?.[0] || null);
            setOutputUrl(null);
            setProgress(null);
            setStatus("");
          }}
        />
      </label>

      {/* Quality selector */}
      <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
        {[
          { key: "fast", label: "⚡ Fast", desc: "480p • 512k" },
          { key: "medium", label: "🎯 Medium", desc: "720p • 1M" },
          { key: "high", label: "💎 High", desc: "2M" },
        ].map(({ key, label, desc }) => (
          <button
            key={key}
            type="button"
            onClick={() => setQuality(key as Quality)}
            className={`
    px-3 py-1.5 rounded-lg border transition-all duration-300 text-sm
    ${quality === key
                ? theme === "dark"
                  ? "text-white bg-[rgba(80,90,120,0.25)] border-transparent shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                  : "text-slate-900 bg-[rgba(200,200,255,0.25)] border-transparent shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                : theme === "dark"
                  ? "bg-transparent border-[rgba(255,255,255,0.15)] text-slate-300 hover:bg-[rgba(255,255,255,0.07)]"
                  : "bg-transparent border-[rgba(0,0,0,0.15)] text-slate-700 hover:bg-[rgba(0,0,0,0.05)]"
              }
  `}
          >
            <div className="font-medium">{label}</div>
            <div className={`text-[10px] opacity-75 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              {desc}
            </div>
          </button>

        ))}
      </div>

      {/* Seçilen dosya adı */}
      {selectedFile && (
        <p className={`mt-3 text-[11px] ${theme === "dark" ? "text-indigo-300" : "text-indigo-700"}`}>
          <span className="font-semibold">File Selected: </span>
          {selectedFile.name}
        </p>
      )}

      {/* İşlem durumu */}
      {status && (
        <p
          className={`mt-3 text-[11px] ${progress === 100
            ? "text-emerald-400"
            : status.startsWith("🚨") || status.startsWith("❌")
              ? "text-rose-400"
              : "text-slate-300"
            }`}
        >
          {status}
        </p>
      )}

      {/* Progress bar */}
      {progress !== null && (
        <div className="mt-3 w-full h-2 rounded-full bg-slate-900 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 transition-all duration-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Dönüştür Butonu */}
      <button
        type="button"
        disabled={!selectedFile || loading || !ffmpegReady}
        onClick={handleConvert}
        className={`mt-6 w-full py-3 text-sm font-semibold rounded-xl transition
          ${progress === 100
            ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950"
            : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 text-white"
          }
          disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-[1px] hover:scale-[1.01]
        `}
      >
        {loading ? `Converting (${qualityLabel})...` : progress === 100 ? "Convert new video" : "Convert to WEBM"}
      </button>

      {/* Çıktı görüntüleme & indirme */}
      {outputUrl && (
        <div className="mt-6 space-y-2">
          <video src={outputUrl} controls className="w-full rounded-lg border border-slate-700 bg-black shadow-lg" />
          <a
            href={outputUrl}
            download="converted.webm"
            className={`block w-full text-center text-[12px] py-2 rounded-lg transition
              ${theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700 border border-slate-600 text-indigo-200"
                : "bg-slate-200 hover:bg-slate-300 border border-slate-400 text-indigo-700"
              }
            `}
          >
            Download WEBM File
          </a>
        </div>
      )}

      {!ffmpegReady && (
        <p className={`mt-2 text-[11px] ${theme === "dark" ? "text-amber-300" : "text-amber-600"}`}>
          🔄 FFmpeg is preparing, the first launch may take a while...
        </p>
      )}
    </div>
  );
}
