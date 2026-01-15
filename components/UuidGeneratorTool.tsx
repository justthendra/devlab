"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default function UuidGeneratorTool() {
    const [uuids, setUuids] = useState<string[]>([]);
    const [count, setCount] = useState(1);
    const [copied, setCopied] = useState<number | null>(null);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleGenerate = () => {
        const newUuids = Array.from({ length: count }, () => generateUUID());
        setUuids(newUuids);
    };

    const handleCopy = (uuid: string, index: number) => {
        navigator.clipboard.writeText(uuid);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleCopyAll = () => {
        navigator.clipboard.writeText(uuids.join('\n'));
        setCopied(-1);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.uuid.title")}
            </h2>

            <p className={`text-sm mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {t("tools.uuid.description")}
            </p>

            <div className="flex gap-4 items-center mb-4">
                <label className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                    {t("tools.uuid.count")}
                </label>
                <input
                    type="number"
                    min="1"
                    max="100"
                    value={count}
                    onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                    className={`w-20 px-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500
            ${theme === "dark"
                            ? "bg-[#111] text-slate-200 border-slate-700"
                            : "bg-gray-50 text-slate-800 border-gray-300"}`}
                />
                <button
                    onClick={handleGenerate}
                    className="flex-1 py-2 text-sm font-semibold rounded-xl transition
            bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 text-white"
                >
                    {t("tools.uuid.generateBtn")}
                </button>
            </div>

            {uuids.length > 0 && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {t("tools.uuid.generated")} ({uuids.length})
                        </span>
                        {uuids.length > 1 && (
                            <button
                                onClick={handleCopyAll}
                                className={`text-xs px-3 py-1 rounded-lg transition
                  ${copied === -1
                                        ? "bg-green-500 text-white"
                                        : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                            >
                                {copied === -1 ? t("tools.common.copied") : t("tools.uuid.copyAll")}
                            </button>
                        )}
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {uuids.map((uuid, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center p-3 rounded-lg
                  ${theme === "dark"
                                        ? "bg-[#0a0a0a] border border-slate-700"
                                        : "bg-gray-100 border border-gray-300"}`}
                            >
                                <code className={`text-sm font-mono ${theme === "dark" ? "text-violet-400" : "text-violet-600"}`}>
                                    {uuid}
                                </code>
                                <button
                                    onClick={() => handleCopy(uuid, index)}
                                    className={`text-xs px-2 py-1 rounded transition
                    ${copied === index
                                            ? "bg-green-500 text-white"
                                            : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                                >
                                    {copied === index ? "✓" : "📋"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
