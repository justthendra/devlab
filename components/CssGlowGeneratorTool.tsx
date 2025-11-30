"use client";

import { useState, useMemo } from "react";
import { useTheme } from "next-themes";

type SizePreset = "sm" | "md" | "lg";
type BlurPreset = "soft" | "medium" | "strong";
type PositionPreset = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

interface GlowConfig {
  label: string;
  color: string;      // hex
  opacity: number;    // 0 - 1
  size: SizePreset;
  blur: BlurPreset;
  position: PositionPreset;
}

const sizeMap = {
  sm: { tw: "w-[260px] h-[260px]", px: 260 },
  md: { tw: "w-[360px] h-[360px]", px: 360 },
  lg: { tw: "w-[460px] h-[460px]", px: 460 },
};

const blurMap = {
  soft: { tw: "blur-[120px]", px: 120 },
  medium: { tw: "blur-[180px]", px: 180 },
  strong: { tw: "blur-[240px]", px: 240 },
};

const positionMap: Record<
  PositionPreset,
  { tw: string; style: React.CSSProperties }
> = {
  "top-left": {
    tw: "-top-32 -left-28",
    style: { top: "-20%", left: "-10%" },
  },
  "top-right": {
    tw: "-top-32 -right-28",
    style: { top: "-20%", right: "-10%" },
  },
  "bottom-left": {
    tw: "bottom-[-50px] left-[-40px]",
    style: { bottom: "-20%", left: "-10%" },
  },
  "bottom-right": {
    tw: "bottom-[-50px] right-[-40px]",
    style: { bottom: "-20%", right: "-10%" },
  },
  center: {
    tw: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
};

// hex → rgba helper
function hexToRgba(hex: string, opacity: number) {
  let cleaned = hex.replace("#", "");
  if (cleaned.length === 3) {
    cleaned = cleaned
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(cleaned, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b, rgba: `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(2)})` };
}

export default function CssGlowGeneratorTool() {
  const { theme } = useTheme();

  const [primary, setPrimary] = useState<GlowConfig>({
    label: "Primary Glow",
    color: "#00ffd0",
    opacity: 0.18,
    size: "md",
    blur: "medium",
    position: "top-left",
  });

  const [secondary, setSecondary] = useState<GlowConfig>({
    label: "Secondary Glow",
    color: "#0096ff",
    opacity: 0.18,
    size: "md",
    blur: "medium",
    position: "bottom-right",
  });

  const primaryRgba = useMemo(
    () => hexToRgba(primary.color, primary.opacity),
    [primary]
  );
  const secondaryRgba = useMemo(
    () => hexToRgba(secondary.color, secondary.opacity),
    [secondary]
  );

  const primaryTailwind = useMemo(() => {
    const size = sizeMap[primary.size].tw;
    const blur = blurMap[primary.blur].tw;
    const pos = positionMap[primary.position].tw;
    return `absolute ${pos} ${size} bg-[${primaryRgba.rgba}] ${blur} rounded-full`;
  }, [primary, primaryRgba]);

  const secondaryTailwind = useMemo(() => {
    const size = sizeMap[secondary.size].tw;
    const blur = blurMap[secondary.blur].tw;
    const pos = positionMap[secondary.position].tw;
    return `absolute ${pos} ${size} bg-[${secondaryRgba.rgba}] ${blur} rounded-full`;
  }, [secondary, secondaryRgba]);

  const cssSnippet = useMemo(() => {
    const pSize = sizeMap[primary.size].px;
    const pBlur = blurMap[primary.blur].px;
    const pPos = positionMap[primary.position].style;

    const sSize = sizeMap[secondary.size].px;
    const sBlur = blurMap[secondary.blur].px;
    const sPos = positionMap[secondary.position].style;

    const posToCss = (style: React.CSSProperties) =>
      Object.entries(style)
        .map(([k, v]) => `  ${k}: ${v};`)
        .join("\n");

    return `/* Container example */
.glow-container {
  position: relative;
  overflow: hidden;
}

/* Primary Glow */
.glow-primary {
  position: absolute;
  width: ${pSize}px;
  height: ${pSize}px;
  background: ${primaryRgba.rgba};
  filter: blur(${pBlur}px);
  border-radius: 9999px;
${posToCss(pPos)}
}

/* Secondary Glow */
.glow-secondary {
  position: absolute;
  width: ${sSize}px;
  height: ${sSize}px;
  background: ${secondaryRgba.rgba};
  filter: blur(${sBlur}px);
  border-radius: 9999px;
${posToCss(sPos)}
}
`;
  }, [primary, secondary, primaryRgba, secondaryRgba]);

  return (
    <div
      className={`
        relative p-7 rounded-2xl max-w-5xl mx-auto shadow-xl border
        ${
          theme === "dark"
            ? "bg-[rgba(11,11,14,0.1)] border-[rgba(255,255,255,0.06)]"
            : "bg-white border-[rgba(0,0,0,0.08)]"
        }
      `}
    >
      <h2
        className={`text-xl font-semibold mb-1 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        CSS Glow / Orb Generator
      </h2>
      <p
        className={`text-[13px] mb-6 ${
          theme === "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Design orb/glow backgrounds here,{" "}
        <span
          className={
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          }
        >
          Tailwind
        </span>{" "}
        or{" "}
        <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>
          plain CSS
        </span>{" "}
        code with a single click.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
        {/* Preview */}
        <div
          className={`
            relative rounded-2xl overflow-hidden p-6 min-h-[260px]
            ${
              theme === "dark"
                ? "bg-[#05070c]"
                : "bg-gradient-to-br from-slate-50 to-slate-200"
            }
          `}
        >
          {/* Orb previewları */}
          <div className="absolute inset-0">
            {/* Primary */}
            <div
              className={`
                pointer-events-none rounded-full
              `}
              style={{
                position: "absolute",
                width: sizeMap[primary.size].px,
                height: sizeMap[primary.size].px,
                background: primaryRgba.rgba,
                filter: `blur(${blurMap[primary.blur].px}px)`,
                ...(positionMap[primary.position].style as any),
              }}
            />
            {/* Secondary */}
            <div
              className="pointer-events-none rounded-full"
              style={{
                position: "absolute",
                width: sizeMap[secondary.size].px,
                height: sizeMap[secondary.size].px,
                background: secondaryRgba.rgba,
                filter: `blur(${blurMap[secondary.blur].px}px)`,
                ...(positionMap[secondary.position].style as any),
              }}
            />
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
              Preview
            </span>
            <h3 className="text-lg font-semibold text-white mb-1">
              DevLab Style Glow
            </h3>
            <p className="text-xs text-slate-300 max-w-sm">
              You can think of this area as a hero, tool page, or landing background. Glow settings determine the mood of the page.
            </p>
          </div>
        </div>

        {/* Kontroller */}
        <div className="space-y-4">
          {/* Primary ayarları */}
          <GlowControls
            config={primary}
            onChange={setPrimary}
            theme={theme}
          />
          {/* Secondary ayarları */}
          <GlowControls
            config={secondary}
            onChange={setSecondary}
            theme={theme}
          />
        </div>
      </div>

      {/* Kod alanları */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs font-semibold ${
                theme === "dark" ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Tailwind Snippet
            </span>
          </div>
          <div
            className={`
              text-[11px] rounded-xl p-3 font-mono whitespace-pre-wrap break-all
              ${
                theme === "dark"
                  ? "bg-[#08090aa6] text-slate-200 border border-[#292929]"
                  : "bg-slate-100 text-slate-800 border border-slate-300"
              }
            `}
          >
            {`{/* Primary */}\n<div className="${primaryTailwind}"></div>\n\n{/* Secondary */}\n<div className="${secondaryTailwind}"></div>`}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs font-semibold ${
                theme === "dark" ? "text-slate-200" : "text-slate-800"
              }`}
            >
              CSS Snippet
            </span>
          </div>
          <div
            className={`
              text-[11px] rounded-xl p-3 font-mono whitespace-pre overflow-auto max-h-[220px]
              ${
                theme === "dark"
                  ? "bg-[#08090aa6] text-slate-200 border border-[#292929]"
                  : "bg-slate-100 text-slate-800 border border-slate-300"
              }
            `}
          >
            {cssSnippet}
          </div>
        </div>
      </div>
    </div>
  );
}

function GlowControls({
  config,
  onChange,
  theme,
}: {
  config: GlowConfig;
  onChange: (cfg: GlowConfig) => void;
  theme: string | undefined;
}) {
  return (
    <div
      className={`
        rounded-xl p-3 border text-[11px]
        ${
          theme === "dark"
            ? "border-[#292929] bg-[#0c0d0f09]"
            : "border-slate-300 bg-slate-50"
        }
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className={`font-semibold ${
            theme === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          {config.label}
        </span>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-2 items-center mb-2">
        <span>Color</span>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={config.color}
            onChange={(e) => onChange({ ...config, color: e.target.value })}
            className="w-7 h-7 rounded-full border border-slate-500 bg-transparent cursor-pointer"
          />
          <span className="text-[10px] opacity-70">{config.color}</span>
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-2 items-center mb-2">
        <span>Opacity</span>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0.05}
            max={0.4}
            step={0.01}
            value={config.opacity}
            onChange={(e) =>
              onChange({ ...config, opacity: parseFloat(e.target.value) })
            }
            className="w-full"
          />
          <span className="w-10 text-right">
            {config.opacity.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-2 items-center mb-2">
        <span>Boyut</span>
        <div className="flex gap-1">
          {([
            { key: "sm", label: "S" },
            { key: "md", label: "M" },
            { key: "lg", label: "L" },
          ] as { key: SizePreset; label: string }[]).map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange({ ...config, size: opt.key })}
              className={`
                px-2 py-1 rounded-md border text-[10px]
                ${
                  config.size === opt.key
                    ? "bg-emerald-500 border-emerald-400 text-white"
                    : theme === "dark"
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-2 items-center mb-2">
        <span>Blur</span>
        <div className="flex gap-1">
          {([
            { key: "soft", label: "Soft" },
            { key: "medium", label: "Mid" },
            { key: "strong", label: "Strong" },
          ] as { key: BlurPreset; label: string }[]).map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange({ ...config, blur: opt.key })}
              className={`
                px-2 py-1 rounded-md border text-[10px]
                ${
                  config.blur === opt.key
                    ? "bg-cyan-500 border-cyan-400 text-white"
                    : theme === "dark"
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
        <span>Position</span>
        <div className="flex flex-wrap gap-1">
          {(
            [
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
              "center",
            ] as PositionPreset[]
          ).map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => onChange({ ...config, position: pos })}
              className={`
                px-2 py-1 rounded-md border text-[10px] capitalize
                ${
                  config.position === pos
                    ? "bg-indigo-500 border-indigo-400 text-white"
                    : theme === "dark"
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {pos.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
