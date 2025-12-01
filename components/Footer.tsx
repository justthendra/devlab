"use client";

import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full flex flex-col items-center justify-center py-4 mt-auto
        text-[12px] transition-all duration-300 select-none
        ${
          theme === "dark"
            ? "text-slate-400 bg-transparent"
            : "text-slate-600 bg-transparent"
        }
      `}
    >
      <p className="text-center">
        Developed by 💚 with{" "}
        <a
          href="https://github.com/justthendra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 no-underline font-medium"
        >
          Thendra
        </a>
      </p>
      <span className="text-[10px] opacity-70 mt-1">
        © {new Date().getFullYear()} DevLab
      </span>
    </footer>
  );
}

