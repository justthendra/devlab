"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function ImageCropperTool() {
    const [image, setImage] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragType, setDragType] = useState<"move" | "resize" | null>(null);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const imageRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const aspectRatios = [
        { label: "Free", value: null },
        { label: "1:1", value: 1 },
        { label: "16:9", value: 16 / 9 },
        { label: "4:3", value: 4 / 3 },
        { label: "3:2", value: 3 / 2 },
    ];
    const [selectedRatio, setSelectedRatio] = useState<number | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, ""));
        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target?.result as string);
            setCroppedImage(null);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (imageRef.current && image) {
            const img = imageRef.current;
            const rect = img.getBoundingClientRect();
            setImageSize({ width: rect.width, height: rect.height });
            setCrop({ x: 20, y: 20, width: rect.width - 40, height: rect.height - 40 });
        }
    }, [image]);

    const handleCrop = () => {
        if (!imageRef.current || !canvasRef.current) return;

        const img = imageRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Calculate actual image scale
        const scaleX = img.naturalWidth / img.width;
        const scaleY = img.naturalHeight / img.height;

        const actualX = crop.x * scaleX;
        const actualY = crop.y * scaleY;
        const actualWidth = crop.width * scaleX;
        const actualHeight = crop.height * scaleY;

        canvas.width = actualWidth;
        canvas.height = actualHeight;

        ctx.drawImage(
            img,
            actualX, actualY, actualWidth, actualHeight,
            0, 0, actualWidth, actualHeight
        );

        setCroppedImage(canvas.toDataURL("image/png"));
    };

    const handleDownload = () => {
        if (!croppedImage) return;
        const link = document.createElement("a");
        link.download = `${fileName}_cropped.png`;
        link.href = croppedImage;
        link.click();
    };

    const applyRatio = (ratio: number | null) => {
        setSelectedRatio(ratio);
        if (ratio && imageSize.width > 0) {
            const newHeight = Math.min(crop.width / ratio, imageSize.height - crop.y);
            setCrop(prev => ({ ...prev, height: newHeight }));
        }
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <canvas ref={canvasRef} className="hidden" />

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.imagecropper.title")}
            </h2>

            {/* Upload Area */}
            {!image ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">✂️</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imagecropper.upload")}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-4">
                    {/* Aspect Ratio Presets */}
                    <div className="flex gap-2 flex-wrap">
                        {aspectRatios.map((ar) => (
                            <button
                                key={ar.label}
                                onClick={() => applyRatio(ar.value)}
                                className={`px-3 py-1 rounded-lg text-xs font-medium transition
                  ${selectedRatio === ar.value
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                        : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                            >
                                {ar.label}
                            </button>
                        ))}
                    </div>

                    {/* Image with Crop Overlay */}
                    <div className="relative inline-block">
                        <img
                            ref={imageRef}
                            src={image}
                            alt="To crop"
                            className="max-w-full max-h-80 rounded-lg"
                            onLoad={() => {
                                if (imageRef.current) {
                                    const rect = imageRef.current.getBoundingClientRect();
                                    setImageSize({ width: imageRef.current.width, height: imageRef.current.height });
                                    setCrop({ x: 20, y: 20, width: imageRef.current.width - 40, height: imageRef.current.height - 40 });
                                }
                            }}
                        />
                        {/* Crop Overlay */}
                        <div
                            className="absolute border-2 border-white bg-white/10"
                            style={{
                                left: crop.x,
                                top: crop.y,
                                width: crop.width,
                                height: crop.height,
                                boxShadow: "0 0 0 9999px rgba(0,0,0,0.5)",
                            }}
                        >
                            {/* Resize Handle */}
                            <div
                                className="absolute bottom-0 right-0 w-4 h-4 bg-white cursor-se-resize"
                                style={{ transform: "translate(50%, 50%)" }}
                                onMouseDown={(e) => {
                                    e.stopPropagation();
                                    setIsDragging(true);
                                    setDragType("resize");
                                    setStartPos({ x: e.clientX, y: e.clientY });
                                }}
                            />
                        </div>
                    </div>

                    {/* Crop Size Info */}
                    <div className="flex gap-4">
                        <div>
                            <label className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>X</label>
                            <input
                                type="number"
                                value={Math.round(crop.x)}
                                onChange={(e) => setCrop(prev => ({ ...prev, x: Math.max(0, parseInt(e.target.value) || 0) }))}
                                className={`w-20 px-2 py-1 rounded text-sm border outline-none
                  ${theme === "dark" ? "bg-[#111] text-slate-200 border-slate-700" : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                        <div>
                            <label className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>Y</label>
                            <input
                                type="number"
                                value={Math.round(crop.y)}
                                onChange={(e) => setCrop(prev => ({ ...prev, y: Math.max(0, parseInt(e.target.value) || 0) }))}
                                className={`w-20 px-2 py-1 rounded text-sm border outline-none
                  ${theme === "dark" ? "bg-[#111] text-slate-200 border-slate-700" : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                        <div>
                            <label className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>W</label>
                            <input
                                type="number"
                                value={Math.round(crop.width)}
                                onChange={(e) => setCrop(prev => ({ ...prev, width: Math.max(10, parseInt(e.target.value) || 10) }))}
                                className={`w-20 px-2 py-1 rounded text-sm border outline-none
                  ${theme === "dark" ? "bg-[#111] text-slate-200 border-slate-700" : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                        <div>
                            <label className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>H</label>
                            <input
                                type="number"
                                value={Math.round(crop.height)}
                                onChange={(e) => setCrop(prev => ({ ...prev, height: Math.max(10, parseInt(e.target.value) || 10) }))}
                                className={`w-20 px-2 py-1 rounded text-sm border outline-none
                  ${theme === "dark" ? "bg-[#111] text-slate-200 border-slate-700" : "bg-gray-50 text-slate-800 border-gray-300"}`}
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleCrop}
                            className="flex-1 py-2 text-sm font-semibold rounded-xl transition
                bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white"
                        >
                            {t("tools.imagecropper.cropBtn")}
                        </button>
                        {croppedImage && (
                            <button
                                onClick={handleDownload}
                                className="flex-1 py-2 text-sm font-semibold rounded-xl transition
                  bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white"
                            >
                                {t("tools.common.download")}
                            </button>
                        )}
                    </div>

                    {/* Cropped Preview */}
                    {croppedImage && (
                        <div className="mt-4">
                            <p className={`text-sm mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                                {t("tools.imagecropper.preview")}
                            </p>
                            <img src={croppedImage} alt="Cropped" className="max-h-40 rounded-lg border border-slate-600" />
                        </div>
                    )}

                    {/* New Image Button */}
                    <button
                        onClick={() => {
                            setImage(null);
                            setCroppedImage(null);
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.imagecropper.newImage")}
                    </button>
                </div>
            )}
        </div>
    );
}
