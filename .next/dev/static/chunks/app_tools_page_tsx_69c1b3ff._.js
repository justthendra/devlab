(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/tools/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ToolsPage() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const tools = [
        {
            title: t("toolNames.mp4towebm"),
            link: "/tools/mp4towebm",
            desc: t("toolDescriptions.mp4towebm"),
            gradient: "from-green-400 via-emerald-500 to-cyan-400"
        },
        {
            title: t("toolNames.mp4tomp3"),
            link: "/tools/mp4tomp3",
            desc: t("toolDescriptions.mp4tomp3"),
            gradient: "from-indigo-400 via-purple-500 to-pink-400"
        },
        {
            title: t("toolNames.jpgtowebp"),
            link: "/tools/jpgtowebp",
            desc: t("toolDescriptions.jpgtowebp"),
            gradient: "from-yellow-400 via-orange-500 to-amber-400"
        },
        {
            title: t("toolNames.gifoptimize"),
            link: "/tools/gifoptimize",
            desc: t("toolDescriptions.gifoptimize"),
            gradient: "from-green-300 via-lime-500 to-yellow-300"
        },
        {
            title: t("toolNames.mp3downloader"),
            link: "/tools/mp3downloader",
            desc: t("toolDescriptions.mp3downloader"),
            gradient: "from-purple-400 via-fuchsia-500 to-red-400"
        },
        {
            title: t("toolNames.cssglow"),
            link: "/tools/cssglow",
            desc: t("toolDescriptions.cssglow"),
            gradient: "from-cyan-400 via-blue-500 to-indigo-400"
        },
        {
            title: t("toolNames.formatter"),
            link: "/tools/formatter",
            desc: t("toolDescriptions.formatter"),
            gradient: "from-sky-400 via-teal-500 to-emerald-400"
        },
        {
            title: t("toolNames.qrcode"),
            link: "/tools/qrcode",
            desc: t("toolDescriptions.qrcode"),
            gradient: "from-orange-400 via-red-500 to-pink-400"
        },
        {
            title: t("toolNames.colorpalette"),
            link: "/tools/colorpalette",
            desc: t("toolDescriptions.colorpalette"),
            gradient: "from-rose-400 via-pink-500 to-violet-400"
        },
        {
            title: t("toolNames.jsbeautify"),
            link: "/tools/jsbeautify",
            desc: t("toolDescriptions.jsbeautify"),
            gradient: "from-yellow-400 via-amber-500 to-orange-400"
        },
        {
            title: t("toolNames.imageGenerator"),
            link: "/tools/image-generator",
            desc: t("toolDescriptions.imageGenerator"),
            gradient: "from-pink-400 via-purple-500 to-indigo-400"
        },
        // Phase 1 Dev Tools
        {
            title: t("toolNames.base64"),
            link: "/tools/base64",
            desc: t("toolDescriptions.base64"),
            gradient: "from-green-400 via-emerald-500 to-teal-400"
        },
        {
            title: t("toolNames.urlencoder"),
            link: "/tools/urlencoder",
            desc: t("toolDescriptions.urlencoder"),
            gradient: "from-orange-400 via-red-500 to-rose-400"
        },
        {
            title: t("toolNames.uuid"),
            link: "/tools/uuid",
            desc: t("toolDescriptions.uuid"),
            gradient: "from-violet-400 via-purple-500 to-fuchsia-400"
        },
        {
            title: t("toolNames.hash"),
            link: "/tools/hash",
            desc: t("toolDescriptions.hash"),
            gradient: "from-cyan-400 via-blue-500 to-indigo-400"
        },
        {
            title: t("toolNames.regex"),
            link: "/tools/regex",
            desc: t("toolDescriptions.regex"),
            gradient: "from-yellow-400 via-amber-500 to-orange-400"
        },
        {
            title: t("toolNames.cssminify"),
            link: "/tools/cssminify",
            desc: t("toolDescriptions.cssminify"),
            gradient: "from-pink-400 via-rose-500 to-red-400"
        },
        {
            title: t("toolNames.htmlbeautify"),
            link: "/tools/htmlbeautify",
            desc: t("toolDescriptions.htmlbeautify"),
            gradient: "from-orange-400 via-amber-500 to-yellow-400"
        },
        {
            title: t("toolNames.markdown"),
            link: "/tools/markdown",
            desc: t("toolDescriptions.markdown"),
            gradient: "from-blue-400 via-indigo-500 to-purple-400"
        },
        // Phase 2 Image Tools
        {
            title: t("toolNames.imageresizer"),
            link: "/tools/imageresizer",
            desc: t("toolDescriptions.imageresizer"),
            gradient: "from-blue-400 via-cyan-500 to-teal-400"
        },
        {
            title: t("toolNames.imagecropper"),
            link: "/tools/imagecropper",
            desc: t("toolDescriptions.imagecropper"),
            gradient: "from-purple-400 via-pink-500 to-rose-400"
        },
        {
            title: t("toolNames.imagecompressor"),
            link: "/tools/imagecompressor",
            desc: t("toolDescriptions.imagecompressor"),
            gradient: "from-orange-400 via-red-500 to-pink-400"
        },
        {
            title: t("toolNames.svgtopng"),
            link: "/tools/svgtopng",
            desc: t("toolDescriptions.svgtopng"),
            gradient: "from-violet-400 via-purple-500 to-fuchsia-400"
        },
        // Phase 3 Video Tools
        {
            title: t("toolNames.videotrimmer"),
            link: "/tools/videotrimmer",
            desc: t("toolDescriptions.videotrimmer"),
            gradient: "from-red-400 via-rose-500 to-pink-400"
        },
        {
            title: t("toolNames.videotogif"),
            link: "/tools/videotogif",
            desc: t("toolDescriptions.videotogif"),
            gradient: "from-indigo-400 via-purple-500 to-violet-400"
        },
        // Phase 4 AI Tools
        {
            title: t("toolNames.backgroundremover"),
            link: "/tools/backgroundremover",
            desc: t("toolDescriptions.backgroundremover"),
            gradient: "from-blue-400 via-indigo-500 to-violet-400"
        },
        {
            title: t("toolNames.imagetotext"),
            link: "/tools/imagetotext",
            desc: t("toolDescriptions.imagetotext"),
            gradient: "from-emerald-400 via-teal-500 to-cyan-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        min-h-screen w-full flex justify-center items-start px-6 pt-24 pb-12 relative
        ${theme === "dark" ? "bg-transparent" : "bg-transparent"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "DevLab - Tools"
            }, void 0, false, {
                fileName: "[project]/app/tools/page.tsx",
                lineNumber: 189,
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
                className: "max-w-4xl w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            scale: 1.95
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            duration: 0.4
                        },
                        className: "text-3xl md:text-5xl font-bold mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-green-400 via-blue-400 to-[#9999FF] bg-clip-text text-transparent",
                            children: t("toolsPage.title")
                        }, void 0, false, {
                            fileName: "[project]/app/tools/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tools/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm md:text-base max-w-2xl mx-auto mb-12 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`,
                        children: [
                            t("toolsPage.description"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/tools/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${theme === "dark" ? "text-slate-400" : "text-slate-500"}`,
                                children: t("toolsPage.noUpload")
                            }, void 0, false, {
                                fileName: "[project]/app/tools/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tools/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: tool.link,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    className: `
                  cursor-pointer p-5 rounded-xl text-left transition border
                  ${theme === "dark" ? "bg-[rgba(19,20,22,0.23)] border-[rgba(255,255,255,0.06)] text-slate-200 hover:shadow-[0_0_25px_rgba(0,255,220,0.3)]" : "bg-white border-gray-200 text-slate-800 hover:shadow-[0_0_15px_rgba(0,150,255,0.15)]"}
                `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-lg font-semibold bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`,
                                            children: tool.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/tools/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`,
                                            children: tool.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/tools/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tools/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            }, tool.link, false, {
                                fileName: "[project]/app/tools/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/tools/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tools/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tools/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(ToolsPage, "TFJzF1WuzBE+4/XI8q8pSe372Hg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ToolsPage;
var _c;
__turbopack_context__.k.register(_c, "ToolsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_tools_page_tsx_69c1b3ff._.js.map