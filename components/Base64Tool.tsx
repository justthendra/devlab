"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function Base64Tool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<"encode" | "decode">("encode");
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleConvert = () => {
        try {
            if (mode === "encode") {
                setOutput(btoa(unescape(encodeURIComponent(input))));
            } else {
                setOutput(decodeURIComponent(escape(atob(input))));
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

    const handleClear = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.base64.title")}
            </h2>

            {/* Mode Toggle */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setMode("encode")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${mode === "encode"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                >
                    {t("tools.base64.encode")}
                </button>
                <button
                    onClick={() => setMode("decode")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${mode === "decode"
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                >
                    {t("tools.base64.decode")}
                </button>
            </div>

            {/* Input */}
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === "encode" ? t("tools.base64.inputPlaceholder") : t("tools.base64.base64Placeholder")}
                className={`w-full h-32 px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none
          ${theme === "dark"
                        ? "bg-[#111] text-slate-200 border-slate-700"
                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
            />

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
                <button
                    onClick={handleConvert}
                    disabled={!input}
                    className={`flex-1 py-2 text-sm font-semibold rounded-xl transition
            ${!input
                            ? "bg-slate-600 opacity-50"
                            : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white"
                        }`}
                >
                    {mode === "encode" ? t("tools.base64.encodeBtn") : t("tools.base64.decodeBtn")}
                </button>
                <button
                    onClick={handleClear}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition
            ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                >
                    {t("tools.common.clear")}
                </button>
            </div>

            {/* Output */}
            {output && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {t("tools.base64.output")}
                        </span>
                        <button
                            onClick={handleCopy}
                            className={`text-xs px-3 py-1 rounded-lg transition
                ${copied
                                    ? "bg-green-500 text-white"
                                    : theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                        >
                            {copied ? t("tools.common.copied") : t("tools.common.copy")}
                        </button>
                    </div>
                    <div className={`w-full p-4 rounded-lg text-sm break-all
            ${theme === "dark"
                            ? "bg-[#0a0a0a] text-emerald-400 border border-slate-700"
                            : "bg-gray-100 text-slate-800 border border-gray-300"}`}>
                        {output}
                    </div>
                </div>
            )}
        </div>
    );
}
