"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";

export default function Mp3DownloaderTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [downloadInfo, setDownloadInfo] = useState<{ url: string, fileName: string, title: string } | null>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleDownload = async () => {
    if (!url) return;

    setLoading(true);
    setStatus(t("tools.mp3downloader.conversionStarted"));
    setDownloadInfo(null);

    try {
      const res = await fetch(`/api/download/mp3?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setStatus(t("tools.mp3downloader.preparingDownload"));

      // Set download info for user to click
      setDownloadInfo({
        url: data.downloadUrl,
        fileName: data.fileName,
        title: data.title
      });

      setStatus(t("tools.mp3downloader.success"));
    } catch (err: any) {
      setStatus("🚨 Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl
      backdrop-blur-md border
      ${theme === "dark"
        ? "bg-transparent border-[rgba(255,255,255,0.07)]"
        : "bg-white/80 border-gray-200"}`}>

      <h2 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
        {t("tools.mp3downloader.title")}
      </h2>
      <p className={`text-sm mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
        {t("tools.mp3downloader.description")}<br />
        <span className={`font-semibold ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}>
          {t("tools.mp3downloader.descriptionHighlight")}
        </span>
      </p>

      <p className={`text-xs mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
        {t("tools.mp3downloader.supportedPlatforms")}
      </p>

      <input
        type="text"
        placeholder={t("tools.mp3downloader.placeholder")}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={`w-full px-4 py-2 rounded-lg text-sm border outline-none focus:ring-1 ring-indigo-500
          ${theme === "dark"
            ? "bg-[#111] text-slate-200 border-slate-700"
            : "bg-gray-50 text-slate-800 border-gray-300"}`}
      />

      <button
        type="button"
        onClick={handleDownload}
        disabled={loading || !url}
        className={`mt-4 w-full py-2 text-sm font-semibold rounded-xl transition
          ${loading
            ? "bg-slate-600 cursor-not-allowed opacity-50"
            : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 text-white"
          }`}
      >
        {loading ? t("tools.mp3downloader.downloading") : t("tools.mp3downloader.downloadBtn")}
      </button>

      {status && (
        <p className={`mt-3 text-[13px] ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
          {status}
        </p>
      )}

      {downloadInfo && (
        <a
          href={downloadInfo.url}
          download={downloadInfo.fileName}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full py-3 text-center text-sm font-semibold rounded-xl 
            bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white transition"
        >
          📥 {downloadInfo.title ? `Download: ${downloadInfo.title}` : "Download MP3"}
        </a>
      )}
    </div>
  );
}
