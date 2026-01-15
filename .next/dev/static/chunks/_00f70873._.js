(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Mp4ToWebmTool.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mp4ToWebmTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Mp4ToWebmTool() {
    _s();
    const [ffmpegReady, setFfmpegReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [outputUrl, setOutputUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quality, setQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("fast");
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    // FFmpeg scriptini yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Mp4ToWebmTool.useEffect": ()=>{
            const loadFFmpeg = {
                "Mp4ToWebmTool.useEffect.loadFFmpeg": async ()=>{
                    try {
                        setStatus("FFmpeg loading...");
                        if (!window.FFmpeg) {
                            await new Promise({
                                "Mp4ToWebmTool.useEffect.loadFFmpeg": (resolve, reject)=>{
                                    const script = document.createElement("script");
                                    script.src = "/ffmpeg/ffmpeg.min.js";
                                    script.onload = ({
                                        "Mp4ToWebmTool.useEffect.loadFFmpeg": ()=>resolve(true)
                                    })["Mp4ToWebmTool.useEffect.loadFFmpeg"];
                                    script.onerror = reject;
                                    document.body.appendChild(script);
                                }
                            }["Mp4ToWebmTool.useEffect.loadFFmpeg"]);
                        }
                        setFfmpegReady(true);
                        setStatus("");
                    } catch (err) {
                        console.error(err);
                        setStatus(t("tools.common.ffmpegError"));
                    }
                }
            }["Mp4ToWebmTool.useEffect.loadFFmpeg"];
            loadFFmpeg();
        }
    }["Mp4ToWebmTool.useEffect"], [
        t
    ]);
    // Dönüştürme işlemi
    const handleConvert = async ()=>{
        if (!selectedFile || !window.FFmpeg || loading) return;
        setLoading(true);
        setProgress(0);
        setOutputUrl(null);
        setStatus(t("tools.mp4towebm.conversionStarted"));
        let interval = null;
        interval = window.setInterval(()=>{
            setProgress((prev)=>{
                if (prev === null) return 10;
                if (prev < 85) return prev + 3;
                return prev;
            });
        }, 500);
        try {
            const { createFFmpeg, fetchFile } = window.FFmpeg;
            const ffmpeg = createFFmpeg({
                log: false,
                corePath: "/ffmpeg/ffmpeg-core.js"
            });
            setStatus(t("tools.mp4towebm.startingFFmpeg"));
            await ffmpeg.load();
            setProgress(15);
            setStatus(t("tools.mp4towebm.processingVideo"));
            const inputData = await fetchFile(selectedFile);
            ffmpeg.FS("writeFile", "input.mp4", inputData);
            setProgress(30);
            let videoArgs = [];
            if (quality === "fast") {
                videoArgs = [
                    "-vf",
                    "scale=854:-1",
                    "-c:v",
                    "libvpx",
                    "-preset",
                    "ultrafast",
                    "-b:v",
                    "512k"
                ];
            } else if (quality === "medium") {
                videoArgs = [
                    "-vf",
                    "scale=1280:-1",
                    "-c:v",
                    "libvpx",
                    "-preset",
                    "fast",
                    "-b:v",
                    "1M"
                ];
            } else {
                videoArgs = [
                    "-c:v",
                    "libvpx",
                    "-preset",
                    "slow",
                    "-b:v",
                    "2M"
                ];
            }
            setStatus(t("tools.mp4towebm.conversionInProgress"));
            setProgress(45);
            await ffmpeg.run("-i", "input.mp4", ...videoArgs, "-c:a", "libvorbis", "output.webm");
            setStatus(t("tools.mp4towebm.preparingOutput"));
            setProgress(95);
            const data = ffmpeg.FS("readFile", "output.webm");
            const url = URL.createObjectURL(new Blob([
                data.buffer
            ], {
                type: "video/webm"
            }));
            setOutputUrl(url);
            setProgress(100);
            setStatus(t("tools.mp4towebm.conversionCompleted"));
            ffmpeg.FS("unlink", "input.mp4");
            ffmpeg.FS("unlink", "output.webm");
        } catch (err) {
            console.error(err);
            setStatus("🚨 Error: " + (err?.message || "Unknown error"));
            setProgress(null);
        } finally{
            if (interval) window.clearInterval(interval);
            setLoading(false);
        }
    };
    const qualityLabels = {
        fast: t("tools.common.quality.fast"),
        medium: t("tools.common.quality.medium"),
        high: t("tools.common.quality.high")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        relative p-8 rounded-2xl max-w-2xl mx-auto shadow-xl border
        transition-colors duration-300
        ${theme === "dark" ? "bg-transparent border-[rgba(255,255,255,0.05)]" : "bg-white border-gray-200"}

      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`,
                        children: t("tools.mp4towebm.title")
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-[13px] mb-6 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`,
                        children: [
                            t("tools.mp4towebm.description"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: theme === "dark" ? "text-indigo-400" : "text-indigo-600",
                                children: t("tools.common.noUpload")
                            }, void 0, false, {
                                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl px-6 py-7 transition hover:border-indigo-400 hover:bg-slate-900/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-medium ${theme === "dark" ? "text-slate-100" : "text-slate-900"}`,
                        children: t("tools.mp4towebm.selectVideo")
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[11px] mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`,
                        children: t("tools.common.clickOrDrag")
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "video/mp4",
                        className: "hidden",
                        onChange: (e)=>{
                            setSelectedFile(e.target.files?.[0] || null);
                            setOutputUrl(null);
                            setProgress(null);
                            setStatus("");
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2 text-[11px]",
                children: [
                    {
                        key: "fast",
                        label: t("tools.common.quality.fast"),
                        desc: "480p • 512k"
                    },
                    {
                        key: "medium",
                        label: t("tools.common.quality.medium"),
                        desc: "720p • 1M"
                    },
                    {
                        key: "high",
                        label: t("tools.common.quality.high"),
                        desc: "2M"
                    }
                ].map(({ key, label, desc })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setQuality(key),
                        className: `
    px-3 py-1.5 rounded-lg border transition-all duration-300 text-sm
    ${quality === key ? theme === "dark" ? "text-white bg-[rgba(80,90,120,0.25)] border-transparent shadow-[0_0_12px_rgba(99,102,241,0.6)]" : "text-slate-900 bg-[rgba(200,200,255,0.25)] border-transparent shadow-[0_0_8px_rgba(0,0,0,0.1)]" : theme === "dark" ? "bg-transparent border-[rgba(255,255,255,0.15)] text-slate-300 hover:bg-[rgba(255,255,255,0.07)]" : "bg-transparent border-[rgba(0,0,0,0.15)] text-slate-700 hover:bg-[rgba(0,0,0,0.05)]"}
  `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-[10px] opacity-75 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`,
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-3 text-[11px] ${theme === "dark" ? "text-indigo-300" : "text-indigo-700"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: [
                            t("tools.common.fileSelected"),
                            ": "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    selectedFile.name
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-3 text-[11px] ${progress === 100 ? "text-emerald-400" : status.startsWith("🚨") || status.startsWith("❌") ? "text-rose-400" : "text-slate-300"}`,
                children: status
            }, void 0, false, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            progress !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 w-full h-2 rounded-full bg-slate-900 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 transition-all duration-400",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Mp4ToWebmTool.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: !selectedFile || loading || !ffmpegReady,
                onClick: handleConvert,
                className: `mt-6 w-full py-3 text-sm font-semibold rounded-xl transition
          ${progress === 100 ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950" : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 text-white"}
          disabled:opacity-40 hover:-translate-y-[1px] hover:scale-[1.01]
        `,
                children: loading ? t("tools.mp4towebm.convertingBtn") : progress === 100 ? t("tools.mp4towebm.convertNewVideo") : t("tools.mp4towebm.convertBtn")
            }, void 0, false, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            outputUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: outputUrl,
                        controls: true,
                        className: "w-full rounded-lg border border-slate-700 bg-black shadow-lg"
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: outputUrl,
                        download: "converted.webm",
                        className: `block w-full text-center text-[12px] py-2 rounded-lg transition
              ${theme === "dark" ? "bg-slate-800 hover:bg-slate-700 border border-slate-600 text-indigo-200" : "bg-slate-200 hover:bg-slate-300 border border-slate-400 text-indigo-700"}
            `,
                        children: t("tools.mp4towebm.downloadBtn")
                    }, void 0, false, {
                        fileName: "[project]/components/Mp4ToWebmTool.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this),
            !ffmpegReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-2 text-[11px] ${theme === "dark" ? "text-amber-300" : "text-amber-600"}`,
                children: t("tools.common.ffmpegLoading")
            }, void 0, false, {
                fileName: "[project]/components/Mp4ToWebmTool.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mp4ToWebmTool.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(Mp4ToWebmTool, "OVYE/rfBoAa5O4mjNUOa3xe9F8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Mp4ToWebmTool;
var _c;
__turbopack_context__.k.register(_c, "Mp4ToWebmTool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tools/mp4towebm/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mp4ToWebmPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mp4ToWebmTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Mp4ToWebmTool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Mp4ToWebmPage() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
            min-h-screen w-full flex flex-col items-center px-6 pt-24 pb-12 relative
            ${theme === "dark" ? "bg-transparent" : "bg-[#f4f7fa]"}
          `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "DevLab - MP4 to WEBM"
            }, void 0, false, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.15)] blur-[180px] rounded-full animate-pulse"
            }, void 0, false, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-50px] right-[-40px] w-[350px] h-[350px] bg-[rgba(0,150,255,0.15)] blur-[200px] rounded-full animate-pulse"
            }, void 0, false, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 backdrop-blur-[1px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "relative z-10 text-center max-w-3xl mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-5xl font-bold mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-green-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent",
                            children: t("pageHeaders.mp4towebm.title")
                        }, void 0, false, {
                            fileName: "[project]/app/tools/mp4towebm/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tools/mp4towebm/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `
                text-sm md:text-base
                ${theme === "dark" ? "text-slate-300" : "text-slate-600"}
              `,
                        children: [
                            t("pageHeaders.mp4towebm.desc1"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `
                  font-medium
                  ${theme === "dark" ? "text-emerald-400" : "text-blue-600"}
                `,
                                children: t("pageHeaders.mp4towebm.desc2")
                            }, void 0, false, {
                                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tools/mp4towebm/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.2,
                    duration: 0.4
                },
                className: "relative z-10 w-full max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mp4ToWebmTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/tools/mp4towebm/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tools/mp4towebm/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tools/mp4towebm/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Mp4ToWebmPage, "TFJzF1WuzBE+4/XI8q8pSe372Hg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Mp4ToWebmPage;
var _c;
__turbopack_context__.k.register(_c, "Mp4ToWebmPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_00f70873._.js.map