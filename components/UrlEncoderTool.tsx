"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function UrlEncoderTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<"encode" | "decode">("encode");
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleConvert = () => {
        try {
            if (mode === "encode") {
                setOutput(encodeURIComponent(input));
            } else {
                setOutput(decodeURIComponent(input));
            }
        } catch (e) {
            setOutput("❌ Invalid input");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.urlencoder.title")}
            </h2>

            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setMode("encode")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${mode === "encode"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                >
                    {t("tools.urlencoder.encode")}
                </button>
                <button
                    onClick={() => setMode("decode")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${mode === "decode"
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                >
                    {t("tools.urlencoder.decode")}
                </button>
            </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("tools.urlencoder.placeholder")}
                className={`w-full h-24 px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none
          ${theme === "dark"
                        ? "bg-[#111] text-slate-200 border-slate-700"
                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
            />

            <button
                onClick={handleConvert}
                disabled={!input}
                className={`mt-4 w-full py-2 text-sm font-semibold rounded-xl transition
          ${!input
                        ? "bg-slate-600 opacity-50"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white"
                    }`}
            >
                {mode === "encode" ? t("tools.urlencoder.encodeBtn") : t("tools.urlencoder.decodeBtn")}
            </button>

            {output && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {t("tools.urlencoder.output")}
                        </span>
                        <button
                            onClick={handleCopy}
                            className={`text-xs px-3 py-1 rounded-lg transition
                ${copied
                                    ? "bg-green-500 text-white"
                                    : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                        >
                            {copied ? t("tools.common.copied") : t("tools.common.copy")}
                        </button>
                    </div>
                    <div className={`w-full p-4 rounded-lg text-sm break-all
            ${theme === "dark"
                            ? "bg-[#0a0a0a] text-orange-400 border border-slate-700"
                            : "bg-gray-100 text-slate-800 border border-gray-300"}`}>
                        {output}
                    </div>
                </div>
            )}
        </div>
    );
}
