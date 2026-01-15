"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

function minifyCss(css: string): string {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}:;,>~+])\s*/g, '$1') // Remove spaces around special chars
        .replace(/;}/g, '}') // Remove last semicolon
        .trim();
}

export default function CssMinifierTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleMinify = () => {
        const minified = minifyCss(input);
        setOutput(minified);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const inputSize = new Blob([input]).size;
    const outputSize = new Blob([output]).size;
    const savings = inputSize > 0 ? Math.round((1 - outputSize / inputSize) * 100) : 0;

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.cssminify.title")}
            </h2>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("tools.cssminify.placeholder")}
                className={`w-full h-40 px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none font-mono
          ${theme === "dark"
                        ? "bg-[#111] text-slate-200 border-slate-700"
                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
            />

            <button
                onClick={handleMinify}
                disabled={!input}
                className={`mt-4 w-full py-2 text-sm font-semibold rounded-xl transition
          ${!input
                        ? "bg-slate-600 opacity-50"
                        : "bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 text-white"
                    }`}
            >
                {t("tools.cssminify.minifyBtn")}
            </button>

            {output && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            <span className="font-medium">{t("tools.cssminify.output")}</span>
                            <span className="ml-2 text-green-500">(-{savings}% / {inputSize - outputSize} bytes)</span>
                        </div>
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
                    <div className={`w-full p-4 rounded-lg text-sm break-all font-mono
            ${theme === "dark"
                            ? "bg-[#0a0a0a] text-pink-400 border border-slate-700"
                            : "bg-gray-100 text-slate-800 border border-gray-300"}`}>
                        {output}
                    </div>
                </div>
            )}
        </div>
    );
}
