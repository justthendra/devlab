"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { Github, Twitter, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

const AnimatedLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href}
    className={`group relative inline-block overflow-hidden ${className || ""}`}
    {...props}
  >
    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
      {children}
    </span>
    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-indigo-600 font-medium">
      {children}
    </span>
  </Link>
);

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
            <h2 className={`text-xl font-medium mb-4 flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              <Image src={theme === "dark" ? "/DevLab.png" : "/DevLabDark.png"} alt="Logo" width={32} height={32} />
              dev<span className="text-indigo-600 font-extrabold text-2xl -ml-[7px]">Lab</span>
            </h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              {t("footer.desc") || "Privacy-first, browser-based tools for developers and creators."}
            </p>
            <div className="flex items-center gap-4">
              <AnimatedLink href="https://github.com/justthendra" target="_blank" rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </AnimatedLink>
              <AnimatedLink href="https://discord.gg/JWx8qJ7B8W" target="_blank" rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors">
                <FaDiscord size={20} />
              </AnimatedLink>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("footer.product") || "Product"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><AnimatedLink href="/tools">{t("footer.tools") || "Tools"}</AnimatedLink></li>
              <li><AnimatedLink href="/docs">{t("footer.docs") || "Documentation"}</AnimatedLink></li>
              <li><AnimatedLink href="/changelog">{t("footer.changelog") || "Changelog"}</AnimatedLink></li>
              <li><AnimatedLink href="/roadmap">{t("footer.roadmap") || "Roadmap"}</AnimatedLink></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("footer.legal") || "Legal"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><AnimatedLink href="/privacy">{t("footer.privacy") || "Privacy Policy"}</AnimatedLink></li>
              <li><AnimatedLink href="/terms">{t("footer.terms") || "Terms of Service"}</AnimatedLink></li>
              <li><AnimatedLink href="/cookies">{t("footer.cookies") || "Cookie Policy"}</AnimatedLink></li>
              <li><AnimatedLink href="/licenses">{t("footer.licenses") || "Licenses"}</AnimatedLink></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Social (Placeholder for now, simplified) */}
          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {t("navbar.about") || "About"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><AnimatedLink href="/about">{t("footer.ourStory") || "Our Story"}</AnimatedLink></li>
              <li><AnimatedLink href="/contact">{t("footer.contact") || "Contact"}</AnimatedLink></li>
              <li><AnimatedLink href="#">{t("footer.support") || "Support"}</AnimatedLink></li>
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
              className="font-medium hover:text-emerald-400 transition-colors"
            >
              Thendra
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
