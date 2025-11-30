"use client";

import { useTheme } from "next-themes";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();


  return (
    <div
      className={`
        min-h-screen w-full flex
        ${theme === "dark" ? "bg-transparent text-slate-200" : "bg-transparent text-slate-700"}
      `}
    >
      <title>DevLab - Documentation</title>

      <main
        className="
    flex-1 
    px-8 
    py-24   /* önce 16 idi */
    flex
    justify-center
  "
      >
        <div className="max-w-4xl w-full mt-4">{children}</div>
      </main>

    </div>
  );
}
