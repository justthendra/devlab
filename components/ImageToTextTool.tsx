"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";
import Tesseract from "tesseract.js";

export default function ImageToTextTool() {
    const [image, setImage] = useState<string | null>(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("");
    const [language, setLanguage] = useState("eng");
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target?.result as string);
            setText("");
            setProgress(0);
            setStatus("");
        };
        reader.readAsDataURL(file);
    };

    const handleExtractText = async () => {
        if (!image) return;

        setLoading(true);
        setText("");

        try {
            const result = await Tesseract.recognize(
                image,
                language,
                {
                    logger: m => {
                        if (m.status === 'recognizing text') {
                            setProgress(Math.round(m.progress * 100));
                            setStatus(`${t("tools.imagetotext.recognizing")} (${Math.round(m.progress * 100)}%)`);
                        } else {
                            setStatus(m.status);
                        }
                    }
                }
            );

            setText(result.data.text);
            setStatus(t("tools.imagetotext.success"));
        } catch (err) {
            console.error(err);
            setStatus(t("tools.common.error"));
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setStatus(t("tools.common.copied"));
        setTimeout(() => setStatus(""), 2000);
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.imagetotext.title")}
            </h2>

            {/* Upload Area */}
            {!image ? (
                <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition
          ${theme === "dark"
                        ? "border-slate-600 hover:border-slate-500 bg-[#111]"
                        : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                    <span className="text-5xl mb-4">📝</span>
                    <span className={`text-sm font-medium text-center px-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {t("tools.imagetotext.upload")}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
            ) : (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className={`block text-xs mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                    {t("tools.imagetotext.language")}
                                </label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className={`w-full p-2 rounded text-sm ${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100"}`}
                                >
                                    <option value="eng">English</option>
                                    <option value="tur">Turkish</option>
                                    <option value="deu">German</option>
                                    <option value="fra">French</option>
                                    <option value="spa">Spanish</option>
                                </select>
                            </div>

                            <img
                                src={image}
                                alt="Original"
                                className="w-full rounded-lg object-contain max-h-64 border border-slate-700/50"
                            />

                            <button
                                onClick={handleExtractText}
                                disabled={loading}
                                className={`w-full py-3 text-sm font-semibold rounded-xl transition
                    ${loading
                                        ? "bg-slate-600 opacity-50"
                                        : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white"}`}
                            >
                                {loading ? t("tools.common.processing") : t("tools.imagetotext.extractBtn")}
                            </button>

                            {loading && (
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                                    <p className="text-xs text-center mt-1 text-slate-500">{status}</p>
                                </div>
                            )}
                        </div>

                        <div className="h-full flex flex-col">
                            <div className="flex justify-between items-center mb-2">
                                <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                                    {t("tools.imagetotext.extractedText")}
                                </span>
                                {text && (
                                    <button
                                        onClick={handleCopy}
                                        className="text-xs text-blue-500 hover:text-blue-400"
                                    >
                                        {t("tools.common.copy")}
                                    </button>
                                )}
                            </div>
                            <textarea
                                value={text}
                                readOnly
                                placeholder={t("tools.imagetotext.placeholder")}
                                className={`w-full flex-1 p-4 rounded-lg resize-none text-sm font-mono border min-h-[300px] outline-none
                  ${theme === "dark"
                                        ? "bg-[#111] text-slate-200 border-slate-700 focus:border-blue-500"
                                        : "bg-gray-50 text-slate-800 border-gray-300 focus:border-blue-500"}`}
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setImage(null);
                            setText("");
                            setProgress(0);
                            setStatus("");
                        }}
                        className={`w-full py-2 text-sm font-medium rounded-xl transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {t("tools.imagetotext.newImage")}
                    </button>
                </div>
            )}
        </div>
    );
}
