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

export default function VideoToGifTool() {
    const [ffmpegReady, setFfmpegReady] = useState(false);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [fps, setFps] = useState(10);
    const [width, setWidth] = useState(320);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [gifUrl, setGifUrl] = useState<string | null>(null);
    const [status, setStatus] = useState("");
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
        setGifUrl(null);
        setProgress(0);
    };

    const handleConvert = async () => {
        if (!videoFile || !window.FFmpeg || loading) return;

        setLoading(true);
        setStatus(t("tools.videotogif.converting"));
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

            // Generate palette for better quality
            // ffmpeg -i input.mp4 -vf "fps=10,scale=320:-1:flags=lanczos,palettegen" palette.png
            // ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif

            // Simple conversion for speed and browser compatibility stability
            await ffmpeg.run(
                "-i", "input.mp4",
                "-vf", `fps=${fps},scale=${width}:-1:flags=lanczos`,
                "output.gif"
            );

            setProgress(90);

            const data = ffmpeg.FS("readFile", "output.gif");
            const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));

            setGifUrl(url);
            setProgress(100);
            setStatus(t("tools.videotogif.success"));
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
                {t("tools.videotogif.title")}
            </h2>

            {!videoFile ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">🎞️</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.videotogif.upload")}
                    </span>
                    <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-6">
                    <video
                        src={videoUrl || ""}
                        controls
                        className="w-full rounded-lg max-h-60 bg-black"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={`block text-xs mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                {t("tools.videotogif.fps")}
                            </label>
                            <select
                                value={fps}
                                onChange={(e) => setFps(parseInt(e.target.value))}
                                className={`w-full p-2 rounded text-sm ${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100"}`}
                            >
                                <option value="5">5 FPS</option>
                                <option value="10">10 FPS</option>
                                <option value="15">15 FPS</option>
                                <option value="20">20 FPS</option>
                            </select>
                        </div>
                        <div>
                            <label className={`block text-xs mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                {t("tools.videotogif.width")}
                            </label>
                            <select
                                value={width}
                                onChange={(e) => setWidth(parseInt(e.target.value))}
                                className={`w-full p-2 rounded text-sm ${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100"}`}
                            >
                                <option value="240">240px</option>
                                <option value="320">320px</option>
                                <option value="480">480px</option>
                                <option value="640">640px</option>
                            </select>
                        </div>
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
                            onClick={handleConvert}
                            disabled={loading || !ffmpegReady}
                            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition
                ${loading || !ffmpegReady
                                    ? "bg-slate-600 opacity-50 cursor-not-allowed"
                                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white"}`}
                        >
                            {loading ? t("tools.common.processing") : t("tools.videotogif.convertBtn")}
                        </button>
                    </div>

                    {gifUrl && (
                        <div className={`p-4 rounded-lg mt-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
                            <p className="text-green-500 font-semibold mb-2">{t("tools.videotogif.downloadTitle")}</p>
                            <img src={gifUrl} alt="Generated GIF" className="w-full rounded mb-2" />
                            <a
                                href={gifUrl}
                                download={`converted_${videoFile?.name.split(".")[0]}.gif`}
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
                            setGifUrl(null);
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
