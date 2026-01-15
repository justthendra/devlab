"use client";
import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

// Simple markdown parser
function parseMarkdown(md: string): string {
    let html = md;

    // Code blocks with syntax highlighting
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (match, lang, code) => {
        const language = lang ? lang.toLowerCase() : "text";
        let highlightedCode = code;

        try {
            if (language && Prism.languages[language]) {
                const Grammar = Prism.languages[language];
                highlightedCode = Prism.highlight(code.trim(), Grammar, language);
            } else {
                // Basic escape if no language or language not found
                highlightedCode = code.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }
        } catch (e) {
            highlightedCode = code.trim();
        }

        return `<div class="my-4 rounded-lg overflow-hidden border border-gray-700 bg-[#1d1f21] relative group">
                    <div class="px-4 py-1 bg-[#2d2f31] text-xs text-gray-400 font-mono border-b border-gray-700 flex justify-between">
                        <span>${language}</span>
                    </div>
                    <pre class="!m-0 !p-4 overflow-x-auto"><code class="language-${language}">${highlightedCode}</code></pre>
                </div>`;
    });

    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold my-2 mt-4 text-blue-400">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold my-3 mt-6 text-indigo-400">$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold my-4 mb-6 text-purple-400 border-b border-gray-700 pb-2">$1</h1>');

    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');

    // Inline Code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm border border-gray-700">$1</code>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors" target="_blank" rel="noopener">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full my-4 rounded-lg shadow-lg border border-gray-700" />');

    // Lists
    html = html.replace(/^\* (.*$)/gm, '<li class="ml-4 list-disc marker:text-gray-500 mb-1">$1</li>');
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4 list-disc marker:text-gray-500 mb-1">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal marker:text-gray-500 mb-1">$1</li>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-indigo-500 pl-4 my-4 italic opacity-80 bg-gray-800/30 p-2 rounded-r">$1</blockquote>');

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="my-6 border-gray-700" />');

    const placeholders: string[] = [];
    html = html.replace(/<div class="my-4 rounded-lg[\s\S]*?<\/div>/g, (match) => {
        placeholders.push(match);
        return `__CODE_BLOCK_${placeholders.length - 1}__`;
    });

    // Process other markdown
    html = html.replace(/\n\n/g, '</p><p class="my-2 leading-relaxed">');
    html = html.replace(/\n/g, '<br />');

    // Restore code blocks
    html = html.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
        return placeholders[parseInt(index)];
    });

    return `<p class="my-2 leading-relaxed text-sm md:text-base">${html}</p>`;
}

export default function MarkdownPreviewTool() {
    const [input, setInput] = useState(`# Hello World

This is a **Markdown** preview tool.

## Features
- Live preview
- GitHub flavored markdown
- Code highlighting

\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`

> This is a blockquote

[Visit DevLab](https://devlab.com)
`);
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    const preview = useMemo(() => parseMarkdown(input), [input]);

    const handleCopyHtml = () => {
        navigator.clipboard.writeText(preview);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative w-full p-8 rounded-2xl max-w-7xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
                ? "bg-transparent border-[rgba(255,255,255,0.07)]"
                : "bg-white/80 border-gray-200"}`}>

            {/* Prism Theme */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />

            <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("tools.markdown.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Editor */}
                <div>
                    <div className={`text-sm font-medium mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                        {t("tools.markdown.editor")}
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t("tools.markdown.placeholder")}
                        className={`w-full h-[750px] px-4 py-3 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500 resize-none font-mono leading-relaxed
              ${theme === "dark"
                                ? "bg-[#111] text-slate-200 border-slate-700"
                                : "bg-gray-50 text-slate-800 border-gray-300"}`}
                    />
                </div>

                {/* Preview */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            {t("tools.markdown.preview")}
                        </span>
                        <button
                            onClick={handleCopyHtml}
                            className={`text-xs px-3 py-1 rounded-lg transition
                ${copied
                                    ? "bg-green-500 text-white"
                                    : theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-gray-200 text-slate-700"}`}
                        >
                            {copied ? t("tools.common.copied") : t("tools.markdown.copyHtml")}
                        </button>
                    </div>
                    <div
                        className={`w-full h-[750px] p-4 rounded-lg text-sm overflow-y-auto
              ${theme === "dark"
                                ? "bg-[#0a0a0a] text-slate-200 border border-slate-700"
                                : "bg-gray-100 text-slate-800 border border-gray-300"}`}
                        dangerouslySetInnerHTML={{ __html: preview }}
                    />
                </div>
            </div>
        </div>
    );
}
