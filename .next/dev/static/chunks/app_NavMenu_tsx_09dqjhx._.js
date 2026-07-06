(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/NavMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const menuItems = [
    {
        label: "Tentang",
        icon: "/images/info-circle.svg",
        href: "#tentang"
    },
    {
        label: "Topik",
        icon: "/images/category.svg",
        href: "#topik"
    },
    {
        label: "Siklus Hidup",
        icon: "/images/3-user.svg",
        href: "#siklus-hidup"
    },
    {
        label: "Hidup Sehat",
        icon: "/images/heart.svg",
        href: "#hidup-sehat"
    },
    {
        label: "Kampanye",
        icon: "/images/activity.svg",
        href: "#kampanye"
    },
    {
        label: "Kegiatan",
        icon: "/images/calendar.svg",
        href: "#kegiatan"
    },
    {
        label: "Download",
        icon: "/images/download.svg",
        href: "#download"
    },
    {
        label: "Kemitraan",
        icon: "/images/Document.svg",
        href: "#kemitraan"
    }
];
function NavMenu() {
    _s();
    const [activeHref, setActiveHref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#tentang");
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavMenu.useEffect": ()=>{
            const updateActiveFromHash = {
                "NavMenu.useEffect.updateActiveFromHash": ()=>{
                    if (window.location.hash) {
                        setActiveHref(window.location.hash);
                    }
                }
            }["NavMenu.useEffect.updateActiveFromHash"];
            updateActiveFromHash();
            window.addEventListener("hashchange", updateActiveFromHash);
            return ({
                "NavMenu.useEffect": ()=>window.removeEventListener("hashchange", updateActiveFromHash)
            })["NavMenu.useEffect"];
        }
    }["NavMenu.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavMenu.useEffect": ()=>{
            document.body.classList.toggle("mobile-menu-open", isMenuOpen);
            return ({
                "NavMenu.useEffect": ()=>document.body.classList.remove("mobile-menu-open")
            })["NavMenu.useEffect"];
        }
    }["NavMenu.useEffect"], [
        isMenuOpen
    ]);
    const renderMenuLinks = ()=>menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: activeHref === item.href ? "active" : "",
                href: item.href,
                "aria-current": activeHref === item.href ? "page" : undefined,
                onClick: ()=>{
                    setActiveHref(item.href);
                    setIsMenuOpen(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "menu-icon",
                        src: item.icon,
                        alt: "",
                        width: 42,
                        height: 42,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, item.label, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nav-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mobile-menu-toggle",
                type: "button",
                "aria-label": "Buka menu navigasi",
                "aria-controls": "mobile-navigation",
                "aria-expanded": isMenuOpen,
                onClick: ()=>setIsMenuOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mobile-menu-bars",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu desktop-menu",
                children: renderMenuLinks()
            }, void 0, false, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-backdrop${isMenuOpen ? " is-open" : ""}`,
                "aria-hidden": "true",
                onClick: ()=>setIsMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-panel${isMenuOpen ? " is-open" : ""}`,
                id: "mobile-navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/app/NavMenu.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "mobile-menu-close",
                                "aria-label": "Tutup menu navigasi",
                                onClick: ()=>setIsMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/NavMenu.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/NavMenu.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu mobile-menu-list",
                        children: renderMenuLinks()
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/NavMenu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(NavMenu, "DelSBvKieBgALZy3nU34LMmdrvA=");
_c = NavMenu;
var _c;
__turbopack_context__.k.register(_c, "NavMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_NavMenu_tsx_09dqjhx._.js.map