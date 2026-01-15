"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

declare global {
    interface Window {
        FFmpeg?: {
            createFFmpeg: (opts: any) => any;
            fetchFile: (file: File | string) => Promise<Uint8Array>;
        };
    }
}

export default function VideoTrimmerTool() {
    const [ffmpegReady, setFfmpegReady] = useState(false);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [trimmedUrl, setTrimmedUrl] = useState<string | null>(null);
    const [status, setStatus] = useState("");
    const videoRef = useRef<HTMLVideoElement>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        const loadFFmpeg = async () => {
            try {
                if (!window.FFmpeg) {
                    await new Promise((resolve, reject) => {
                        const script = document.createElement("script");
                        script.src = "/ffmpeg/ffmpeg.min.js";
                        script.onload = resolve;
                        script.onerror = reject;
                        document.body.appendChild(script);
                    });
                }
                setFfmpegReady(true);
            } catch (err) {
                console.error(err);
            }
        };
        loadFFmpeg();
    }, []);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setVideoFile(file);
        const url = URL.createObjectURL(file);
        setVideoUrl(url);
        setTrimmedUrl(null);
        setStartTime(0);
        setProgress(0);
    };

    const handleMetadataLoaded = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            setEndTime(videoRef.current.duration);
        }
    };

    const formatTime = (seconds: number) => {
        const date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    };

    const handleTrim = async () => {
        if (!videoFile || !window.FFmpeg || loading) return;

        setLoading(true);
        setStatus(t("tools.videotrimmer.trimming"));
        setProgress(0);

        try {
            const { createFFmpeg, fetchFile } = window.FFmpeg;
            const ffmpeg = createFFmpeg({
                log: false,
                corePath: "/ffmpeg/ffmpeg-core.js",
            });

            await ffmpeg.load();
            setProgress(20);

            const inputData = await fetchFile(videoFile);
            ffmpeg.FS("writeFile", "input.mp4", inputData);
            setProgress(40);

            const duration = endTime - startTime;

            // Using stream copy for fast trimming (may not be frame accurate)
            // Re-encoding ensures frame accuracy but is slower:
            // ["-ss", `${startTime}`, "-i", "input.mp4", "-t", `${duration}`, "-c:v", "libx264", "-c:a", "aac", "output.mp4"]
            await ffmpeg.run(
                "-ss", `${startTime}`,
                "-i", "input.mp4",
                "-t", `${duration}`,
                "-c", "copy",
                "output.mp4"
            );

            setProgress(80);

            const data = ffmpeg.FS("readFile", "output.mp4");
            const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));

            setTrimmedUrl(url);
            setProgress(100);
            setStatus(t("tools.videotrimmer.success"));
        } catch (err) {
            console.error(err);
            setStatus(t("tools.common.error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.videotrimmer.title")}
            </h2>

            {!videoFile ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">🎬</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.videotrimmer.upload")}
                    </span>
                    <input type="file" accept="video/mp4,video/webm" onChange={handleFileUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-6">
                    <video
                        ref={videoRef}
                        src={videoUrl || ""}
                        controls
                        onLoadedMetadata={handleMetadataLoaded}
                        className="w-full rounded-lg max-h-80 bg-black"
                    />

                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <span className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                {t("tools.videotrimmer.start")}: {formatTime(startTime)}
                            </span>
                            <span className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                {t("tools.videotrimmer.end")}: {formatTime(endTime)}
                            </span>
                        </div>

                        {/* Range Slider for trimming - simple implementation */}
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className={`block text-xs mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                    {t("tools.videotrimmer.startTime")} (sec)
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration}
                                    step="0.1"
                                    value={startTime}
                                    onChange={(e) => {
                                        const val = parseFloat(e.target.value);
                                        if (val < endTime) setStartTime(val);
                                    }}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className={`block text-xs mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                    {t("tools.videotrimmer.endTime")} (sec)
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration}
                                    step="0.1"
                                    value={endTime}
                                    onChange={(e) => {
                                        const val = parseFloat(e.target.value);
                                        if (val > startTime) setEndTime(val);
                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <p className={`text-xs text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
                            {t("tools.videotrimmer.duration")}: {formatTime(endTime - startTime)}
                        </p>
                    </div>

                    {!ffmpegReady && (
                        <p className="text-yellow-500 text-sm">{t("tools.common.loadingFFmpeg")}</p>
                    )}

                    {loading && (
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            <p className="text-xs text-center mt-1">{status}</p>
                        </div>
                    )}

                    <div className="flex gap-2">
                        <button
                            onClick={handleTrim}
                            disabled={loading || !ffmpegReady}
                            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition
                ${loading || !ffmpegReady
                                    ? "bg-slate-600 opacity-50 cursor-not-allowed"
                                    : "bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white"}`}
                        >
                            {loading ? t("tools.common.processing") : t("tools.videotrimmer.trimBtn")}
                        </button>
                    </div>

                    {trimmedUrl && (
                        <div className={`p-4 rounded-lg mt-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
                            <p className="text-green-500 font-semibold mb-2">{t("tools.videotrimmer.downloadTitle")}</p>
                            <video src={trimmedUrl} controls className="w-full rounded mb-2 max-h-40" />
                            <a
                                href={trimmedUrl}
                                download={`trimmed_${videoFile?.name}`}
                                className="block w-full py-2 bg-green-500 hover:bg-green-600 text-white text-center rounded-lg transition"
                            >
                                {t("tools.common.download")}
                            </a>
                        </div>
                    )}

                    <button
                        onClick={() => {
                            setVideoFile(null);
                            setVideoUrl(null);
                            setTrimmedUrl(null);
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.common.uploadNew")}
                    </button>
                </div>
            )}
        </div>
    );
}
