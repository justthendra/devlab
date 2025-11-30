"use client";
import { useState } from "react";

export default function Mp3DownloaderTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  
  const handleDownload = async () => {
    if (!url) return;

    setLoading(true);
    setStatus("🎵 Conversion started...");

    try {
      const res = await fetch(`/api/download/mp3?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setStatus("📥 Preparing download...");
      
      // MP3 indir
      const a = document.createElement("a");
      a.href = `data:audio/mp3;base64,${data.fileData}`;
      a.download = data.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setStatus("✔ Success! MP3 downloaded.");
    } catch (err: any) {
      setStatus("🚨 Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl
      bg-transparent backdrop-blur-md border border-[rgba(255,255,255,0.07)]">

      <h2 className="text-xl font-semibold text-white mb-2">🎧 MP3 Downloader</h2>
      <p className="text-sm text-slate-300 mb-5">
        Enter a YouTube link and let's download the audio.<br />
        <span className="text-indigo-400 font-semibold">
          Nothing is stored on the server.
        </span>
      </p>

      <input
        type="text"
        placeholder="https://www.youtube.com/watch?v=..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-[#111] text-slate-200 text-sm border border-slate-700 outline-none focus:ring-1 ring-indigo-500"
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
        {loading ? "🎧 Downloading..." : "📥 Download as MP3"}
      </button>

      {status && (
        <p className="mt-3 text-[13px] text-slate-200">{status}</p>
      )}
    </div>
  );
}
