(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["969fe4c3"],{f0cc8246:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.e(t,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return b;},default:function(){return S;}});var a=r("777fffbe"),l=r("852bbaa9"),n=r("f19d2b93"),d=l._(r("5b220c3d")),s=r("92a444f6"),i=r("2190d124"),o=r("c5e2d900"),c=r("a9d1a279"),u=r("9c86e52a"),h=r("40d543ed"),f=a._(r("098b7512")),m=a._(r("44bde013")),p=a._(r("714a8bde"));r("e0db49d0");let b="ANT_DESIGN_NOT_SHOW_BANNER";if("undefined"!=typeof window){let e=location.hash.slice(1);e.startsWith("components-")&&!document.querySelector(`#${e}`)&&(location.hash=`#${e.replace(/^components-/,"")}`);}let y=(e=[])=>e.map(e=>"dark"===e?c.theme.darkAlgorithm:"compact"===e?c.theme.compactAlgorithm:null).filter(Boolean);var S=()=>{let e=(0,u.useOutlet)(),[t,r]=(0,u.useSearchParams)(),[{theme:a=[],direction:l,isMobile:b,bannerVisible:S=!1},_]=(0,f.default)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),g="false"!==t.get("cssVar"),k=(0,d.useCallback)(e=>{_(t=>({...t,...e}));let a=t.toString(),l=t;Object.entries(e).forEach(([e,t])=>{if("direction"===e&&("rtl"===t?l.set("direction","rtl"):l.delete("direction")),"theme"===e){var r;l=(0,u.createSearchParams)({...l,theme:t.filter(e=>"light"!==e)}),null===(r=document.querySelector("html"))||void 0===r||r.setAttribute("data-prefers-color",t.includes("dark")?"dark":"light");}}),l.toString()!==a&&r(l);},[t,r]),v=()=>{k({isMobile:window.innerWidth<768});};(0,d.useEffect)(()=>{let e=t.getAll("theme");return _({theme:e,direction:"rtl"===t.get("direction")?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",e.includes("dark")?"dark":"light"),v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v);};},[]);let T=d.default.useMemo(()=>({direction:l,updateSiteConfig:k,theme:a,isMobile:b,bannerVisible:S}),[b,l,k,a,S]),x=d.default.useMemo(()=>({algorithm:y(a),token:{motion:!a.includes("motion-off")},cssVar:g,hashed:!g}),[a]),[N]=d.default.useState(()=>(0,s.createCache)());return(0,u.useServerInsertedHTML)(()=>{let e=(0,s.extractStyle)(N,{plain:!0,types:"style"});return(0,n.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:e}});}),(0,u.useServerInsertedHTML)(()=>{let e=(0,s.extractStyle)(N,{plain:!0,types:["cssVar","token"]});return(0,n.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:e}});}),(0,u.useServerInsertedHTML)(()=>(0,n.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,o.getSandpackCssText)()}})),(0,n.jsx)(h.DarkContext,{value:a.includes("dark"),children:(0,n.jsx)(s.StyleProvider,{cache:N,linters:[s.legacyNotSelectorLinter,s.parentSelectorLinter,s.NaNLinter],children:(0,n.jsx)(p.default,{value:T,children:(0,n.jsx)(m.default,{theme:x,children:(0,n.jsx)(i.HappyProvider,{disabled:!a.includes("happy-work"),children:(0,n.jsx)(c.App,{children:e})})})})})});};}}]);