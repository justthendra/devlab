(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// 🔍 Arama içeriği
const tools = [
    {
        name: "🎬 MP4 → WEBM",
        path: "/tools/mp4towebm"
    },
    {
        name: "🎧 MP4 → MP3",
        path: "/tools/mp4tomp3"
    },
    {
        name: "📷 JPG → WEBP",
        path: "/tools/jpgtowebp"
    },
    {
        name: "🌀 GIF Optimize",
        path: "/tools/gifoptimize"
    },
    {
        name: "🎨 Gradient Generator",
        path: "/tools/cssglow"
    },
    {
        name: "🧠 JSON + Lua Formatter",
        path: "/tools/formatter"
    },
    {
        name: "🔣 QR Code Generator",
        path: "/tools/qrcode"
    },
    {
        name: "🎧 MP3 Downloader",
        path: "/tools/mp3downloader"
    },
    {
        name: "🎨 AI Image Generator",
        path: "/tools/image-generator"
    }
];
const navItems = [
    {
        label: "Tools",
        path: "/tools"
    },
    {
        label: "Docs",
        path: "/docs"
    },
    {
        label: "About",
        path: "/about"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Arama filtreleme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (query.length > 0) {
                setResults(tools.filter({
                    "Navbar.useEffect": (tool)=>tool.name.toLowerCase().includes(query.toLowerCase())
                }["Navbar.useEffect"]));
            } else {
                setResults([]);
            }
        }
    }["Navbar.useEffect"], [
        query
    ]);
    const handleSearchEnter = ()=>{
        if (results.length > 0) {
            window.location.href = results[0].path;
            setMenuOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-center mt-6 fixed top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.4
                },
                className: `
          max-w-5xl w-full mx-4 px-4 py-2 flex items-center gap-4
          backdrop-blur-md border rounded-full pointer-events-auto
          ${theme === "dark" ? "bg-[rgba(11,11,14,0.09)] border-[rgba(255,255,255,0.07)]" : "bg-[rgba(245,245,245,0.6)] border-[rgba(0,0,0,0.1)]"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 mr-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-sm font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-900"}`,
                            children: "DevLab"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: navItems.map((item)=>{
                            const isActive = pathname.startsWith(item.path);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: `text-sm transition ${isActive ? "text-emerald-400 font-semibold" : theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-800"}`,
                                children: item.label
                            }, item.path, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
              flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border w-52
              ${theme === "dark" ? "bg-[rgba(15,15,18,0.05)] border-[rgba(255,255,255,0.07)]" : "bg-white border-[rgba(0,0,0,0.39)]"}
            `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        onFocus: ()=>setFocused(true),
                                        onBlur: ()=>setTimeout(()=>setFocused(false), 200),
                                        onKeyDown: (e)=>e.key === "Enter" && handleSearchEnter(),
                                        placeholder: "Search tools...",
                                        className: `bg-transparent outline-none text-xs flex-1 ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: focused && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: -4
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -4
                                    },
                                    transition: {
                                        duration: 0.18
                                    },
                                    className: "   absolute mt-2 w-full rounded-xl border backdrop-blur-md   bg-[rgba(18,18,23,0.18)] border-[rgba(255,255,255,0.07)]   shadow-[0_4px_14px_rgba(0,0,0,0.4)] overflow-hidden z-50   ",
                                    children: results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            href: r.path,
                                            whileHover: {
                                                x: 4
                                            },
                                            className: "   block px-3 py-2 text-xs text-slate-300   hover:text-emerald-300 hover:bg-[rgba(255,255,255,0.05)]   ",
                                            children: r.name
                                        }, r.path, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.15
                        },
                        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                        className: `w-8 h-8 flex items-center justify-center rounded-full ${theme === "dark" ? "bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]" : "bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.27)]"}`,
                        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "w-4 h-4 text-yellow-300"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "w-4 h-4 text-indigo-500"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.15
                        },
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(24,24,24,0.05)] border border-[rgba(255,255,255,0.15)]",
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 176,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 176,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "   fixed top-20 right-4 left-4 rounded-xl px-6 py-4   backdrop-blur-md z-40   bg-[rgba(24,24,24,0.85)] border-[rgba(255,255,255,0.08)]   ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3 px-3 py-2 rounded-lg border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-4 h-4 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    placeholder: "Search tools...",
                                    onKeyDown: (e)=>e.key === "Enter" && handleSearchEnter(),
                                    className: "bg-transparent flex-1 text-sm outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 rounded-lg bg-[rgba(255,255,255,0.04)] p-2",
                            children: results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: r.path,
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    onClick: ()=>setMenuOpen(false),
                                    className: "block px-2 py-1 text-sm text-slate-300 hover:text-emerald-300",
                                    children: r.name
                                }, r.path, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 210,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this),
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                onClick: ()=>setMenuOpen(false),
                                className: "block py-2 text-sm border-b border-[rgba(255,255,255,0.07)]",
                                children: item.label
                            }, item.path, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Lw4yv2YPffmHj3gtf2BdSzcKWW4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Footer() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `w-full flex flex-col items-center justify-center py-4 mt-auto
        text-[12px] transition-all duration-300 select-none
        ${theme === "dark" ? "text-slate-400 bg-transparent" : "text-slate-600 bg-transparent"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center",
                children: [
                    "Developed by 💚 with",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/justthendra",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-emerald-400 no-underline font-medium hover:underline",
                        children: "Thendra"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] opacity-70 mt-1",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " DevLab"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Footer, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    // Navbar
    navbar: {
        tools: "Tools",
        docs: "Docs",
        about: "About",
        searchPlaceholder: "Search tools..."
    },
    // Tools list
    toolNames: {
        mp4towebm: "🎬 MP4 → WEBM",
        mp4tomp3: "🎧 MP4 → MP3",
        jpgtowebp: "📷 JPG → WEBP",
        gifoptimize: "🌀 GIF Optimize",
        cssglow: "🎨 Gradient Generator",
        formatter: "🧠 JSON + Lua Formatter",
        qrcode: "🔣 QR Code Generator",
        mp3downloader: "🎧 MP3 Downloader",
        imageGenerator: "🎨 AI Image Generator",
        colorpalette: "🎨 Color Palette Extractor",
        jsbeautify: "✨ JavaScript Beautify & Minify"
    },
    // Hero section
    hero: {
        badge: "DevLab • Browser-based toolset",
        title1: "Convert, Optimize,",
        title2: "from a single hub.",
        description: "DevLab offers video, audio, image, and code tools",
        descriptionHighlight: "entirely in the browser",
        descriptionEnd: "no installation, no account – just open and use.",
        exploreTools: "Explore Tools",
        quickLinks: "Quick Links",
        allTools: "All Tools",
        jsonFormatter: "JSON/Lua Formatter",
        qrGenerator: "QR Code Generator",
        colorPalette: "Color Palette Extractor",
        featuredTool: "Featured Tool",
        videoTool: "Video Tool",
        devTool: "Dev Tool"
    },
    // Featured tools
    featuredTools: {
        mp4towebm: {
            title: "🎬 MP4 → WEBM Converter",
            desc: "Browser-based, quality-controlled video converter."
        },
        jsbeautify: {
            title: "✨ JavaScript Beautify & Minify",
            desc: "Instantly format or minimize JS code."
        }
    },
    // Middle section
    middle: {
        title: "Why DevLab?",
        description: "DevLab offers modern, browser-based tools for individual developers, designers, and productivity enthusiasts. Solutions designed to accelerate coding and design processes—no installation required.",
        features: {
            browserBased: "🔌 Browser-Based",
            fast: "⚡ Fast & Light",
            uiux: "🎨 UI/UX Friendly",
            productivity: "🚀 Productivity-Focused"
        }
    },
    // Last section
    last: {
        contribute: "Contribute",
        description: "DevLab is developed with an open-source spirit. Got any ideas?"
    },
    // Footer
    footer: {
        developedBy: "Developed by 💚 with"
    },
    // Tools page
    toolsPage: {
        title: "Tools Hub",
        description: "Browser-based media conversion tools.",
        noUpload: "No data is uploaded to any server."
    },
    // Tool descriptions
    toolDescriptions: {
        mp4towebm: "Browser-based format converter.",
        mp4tomp3: "Convert video to audio.",
        jpgtowebp: "Image optimization.",
        gifoptimize: "GIF compression.",
        mp3downloader: "Download MP3s from YouTube and other services.",
        cssglow: "Customizable CSS glow/orb generator.",
        formatter: "Paste your code and format it.",
        qrcode: "Create customizable QR codes.",
        colorpalette: "Extract dominant color palettes from images.",
        jsbeautify: "JavaScript formatting and minification.",
        imageGenerator: "Generate images from text prompts using AI."
    },
    // About page
    about: {
        title: "About",
        description: "DevLab is a fast and secure platform that performs media conversions directly in your browser. No files are uploaded to any server.",
        whyDevlab: {
            title: "🚀 Why DevLab?",
            desc: "Files are processed on-device, privacy is preserved, and performance is ultra fast."
        },
        technology: {
            title: "🛠 Technology",
            desc: "Built with Next.js, WebAssembly, FFmpeg, Tailwind CSS, and Framer Motion."
        },
        vision: {
            title: "🌍 Vision",
            desc: "Create simple, secure, and accessible media conversion tools for everyone."
        },
        developer: {
            title: "👤 Developer",
            desc: "Designed by Thendra, focused on modern UI and performance-oriented systems."
        },
        contact: "For more information or to get in touch:"
    },
    // Language names
    languages: {
        en: "English",
        tr: "Türkçe",
        de: "Deutsch",
        fr: "Français",
        es: "Español"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/tr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tr",
    ()=>tr
]);
const tr = {
    // Navbar
    navbar: {
        tools: "Araçlar",
        docs: "Dökümanlar",
        about: "Hakkında",
        searchPlaceholder: "Araç ara..."
    },
    // Tools list
    toolNames: {
        mp4towebm: "🎬 MP4 → WEBM",
        mp4tomp3: "🎧 MP4 → MP3",
        jpgtowebp: "📷 JPG → WEBP",
        gifoptimize: "🌀 GIF Optimize",
        cssglow: "🎨 Gradient Oluşturucu",
        formatter: "🧠 JSON + Lua Formatlayıcı",
        qrcode: "🔣 QR Kod Oluşturucu",
        mp3downloader: "🎧 MP3 İndirici",
        imageGenerator: "🎨 AI Görsel Oluşturucu",
        colorpalette: "🎨 Renk Paleti Çıkarıcı",
        jsbeautify: "✨ JavaScript Düzenleyici"
    },
    // Hero section
    hero: {
        badge: "DevLab • Tarayıcı tabanlı araç seti",
        title1: "Dönüştür, Optimize Et,",
        title2: "tek bir merkezden.",
        description: "DevLab video, ses, görsel ve kod araçları sunar",
        descriptionHighlight: "tamamen tarayıcıda",
        descriptionEnd: "kurulum yok, hesap yok – sadece aç ve kullan.",
        exploreTools: "Araçları Keşfet",
        quickLinks: "Hızlı Bağlantılar",
        allTools: "Tüm Araçlar",
        jsonFormatter: "JSON/Lua Formatlayıcı",
        qrGenerator: "QR Kod Oluşturucu",
        colorPalette: "Renk Paleti Çıkarıcı",
        featuredTool: "Öne Çıkan Araç",
        videoTool: "Video Aracı",
        devTool: "Geliştirici Aracı"
    },
    // Featured tools
    featuredTools: {
        mp4towebm: {
            title: "🎬 MP4 → WEBM Dönüştürücü",
            desc: "Tarayıcı tabanlı, kalite kontrollü video dönüştürücü."
        },
        jsbeautify: {
            title: "✨ JavaScript Düzenle & Küçült",
            desc: "Anında JS kodunu düzenle veya küçült."
        }
    },
    // Middle section
    middle: {
        title: "Neden DevLab?",
        description: "DevLab, bireysel geliştiriciler, tasarımcılar ve verimlilik tutkunları için modern, tarayıcı tabanlı araçlar sunar. Kodlama ve tasarım süreçlerini hızlandırmak için tasarlanmış çözümler—kurulum gerektirmez.",
        features: {
            browserBased: "🔌 Tarayıcı Tabanlı",
            fast: "⚡ Hızlı & Hafif",
            uiux: "🎨 UI/UX Dostu",
            productivity: "🚀 Verimlilik Odaklı"
        }
    },
    // Last section
    last: {
        contribute: "Katkıda Bulun",
        description: "DevLab açık kaynak ruhuyla geliştirildi. Bir fikriniz mi var?"
    },
    // Footer
    footer: {
        developedBy: "💚 ile geliştiren"
    },
    // Tools page
    toolsPage: {
        title: "Araç Merkezi",
        description: "Tarayıcı tabanlı medya dönüştürme araçları.",
        noUpload: "Hiçbir veri sunucuya yüklenmez."
    },
    // Tool descriptions
    toolDescriptions: {
        mp4towebm: "Tarayıcı tabanlı format dönüştürücü.",
        mp4tomp3: "Videoyu sese dönüştür.",
        jpgtowebp: "Görsel optimizasyonu.",
        gifoptimize: "GIF sıkıştırma.",
        mp3downloader: "YouTube ve diğer servislerden MP3 indir.",
        cssglow: "Özelleştirilebilir CSS glow/orb oluşturucu.",
        formatter: "Kodunuzu yapıştırın ve formatlayın.",
        qrcode: "Özelleştirilebilir QR kodları oluşturun.",
        colorpalette: "Görsellerden baskın renk paletlerini çıkar.",
        jsbeautify: "JavaScript formatlama ve küçültme.",
        imageGenerator: "AI kullanarak metin istemlerinden görsel oluştur."
    },
    // About page
    about: {
        title: "Hakkında",
        description: "DevLab, medya dönüşümlerini doğrudan tarayıcınızda gerçekleştiren hızlı ve güvenli bir platformdur. Hiçbir dosya herhangi bir sunucuya yüklenmez.",
        whyDevlab: {
            title: "🚀 Neden DevLab?",
            desc: "Dosyalar cihazda işlenir, gizlilik korunur ve performans ultra hızlıdır."
        },
        technology: {
            title: "🛠 Teknoloji",
            desc: "Next.js, WebAssembly, FFmpeg, Tailwind CSS ve Framer Motion ile oluşturuldu."
        },
        vision: {
            title: "🌍 Vizyon",
            desc: "Herkes için basit, güvenli ve erişilebilir medya dönüştürme araçları oluşturun."
        },
        developer: {
            title: "👤 Geliştirici",
            desc: "Modern UI ve performans odaklı sistemlere odaklanan Thendra tarafından tasarlandı."
        },
        contact: "Daha fazla bilgi veya iletişim için:"
    },
    // Language names
    languages: {
        en: "English",
        tr: "Türkçe",
        de: "Deutsch",
        fr: "Français",
        es: "Español"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/de.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "de",
    ()=>de
]);
const de = {
    // Navbar
    navbar: {
        tools: "Werkzeuge",
        docs: "Dokumentation",
        about: "Über uns",
        searchPlaceholder: "Werkzeuge suchen..."
    },
    // Tools list
    toolNames: {
        mp4towebm: "🎬 MP4 → WEBM",
        mp4tomp3: "🎧 MP4 → MP3",
        jpgtowebp: "📷 JPG → WEBP",
        gifoptimize: "🌀 GIF Optimieren",
        cssglow: "🎨 Gradient Generator",
        formatter: "🧠 JSON + Lua Formatter",
        qrcode: "🔣 QR-Code Generator",
        mp3downloader: "🎧 MP3 Downloader",
        imageGenerator: "🎨 AI Bildgenerator",
        colorpalette: "🎨 Farbpaletten-Extraktor",
        jsbeautify: "✨ JavaScript Beautify & Minify"
    },
    // Hero section
    hero: {
        badge: "DevLab • Browser-basiertes Toolset",
        title1: "Konvertieren, Optimieren,",
        title2: "von einem einzigen Hub.",
        description: "DevLab bietet Video-, Audio-, Bild- und Code-Tools",
        descriptionHighlight: "vollständig im Browser",
        descriptionEnd: "keine Installation, kein Konto – einfach öffnen und nutzen.",
        exploreTools: "Tools entdecken",
        quickLinks: "Schnellzugriff",
        allTools: "Alle Werkzeuge",
        jsonFormatter: "JSON/Lua Formatter",
        qrGenerator: "QR-Code Generator",
        colorPalette: "Farbpaletten-Extraktor",
        featuredTool: "Empfohlenes Tool",
        videoTool: "Video-Tool",
        devTool: "Entwickler-Tool"
    },
    // Featured tools
    featuredTools: {
        mp4towebm: {
            title: "🎬 MP4 → WEBM Konverter",
            desc: "Browser-basierter Videokonverter mit Qualitätskontrolle."
        },
        jsbeautify: {
            title: "✨ JavaScript Beautify & Minify",
            desc: "JS-Code sofort formatieren oder minimieren."
        }
    },
    // Middle section
    middle: {
        title: "Warum DevLab?",
        description: "DevLab bietet moderne, browser-basierte Tools für einzelne Entwickler, Designer und Produktivitäts-Enthusiasten. Lösungen zur Beschleunigung von Coding- und Design-Prozessen—keine Installation erforderlich.",
        features: {
            browserBased: "🔌 Browser-basiert",
            fast: "⚡ Schnell & Leicht",
            uiux: "🎨 UI/UX-freundlich",
            productivity: "🚀 Produktivitätsorientiert"
        }
    },
    // Last section
    last: {
        contribute: "Beitragen",
        description: "DevLab wird im Open-Source-Geist entwickelt. Haben Sie Ideen?"
    },
    // Footer
    footer: {
        developedBy: "Entwickelt mit 💚 von"
    },
    // Tools page
    toolsPage: {
        title: "Tool-Hub",
        description: "Browser-basierte Medienkonvertierungstools.",
        noUpload: "Es werden keine Daten auf einen Server hochgeladen."
    },
    // Tool descriptions
    toolDescriptions: {
        mp4towebm: "Browser-basierter Formatkonverter.",
        mp4tomp3: "Video in Audio konvertieren.",
        jpgtowebp: "Bildoptimierung.",
        gifoptimize: "GIF-Komprimierung.",
        mp3downloader: "MP3s von YouTube und anderen Diensten herunterladen.",
        cssglow: "Anpassbarer CSS Glow/Orb-Generator.",
        formatter: "Code einfügen und formatieren.",
        qrcode: "Anpassbare QR-Codes erstellen.",
        colorpalette: "Dominante Farbpaletten aus Bildern extrahieren.",
        jsbeautify: "JavaScript Formatierung und Minimierung.",
        imageGenerator: "Bilder aus Texteingaben mit AI generieren."
    },
    // About page
    about: {
        title: "Über uns",
        description: "DevLab ist eine schnelle und sichere Plattform, die Medienkonvertierungen direkt in Ihrem Browser durchführt. Keine Dateien werden auf einen Server hochgeladen.",
        whyDevlab: {
            title: "🚀 Warum DevLab?",
            desc: "Dateien werden auf dem Gerät verarbeitet, Privatsphäre wird gewahrt, und die Leistung ist ultraschnell."
        },
        technology: {
            title: "🛠 Technologie",
            desc: "Erstellt mit Next.js, WebAssembly, FFmpeg, Tailwind CSS und Framer Motion."
        },
        vision: {
            title: "🌍 Vision",
            desc: "Einfache, sichere und zugängliche Medienkonvertierungstools für alle erstellen."
        },
        developer: {
            title: "👤 Entwickler",
            desc: "Entworfen von Thendra, fokussiert auf modernes UI und leistungsorientierte Systeme."
        },
        contact: "Für weitere Informationen oder Kontakt:"
    },
    // Language names
    languages: {
        en: "English",
        tr: "Türkçe",
        de: "Deutsch",
        fr: "Français",
        es: "Español"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/fr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fr",
    ()=>fr
]);
const fr = {
    // Navbar
    navbar: {
        tools: "Outils",
        docs: "Documentation",
        about: "À propos",
        searchPlaceholder: "Rechercher des outils..."
    },
    // Tools list
    toolNames: {
        mp4towebm: "🎬 MP4 → WEBM",
        mp4tomp3: "🎧 MP4 → MP3",
        jpgtowebp: "📷 JPG → WEBP",
        gifoptimize: "🌀 Optimiser GIF",
        cssglow: "🎨 Générateur de Gradient",
        formatter: "🧠 Formateur JSON + Lua",
        qrcode: "🔣 Générateur de QR Code",
        mp3downloader: "🎧 Téléchargeur MP3",
        imageGenerator: "🎨 Générateur d'Images AI",
        colorpalette: "🎨 Extracteur de Palette",
        jsbeautify: "✨ JavaScript Beautify & Minify"
    },
    // Hero section
    hero: {
        badge: "DevLab • Outils basés sur navigateur",
        title1: "Convertir, Optimiser,",
        title2: "depuis un seul hub.",
        description: "DevLab propose des outils vidéo, audio, image et code",
        descriptionHighlight: "entièrement dans le navigateur",
        descriptionEnd: "pas d'installation, pas de compte – ouvrez et utilisez.",
        exploreTools: "Explorer les outils",
        quickLinks: "Liens rapides",
        allTools: "Tous les outils",
        jsonFormatter: "Formateur JSON/Lua",
        qrGenerator: "Générateur de QR Code",
        colorPalette: "Extracteur de Palette",
        featuredTool: "Outil vedette",
        videoTool: "Outil Vidéo",
        devTool: "Outil Dev"
    },
    // Featured tools
    featuredTools: {
        mp4towebm: {
            title: "🎬 Convertisseur MP4 → WEBM",
            desc: "Convertisseur vidéo basé sur navigateur avec contrôle qualité."
        },
        jsbeautify: {
            title: "✨ JavaScript Beautify & Minify",
            desc: "Formatez ou minimisez instantanément le code JS."
        }
    },
    // Middle section
    middle: {
        title: "Pourquoi DevLab?",
        description: "DevLab propose des outils modernes basés sur navigateur pour les développeurs individuels, designers et passionnés de productivité. Des solutions conçues pour accélérer les processus de codage et de design—aucune installation requise.",
        features: {
            browserBased: "🔌 Basé sur Navigateur",
            fast: "⚡ Rapide & Léger",
            uiux: "🎨 UI/UX Friendly",
            productivity: "🚀 Orienté Productivité"
        }
    },
    // Last section
    last: {
        contribute: "Contribuer",
        description: "DevLab est développé avec un esprit open-source. Avez-vous des idées?"
    },
    // Footer
    footer: {
        developedBy: "Développé avec 💚 par"
    },
    // Tools page
    toolsPage: {
        title: "Hub d'Outils",
        description: "Outils de conversion média basés sur navigateur.",
        noUpload: "Aucune donnée n'est téléchargée sur un serveur."
    },
    // Tool descriptions
    toolDescriptions: {
        mp4towebm: "Convertisseur de format basé sur navigateur.",
        mp4tomp3: "Convertir vidéo en audio.",
        jpgtowebp: "Optimisation d'image.",
        gifoptimize: "Compression GIF.",
        mp3downloader: "Télécharger des MP3 depuis YouTube et autres services.",
        cssglow: "Générateur CSS glow/orb personnalisable.",
        formatter: "Collez votre code et formatez-le.",
        qrcode: "Créez des QR codes personnalisables.",
        colorpalette: "Extraire les palettes de couleurs dominantes des images.",
        jsbeautify: "Formatage et minification JavaScript.",
        imageGenerator: "Générer des images à partir de prompts texte avec AI."
    },
    // About page
    about: {
        title: "À propos",
        description: "DevLab est une plateforme rapide et sécurisée qui effectue les conversions média directement dans votre navigateur. Aucun fichier n'est téléchargé sur un serveur.",
        whyDevlab: {
            title: "🚀 Pourquoi DevLab?",
            desc: "Les fichiers sont traités sur l'appareil, la confidentialité est préservée, et les performances sont ultra rapides."
        },
        technology: {
            title: "🛠 Technologie",
            desc: "Construit avec Next.js, WebAssembly, FFmpeg, Tailwind CSS et Framer Motion."
        },
        vision: {
            title: "🌍 Vision",
            desc: "Créer des outils de conversion média simples, sécurisés et accessibles pour tous."
        },
        developer: {
            title: "👤 Développeur",
            desc: "Conçu par Thendra, axé sur l'UI moderne et les systèmes orientés performance."
        },
        contact: "Pour plus d'informations ou pour nous contacter:"
    },
    // Language names
    languages: {
        en: "English",
        tr: "Türkçe",
        de: "Deutsch",
        fr: "Français",
        es: "Español"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/es.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "es",
    ()=>es
]);
const es = {
    // Navbar
    navbar: {
        tools: "Herramientas",
        docs: "Documentación",
        about: "Acerca de",
        searchPlaceholder: "Buscar herramientas..."
    },
    // Tools list
    toolNames: {
        mp4towebm: "🎬 MP4 → WEBM",
        mp4tomp3: "🎧 MP4 → MP3",
        jpgtowebp: "📷 JPG → WEBP",
        gifoptimize: "🌀 Optimizar GIF",
        cssglow: "🎨 Generador de Gradiente",
        formatter: "🧠 Formateador JSON + Lua",
        qrcode: "🔣 Generador de Código QR",
        mp3downloader: "🎧 Descargador de MP3",
        imageGenerator: "🎨 Generador de Imágenes AI",
        colorpalette: "🎨 Extractor de Paleta",
        jsbeautify: "✨ JavaScript Beautify & Minify"
    },
    // Hero section
    hero: {
        badge: "DevLab • Herramientas basadas en navegador",
        title1: "Convertir, Optimizar,",
        title2: "desde un solo hub.",
        description: "DevLab ofrece herramientas de video, audio, imagen y código",
        descriptionHighlight: "completamente en el navegador",
        descriptionEnd: "sin instalación, sin cuenta – solo abre y usa.",
        exploreTools: "Explorar Herramientas",
        quickLinks: "Enlaces Rápidos",
        allTools: "Todas las Herramientas",
        jsonFormatter: "Formateador JSON/Lua",
        qrGenerator: "Generador de Código QR",
        colorPalette: "Extractor de Paleta",
        featuredTool: "Herramienta Destacada",
        videoTool: "Herramienta de Video",
        devTool: "Herramienta Dev"
    },
    // Featured tools
    featuredTools: {
        mp4towebm: {
            title: "🎬 Convertidor MP4 → WEBM",
            desc: "Convertidor de video basado en navegador con control de calidad."
        },
        jsbeautify: {
            title: "✨ JavaScript Beautify & Minify",
            desc: "Formatea o minimiza código JS instantáneamente."
        }
    },
    // Middle section
    middle: {
        title: "¿Por qué DevLab?",
        description: "DevLab ofrece herramientas modernas basadas en navegador para desarrolladores individuales, diseñadores y entusiastas de la productividad. Soluciones diseñadas para acelerar los procesos de codificación y diseño—sin instalación requerida.",
        features: {
            browserBased: "🔌 Basado en Navegador",
            fast: "⚡ Rápido y Ligero",
            uiux: "🎨 UI/UX Amigable",
            productivity: "🚀 Enfocado en Productividad"
        }
    },
    // Last section
    last: {
        contribute: "Contribuir",
        description: "DevLab está desarrollado con espíritu open-source. ¿Tienes alguna idea?"
    },
    // Footer
    footer: {
        developedBy: "Desarrollado con 💚 por"
    },
    // Tools page
    toolsPage: {
        title: "Hub de Herramientas",
        description: "Herramientas de conversión de medios basadas en navegador.",
        noUpload: "No se suben datos a ningún servidor."
    },
    // Tool descriptions
    toolDescriptions: {
        mp4towebm: "Convertidor de formato basado en navegador.",
        mp4tomp3: "Convertir video a audio.",
        jpgtowebp: "Optimización de imagen.",
        gifoptimize: "Compresión GIF.",
        mp3downloader: "Descargar MP3s de YouTube y otros servicios.",
        cssglow: "Generador de CSS glow/orb personalizable.",
        formatter: "Pega tu código y formatéalo.",
        qrcode: "Crea códigos QR personalizables.",
        colorpalette: "Extrae paletas de colores dominantes de imágenes.",
        jsbeautify: "Formateo y minificación de JavaScript.",
        imageGenerator: "Genera imágenes a partir de prompts de texto con AI."
    },
    // About page
    about: {
        title: "Acerca de",
        description: "DevLab es una plataforma rápida y segura que realiza conversiones de medios directamente en tu navegador. No se suben archivos a ningún servidor.",
        whyDevlab: {
            title: "🚀 ¿Por qué DevLab?",
            desc: "Los archivos se procesan en el dispositivo, se preserva la privacidad y el rendimiento es ultra rápido."
        },
        technology: {
            title: "🛠 Tecnología",
            desc: "Construido con Next.js, WebAssembly, FFmpeg, Tailwind CSS y Framer Motion."
        },
        vision: {
            title: "🌍 Visión",
            desc: "Crear herramientas de conversión de medios simples, seguras y accesibles para todos."
        },
        developer: {
            title: "👤 Desarrollador",
            desc: "Diseñado por Thendra, enfocado en UI moderna y sistemas orientados al rendimiento."
        },
        contact: "Para más información o para contactar:"
    },
    // Language names
    languages: {
        en: "English",
        tr: "Türkçe",
        de: "Deutsch",
        fr: "Français",
        es: "Español"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$tr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/tr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$de$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/de.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$fr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/fr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/es.ts [app-client] (ecmascript)");
;
;
;
;
;
const translations = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"],
    tr: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$tr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"],
    de: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$de$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["de"],
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$fr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fr"],
    es: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$es$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const getNestedValue = (obj, path)=>{
    const keys = path.split('.');
    let current = obj;
    for (const key of keys){
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return path; // Return the key if not found
        }
    }
    return typeof current === 'string' ? current : path;
};
const getBrowserLanguage = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages = [
        'en',
        'tr',
        'de',
        'fr',
        'es'
    ];
    return supportedLanguages.includes(browserLang) ? browserLang : 'en';
};
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            setMounted(true);
            const savedLanguage = localStorage.getItem('devlab-language');
            if (savedLanguage && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][savedLanguage]) {
                setLanguageState(savedLanguage);
            } else {
                const browserLang = getBrowserLanguage();
                setLanguageState(browserLang);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLanguage]": (lang)=>{
            setLanguageState(lang);
            localStorage.setItem('devlab-language', lang);
        }
    }["LanguageProvider.useCallback[setLanguage]"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[t]": (key)=>{
            return getNestedValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language], key);
        }
    }["LanguageProvider.useCallback[t]"], [
        language
    ]);
    // Prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
            value: {
                language: 'en',
                setLanguage,
                t: (key)=>getNestedValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].en, key)
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/lib/LanguageContext.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/LanguageContext.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(LanguageProvider, "WFoDS0A/q7Z1l0O467NQMJvXPqE=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_634893c2._.js.map