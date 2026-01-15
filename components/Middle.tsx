"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function Middle() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const features = [
    t("middle.features.browserBased"),
    t("middle.features.fast"),
    t("middle.features.uiux"),
    t("middle.features.productivity"),
  ];

  return (
    <section className={`relative  w-full flex flex-col items-center text-center py-20 px-6 ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}>
      <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
        {t("middle.title")}
      </h3>

      <p className="max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
        {t("middle.description")}
      </p>

      {/* Mini-pill features */}
      <div className="mt-8 flex flex-wrap justify-center cursor-default gap-3 text-[11px]">
        {features.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 rounded-full cursor-pointer
        ${theme === "dark" ? "bg-[rgba(3,3,3,0.04)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300" : "bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,255,200,0.35)] hover:text-emerald-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-500"} transition`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>


  );
}
