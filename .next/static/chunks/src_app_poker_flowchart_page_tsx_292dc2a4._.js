(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/poker/flowchart/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThreeBetFlowchartPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
// ─── Color maps ───────────────────────────────────────────────────────────────
const HAND_STYLE = {
    'CPFS': 'bg-violet-900/50 text-violet-300 border border-violet-500/40',
    'Thick Value': 'bg-emerald-900/50 text-emerald-300 border border-emerald-500/40',
    'Thin Value': 'bg-green-900/50 text-green-300 border border-green-500/40',
    'Showdown Value': 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/40',
    'Combo Draw': 'bg-orange-900/50 text-orange-300 border border-orange-500/40',
    'High-Equity Draw': 'bg-amber-900/50 text-amber-300 border border-amber-500/40',
    'Low-Equity Draw': 'bg-amber-900/30 text-amber-500/70 border border-amber-500/20',
    'Draw': 'bg-amber-900/50 text-amber-300 border border-amber-500/40',
    'Air': 'bg-red-900/30 text-red-400 border border-red-500/30',
    'Bluff': 'bg-red-900/30 text-red-400 border border-red-500/30',
    'Value': 'bg-emerald-900/50 text-emerald-300 border border-emerald-500/40'
};
const ACTION_STYLE = {
    'Bet Big': 'bg-emerald-700 text-white',
    'Bet Small': 'bg-emerald-600/80 text-white',
    'Bet Medium': 'bg-emerald-500/80 text-white',
    'Bet Large': 'bg-emerald-800 text-white',
    'Check-Raise': 'bg-violet-700 text-white',
    'Check-Call': 'bg-blue-700 text-white',
    'Check-Fold': 'bg-red-700 text-white',
    'Check': 'bg-slate-600 text-white',
    'Lead / Donk': 'bg-teal-700 text-white',
    'C-Bet Small': 'bg-emerald-700 text-white'
};
const FilterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    position: null,
    board: null,
    handType: null
});
// ─── Shared components ────────────────────────────────────────────────────────
function HandBadge({ label }) {
    _s();
    const { handType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilterContext);
    const style = HAND_STYLE[label] ?? 'bg-slate-700 text-slate-300 border border-slate-600';
    const dimmed = handType !== null && handType !== label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-xs px-2 py-0.5 rounded-full font-medium transition-opacity duration-200 ${style} ${dimmed ? 'opacity-20' : ''}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(HandBadge, "Pl8ezIXV24eMihlkuRge/KHfoVU=");
_c = HandBadge;
function ActionBadge({ label }) {
    const style = ACTION_STYLE[label] ?? 'bg-slate-600 text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wide ${style}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c1 = ActionBadge;
function ResultBox({ rows, note }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 border border-slate-700/60 rounded-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-slate-800",
                children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 px-4 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 pt-0.5 w-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBadge, {
                                    label: row.action
                                }, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: row.hands.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HandBadge, {
                                        label: h
                                    }, h, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 bg-slate-800/50 border-t border-slate-700/60 text-xs text-slate-400 italic",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c2 = ResultBox;
function WhySection({ id, children }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors",
                children: [
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 104,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "Why?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-slate-400 leading-relaxed bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 space-y-1.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s1(WhySection, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c3 = WhySection;
function DecisionHeader({ question, factors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-amber-950/40 border border-amber-700/40 rounded-lg px-4 py-3 mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1",
                children: "Decision"
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-amber-200 font-semibold text-base",
                children: question
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            factors && factors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-xs text-amber-400/70 space-y-0.5",
                children: factors.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-600 mt-0.5",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: f
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c4 = DecisionHeader;
function BranchLabel({ label, color }) {
    const styles = {
        green: 'text-emerald-400 border-emerald-700/50',
        red: 'text-red-400 border-red-700/50',
        blue: 'text-blue-400 border-blue-700/50',
        orange: 'text-orange-400 border-orange-700/50',
        purple: 'text-violet-400 border-violet-700/50',
        teal: 'text-teal-400 border-teal-700/50'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-xs font-bold uppercase tracking-wide mb-3 pb-2 border-b ${styles[color]}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c5 = BranchLabel;
function SectionCard({ id, title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "mb-10 scroll-mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-500",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 156,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c6 = SectionCard;
// ─── OOP sections ─────────────────────────────────────────────────────────────
function OopFlop() {
    _s2();
    const { board } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilterContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "oop-flop",
        title: "OOP Flop",
        subtitle: "You 3-bet pre. Villain calls. You're first to act.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                question: "Is this spot likely to get stabbed if you check?",
                factors: [
                    'Wet board (two-tone or monotone, connected cards)',
                    'Dynamic board (many turn cards change the nuts)',
                    'Aggressive or loose villain',
                    'Your perceived range missed the board'
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-l-2 border-emerald-700/50 pl-4 transition-opacity duration-300 ${board === 'dry' ? 'opacity-20' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "YES — Check-heavy spot",
                                color: "green"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                rows: [
                                    {
                                        action: 'Check',
                                        hands: [
                                            'All hands'
                                        ]
                                    }
                                ],
                                note: "Check your entire range — value, draws, air, everything."
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                id: "oop-flop-yes-why",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Checking the whole range accomplishes several things at once:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "• Villain often ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-300",
                                                children: "over-stabs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 32
                                            }, this),
                                            " — they bet too many hands and make mistakes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "• Their bet size gives away information. A small stab on a scary board usually means a weak range; a big one means strength."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "• They under-protect their check-back range, so when they do check back, their range becomes weak and capped."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "• You avoid c-betting and getting floated with hands you're unsure about."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Let villain reveal information before you build a pot."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-l-2 border-slate-600 pl-4 transition-opacity duration-300 ${board === 'wet' ? 'opacity-20' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "NO — Static/dry board",
                                color: "teal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "Is SPR > 15?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "SPR ≤ 15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'CPFS',
                                                            'Thick Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'Thin Value',
                                                            'Showdown Value',
                                                            'Draw',
                                                            'Air'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "oop-flop-spr-low-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "With a lower SPR, you don't need a check-raise to get stacks in. You can just bet flop → bet turn → bet river."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Check-raising creates fold equity — but with thick value, you don't want villain to fold. You want calls from worse hands."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "A small bet on a dry board builds the pot cheaply while keeping villain's range wide."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "SPR > 15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Thick Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'CPFS',
                                                            'Thin Value',
                                                            'Showdown Value',
                                                            'Draw',
                                                            'Air'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "oop-flop-spr-high-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Very deep stacks change the calculus for thick value. TPTK on A-9-2 at 30× SPR is strong — but if you check-raise and get massive action, you may only get called by hands that beat you."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "CPFS hands (sets, two-pair, monster draws) benefit most from a check-raise deep because you can build a huge pot while still having position-exploitable leverage."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s2(OopFlop, "UcebEvAIqrxzXnYg0zpppRhJcWw=");
_c7 = OopFlop;
function OopFacingStab() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "oop-stab",
        title: "OOP Facing Villain's Stab",
        subtitle: "You checked flop. Villain bet.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                question: "How big did villain stab?",
                factors: [
                    'Absolute size matters — a $150 bet at $2/$5 signals more than a $25 bet, even if both are ~50% pot'
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-red-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "BIG stab",
                                color: "red"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                rows: [
                                    {
                                        action: 'Check-Raise',
                                        hands: [
                                            'CPFS',
                                            'Combo Draw'
                                        ]
                                    },
                                    {
                                        action: 'Check-Call',
                                        hands: [
                                            'Thick Value',
                                            'Thin Value',
                                            'High-Equity Draw'
                                        ]
                                    },
                                    {
                                        action: 'Check-Fold',
                                        hands: [
                                            'Showdown Value',
                                            'Air'
                                        ]
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                id: "oop-stab-big-why",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "A big bet signals a strong range — villain is rarely bluffing at full pot. Your fold equity is low."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Only raise hands that are comfortable continuing if called: true monsters and combo draws with 15+ outs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thick value just calls — raising may isolate you against only better hands."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Showdown value (pocket nines on a K-Q-J board) can fold. The big bet lets you off the hook cheaply."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-slate-600 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "SMALL stab",
                                color: "blue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "What type of board is it?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "Wet / Dynamic board"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Check-Raise',
                                                        hands: [
                                                            'CPFS',
                                                            'Combo Draw',
                                                            'Thick Value',
                                                            'High-Equity Draw',
                                                            'Low-Equity Draw'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check-Call',
                                                        hands: [
                                                            'Showdown Value'
                                                        ]
                                                    }
                                                ],
                                                note: "Attack aggressively — villain's small size on a scary board usually means a weak/capped range."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "oop-stab-small-wet-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "On a wet dynamic board, if villain had a strong hand they would typically bet bigger for protection and value."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "A small stab often means they're betting range or probing with a weak hand. Your fold equity is high."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "You can raise even thin value and some low-equity bluffs because the pot odds math works in your favor."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "Static / Dry board"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Check-Raise',
                                                        hands: [
                                                            'CPFS',
                                                            'Combo Draw'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check-Call',
                                                        hands: [
                                                            'Thick Value',
                                                            'Draw',
                                                            'Showdown Value'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "oop-stab-small-dry-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "On a static dry board, a small bet reveals less about villain's hand strength. They don't need to bet big because there aren't many threatening turn cards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Don't go crazy check-raising here. Stick to your clearest value raises and strongest draws. Call everything else."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_c8 = OopFacingStab;
function OopTurn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "oop-turn",
        title: "OOP Turn",
        subtitle: "You check-called flop. Villain bets turn again.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                question: "How big was villain's original flop stab?"
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-red-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "BIG flop stab → continues turn",
                                color: "red"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                rows: [
                                    {
                                        action: 'Check-Raise',
                                        hands: [
                                            'CPFS',
                                            'Combo Draw'
                                        ]
                                    },
                                    {
                                        action: 'Check-Call',
                                        hands: [
                                            'Thick Value',
                                            'High-Equity Draw'
                                        ]
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                id: "oop-turn-big-why",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Big flop bet + turn continuation = a strong, polarized range. Villain's not bluffing much here."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Your raises must be polarized: only hands that are genuinely happy getting all the chips in (sets, two-pair, nut draws with 12+ outs)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thick value just calls — raising risks isolating against hands that dominate you, especially deep."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "High-equity draws have enough equity to call but not enough fold equity to make a raise profitable."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-blue-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "SMALL flop stab → continues turn",
                                color: "blue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                rows: [
                                    {
                                        action: 'Lead / Donk',
                                        hands: [
                                            'CPFS',
                                            'Thick Value'
                                        ]
                                    },
                                    {
                                        action: 'Check-Raise',
                                        hands: [
                                            'Combo Draw'
                                        ]
                                    }
                                ],
                                note: "Villain under-double-barrels after small flop bets — lead made hands to capture value before they check back."
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                id: "oop-turn-small-why",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Villains who bet small on the flop often have a weak range and fail to follow through on the turn. If you check with a strong hand, you risk them checking back and giving you a free river with little pot growth."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-300",
                                                children: "Lead made hands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 16
                                            }, this),
                                            " (CPFS, thick value) to capture value from the hands that would have called a bet but would check behind."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-300",
                                                children: "Check-raise combo draws"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 16
                                            }, this),
                                            " — they benefit from fold equity. If villain checks back, you get a free river. If they bet, you apply maximum pressure."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
_c9 = OopTurn;
// ─── IP sections ──────────────────────────────────────────────────────────────
function IpFlop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "ip-flop",
        title: "IP Flop",
        subtitle: "You 3-bet pre. Villain calls. Villain checks to you.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-slate-700/60 rounded-lg p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1",
                        children: "Default Action"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-semibold text-base mb-4",
                        children: "C-bet your entire range for a small size (1/3 to 40% pot)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                        rows: [
                            {
                                action: 'C-Bet Small',
                                hands: [
                                    'All hands'
                                ]
                            }
                        ],
                        note: "Strong hands raise, weak hands call. Keep your range wide. Set up turn and river pressure."
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                id: "ip-flop-why",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "In 3-bet pots the pot is already large, so you don't need a big bet to accomplish your goals. A small size:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "• Makes ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-slate-300",
                                children: "strong villain hands raise"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 368,
                                columnNumber: 20
                            }, this),
                            ", telling you where you stand."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "• Keeps ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-slate-300",
                                children: "weak villain hands in"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 369,
                                columnNumber: 20
                            }, this),
                            ", giving them a chance to make mistakes on later streets."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "• ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-slate-300",
                                children: "Villain has fewer top-pair combos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 370,
                                columnNumber: 14
                            }, this),
                            " in 3-bet pots than single-raised pots — more pocket pairs (TT-QQ) that will fold by turn or river."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Villain often puts you on A-K, so ace-high boards are good for your perceived range."
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Even if villain occasionally traps, the lower SPR means it's far less catastrophic than in a single-raised pot."
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_c10 = IpFlop;
function IpTurn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "ip-turn",
        title: "IP Turn",
        subtitle: "You c-bet small flop. Villain called. Villain checks turn.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                question: "Is villain's range capped or uncapped?"
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-orange-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "UNCAPPED — villain can have strong hands",
                                color: "orange"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "Will villain fast-play strong hands if you bet?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "NO — villain will trap/call"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Big',
                                                        hands: [
                                                            'Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'Showdown Value',
                                                            'Bluff'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-turn-uncapped-no-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "If villain won't raise strong hands, you can't rely on them to build the pot for you. With value, you must put the money in yourself — bet big."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Don't bluff into an uncapped range that traps. Villain has too many hands that will call or raise you, making bluffs unprofitable."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "YES — villain will raise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Value',
                                                            'Bluff'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'Showdown Value'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-turn-uncapped-yes-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Small bets work beautifully when villain fast-plays strong hands:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "• With ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 27
                                                            }, this),
                                                            ": small bet keeps weak hands in, and strong villain hands raise for you — building the pot without risking extra chips."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "• With ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "bluffs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 27
                                                            }, this),
                                                            ": you risk less, weak hands call and may fold river, and strong villain hands reveal themselves by raising — you can release cheaply."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-violet-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "CAPPED — villain unlikely to have the nuts",
                                color: "purple"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "Does villain have inelastic hands?",
                                factors: [
                                    'Inelastic = will call even if you bet large (top pair, strong draws, flush draws, pair + draw)'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "YES — inelastic calling hands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Big',
                                                        hands: [
                                                            'Value',
                                                            'Bluff'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'Showdown Value'
                                                        ]
                                                    }
                                                ],
                                                note: "Plan river SPR carefully when sizing up with bluffs."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-turn-capped-yes-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Villain is capped and will call big bets anyway — extract maximum value."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "With bluffs, the capped range can't hold the nuts often, so large bets apply real pressure. But size with the river in mind — you want to preserve an SPR that lets you apply pressure on the river too."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "NO — elastic, mostly foldable hands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Value',
                                                            'Bluff'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Check',
                                                        hands: [
                                                            'Showdown Value'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-turn-capped-no-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "If villain's range is mostly elastic (folds to big bets), a large bet folds out all the value you're trying to extract."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Small bets keep weaker hands in for another street. Value and bluffs share the same turn plan — they diverge on the river. With value you want two streets of calls; with bluffs you want a call now then a fold on the river."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c11 = IpTurn;
function IpRiver() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
        id: "ip-river",
        title: "IP River",
        subtitle: "The same framework applies — villain's range determines your sizing.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                question: "Is villain's range capped or uncapped?"
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-orange-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "UNCAPPED — villain can have strong hands",
                                color: "orange"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "Will villain fast-play (raise) strong hands?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "YES — villain will raise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Bet Medium',
                                                        hands: [
                                                            'Bluff'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-river-uncapped-yes-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Small value bet:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Gets called by weak hands and induces raises from strong villain hands. You get max value either way."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Medium bluff:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 20
                                                            }, this),
                                                            " A small bluff gets called by everything, including strong hands that will raise. A huge bluff only gets called by the nuts. A medium size targets the one-pair hands you actually want to fold — top pair, second pair, weak pocket pairs."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "NO — villain will call/trap"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Big',
                                                        hands: [
                                                            'Value'
                                                        ]
                                                    }
                                                ],
                                                note: "With passive opponents, you must size up for value — they won't raise for you."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-river-uncapped-no-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "If villain is passive and won't raise strong hands, you cannot rely on check-inducing action. You need to build the pot yourself with value."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Be careful bluffing into passive uncapped ranges — villain will call with a wide range of medium-strength hands."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-2 border-violet-700/50 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchLabel, {
                                label: "CAPPED — villain unlikely to have the nuts",
                                color: "purple"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecisionHeader, {
                                question: "Does villain have inelastic hands (will call big bets)?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "YES — inelastic calling hands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Big',
                                                        hands: [
                                                            'Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Bluff'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-river-capped-yes-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Big value bet:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 20
                                                            }, this),
                                                            " If villain has top pair and won't fold, punish them with a large bet or jam. They're committed to calling."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Small bluff:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 20
                                                            }, this),
                                                            " The stubborn top-pair hands aren't folding to a large bluff anyway. Bluff small to fold out the ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: "bottom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 173
                                                            }, this),
                                                            " of their range — missed draws, weak pairs — not the inelastic hands."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide",
                                                children: "NO — elastic, foldable hands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultBox, {
                                                rows: [
                                                    {
                                                        action: 'Bet Small',
                                                        hands: [
                                                            'Value'
                                                        ]
                                                    },
                                                    {
                                                        action: 'Bet Large',
                                                        hands: [
                                                            'Bluff'
                                                        ]
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                                                id: "ip-river-capped-no-why",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "This is the key exploit: if villain's range is capped and elastic (folds to big bets):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Small value:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 20
                                                            }, this),
                                                            " Jamming for value makes worse hands fold. So you choose the largest size worse hands will still call."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-300",
                                                                children: "Large bluff:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 20
                                                            }, this),
                                                            " The exact same hands that would fold to a jam if you had value — top pair, second pair — are now the target of your bluff. Since you can't jam for value because they'd fold, your bluffs can jam for precisely that reason."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "This is a natural balance: your value and bluffs use opposite sizings, making you hard to exploit."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
_c12 = IpRiver;
// ─── Glossary ─────────────────────────────────────────────────────────────────
const GLOSSARY_TERMS = [
    {
        term: 'CPFS',
        def: 'Can Play For Stacks — a hand strong enough to be happy getting all the money in (sets, two-pair on a safe board, nut draws).'
    },
    {
        term: 'Thick Value',
        def: 'A strong made hand happy betting for value, but not always happy stacking off very deep (e.g., TPTK).'
    },
    {
        term: 'Thin Value',
        def: 'A hand that beats some of villain\'s range but not a dominant portion of it. Marginal value bet.'
    },
    {
        term: 'Showdown Value (SDV)',
        def: 'A medium-strength hand that can win at showdown but doesn\'t want to inflate the pot (e.g., middle pair, small pocket pair).'
    },
    {
        term: 'Combo Draw',
        def: 'A draw with many outs, typically a straight + flush draw or pair + strong draw (usually 12–15+ outs).'
    },
    {
        term: 'Inelastic Hand',
        def: 'A calling hand that will call regardless of bet size — top pair on a safe board, flush draws, etc. The call frequency doesn\'t drop much as the bet grows.'
    },
    {
        term: 'Capped Range',
        def: 'Opponent\'s range is unlikely to contain the strongest possible hands. Sets a ceiling on how strong they can be.'
    },
    {
        term: 'Uncapped Range',
        def: 'Opponent can still have very strong or nutted hands. No ceiling on their strength.'
    },
    {
        term: 'SPR',
        def: 'Stack-to-pot ratio — effective stack divided by pot. Lower SPR means stacks are in more naturally.'
    },
    {
        term: 'OOP / IP',
        def: 'Out of position / In position. OOP acts first on every post-flop street; IP acts last.'
    },
    {
        term: 'Wet / Dynamic Board',
        def: 'A board with many draws and cards that can significantly change the nuts on later streets (e.g., J♠ T♣ 8♦).'
    },
    {
        term: 'Static / Dry Board',
        def: 'A board with few draws where the nuts rarely change on later streets (e.g., A♠ 9♦ 2♣ rainbow).'
    },
    {
        term: 'Lead / Donk Bet',
        def: 'Betting into the pre-flop aggressor instead of checking to them. Often used OOP on the turn to deny free cards when villain\'s range is weak.'
    }
];
function Glossary() {
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "glossary",
        className: "mb-10 scroll-mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "flex items-center gap-2 text-lg font-bold text-white hover:text-slate-300 transition-colors",
                children: [
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-5 h-5 text-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 572,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-5 h-5 text-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 572,
                        columnNumber: 70
                    }, this),
                    "Key Terms"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-2",
                children: GLOSSARY_TERMS.map(({ term, def })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 border border-slate-800 rounded-lg px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-white mb-0.5",
                                children: term
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 579,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 leading-relaxed",
                                children: def
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 580,
                                columnNumber: 15
                            }, this)
                        ]
                    }, term, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 578,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 576,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 567,
        columnNumber: 5
    }, this);
}
_s3(Glossary, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c13 = Glossary;
// ─── Poker table view ─────────────────────────────────────────────────────────
const HAND_TYPES = [
    'Thick Value',
    'Thin Value',
    'Showdown Value',
    'Combo Draw',
    'Draw',
    'Air'
];
const SUIT_BG = {
    '♥': '#b91c1c',
    '♦': '#1d4ed8',
    '♣': '#374151',
    '♠': '#111827'
};
const EXAMPLE_FLOPS = {
    wet: [
        {
            rank: 'J',
            suit: '♥'
        },
        {
            rank: 'T',
            suit: '♥'
        },
        {
            rank: '9',
            suit: '♠'
        }
    ],
    dry: [
        {
            rank: 'A',
            suit: '♦'
        },
        {
            rank: '7',
            suit: '♣'
        },
        {
            rank: '2',
            suit: '♠'
        }
    ]
};
function GtoCard({ rank, suit, faceDown = false, small = false }) {
    const w = small ? 32 : 42;
    const h = small ? 44 : 56;
    const fontSize = small ? 14 : 20;
    if (faceDown) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: w,
                height: h,
                borderRadius: 5,
                background: 'linear-gradient(135deg, #1e3a5f 0%, #1e3a8a 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
            }
        }, void 0, false, {
            fileName: "[project]/src/app/poker/flowchart/page.tsx",
            lineNumber: 624,
            columnNumber: 7
        }, this);
    }
    const bg = suit ? SUIT_BG[suit] ?? '#374151' : '#374151';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: w,
            height: h,
            borderRadius: 5,
            background: bg,
            boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: '#fff',
                fontWeight: 900,
                fontSize,
                lineHeight: 1
            },
            children: rank
        }, void 0, false, {
            fileName: "[project]/src/app/poker/flowchart/page.tsx",
            lineNumber: 645,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 636,
        columnNumber: 5
    }, this);
}
_c14 = GtoCard;
function SeatBadge({ label, stack, active, color }) {
    const borderColor = active ? color === 'orange' ? '#f97316' : '#14b8a6' : 'rgba(255,255,255,0.12)';
    const bg = active ? color === 'orange' ? 'rgba(249,115,22,0.15)' : 'rgba(20,184,166,0.15)' : 'rgba(255,255,255,0.04)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: `2px solid ${borderColor}`,
            background: bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: active ? `0 0 12px ${borderColor}60` : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 11,
                    lineHeight: 1
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: 10,
                    lineHeight: 1.4
                },
                children: stack
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 661,
        columnNumber: 5
    }, this);
}
_c15 = SeatBadge;
function TableView({ filters, setFilters }) {
    const flop = filters.board ? EXAMPLE_FLOPS[filters.board] : null;
    // heads-up: BTN = IP (acts last postflop), BB = OOP
    const heroLabel = filters.position === 'ip' ? 'BTN' : filters.position === 'oop' ? 'BB' : 'Hero';
    const villainLabel = filters.position === 'ip' ? 'BB' : filters.position === 'oop' ? 'BTN' : 'Villain';
    function toggle(key, value) {
        setFilters((f)=>{
            const next = {
                ...f,
                [key]: f[key] === value ? null : value
            };
            if (key === 'position') next.board = null;
            if (key === 'position' || key === 'board') next.handType = null;
            return next;
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/5 mb-10",
        style: {
            background: '#0a0f1a'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto",
                style: {
                    width: 520,
                    height: 300,
                    maxWidth: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-8",
                        style: {
                            borderRadius: '50%',
                            border: '1.5px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.015)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatBadge, {
                                label: villainLabel,
                                stack: 50,
                                color: "orange"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 710,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GtoCard, {
                                        faceDown: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 712,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GtoCard, {
                                        faceDown: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 713,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 711,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.35)',
                                    fontSize: 11,
                                    fontWeight: 600
                                },
                                children: "9.2 bb"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: flop ? flop.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GtoCard, {
                                        rank: c.rank,
                                        suit: c.suit
                                    }, i, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this)) : [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 42,
                                            height: 56,
                                            borderRadius: 5,
                                            border: '1.5px dashed rgba(255,255,255,0.1)'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 725,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-10",
                        style: {
                            bottom: '32%',
                            right: '28%',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: '#fff',
                            border: '2px solid #64748b',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 9,
                                fontWeight: 900,
                                color: '#0f172a'
                            },
                            children: "D"
                        }, void 0, false, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GtoCard, {
                                        faceDown: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GtoCard, {
                                        faceDown: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatBadge, {
                                label: heroLabel,
                                stack: 50,
                                active: !!filters.position,
                                color: "teal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-t px-6 py-5",
                style: {
                    borderColor: 'rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500 w-24 shrink-0",
                                children: "Position"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 764,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    'oop',
                                    'ip'
                                ].map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle('position', pos),
                                        className: "px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-200",
                                        style: filters.position === pos ? {
                                            background: pos === 'oop' ? '#7f1d1d' : '#1e3a5f',
                                            color: pos === 'oop' ? '#fca5a5' : '#93c5fd',
                                            border: `1px solid ${pos === 'oop' ? '#dc2626' : '#2563eb'}`
                                        } : {
                                            background: 'rgba(255,255,255,0.04)',
                                            color: '#64748b',
                                            border: '1px solid rgba(255,255,255,0.08)'
                                        },
                                        children: pos.toUpperCase()
                                    }, pos, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 763,
                        columnNumber: 9
                    }, this),
                    filters.position && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500 w-24 shrink-0",
                                children: "Board"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 789,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    {
                                        value: 'wet',
                                        label: 'Wet / Dynamic'
                                    },
                                    {
                                        value: 'dry',
                                        label: 'Dry / Static'
                                    }
                                ].map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle('board', value),
                                        className: "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                                        style: filters.board === value ? {
                                            background: '#fff',
                                            color: '#0f172a',
                                            fontWeight: 700,
                                            border: '1px solid #fff'
                                        } : {
                                            background: 'rgba(255,255,255,0.04)',
                                            color: '#64748b',
                                            border: '1px solid rgba(255,255,255,0.08)'
                                        },
                                        children: label
                                    }, value, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 790,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 788,
                        columnNumber: 11
                    }, this),
                    filters.board && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500 w-24 shrink-0",
                                children: "Hand Type"
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 814,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: HAND_TYPES.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle('handType', h),
                                        className: "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
                                        style: filters.handType === h ? {
                                            background: '#fff',
                                            color: '#0f172a',
                                            fontWeight: 700,
                                            border: '1px solid #fff'
                                        } : {
                                            background: 'rgba(255,255,255,0.04)',
                                            color: '#64748b',
                                            border: '1px solid rgba(255,255,255,0.08)'
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 815,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                        lineNumber: 813,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 696,
        columnNumber: 5
    }, this);
}
_c16 = TableView;
// ─── Navigation ───────────────────────────────────────────────────────────────
const OOP_LINKS = [
    {
        href: '#oop-flop',
        label: 'OOP Flop'
    },
    {
        href: '#oop-stab',
        label: 'OOP vs Stab'
    },
    {
        href: '#oop-turn',
        label: 'OOP Turn'
    }
];
const IP_LINKS = [
    {
        href: '#ip-flop',
        label: 'IP Flop'
    },
    {
        href: '#ip-turn',
        label: 'IP Turn'
    },
    {
        href: '#ip-river',
        label: 'IP River'
    }
];
const NAV_LINKS = [
    ...OOP_LINKS,
    ...IP_LINKS
];
// ─── Left sidebar ─────────────────────────────────────────────────────────────
const LEGEND = [
    {
        color: 'bg-amber-700',
        label: 'Decision'
    },
    {
        color: 'bg-emerald-700',
        label: 'Bet / Lead'
    },
    {
        color: 'bg-violet-700',
        label: 'Check-Raise'
    },
    {
        color: 'bg-blue-700',
        label: 'Check-Call'
    },
    {
        color: 'bg-red-700',
        label: 'Check-Fold'
    },
    {
        color: 'bg-slate-600',
        label: 'Check'
    }
];
function LeftSidebar({ open, setOpen }) {
    _s4();
    const [glossaryOpen, setGlossaryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: [
                    'fixed left-0 top-0 h-screen z-30',
                    'w-72 bg-slate-900/95 backdrop-blur border-r border-slate-800',
                    'overflow-y-auto transition-transform duration-300',
                    open ? 'translate-x-0' : '-translate-x-full'
                ].join(' '),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: "3-Bet Pot Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 882,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-sm leading-relaxed",
                                    children: [
                                        "Complete decision flowchart for post-flop play in 3-bet pots. Click",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300 font-medium",
                                            children: "Why?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        " on any node to see the reasoning behind the recommendation."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 883,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 881,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3",
                                    children: "Color Legend"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 891,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: LEGEND.map(({ color, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-3 h-3 rounded-full shrink-0 ${color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 19
                                                }, this),
                                                label
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 890,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setGlossaryOpen((g)=>!g),
                                    className: "flex items-center gap-2 text-sm font-bold text-white hover:text-slate-300 transition-colors w-full",
                                    children: [
                                        glossaryOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 909,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 910,
                                            columnNumber: 19
                                        }, this),
                                        "Key Terms"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 13
                                }, this),
                                glossaryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-col gap-2",
                                    children: GLOSSARY_TERMS.map(({ term, def })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 border border-slate-700/60 rounded-lg px-3 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-white mb-0.5",
                                                    children: term
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-400 leading-relaxed",
                                                    children: def
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, term, true, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 914,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 903,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 879,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: [
                    'fixed top-1/2 -translate-y-1/2 z-30 h-16 w-7',
                    'bg-slate-800 border border-slate-700 flex items-center justify-center',
                    'text-slate-400 hover:text-white transition-all duration-300',
                    open ? 'left-72 rounded-r-lg border-l-0' : 'left-0 rounded-r-lg'
                ].join(' '),
                "aria-label": open ? 'Collapse sidebar' : 'Expand sidebar',
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 939,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 940,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 928,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(LeftSidebar, "0clOx13mKeBM5kquKQJtXPkcFOw=");
_c17 = LeftSidebar;
// ─── Right sidebar nav ────────────────────────────────────────────────────────
function SideNav({ activeId }) {
    const links = NAV_LINKS;
    const activeIndex = links.findIndex((l)=>l.href.slice(1) === activeId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden lg:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-40 items-end",
        children: links.map(({ href, label }, i)=>{
            const isActive = i === activeIndex;
            const isAdjacent = Math.abs(i - activeIndex) === 1;
            const gap = isActive ? 'mt-5 mb-5' : isAdjacent ? 'mt-2 mb-2' : 'mt-1 mb-1';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                className: [
                    'group flex items-center gap-2 justify-end transition-all duration-300',
                    gap,
                    isActive ? '' : 'opacity-25 hover:opacity-60'
                ].join(' '),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: [
                        'whitespace-nowrap transition-all duration-300',
                        isActive ? 'text-sm text-white font-semibold' : 'text-xs text-slate-400 group-hover:text-slate-200'
                    ].join(' '),
                    children: [
                        "— ",
                        label
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 973,
                    columnNumber: 13
                }, this)
            }, href, false, {
                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                lineNumber: 964,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 953,
        columnNumber: 5
    }, this);
}
_c18 = SideNav;
function ThreeBetFlowchartPage() {
    _s5();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('oop-flop');
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        position: null,
        board: null,
        handType: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBetFlowchartPage.useEffect": ()=>{
            const ids = NAV_LINKS.map({
                "ThreeBetFlowchartPage.useEffect.ids": (l)=>l.href.slice(1)
            }["ThreeBetFlowchartPage.useEffect.ids"]);
            const observers = [];
            ids.forEach({
                "ThreeBetFlowchartPage.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (!el) return;
                    const obs = new IntersectionObserver({
                        "ThreeBetFlowchartPage.useEffect": ([entry])=>{
                            if (entry.isIntersecting) setActiveId(id);
                        }
                    }["ThreeBetFlowchartPage.useEffect"], {
                        rootMargin: '-30% 0px -60% 0px',
                        threshold: 0
                    });
                    obs.observe(el);
                    observers.push(obs);
                }
            }["ThreeBetFlowchartPage.useEffect"]);
            return ({
                "ThreeBetFlowchartPage.useEffect": ()=>observers.forEach({
                        "ThreeBetFlowchartPage.useEffect": (o)=>o.disconnect()
                    }["ThreeBetFlowchartPage.useEffect"])
            })["ThreeBetFlowchartPage.useEffect"];
        }
    }["ThreeBetFlowchartPage.useEffect"], []);
    const oopDim = filters.position === 'ip';
    const ipDim = filters.position === 'oop';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterContext.Provider, {
        value: filters,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSidebar, {
                    open: sidebarOpen,
                    setOpen: setSidebarOpen
                }, void 0, false, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 1019,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideNav, {
                    activeId: activeId
                }, void 0, false, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 1020,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: [
                        'px-4 sm:px-6 py-10 transition-all duration-300',
                        sidebarOpen ? 'ml-72' : 'ml-0'
                    ].join(' '),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/poker",
                                className: "inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 13
                                    }, this),
                                    "Strategy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                lineNumber: 1029,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 1028,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableView, {
                            filters: filters,
                            setFilters: setFilters
                        }, void 0, false, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 1036,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-opacity duration-300 mb-12 ${oopDim ? 'opacity-20 pointer-events-none' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-bold text-slate-300 uppercase tracking-widest",
                                            children: "Out of Position"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1045,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OopFlop, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OopFacingStab, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1048,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OopTurn, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 1039,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-opacity duration-300 mb-12 ${ipDim ? 'opacity-20 pointer-events-none' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1055,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-bold text-slate-300 uppercase tracking-widest",
                                            children: "In Position"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1054,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpFlop, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpTurn, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1062,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpRiver, {}, void 0, false, {
                                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                                    lineNumber: 1063,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/poker/flowchart/page.tsx",
                            lineNumber: 1053,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/poker/flowchart/page.tsx",
                    lineNumber: 1022,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/poker/flowchart/page.tsx",
            lineNumber: 1018,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/poker/flowchart/page.tsx",
        lineNumber: 1017,
        columnNumber: 5
    }, this);
}
_s5(ThreeBetFlowchartPage, "r46VLoqeOtNu4AE8pSUE8NuInik=");
_c19 = ThreeBetFlowchartPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "HandBadge");
__turbopack_context__.k.register(_c1, "ActionBadge");
__turbopack_context__.k.register(_c2, "ResultBox");
__turbopack_context__.k.register(_c3, "WhySection");
__turbopack_context__.k.register(_c4, "DecisionHeader");
__turbopack_context__.k.register(_c5, "BranchLabel");
__turbopack_context__.k.register(_c6, "SectionCard");
__turbopack_context__.k.register(_c7, "OopFlop");
__turbopack_context__.k.register(_c8, "OopFacingStab");
__turbopack_context__.k.register(_c9, "OopTurn");
__turbopack_context__.k.register(_c10, "IpFlop");
__turbopack_context__.k.register(_c11, "IpTurn");
__turbopack_context__.k.register(_c12, "IpRiver");
__turbopack_context__.k.register(_c13, "Glossary");
__turbopack_context__.k.register(_c14, "GtoCard");
__turbopack_context__.k.register(_c15, "SeatBadge");
__turbopack_context__.k.register(_c16, "TableView");
__turbopack_context__.k.register(_c17, "LeftSidebar");
__turbopack_context__.k.register(_c18, "SideNav");
__turbopack_context__.k.register(_c19, "ThreeBetFlowchartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_poker_flowchart_page_tsx_292dc2a4._.js.map