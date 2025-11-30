"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme } = useTheme();

  const docsNav = [
    { label: "🚀 Getting Started", path: "/docs/getting-started" },
    { label: "🧠 How It Works", path: "/docs/how-it-works" },
    { label: "🔒 Security", path: "/docs/security" },
    { label: "⚙️ FFmpeg Technology", path: "/docs/ffmpeg" },
    { label: "📦 API / Modularity", path: "/docs/api" },
    { label: "❓ FAQ", path: "/docs/faq" },
  ];

  return (
    <div
      className={`
        min-h-screen w-full flex
        ${theme === "dark" ? "bg-transparent text-slate-200" : "bg-transparent text-slate-700"}
      `}
    >
      <title>DevLab - Documentation</title>
      {/* Sidebar */}
      <aside
        className={`
          w-56 p-5 flex flex-col gap-3 border-r
          ${theme === "dark" ? "border-[rgba(255,255,255,0.08)]" : "border-gray-300"}
        `}
      >
        <h3 className="text-xs uppercase tracking-wide opacity-50 mb-2">Docs</h3>

        {docsNav.map((item) => {
          const isActive = pathname === item.path;

          return (
            <motion.div key={item.path} whileHover={{ x: 4 }}>
              <Link
                href={item.path}
                className={`
                  block text-sm px-3 py-2 rounded transition
                  ${
                    isActive
                      ? theme === "dark"
                        ? "bg-[rgba(0,255,200,0.15)] text-emerald-300"
                        : "bg-[rgba(0,200,255,0.15)] text-blue-700"
                      : theme === "dark"
                        ? "hover:bg-[rgba(255,255,255,0.07)] text-slate-300"
                        : "hover:bg-[rgba(0,0,0,0.05)]"
                  }
                `}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </aside>

      {/* İçerik alanı */}
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
