"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-lua";
import "prismjs/themes/prism-tomorrow.css";
import { Copy, Check } from "lucide-react";

type FormatType = "json" | "lua";

export default function CodeFormatterTool() {
  const { theme } = useTheme();

  const [code, setCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [formatType, setFormatType] = useState<FormatType>("json");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const beautifyCode = () => {
    try {
      setError("");

      if (formatType === "json") {
        const parsed = JSON.parse(code);
        setFormattedCode(JSON.stringify(parsed, null, 2));
      } else {
        setFormattedCode(formatLua(code));
      }
    } catch (err: any) {
      setError(`❌ Format Error: ${err.message}`);
    }
  };

  const minifyCode = () => {
    try {
      setError("");

      if (formatType === "json") {
        const parsed = JSON.parse(code);
        setFormattedCode(JSON.stringify(parsed));
      } else {
        setFormattedCode(code.replace(/\s+/g, " ").trim());
      }
    } catch (err: any) {
      setError(`❌ Minify Error: ${err.message}`);
    }
  };

  const detectType = () => {
    try {
      JSON.parse(code);
      setFormatType("json");
    } catch {
      setFormatType("lua");
    }
  };

  return (
    <div
      className={`p-6 rounded-2xl border shadow-lg ${theme === "dark"
        ? "bg-transparent border-[rgba(255,255,255,0.05)]"
        : "bg-white border-[rgba(0,0,0,0.1)]"
        }`}
    >
      <h2 className="text-xl font-semibold mb-3">
        JSON / Lua Formatter
      </h2>

      <p className="text-xs text-slate-400 mb-5">
        Enter your code → select type or detect automatically → Format (beautify / minify).
      </p>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setFormatType("json")}
          className={`px-3 py-1 text-sm rounded-lg ${formatType === "json" ? "bg-emerald-500 text-white" : "bg-transparent border border-slate-600"
            }`}
        >
          JSON
        </button>
        <button
          onClick={() => setFormatType("lua")}
          className={`px-3 py-1 text-sm rounded-lg ${formatType === "lua" ? "bg-indigo-500 text-white" : "bg-transparent border border-slate-600"
            }`}
        >
          Lua
        </button>
        <button
          onClick={detectType}
          className="px-3 py-1 text-sm rounded-lg border border-slate-600 hover:bg-[#111419]"
        >
          Detect Automatically
        </button>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste JSON or Lua code here..."
        className="w-full min-h-[120px] p-3 text-sm rounded-lg bg-[#08090ace] border border-[#292929] text-white font-mono focus:outline-none mb-4"
      />

      <div className="flex gap-3 mb-4">
        <button
          onClick={beautifyCode}
          className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm"
        >
          Beautify
        </button>
        <button
          onClick={minifyCode}
          className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm"
        >
          Minify
        </button>
        <button
          onClick={() => {
            setCode("");
            setFormattedCode("");
            setError("");
          }}
          className="px-4 py-1.5 border border-slate-600 hover:bg-[#1c1f27] rounded-lg text-sm"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="text-red-400 text-xs mb-4">{error}</div>
      )}


      {formattedCode && (
        <div className="relative mt-6">

          <h2 className="text-base font-semibold text-white/90 mb-2">
            Updated Code
          </h2>

          <pre className="relative p-4 bg-[#08090ace] border border-[#292929] text-white text-xs rounded-lg overflow-auto max-h-[350px]">

            {/* 📋 Kopyala butonu artık <pre> içinde */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(formattedCode);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="absolute top-2 right-2 z-20 text-xs px-2 py-1 flex items-center gap-1 bg-[rgba(8,7,7,0.04)] hover:bg-[rgba(46,46,46,0.17)] border border-[rgba(255,255,255,0.15)] rounded-md backdrop-blur transition cursor-pointer pointer-events-auto"
              style={{ lineHeight: "1" }}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>

            {/* Kod */}
            <code
              className={`language-${formatType}`}
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  formattedCode,
                  Prism.languages[formatType],
                  formatType
                ),
              }}
            />
          </pre>

          {/* Bildirim */}
          {status && (
            <p className="text-[11px] text-emerald-400 mt-2">{status}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Basit Lua beautifier
function formatLua(code: string) {
  return code
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\s*=\s*/g, " = ")
    .replace(/\s*,\s*/g, ", ");
}
