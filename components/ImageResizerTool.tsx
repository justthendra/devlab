"use client";
import { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function ImageResizerTool() {
    const [image, setImage] = useState<string | null>(null);
    const [originalSize, setOriginalSize] = useState({ width: 0, height: 0 });
    const [newWidth, setNewWidth] = useState(0);
    const [newHeight, setNewHeight] = useState(0);
    const [maintainRatio, setMaintainRatio] = useState(true);
    const [resizedImage, setResizedImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                setOriginalSize({ width: img.width, height: img.height });
                setNewWidth(img.width);
                setNewHeight(img.height);
                setImage(event.target?.result as string);
                setResizedImage(null);
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleWidthChange = (value: number) => {
        setNewWidth(value);
        if (maintainRatio && originalSize.width > 0) {
            setNewHeight(Math.round((value / originalSize.width) * originalSize.height));
        }
    };

    const handleHeightChange = (value: number) => {
        setNewHeight(value);
        if (maintainRatio && originalSize.height > 0) {
            setNewWidth(Math.round((value / originalSize.height) * originalSize.width));
        }
    };

    const handleResize = () => {
        if (!image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = newWidth;
        canvas.height = newHeight;

        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
            setResizedImage(canvas.toDataURL("image/png"));
        };
        img.src = image;
    };

    const handleDownload = () => {
        if (!resizedImage) return;
        const link = document.createElement("a");
        link.download = `${fileName}_${newWidth}x${newHeight}.png`;
        link.href = resizedImage;
        link.click();
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <canvas ref={canvasRef} className="hidden" />

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.imageresizer.title")}
            </h2>

            {/* Upload Area */}
            {!image ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">🖼️</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imageresizer.upload")}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-4">
                    {/* Preview */}
                    <div className="flex justify-center">
                        <img
                            src={resizedImage || image}
                            alt="Preview"
                            className="max-h-48 rounded-lg object-contain"
                        />
                    </div>

                    {/* Original Size */}
                    <p className={`text-sm text-center ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imageresizer.original")}: {originalSize.width} × {originalSize.height} px
                    </p>

                    {/* Size Controls */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                {t("tools.imageresizer.width")}
                            </label>
                            <input
                                type="number"
                                value={newWidth}
                                onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                                className={`w-full px-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500
                  ${theme === "dark"
                                        ? "bg-[#111] text-slate-200 border-slate-700"
                                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                        <div>
                            <label className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                {t("tools.imageresizer.height")}
                            </label>
                            <input
                                type="number"
                                value={newHeight}
                                onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                                className={`w-full px-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500
                  ${theme === "dark"
                                        ? "bg-[#111] text-slate-200 border-slate-700"
                                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                    </div>

                    {/* Maintain Ratio */}
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={maintainRatio}
                            onChange={(e) => setMaintainRatio(e.target.checked)}
                            className="w-4 h-4 rounded"
                        />
                        <span className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            {t("tools.imageresizer.maintainRatio")}
                        </span>
                    </label>

                    {/* Quick Presets */}
                    <div className="flex gap-2 flex-wrap">
                        {[25, 50, 75, 100, 150, 200].map((percent) => (
                            <button
                                key={percent}
                                onClick={() => {
                                    const w = Math.round(originalSize.width * percent / 100);
                                    const h = Math.round(originalSize.height * percent / 100);
                                    setNewWidth(w);
                                    setNewHeight(h);
                                }}
                                className={`px-3 py-1 rounded-lg text-xs font-medium transition
                  ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                            >
                                {percent}%
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleResize}
                            className="flex-1 py-2 text-sm font-semibold rounded-xl transition
                bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white"
                        >
                            {t("tools.imageresizer.resizeBtn")}
                        </button>
                        {resizedImage && (
                            <button
                                onClick={handleDownload}
                                className="flex-1 py-2 text-sm font-semibold rounded-xl transition
                  bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white"
                            >
                                {t("tools.common.download")} ({newWidth}×{newHeight})
                            </button>
                        )}
                    </div>

                    {/* New Image Button */}
                    <button
                        onClick={() => {
                            setImage(null);
                            setResizedImage(null);
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.imageresizer.newImage")}
                    </button>
                </div>
            )}
        </div>
    );
}
