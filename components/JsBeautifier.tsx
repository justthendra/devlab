"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import beautify from "js-beautify";
import { Copy, Scissors, Wand2 } from "lucide-react";

export default function JsBeautifierTool() {
  const { theme } = useTheme();

  const [inputCode, setInputCode] = useState<string>(
    `function test(a,b){return a+b}`
  );
  const [outputCode, setOutputCode] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // JS-Beautify ayarları
  const formatCode = () => {
    try {
      const formatted = beautify.js(inputCode, {
        indent_size: 2,
        space_in_empty_paren: true,
      });
      setOutputCode(formatted);
    } catch (e) {
      setOutputCode("// ❌ Format error: " + (e as string));
    }
  };

  // JS-minify
  const minifyCode = () => {
    try {
      const minified = beautify.js(inputCode, {
        indent_size: 0,
        preserve_newlines: false,
        max_preserve_newlines: 0,
        space_in_empty_paren: false,
      });
      setOutputCode(minified.replace(/\n/g, ""));
    } catch (e) {
      setOutputCode("// ❌ Minify error: " + (e as string));
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(outputCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div
      className={`
        relative p-7 rounded-2xl max-w-5xl mx-auto border shadow-xl
        ${theme === "dark"
          ? "bg-[#0a0b0c04] border-[rgba(48,48,48,0.4)] text-slate-200"
          : "bg-white border-[rgba(0,0,0,0.08)] text-slate-800"
        }
      `}
    >
      {/* Başlık */}
      <h2 className="text-xl font-semibold mb-1">
        JavaScript Beautify & Minify
      </h2>
      <p
        className={`text-[13px] mb-6 ${
          theme === "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Improve JavaScript code readability or{" "}
        <span className="font-semibold text-emerald-400">
          minify
        </span>{" "}
        to reduce file size.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input alanı */}
        <textarea
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="// Paste JS code here"
          className={`
            w-full h-60 rounded-xl p-4 font-mono text-xs outline-none resize-none
            border transition
            ${theme === "dark"
              ? "bg-[#0f111571] border-[rgba(48,48,48,0.5)] text-slate-100"
              : "bg-slate-50 border-slate-300 text-slate-800"
            }
          `}
        />

        {/* Output alanı */}
        <div className="relative">
          <textarea
            readOnly
            value={outputCode}
            placeholder="// Output will appear here"
            className={`
              w-full h-60 rounded-xl p-4 font-mono text-xs outline-none resize-none
              border transition
              ${theme === "dark"
                ? "bg-[#0f111571] border-[rgba(48,48,48,0.5)] text-slate-100"
                : "bg-slate-50 border-slate-300 text-slate-800"
              }
            `}
          />

          {/* Kopyala düğmesi */}
          {outputCode && (
            <button
              onClick={copyOutput}
              className={`absolute top-3 right-3 flex items-center cursor-pointer gap-1 px-2 py-1 rounded-md text-[11px]
                ${
                  copied
                    ? "bg-emerald-500 text-white"
                    : "bg-[rgba(255,255,255,0)] border border-[#242424] hover:bg-[rgba(255,255,255,0.02)]"
                }
              `}
            >
              <Copy className="w-3 h-3" />
              {copied ? "Copied" : "Copy"}
            </button>
          )}
        </div>
      </div>

      {/* İşlem düğmeleri */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={formatCode}
          className="px-4 py-2 rounded-lg flex items-center cursor-pointer gap-2 text-sm font-semibold
            bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-80 transition"
        >
          <Wand2 className="w-4 h-4" /> Beautify
        </button>

        <button
          onClick={minifyCode}
          className="px-4 py-2 rounded-lg flex items-center cursor-pointer gap-2 text-sm font-semibold
            bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-80 transition"
        >
          <Scissors className="w-4 h-4" /> Minify
        </button>
      </div>
    </div>
  );
}
