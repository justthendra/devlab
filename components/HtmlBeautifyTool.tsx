"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

function beautifyHtml(html: string, indentSize: number = 2): string {
    const indent = ' '.repeat(indentSize);
    let result = '';
    let indentLevel = 0;

    // Normalize the HTML
    html = html.replace(/>\s+</g, '><').trim();

    // Split by tags
    const tokens = html.split(/(<[^>]+>)/g).filter(Boolean);

    for (const token of tokens) {
        if (token.startsWith('</')) {
            // Closing tag
            indentLevel = Math.max(0, indentLevel - 1);
            result += indent.repeat(indentLevel) + token + '\n';
        } else if (token.startsWith('<') && !token.startsWith('<!') && !token.endsWith('/>') && !token.match(/<(br|hr|img|input|meta|link|area|base|col|command|embed|keygen|param|source|track|wbr)/i)) {
            // Opening tag (not self-closing, not void element)
            result += indent.repeat(indentLevel) + token + '\n';
            indentLevel++;
        } else if (token.startsWith('<')) {
            // Self-closing, void element, or doctype/comment
            result += indent.repeat(indentLevel) + token + '\n';
        } else if (token.trim()) {
            // Text content
            result += indent.repeat(indentLevel) + token.trim() + '\n';
        }
    }

    return result.trim();
}

export default function HtmlBeautifyTool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [indentSize, setIndentSize] = useState(2);
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleBeautify = () => {
        const beautified = beautifyHtml(input, indentSize);
        setOutput(beautified);
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
                {t("tools.htmlbeautify.title")}
            </h2>

            <div className="flex gap-4 items-center mb-4">
                <label className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                    {t("tools.htmlbeautify.indentSize")}
                </label>
                <select
                    value={indentSize}
                    onChange={(e) => setIndentSize(parseInt(e.target.value))}
                    className={`px-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500
            ${theme === "dark"
                            ? "bg-[#111] text-slate-200 border-slate-700"
                            : "bg-gray-50 text-slate-800 border-gray-300"}`}
                >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                </select>
            </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("tools.htmlbeautify.placeholder")}
                className={`w-full h-40 px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none font-mono
          ${theme === "dark"
                        ? "bg-[#111] text-slate-200 border-slate-700"
                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
            />

            <button
                onClick={handleBeautify}
                disabled={!input}
                className={`mt-4 w-full py-2 text-sm font-semibold rounded-xl transition
          ${!input
                        ? "bg-slate-600 cursor-not-allowed opacity-50"
                        : "bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 text-white"
                    }`}
            >
                {t("tools.htmlbeautify.beautifyBtn")}
            </button>

            {output && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {t("tools.htmlbeautify.output")}
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
                    <pre className={`w-full p-4 rounded-lg text-sm overflow-x-auto font-mono
            ${theme === "dark"
                            ? "bg-[#0a0a0a] text-orange-400 border border-slate-700"
                            : "bg-gray-100 text-slate-800 border border-gray-300"}`}>
                        {output}
                    </pre>
                </div>
            )}
        </div>
    );
}
