"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Github  } from "lucide-react";
import { FaDiscord } from "react-icons/fa";


export default function Last() {
  const { theme } = useTheme();

  return (
    <section
  className={`py-14 flex flex-col items-center text-center ${
    theme === "dark" ? "bg-transparent" : "bg-transparent"
  } px-6`}
>
  {/* Logo */}
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="mb-4"
  >
    <Image
      src="/DevLab.png"
      alt="DevLab Logo"
      width={42}
      height={42}
      className="opacity-90 select-none pointer-events-none"
    />
  </motion.div>

  <h3
    className={`text-lg font-semibold mb-3 ${
      theme === "dark" ? "text-slate-300" : "text-slate-700"
    }`}
  >
    Contribute
  </h3>

  <p className="text-sm text-slate-400 mb-6">
    DevLab is developed with an open-source spirit. Got any ideas?
  </p>

  <div className="flex gap-3">
    {[
      {
        icon: <Github size={16} />,
        label: "GitHub",
        href: "https://github.com/justthendra/devlab",
      },
      {
        icon: <FaDiscord size={16} />,
        label: "Discord",
        href: "https://discord.gg/JWx8qJ7B8W",
      },
    ].map(({ icon, label, href }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-1 px-3 py-2 rounded-lg text-xs border transition
          ${
            theme === "dark"
              ? "bg-[rgba(15,13,13,0.01)] border-[rgba(255,255,255,0.12)] hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300 text-slate-300 hover:bg-[rgba(31,31,31,0.02)]"
              : "bg-[rgba(0,0,0,0.03)] border-[rgba(0,0,0,0.1)] text-slate-700 hover:bg-[rgba(0,0,0,0.07)]"
          }
        `}
      >
        {icon}
        {label}
      </motion.a>
    ))}
  </div>
</section>
  );
}

