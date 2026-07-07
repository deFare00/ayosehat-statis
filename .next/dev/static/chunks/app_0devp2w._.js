(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/NavMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const menuItems = [
    {
        label: "Tentang",
        icon: "/images/info-circle.svg",
        href: "/tentang",
        activePath: "/tentang"
    },
    {
        label: "Topik",
        icon: "/images/category.svg",
        href: "/topik",
        activePath: "/topik"
    },
    {
        label: "Siklus Hidup",
        icon: "/images/3-user.svg",
        href: "/#siklus-hidup"
    },
    {
        label: "Hidup Sehat",
        icon: "/images/heart.svg",
        href: "/#hidup-sehat"
    },
    {
        label: "Kampanye",
        icon: "/images/activity.svg",
        href: "/#kampanye"
    },
    {
        label: "Kegiatan",
        icon: "/images/calendar.svg",
        href: "/#kegiatan"
    },
    {
        label: "Download",
        icon: "/images/download.svg",
        href: "/#download"
    },
    {
        label: "Kemitraan",
        icon: "/images/Document.svg",
        href: "/#kemitraan"
    }
];
function NavMenu() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
    const renderMenuLinks = ()=>menuItems.map((item)=>{
            const isActive = item.activePath === pathname;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: isActive ? "active" : "",
                href: item.href,
                "aria-current": isActive ? "page" : undefined,
                onClick: ()=>setIsMenuOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "menu-icon",
                        src: item.icon,
                        alt: "",
                        width: 42,
                        height: 42,
                        sizes: "(max-width: 760px) 40px, 42px",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, item.label, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this);
        });
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
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mobile-menu-bars",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu desktop-menu",
                children: renderMenuLinks()
            }, void 0, false, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-backdrop${isMenuOpen ? " is-open" : ""}`,
                "aria-hidden": "true",
                onClick: ()=>setIsMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 62,
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
                                lineNumber: 69,
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
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/NavMenu.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu mobile-menu-list",
                        children: renderMenuLinks()
                    }, void 0, false, {
                        fileName: "[project]/app/NavMenu.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/NavMenu.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/NavMenu.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(NavMenu, "CzNffnDTivcGunCbOdL491U5+og=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavMenu;
var _c;
__turbopack_context__.k.register(_c, "NavMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/topik/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "topicsData",
    ()=>topicsData
]);
const topicsData = {
    A: [
        {
            name: "ADHD"
        },
        {
            name: "AIDS"
        },
        {
            name: "Akupunktur",
            isNew: true
        },
        {
            name: "Alergi"
        },
        {
            name: "Alergi Makanan"
        },
        {
            name: "Alergi Obat"
        },
        {
            name: "Alopesia"
        },
        {
            name: "Amandel"
        },
        {
            name: "Ambien"
        },
        {
            name: "Amnesia"
        },
        {
            name: "Anemia",
            isNew: true
        }
    ],
    B: [
        {
            name: "Batu Empedu"
        },
        {
            name: "Batu Ginjal"
        },
        {
            name: "Batuk Berdahak",
            isNew: true
        },
        {
            name: "Batuk"
        }
    ],
    C: [
        {
            name: "Cacar Air"
        },
        {
            name: "Campak"
        },
        {
            name: "Cantengan"
        },
        {
            name: "Cedera Kepala",
            isNew: true
        },
        {
            name: "Cedera Medula Spinalis"
        },
        {
            name: "Cedera Ligamen Lutut Anterior"
        }
    ],
    D: [
        {
            name: "Diabetes Melitus"
        },
        {
            name: "Diabetes Insipidus"
        },
        {
            name: "Demam Berdarah Dengue"
        },
        {
            name: "Dengue"
        },
        {
            name: "Demam",
            isNew: true
        },
        {
            name: "Depresi"
        },
        {
            name: "Dermatitis Atopik"
        },
        {
            name: "Dermatitis Kontak"
        },
        {
            name: "Dermatitis Seboroik"
        },
        {
            name: "Dermatitis Popok"
        },
        {
            name: "Dermatomiositis"
        },
        {
            name: "Disentri"
        },
        {
            name: "Disinfeksi dan Sterilisasi"
        },
        {
            name: "Dislokasi Bahu"
        },
        {
            name: "Dislokasi Mandibula"
        },
        {
            name: "Disleksia"
        }
    ],
    E: [
        {
            name: "Eksim"
        }
    ],
    F: [
        {
            name: "Fimosis"
        }
    ],
    G: [
        {
            name: "Gagal Ginjal"
        },
        {
            name: "Gagal Jantung"
        },
        {
            name: "Gangguan Bipolar",
            isNew: true
        },
        {
            name: "Gangguan Kecemasan"
        },
        {
            name: "Gangguan Kepribadian"
        }
    ],
    H: [
        {
            name: "Hepatitis"
        },
        {
            name: "Hipertensi"
        },
        {
            name: "Hipotermia",
            isNew: true
        },
        {
            name: "Hipotensi"
        },
        {
            name: "Human Papillomavirus"
        }
    ],
    I: [
        {
            name: "Iman",
            isNew: true
        },
        {
            name: "Impetigo"
        },
        {
            name: "Infertilitas"
        },
        {
            name: "Influenza"
        },
        {
            name: "Insomnia"
        }
    ],
    J: [
        {
            name: "Jantung Koroner"
        },
        {
            name: "Jerawat",
            isNew: true
        }
    ],
    K: [
        {
            name: "Kanker"
        },
        {
            name: "Kanker Darah (Leukemia)"
        },
        {
            name: "Kanker Serviks (Kanker Leher Rahim)"
        },
        {
            name: "Kanker Hati"
        },
        {
            name: "Kanker Otak"
        },
        {
            name: "Kanker Payudara"
        },
        {
            name: "Kanker Rahim (Endometrium)"
        },
        {
            name: "Kanker Lambung (Kanker Lambung)"
        },
        {
            name: "Kanker Kulit (Melanoma)"
        },
        {
            name: "Kanker Paru (Kanker Paru-Paru)"
        },
        {
            name: "Kanker Tenggorokan (Laring)"
        },
        {
            name: "Kanker Tulang (Osteosarkoma)"
        },
        {
            name: "Kanker Lidah"
        },
        {
            name: "Kanker Testis"
        },
        {
            name: "Kanker Tiroid"
        },
        {
            name: "Kanker Prostat (Kanker Prostat)",
            isNew: true
        },
        {
            name: "Kanker Pankreas"
        },
        {
            name: "Kanker Ginjal"
        },
        {
            name: "Kanker Kantung Kemih"
        },
        {
            name: "Kanker Esofagus"
        },
        {
            name: "Kanker Kolorektal (Usus Besar)"
        },
        {
            name: "Kanker Mulut (Rongga Mulut)",
            isNew: true
        },
        {
            name: "Kanker Mata (Retinoblastoma)"
        },
        {
            name: "Kanker Usus"
        },
        {
            name: "Kanker Kandung Empedu",
            isNew: true
        },
        {
            name: "Kanker Usus Halus"
        },
        {
            name: "Kanker Saluran Empedu"
        },
        {
            name: "Keloid"
        }
    ],
    L: [
        {
            name: "Laringitis"
        },
        {
            name: "Leukemia"
        },
        {
            name: "Limfoma"
        },
        {
            name: "Lupus",
            isNew: true
        }
    ],
    M: [
        {
            name: "Malaria"
        },
        {
            name: "Migrain",
            isNew: true
        },
        {
            name: "Meningitis"
        },
        {
            name: "Mata Silinder"
        },
        {
            name: "Mata Minus"
        }
    ],
    N: [
        {
            name: "Narkoba"
        },
        {
            name: "Nefritis"
        },
        {
            name: "Neuropati"
        },
        {
            name: "Nyeri Sendi"
        },
        {
            name: "Nyeri Punggung"
        }
    ],
    O: [
        {
            name: "Obesitas"
        },
        {
            name: "Osteoporosis"
        },
        {
            name: "Otitis Media"
        },
        {
            name: "Otitis Eksterna"
        },
        {
            name: "Osteoartritis"
        }
    ],
    P: [
        {
            name: "Panu"
        },
        {
            name: "Penyakit Cek Kesehatan Rutin"
        },
        {
            name: "Psoriasis"
        },
        {
            name: "Pterigium",
            isNew: true
        },
        {
            name: "Penyakit Jantung"
        },
        {
            name: "Penyakit Jantung Koroner"
        },
        {
            name: "Penyakit Jantung Bawaan"
        },
        {
            name: "Penyakit Paru Obstruktif Kronis (PPOK)"
        },
        {
            name: "Penyakit Menular Seksual (PMS)"
        },
        {
            name: "Penyakit Ginjal"
        },
        {
            name: "Penyakit Paru"
        },
        {
            name: "Penyakit Hati"
        },
        {
            name: "Penyakit Lambung"
        },
        {
            name: "Penyakit Tulang"
        },
        {
            name: "Penyakit Sendi"
        },
        {
            name: "Penyakit Otot"
        },
        {
            name: "Penyakit Kulit"
        },
        {
            name: "Penyakit Saraf"
        },
        {
            name: "Penyakit Telinga"
        },
        {
            name: "Penyakit Mata"
        },
        {
            name: "Penyakit Gigi dan Mulut"
        },
        {
            name: "Penyakit Pencernaan",
            isNew: true
        },
        {
            name: "Penyakit Pernapasan"
        },
        {
            name: "Penyakit Endokrin"
        },
        {
            name: "Penyakit Infeksi Tropis"
        },
        {
            name: "Penyakit Menular"
        },
        {
            name: "Penyakit Tidak Menular"
        },
        {
            name: "Penyakit Kanker"
        },
        {
            name: "Penyakit Imun"
        },
        {
            name: "Penyakit Darah"
        },
        {
            name: "Penyakit Saluran Kemih"
        }
    ],
    Q: [],
    R: [
        {
            name: "Rabies"
        },
        {
            name: "Radang Tenggorokan"
        },
        {
            name: "Rematik"
        },
        {
            name: "Rubela",
            isNew: true
        }
    ],
    S: [
        {
            name: "Sakit Kepala",
            isNew: true
        },
        {
            name: "Sakit Gigi"
        },
        {
            name: "Sakit Maag"
        },
        {
            name: "Sakit Pinggang"
        },
        {
            name: "Sakit Telinga"
        },
        {
            name: "Sarkoidosis"
        },
        {
            name: "Scabies"
        },
        {
            name: "Schizophrenia"
        },
        {
            name: "Sifilis"
        },
        {
            name: "Sinusitis"
        },
        {
            name: "Stroke",
            isNew: true
        },
        {
            name: "Selulitis"
        },
        {
            name: "Sembelit"
        },
        {
            name: "Sariawan"
        },
        {
            name: "Skleroderma"
        },
        {
            name: "Spina Bifida"
        },
        {
            name: "Spondilitis Ankilosa"
        },
        {
            name: "Spondilosis"
        },
        {
            name: "Sprain dan Strain"
        },
        {
            name: "Stenosis Spinal"
        },
        {
            name: "Stunting"
        },
        {
            name: "Sumbing Bibir"
        },
        {
            name: "Sindrom Lorong Karpal"
        },
        {
            name: "Sindrom Kaki Gelisah"
        },
        {
            name: "Sindrom Down"
        },
        {
            name: "Sindrom Iritasi Usus"
        },
        {
            name: "Sindrom Ovarium Polikistik (SOPK)",
            isNew: true
        },
        {
            name: "Sindrom Kelelahan Kronis"
        },
        {
            name: "Sindrom Kematian Bayi Mendadak"
        },
        {
            name: "Sindrom Nefrotik"
        },
        {
            name: "Sindrom Prader-Willi"
        },
        {
            name: "Sindrom Sjögren"
        },
        {
            name: "Sindrom Turner"
        },
        {
            name: "Sindrom Klinefelter"
        },
        {
            name: "Sindrom Asperger"
        },
        {
            name: "Sindrom Rett"
        },
        {
            name: "Sindrom Tourette"
        },
        {
            name: "Sindrom Guillain-Barre"
        },
        {
            name: "Sepsis"
        },
        {
            name: "Silikosis"
        },
        {
            name: "Sistitis"
        }
    ],
    T: [
        {
            name: "TBC"
        },
        {
            name: "Tifus"
        },
        {
            name: "Tinitus"
        },
        {
            name: "Tonsilitis"
        },
        {
            name: "Tetanus"
        },
        {
            name: "Trombositopenia"
        },
        {
            name: "Talasemia"
        },
        {
            name: "Tiroiditis"
        },
        {
            name: "Toksoplasmosis"
        },
        {
            name: "Tinea Pedis"
        },
        {
            name: "Tinea Capitis"
        },
        {
            name: "Tinea Corporis"
        },
        {
            name: "Tinea Versicolor"
        },
        {
            name: "Tremor"
        },
        {
            name: "Trikotilomania"
        },
        {
            name: "Tuberkulosis (TBC)"
        }
    ],
    U: [],
    V: [
        {
            name: "Varises",
            isNew: true
        },
        {
            name: "Vitiligo"
        }
    ],
    W: [
        {
            name: "Wabah"
        }
    ],
    X: [],
    Y: [],
    Z: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/topik/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopikPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$NavMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/NavMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$topik$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/topik/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const socialLinks = [
    {
        label: "Instagram",
        icon: "/images/instagram.svg"
    },
    {
        label: "Facebook",
        icon: "/images/facebook.svg"
    },
    {
        label: "YouTube",
        icon: "/images/youtube.svg"
    },
    {
        label: "X",
        icon: "/images/x.svg"
    }
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function TopikPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedLetter, setSelectedLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter topics based on search and letter
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TopikPage.useMemo[filteredData]": ()=>{
            const data = {};
            alphabet.forEach({
                "TopikPage.useMemo[filteredData]": (letter)=>{
                    const topics = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$topik$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topicsData"][letter] || [];
                    // If a letter filter is active, only process that letter
                    if (selectedLetter && letter !== selectedLetter) {
                        return;
                    }
                    // Filter topics by search query
                    const matchingTopics = topics.filter({
                        "TopikPage.useMemo[filteredData].matchingTopics": (topic)=>topic.name.toLowerCase().includes(searchQuery.toLowerCase())
                    }["TopikPage.useMemo[filteredData].matchingTopics"]);
                    // We include the letter in the filtered dataset if:
                    // 1. It is the selected letter (even if no topics match, so we show "Tidak Ada Topik")
                    // 2. Or, if there is no search query (show all letters initial state)
                    // 3. Or, if there is a search query and some topics match
                    if (selectedLetter === letter || searchQuery === "" || matchingTopics.length > 0) {
                        data[letter] = searchQuery === "" ? topics : matchingTopics;
                    }
                }
            }["TopikPage.useMemo[filteredData]"]);
            return data;
        }
    }["TopikPage.useMemo[filteredData]"], [
        searchQuery,
        selectedLetter
    ]);
    const handleLetterClick = (letter)=>{
        if (selectedLetter === letter) {
            setSelectedLetter(null); // Toggle off
        } else {
            setSelectedLetter(letter);
        }
    };
    const handleSearchChange = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleResetFilters = ()=>{
        setSearchQuery("");
        setSelectedLetter(null);
    };
    const hasResults = Object.keys(filteredData).length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "site-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-quick-links",
                        "aria-label": "Tautan cepat",
                        children: [
                            socialLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "social-link",
                                    href: "#kontak",
                                    "aria-label": item.label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.icon,
                                        alt: "",
                                        width: 16,
                                        height: 16,
                                        sizes: "16px",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topik/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "quick-text-link",
                                href: "#kontak",
                                children: "Kontak"
                            }, void 0, false, {
                                fileName: "[project]/app/topik/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "quick-text-link login-link",
                                href: "#login",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/Profile.svg",
                                        alt: "",
                                        width: 22,
                                        height: 22,
                                        sizes: "22px",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topik/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topik/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topik/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topik/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "navbar",
                        "aria-label": "Menu utama",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "brand nav-brand",
                                href: "/",
                                "aria-label": "Beranda Kemenkes Ayo Sehat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/kemenkes-ayosehat.png",
                                    alt: "Kemenkes Ayo Sehat",
                                    width: 220,
                                    height: 66,
                                    sizes: "(max-width: 760px) 170px, 220px",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topik/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$NavMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/topik/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topik/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topik/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "topik-banner",
                        "aria-labelledby": "topik-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container topik-banner-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    id: "topik-title",
                                    children: "Topik Kesehatan A-Z"
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "topik-subtitle",
                                    children: "Temukan berbagai informasi kesehatan secara lengkap dan terpercaya dengan mencarinya di bawah ini."
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "topik-filter-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "topik-search-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "search-icon",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topik/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topik/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/topik/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Cari Topik",
                                                    value: searchQuery,
                                                    onChange: handleSearchChange,
                                                    "aria-label": "Cari Topik Kesehatan"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "search-clear-btn",
                                                    onClick: ()=>setSearchQuery(""),
                                                    "aria-label": "Hapus pencarian",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "topik-alphabet-selector",
                                            role: "group",
                                            "aria-label": "Filter berdasarkan huruf pertama",
                                            children: alphabet.map((letter)=>{
                                                const isActive = selectedLetter === letter;
                                                const isAvailable = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$topik$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topicsData"][letter] && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$topik$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topicsData"][letter].length > 0;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `alphabet-btn ${isActive ? "active" : ""} ${!isAvailable ? "no-data" : ""}`,
                                                    onClick: ()=>handleLetterClick(letter),
                                                    "aria-pressed": isActive,
                                                    children: letter
                                                }, letter, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/topik/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "topik-content-section",
                        "aria-label": "Daftar Topik Kesehatan",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                (searchQuery || selectedLetter) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter-summary-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Menampilkan hasil untuk:",
                                                " ",
                                                selectedLetter ? `Huruf "${selectedLetter}"` : "",
                                                selectedLetter && searchQuery ? " & " : "",
                                                searchQuery ? `Pencarian "${searchQuery}"` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-reset-filters",
                                            onClick: handleResetFilters,
                                            children: "Reset Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                hasResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "topik-grid-layout",
                                    children: alphabet.filter((letter)=>filteredData[letter] !== undefined).map((letter, index)=>{
                                        const topics = filteredData[letter];
                                        const isLetterEmpty = topics.length === 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: `topik-card-item fade-in-up-anim`,
                                            style: {
                                                animationDelay: `${index % 9 * 60}ms`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "topik-card-letter",
                                                    children: letter
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 25
                                                }, this),
                                                isLetterEmpty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "no-topic-text",
                                                    children: "Tidak Ada Topik"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "topik-item-list",
                                                    children: topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/topik/${encodeURIComponent(topic.name.toLowerCase())}`,
                                                                className: "topik-item-link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "topic-name-txt",
                                                                        children: topic.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topik/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    topic.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "new-tag-pill",
                                                                        children: "Baru"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topik/page.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/topik/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, topic.name, false, {
                                                            fileName: "[project]/app/topik/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topik/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, letter, true, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "topik-empty-results",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Topik Tidak Ditemukan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Maaf, tidak ada topik kesehatan yang sesuai dengan kata kunci pencarian Anda."
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button primary",
                                            onClick: handleResetFilters,
                                            children: "Tampilkan Semua Topik"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/topik/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topik/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer about-footer",
                id: "kontak",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container footer-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "brand footer-brand",
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/kemenkes-ayosehat.png",
                                        alt: "Kemenkes Ayo Sehat",
                                        width: 220,
                                        height: 66,
                                        sizes: "220px"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topik/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Ayo Sehat"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 42
                                        }, this),
                                        "Kementerian Kesehatan Republik Indonesia"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Jakarta Selatan, DKI Jakarta"
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "footer-chat",
                                    href: "#kontak",
                                    children: "Chatbot WhatsApp Ayo Sehat"
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-social-title",
                                    children: "Media Sosial"
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-socials",
                                    "aria-label": "Media sosial",
                                    children: socialLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "footer-social-link",
                                            href: "#kontak",
                                            "aria-label": item.label,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.icon,
                                                alt: "",
                                                width: 24,
                                                height: 24,
                                                sizes: "24px",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topik/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/app/topik/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/topik/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                            title: "Program Unggulan",
                            items: [
                                "Pemeriksaan Kesehatan Gratis",
                                "1000 Hari Pertama Kehidupan",
                                "Perangkat Ajar Kesehatan"
                            ]
                        }, void 0, false, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                            title: "Kampanye Prioritas",
                            items: [
                                "Mudik Sehat",
                                "Program Inovasi Edukasi Kesehatan",
                                "Gerakan Aksi Bergizi",
                                "Liburan Sehat",
                                "Gerakan #AnakSehat"
                            ]
                        }, void 0, false, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterColumn, {
                            title: "Informasi",
                            items: [
                                "Kampanye Kesehatan",
                                "Kementerian Kesehatan",
                                "Sehat Negeriku"
                            ]
                        }, void 0, false, {
                            fileName: "[project]/app/topik/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/topik/page.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topik/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TopikPage, "L1pY2N5+3U/vl/F2H3m72GzJ3Yg=");
_c = TopikPage;
function FooterColumn({ title, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/topik/page.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/topik",
                    children: item
                }, item, false, {
                    fileName: "[project]/app/topik/page.tsx",
                    lineNumber: 243,
                    columnNumber: 28
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/topik/page.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_c1 = FooterColumn;
var _c, _c1;
__turbopack_context__.k.register(_c, "TopikPage");
__turbopack_context__.k.register(_c1, "FooterColumn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0devp2w._.js.map