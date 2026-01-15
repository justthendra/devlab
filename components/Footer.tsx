"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { Github, Twitter, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className={`
      w-full border-t mt-auto pt-12 pb-6 backdrop-blur-sm
      ${theme === "dark"
        ? "bg-transparent border-slate-800/50 text-slate-400"
        : "bg-white border-slate-100 text-slate-600"
      }
    `}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              <Image src={theme === "dark" ? "/DevLab.png" : "/DevLabDark.png"} alt="Logo" width={32} height={32} />
              DevLab
            </h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              {t("footer.desc") || "Privacy-first, browser-based tools for developers and creators."}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/justthendra" target="_blank" rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.gg/JWx8qJ7B8W" target="_blank" rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("footer.product") || "Product"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools" className="hover:text-indigo-400 transition-colors">{t("navbar.tools") || "Tools"}</Link></li>
              <li><Link href="/docs" className="hover:text-indigo-400 transition-colors">{t("navbar.docs") || "Documentation"}</Link></li>
              <li><Link href="/changelog" className="hover:text-indigo-400 transition-colors">{t("footer.changelog") || "Changelog"}</Link></li>
              <li><Link href="/roadmap" className="hover:text-indigo-400 transition-colors">{t("footer.roadmap") || "Roadmap"}</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("footer.legal") || "Legal"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">{t("footer.privacy") || "Privacy Policy"}</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition-colors">{t("footer.terms") || "Terms of Service"}</Link></li>
              <li><Link href="/cookies" className="hover:text-indigo-400 transition-colors">{t("footer.cookies") || "Cookie Policy"}</Link></li>
              <li><Link href="/licenses" className="hover:text-indigo-400 transition-colors">{t("footer.licenses") || "Licenses"}</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Social (Placeholder for now, simplified) */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("navbar.about") || "About"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">{t("footer.ourStory") || "Our Story"}</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">{t("footer.contact") || "Contact"}</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">{t("footer.support") || "Support"}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs
          ${theme === "dark" ? "border-slate-800" : "border-slate-100"}
        `}>
          <div className="opacity-60">
            © {new Date().getFullYear()} DevLab. {t("footer.allRightsReserved") || "All rights reserved."}
          </div>

          <div className="flex items-center gap-1 opacity-80">
            <span>{t("footer.developedBy")}</span>
            <Heart size={14} className="text-emerald-400 fill-emerald-400 animate-pulse" />
            <span>{t("footer.by")}</span>
            <a
              href="https://github.com/justthendra"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-indigo-400 transition-colors"
            >
              Thendra
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
