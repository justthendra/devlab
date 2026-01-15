"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";
import { removeBackground } from "@imgly/background-removal";

export default function BackgroundRemoverTool() {
    const [image, setImage] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target?.result as string);
            setProcessedImage(null);
            setError("");
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveBackground = async () => {
        if (!image) return;

        setLoading(true);
        setError("");

        try {
            // Convert base64 to blob for the library
            const response = await fetch(image);
            const blob = await response.blob();

            const blobUrl = await removeBackground(blob);
            const url = URL.createObjectURL(blobUrl);
            setProcessedImage(url);
        } catch (err) {
            console.error(err);
            setError(t("tools.common.error"));
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!processedImage) return;
        const link = document.createElement("a");
        link.download = `${fileName}_nobg.png`;
        link.href = processedImage;
        link.click();
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.backgroundremover.title")}
            </h2>

            {/* Upload Area */}
            {!image ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">🖼️</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.backgroundremover.upload")}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className={`text-sm mb-2 text-center ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                {t("tools.backgroundremover.original")}
                            </p>
                            <img
                                src={image}
                                alt="Original"
                                className="w-full rounded-lg object-contain max-h-64 border border-slate-700/50"
                            />
                        </div>
                        <div>
                            <p className={`text-sm mb-2 text-center ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                {t("tools.backgroundremover.result")}
                            </p>
                            <div className={`w-full h-64 rounded-lg flex items-center justify-center border border-slate-700/50 relative overflow-hidden
                ${theme === "dark" ? "bg-[#111]" : "bg-gray-100"}`}
                                style={{
                                    backgroundImage: theme === 'dark'
                                        ? 'linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%)'
                                        : 'linear-gradient(45deg, #ddd 25%, transparent 25%), linear-gradient(-45deg, #ddd 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ddd 75%), linear-gradient(-45deg, transparent 75%, #ddd 75%)',
                                    backgroundSize: '20px 20px',
                                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                                }}
                            >
                                {loading ? (
                                    <div className="flex flex-col items-center">
                                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mb-2"></div>
                                        <span className="text-sm text-slate-500">{t("tools.backgroundremover.processing")}</span>
                                    </div>
                                ) : processedImage ? (
                                    <img
                                        src={processedImage}
                                        alt="Processed"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-slate-500 text-sm">{t("tools.backgroundremover.waiting")}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-center text-sm">{error}</p>}

                    <div className="flex gap-2">
                        {!processedImage ? (
                            <button
                                onClick={handleRemoveBackground}
                                disabled={loading}
                                className={`flex-1 py-3 text-sm font-semibold rounded-xl transition
                  ${loading
                                        ? "bg-slate-600 opacity-50 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white"}`}
                            >
                                {loading ? t("tools.backgroundremover.processing") : t("tools.backgroundremover.removeBtn")}
                            </button>
                        ) : (
                            <button
                                onClick={handleDownload}
                                className="flex-1 py-3 text-sm font-semibold rounded-xl transition
                  bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white"
                            >
                                {t("tools.common.download")} PNG
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            setImage(null);
                            setProcessedImage(null);
                            setError("");
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.backgroundremover.newImage")}
                    </button>
                </div>
            )}
        </div>
    );
}
