"use client";
import { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function SvgToPngTool() {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [svgPreview, setSvgPreview] = useState<string | null>(null);
    const [pngImage, setPngImage] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const [fileName, setFileName] = useState("image");
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleSvgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            setSvgContent(content);

            // Create blob URL for preview
            const blob = new Blob([content], { type: "image/svg+xml" });
            setSvgPreview(URL.createObjectURL(blob));
            setPngImage(null);

            // Parse SVG dimensions
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, "image/svg+xml");
            const svg = doc.querySelector("svg");
            if (svg) {
                const width = parseInt(svg.getAttribute("width") || "100");
                const height = parseInt(svg.getAttribute("height") || "100");
                setSvgSize({ width, height });
            }
        };
        reader.readAsText(file);
    };

    const handleConvert = () => {
        if (!svgContent || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
            const width = img.width * scale;
            const height = img.height * scale;

            canvas.width = width;
            canvas.height = height;

            // Clear canvas with transparent background
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);

            setPngImage(canvas.toDataURL("image/png"));
        };

        const blob = new Blob([svgContent], { type: "image/svg+xml" });
        img.src = URL.createObjectURL(blob);
    };

    const handleDownload = () => {
        if (!pngImage) return;
        const link = document.createElement("a");
        link.download = `${fileName}_${scale}x.png`;
        link.href = pngImage;
        link.click();
    };

    const scales = [1, 2, 3, 4];

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <canvas ref={canvasRef} className="hidden" />

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.svgtopng.title")}
            </h2>

            {/* Upload Area */}
            {!svgContent ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">🎨</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.svgtopng.upload")}
                    </span>
                    <input type="file" accept=".svg" onChange={handleSvgUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-4">
                    {/* Preview */}
                    <div className="flex justify-center">
                        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-800" : "bg-gray-100"}`}>
                            {svgPreview && (
                                <img
                                    src={svgPreview}
                                    alt="SVG Preview"
                                    className="max-h-40 max-w-full"
                                    style={{ imageRendering: "auto" }}
                                />
                            )}
                        </div>
                    </div>

                    {/* SVG Info */}
                    <p className={`text-sm text-center ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.svgtopng.originalSize")}: {svgSize.width} × {svgSize.height} px
                    </p>

                    {/* Scale Selection */}
                    <div>
                        <label className={`text-sm mb-2 block ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            {t("tools.svgtopng.scale")}
                        </label>
                        <div className="flex gap-2">
                            {scales.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setScale(s)}
                                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition
                    ${scale === s
                                            ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white"
                                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                                >
                                    {s}x
                                </button>
                            ))}
                        </div>
                        <p className={`text-xs mt-2 text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
                            {t("tools.svgtopng.outputSize")}: {svgSize.width * scale} × {svgSize.height * scale} px
                        </p>
                    </div>

                    {/* Convert Button */}
                    <button
                        onClick={handleConvert}
                        className="w-full py-2 text-sm font-semibold rounded-xl transition
              bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 text-white"
                    >
                        {t("tools.svgtopng.convertBtn")}
                    </button>

                    {/* PNG Preview */}
                    {pngImage && (
                        <div className="mt-4">
                            <p className={`text-sm mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                                {t("tools.svgtopng.preview")}
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src={pngImage}
                                    alt="PNG Result"
                                    className="max-h-40 rounded-lg border border-slate-600"
                                    style={{ imageRendering: "auto" }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Download Button */}
                    {pngImage && (
                        <button
                            onClick={handleDownload}
                            className="w-full py-2 text-sm font-semibold rounded-xl transition
                bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white"
                        >
                            {t("tools.common.download")} PNG ({scale}x)
                        </button>
                    )}

                    {/* New SVG Button */}
                    <button
                        onClick={() => {
                            setSvgContent(null);
                            setSvgPreview(null);
                            setPngImage(null);
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.svgtopng.newSvg")}
                    </button>
                </div>
            )}
        </div>
    );
}
