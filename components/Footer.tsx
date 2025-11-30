"use client";

import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`
        w-full flex flex-col items-center justify-center py-4 mt-auto
        text-[12px] transition-all duration-300 select-none
        ${theme === "dark"
          ? "text-slate-400 bg-white border-t border-[rgba(0,0,0,0.07)]"
          : "text-slate-600 bg-[rgba(19,20,22,0)] border-t border-[rgba(255,255,255,0.06)]"
        }
      `}
    >
      {/* Üst çizgi (merkezde kısa) */}
      <div
        className={`
          h-[1px] rounded-full mb-2
          ${theme === "dark" ? "bg-[rgba(255,255,255,0.08)]" : "bg-[rgba(0,0,0,0.15)]"}
          w-24
        `}
      />

      <p className="text-center">
        Built with 💚 for{" "}
        <a href="https://github.com/justthendra" target="_blank" rel="noopener noreferrer" className="text-green-400 no-underline font-medium">
          Thendra
        </a>
      </p>
      <span className="text-[10px] opacity-70 mt-1">
        © {new Date().getFullYear()} DevLab
      </span>
    </footer>
  );
}
