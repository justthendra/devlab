"use client";
import { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function ImageCompressorTool() {
    const [image, setImage] = useState<string | null>(null);
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [quality, setQuality] = useState(80);
    const [originalSize, setOriginalSize] = useState(0);
    const [compressedSize, setCompressedSize] = useState(0);
    const [format, setFormat] = useState<"jpeg" | "webp">("jpeg");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setOriginalFile(file);
        setOriginalSize(file.size);

        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target?.result as string);
            setCompressedImage(null);
        };
        reader.readAsDataURL(file);
    };

    const handleCompress = () => {
        if (!image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const mimeType = format === "webp" ? "image/webp" : "image/jpeg";
            const compressed = canvas.toDataURL(mimeType, quality / 100);
            setCompressedImage(compressed);

            // Calculate compressed size
            const base64Length = compressed.split(",")[1].length;
            const compSize = Math.round((base64Length * 3) / 4);
            setCompressedSize(compSize);
        };
        img.src = image;
    };

    const handleDownload = () => {
        if (!compressedImage || !originalFile) return;
        const ext = format === "webp" ? "webp" : "jpg";
        const link = document.createElement("a");
        link.download = `${originalFile.name.replace(/\.[^/.]+$/, "")}_compressed.${ext}`;
        link.href = compressedImage;
        link.click();
    };

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const savings = originalSize > 0 ? Math.round((1 - compressedSize / originalSize) * 100) : 0;

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <canvas ref={canvasRef} className="hidden" />

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.imagecompressor.title")}
            </h2>

            {/* Upload Area */}
            {!image ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">📦</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imagecompressor.upload")}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-4">
                    {/* Preview */}
                    <div className="flex justify-center">
                        <img
                            src={compressedImage || image}
                            alt="Preview"
                            className="max-h-48 rounded-lg object-contain"
                        />
                    </div>

                    {/* Original Size */}
                    <p className={`text-sm text-center ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imagecompressor.original")}: {formatSize(originalSize)}
                    </p>

                    {/* Format Selection */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFormat("jpeg")}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition
                ${format === "jpeg"
                                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                                    : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                        >
                            JPEG
                        </button>
                        <button
                            onClick={() => setFormat("webp")}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition
                ${format === "webp"
                                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                    : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                        >
                            WebP
                        </button>
                    </div>

                    {/* Quality Slider */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <label className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                {t("tools.imagecompressor.quality")}
                            </label>
                            <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                                {quality}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={quality}
                            onChange={(e) => setQuality(parseInt(e.target.value))}
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-700"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>{t("tools.imagecompressor.smaller")}</span>
                            <span>{t("tools.imagecompressor.better")}</span>
                        </div>
                    </div>

                    {/* Compress Button */}
                    <button
                        onClick={handleCompress}
                        className="w-full py-2 text-sm font-semibold rounded-xl transition
              bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white"
                    >
                        {t("tools.imagecompressor.compressBtn")}
                    </button>

                    {/* Results */}
                    {compressedImage && (
                        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#0a0a0a] border border-slate-700" : "bg-gray-100 border border-gray-300"}`}>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                        {t("tools.imagecompressor.before")}
                                    </p>
                                    <p className={`text-lg font-bold ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                                        {formatSize(originalSize)}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                        {t("tools.imagecompressor.after")}
                                    </p>
                                    <p className="text-lg font-bold text-green-500">
                                        {formatSize(compressedSize)}
                                    </p>
                                </div>
                            </div>
                            <p className="text-center mt-2 text-green-500 font-semibold">
                                -{savings}% {t("tools.imagecompressor.saved")}
                            </p>
                        </div>
                    )}

                    {/* Download Button */}
                    {compressedImage && (
                        <button
                            onClick={handleDownload}
                            className="w-full py-2 text-sm font-semibold rounded-xl transition
                bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white"
                        >
                            {t("tools.common.download")} ({formatSize(compressedSize)})
                        </button>
                    )}

                    {/* New Image Button */}
                    <button
                        onClick={() => {
                            setImage(null);
                            setCompressedImage(null);
                            setOriginalFile(null);
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.imagecompressor.newImage")}
                    </button>
                </div>
            )}
        </div>
    );
}
