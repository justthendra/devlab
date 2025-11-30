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

export default function Mp4ToMp3Tool() {
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
        setStatus("❌ FFmpeg failed to load. Check the public/ffmpeg folder.");
      }
    };

    loadFFmpeg();
  }, []);

  const handleConvert = async () => {
    if (!selectedFile || !window.FFmpeg || loading) return;

    setLoading(true);
    setProgress(0);
    setOutputUrl(null);
    setStatus("Audio extraction started...");

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

      setStatus("Writing file...");
      const inputData = await fetchFile(selectedFile);
      ffmpeg.FS("writeFile", "input.mp4", inputData);
      setProgress(30);

      let bitrate = "128k";
      if (quality === "low") bitrate = "96k";
      if (quality === "high") bitrate = "192k";

      setStatus("Processing audio...");
      setProgress(50);

      await ffmpeg.run(
        "-i",
        "input.mp4",
        "-vn",
        "-c:a",
        "libmp3lame",
        "-b:a",
        bitrate,
        "output.mp3"
      );

      setStatus("Preparing output...");
      setProgress(95);

      const data = ffmpeg.FS("readFile", "output.mp3");
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "audio/mp3" })
      );

      setOutputUrl(url);
      setProgress(100);
      setStatus("✔ Audio extraction completed!");

      ffmpeg.FS("unlink", "input.mp4");
      ffmpeg.FS("unlink", "output.mp3");
    } catch (err: any) {
      console.error(err);
      setStatus("🚨 Error: " + (err?.message || "Unknown error"));
      setProgress(null);
    } finally {
      if (interval) window.clearInterval(interval);
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
      <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-1`}>
        MP4 → MP3 Converter
      </h2>
      <p className={`text-[13px] ${theme === "dark" ? "text-slate-200" : "text-slate-700"} mb-6`}>
        Extract audio from video. <span className="font-semibold text-emerald-400">Runs entirely in the browser.</span>
      </p>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl px-6 py-7 cursor-pointer hover:border-emerald-400 hover:bg-slate-900/30 transition duration-300">
        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-100" : "text-slate-900"}`}>📁 Select MP4 video</span>
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

      {/* Kalite seçimi */}
      <div className="mt-4 flex gap-2 text-[11px]">
        {[
          { key: "low", label: "🔉 Low (96k)" },
          { key: "medium", label: "📊 Medium (128k)" },
          { key: "high", label: "🔊 High (192k)" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setQuality(key as Quality)}
            className={`px-3 py-1.5 rounded-lg border ${quality === key ? "shadow-[0_0_12px_rgba(0,255,150,0.7)]" : "hover:bg-[#0e121a]"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Durum */}
      {status && (
        <p className={`mt-3 text-[11px] ${progress === 100 ? "text-emerald-400" : "text-slate-300"}`}>{status}</p>
      )}

      {/* Progress bar */}
      {progress !== null && (
        <div className="mt-2 w-full h-2 bg-slate-900 rounded-full overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 transition-all"
          ></div>
        </div>
      )}

      {/* Dönüştür butonu */}
      <button
        onClick={handleConvert}
        disabled={!selectedFile || loading || !ffmpegReady}
        className="mt-6 w-full py-3 text-sm rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90"
      >
        {loading ? "Converting..." : "Convert to MP3"}
      </button>

      {/* Çıktı */}
      {outputUrl && (
        <div className="mt-6 space-y-2">
          <audio controls src={outputUrl} className="w-full" />
          <a href={outputUrl} download="output.mp3" className="block w-full text-center py-2 rounded-lg bg-slate-800 text-emerald-300">
            Download MP3
          </a>
        </div>
      )}

      {!ffmpegReady && <p className="mt-2 text-[11px] text-yellow-400">🔄 FFmpeg is preparing...</p>}
    </div>
  );
}
