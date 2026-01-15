"use client";
import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function RegexTesterTool() {
    const [pattern, setPattern] = useState("");
    const [flags, setFlags] = useState("g");
    const [testString, setTestString] = useState("");
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const matches = useMemo(() => {
        if (!pattern || !testString) return [];
        try {
            const regex = new RegExp(pattern, flags);
            const allMatches: { match: string; index: number; groups?: string[] }[] = [];
            let m;

            if (flags.includes('g')) {
                while ((m = regex.exec(testString)) !== null) {
                    allMatches.push({
                        match: m[0],
                        index: m.index,
                        groups: m.slice(1),
                    });
                    if (!m[0]) break; // Prevent infinite loop for empty matches
                }
            } else {
                m = regex.exec(testString);
                if (m) {
                    allMatches.push({
                        match: m[0],
                        index: m.index,
                        groups: m.slice(1),
                    });
                }
            }
            return allMatches;
        } catch (e) {
            return [];
        }
    }, [pattern, flags, testString]);

    const isValidRegex = useMemo(() => {
        if (!pattern) return true;
        try {
            new RegExp(pattern, flags);
            return true;
        } catch (e) {
            return false;
        }
    }, [pattern, flags]);

    const highlightedText = useMemo(() => {
        if (!pattern || !testString || !isValidRegex) return testString;
        try {
            const regex = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g');
            return testString.replace(regex, (match) => `<mark class="bg-yellow-300 dark:bg-yellow-600 px-0.5 rounded">${match}</mark>`);
        } catch (e) {
            return testString;
        }
    }, [pattern, flags, testString, isValidRegex]);

    const presets = [
        { name: "Email", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
        { name: "URL", pattern: "https?:\\/\\/[\\w\\-._~:/?#[\\]@!$&'()*+,;=%]+" },
        { name: "Phone", pattern: "\\+?[0-9]{1,4}?[-.\\s]?\\(?[0-9]{1,3}\\)?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,4}" },
        { name: "IP", pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b" },
    ];

    return (
        <div className={`relative p-8 rounded-2xl max-w-3xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.regex.title")}
            </h2>

            {/* Presets */}
            <div className="flex gap-2 mb-4 flex-wrap">
                {presets.map((preset) => (
                    <button
                        key={preset.name}
                        onClick={() => setPattern(preset.pattern)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition
              ${theme === "dark" ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : "bg-gray-200 text-slate-700 hover:bg-gray-300"}`}
                    >
                        {preset.name}
                    </button>
                ))}
            </div>

            {/* Pattern Input */}
            <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                    <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>/</span>
                    <input
                        type="text"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                        placeholder={t("tools.regex.patternPlaceholder")}
                        className={`w-full pl-6 pr-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 font-mono
              ${!isValidRegex ? "border-red-500 ring-red-500" : ""}
              ${theme === "dark"
                                ? "bg-[#111] text-slate-200 border-slate-700"
                                : "bg-gray-50 text-slate-800 border-gray-300"}`}
                    />
                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>/</span>
                </div>
                <input
                    type="text"
                    value={flags}
                    onChange={(e) => setFlags(e.target.value)}
                    placeholder="flags"
                    className={`w-16 px-3 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 font-mono
            ${theme === "dark"
                            ? "bg-[#111] text-slate-200 border-slate-700"
                            : "bg-gray-50 text-slate-800 border-gray-300"}`}
                />
            </div>

            {!isValidRegex && (
                <p className="text-red-500 text-xs mb-2">{t("tools.regex.invalidPattern")}</p>
            )}

            {/* Test String */}
            <textarea
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
                placeholder={t("tools.regex.testPlaceholder")}
                className={`w-full h-32 px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none
          ${theme === "dark"
                        ? "bg-[#111] text-slate-200 border-slate-700"
                        : "bg-gray-50 text-slate-800 border-gray-300"}`}
            />

            {/* Results */}
            {testString && pattern && isValidRegex && (
                <div className="mt-4">
                    <div className={`text-sm font-medium mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                        {t("tools.regex.matches")}: <span className="text-green-500 font-bold">{matches.length}</span>
                    </div>

                    {/* Highlighted Text */}
                    <div
                        className={`p-4 rounded-lg text-sm whitespace-pre-wrap
              ${theme === "dark"
                                ? "bg-[#0a0a0a] text-slate-300 border border-slate-700"
                                : "bg-gray-100 text-slate-700 border border-gray-300"}`}
                        dangerouslySetInnerHTML={{ __html: highlightedText }}
                    />

                    {/* Match Details */}
                    {matches.length > 0 && (
                        <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                            {matches.map((m, i) => (
                                <div
                                    key={i}
                                    className={`text-xs p-2 rounded ${theme === "dark" ? "bg-slate-800" : "bg-gray-200"}`}
                                >
                                    <span className="text-green-500">Match {i + 1}:</span>{" "}
                                    <code className="text-yellow-500">{m.match}</code>{" "}
                                    <span className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>at index {m.index}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
