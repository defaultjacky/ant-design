(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["41accd50"],{"0e87f648":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("079c9782");let{_InternalPanelDoNotUseOrYouWillBeFired:i}=l("a9d1a279").Tooltip;var r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{title:"Hello, Pink Pure Panel!",color:"pink"}),(0,n.jsx)(i,{title:"Hello, Customize Color Pure Panel!",color:"#f50"}),(0,n.jsx)(i,{title:"Hello, Pure Panel!",placement:"bottomLeft",style:{width:200}})]});},"14e7266c":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("7b7514e1");var i=l("a9d1a279"),r=()=>(0,n.jsx)(i.Tooltip,{title:"prompt text",children:(0,n.jsx)("span",{children:"Tooltip will show on mouse enter."})});},"19842d11":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("60854a5e");var i=l("5b220c3d"),r=l("a9d1a279"),o=()=>{let[e,t]=(0,i.useState)(!0);return(0,n.jsx)(r.Tooltip,{title:e?null:"prompt text",children:(0,n.jsx)(r.Button,{onClick:()=>t(!e),children:e?"Enable":"Disable"})});};},"38b5b8a9":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("7d83c005");var i=l("a9d1a279"),r=()=>(0,n.jsx)(i.Tooltip,{destroyTooltipOnHide:!0,title:"prompt text",children:(0,n.jsx)("span",{children:"Tooltip will destroy when hidden."})});},"39ce5cd1":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return a;}});var n=l("f19d2b93");l("427609ea");var i=l("a9d1a279");let r=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],o=["#f50","#2db7f5","#87d068","#108ee9"];var a=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Divider,{orientation:"left",children:"Presets"}),(0,n.jsx)(i.Space,{wrap:!0,children:r.map(e=>(0,n.jsx)(i.Tooltip,{title:"prompt text",color:e,children:(0,n.jsx)(i.Button,{children:e})},e))}),(0,n.jsx)(i.Divider,{orientation:"left",children:"Custom"}),(0,n.jsx)(i.Space,{wrap:!0,children:o.map(e=>(0,n.jsx)(i.Tooltip,{title:"prompt text",color:e,children:(0,n.jsx)(i.Button,{children:e})},e))})]});},"42b781bb":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("60525680");var i=l("a9d1a279");let r=e=>(0,n.jsx)("span",{...e,children:"This text is inside a component with the necessary events exposed."});var o=()=>(0,n.jsx)(i.Tooltip,{title:"prompt text",children:(0,n.jsx)(r,{})});},"74eaed0d":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return a;}});var n=l("f19d2b93");l("fc27aaa7");var i=l("5b220c3d"),r=l("a9d1a279");let o=(0,n.jsx)("span",{children:"prompt text"});var a=()=>{let[e,t]=(0,i.useState)("Show"),l=(0,i.useMemo)(()=>"Hide"!==e&&("Show"===e||{pointAtCenter:!0}),[e]);return(0,n.jsxs)(r.ConfigProvider,{button:{style:{width:80,margin:4}},children:[(0,n.jsx)(r.Segmented,{value:e,options:["Show","Hide","Center"],onChange:t,style:{marginBottom:24}}),(0,n.jsxs)(r.Flex,{vertical:!0,justify:"center",align:"center",className:"demo",children:[(0,n.jsxs)(r.Flex,{justify:"center",align:"center",style:{whiteSpace:"nowrap"},children:[(0,n.jsx)(r.Tooltip,{placement:"topLeft",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"TL"})}),(0,n.jsx)(r.Tooltip,{placement:"top",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"Top"})}),(0,n.jsx)(r.Tooltip,{placement:"topRight",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"TR"})})]}),(0,n.jsxs)(r.Flex,{style:{width:432},justify:"space-between",align:"center",children:[(0,n.jsxs)(r.Flex,{align:"center",vertical:!0,children:[(0,n.jsx)(r.Tooltip,{placement:"leftTop",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"LT"})}),(0,n.jsx)(r.Tooltip,{placement:"left",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"Left"})}),(0,n.jsx)(r.Tooltip,{placement:"leftBottom",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"LB"})})]}),(0,n.jsxs)(r.Flex,{align:"center",vertical:!0,children:[(0,n.jsx)(r.Tooltip,{placement:"rightTop",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"RT"})}),(0,n.jsx)(r.Tooltip,{placement:"right",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"Right"})}),(0,n.jsx)(r.Tooltip,{placement:"rightBottom",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"RB"})})]})]}),(0,n.jsxs)(r.Flex,{justify:"center",align:"center",style:{whiteSpace:"nowrap"},children:[(0,n.jsx)(r.Tooltip,{placement:"bottomLeft",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"BL"})}),(0,n.jsx)(r.Tooltip,{placement:"bottom",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"Bottom"})}),(0,n.jsx)(r.Tooltip,{placement:"bottomRight",title:o,arrow:l,children:(0,n.jsx)(r.Button,{children:"BR"})})]})]})]});};},"7774523a":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var n=l("777fffbe"),i=l("f19d2b93");l("67b8210d");var r=n._(l("5b220c3d")),o=l("a9d1a279"),a=n._(l("1164364c")),d=n._(l("23546486"));let s={cn:{root:"\u6839\u5143\u7D20 (\u5305\u542B\u7BAD\u5934\u3001\u5185\u5BB9\u5143\u7D20)",body:"\u5185\u5BB9\u5143\u7D20"},en:{root:"Root element (including arrows, content elements)",body:"Body element"}},c=e=>{let t=r.default.useRef(null);return(0,i.jsx)("div",{ref:t,style:{position:"absolute",marginTop:60},children:(0,i.jsx)(o.Tooltip,{title:"prompt text",open:!0,placement:"top",autoAdjustOverflow:!1,getPopupContainer:()=>t.current,...e})});};var u=()=>{let[e]=(0,d.default)(s);return(0,i.jsx)(a.default,{componentName:"Tooltip",semantics:[{name:"root",desc:e.root,version:"5.23.0"},{name:"body",desc:e.body,version:"5.23.0"}],children:(0,i.jsx)(c,{})});};},"8171aeea":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("3c463529");var i=l("a9d1a279");let r=e=>(0,n.jsx)(i.Tooltip,{title:"Thanks for using antd. Have a nice day !",...e});var o=()=>(0,n.jsxs)(i.Space,{children:[(0,n.jsx)(r,{children:(0,n.jsx)(i.Button,{disabled:!0,children:"Disabled"})}),(0,n.jsx)(r,{children:(0,n.jsx)(i.Input,{disabled:!0,placeholder:"disabled"})}),(0,n.jsx)(r,{children:(0,n.jsx)(i.InputNumber,{disabled:!0})}),(0,n.jsx)(r,{children:(0,n.jsx)(i.Checkbox,{disabled:!0})}),(0,n.jsx)(r,{children:(0,n.jsx)(i.Select,{disabled:!0})})]});},ad653ede:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("ae1ee3e7");var i=l("a9d1a279");let r=(0,n.jsx)("div",{});var o=()=>(0,n.jsxs)(i.Flex,{vertical:!0,gap:72,align:"flex-start",children:[(0,n.jsx)("span",{}),(0,n.jsx)(i.Tooltip,{open:!0,title:"Thanks for using antd. Have a nice day !",arrow:{pointAtCenter:!0},placement:"topLeft",children:(0,n.jsx)(i.Button,{children:"Point at center"})}),(0,n.jsx)(i.Tooltip,{open:!0,title:r,placement:"topLeft",children:(0,n.jsx)(i.Button,{children:"Min Width"})}),(0,n.jsx)(i.Tooltip,{open:!0,title:r,placement:"top",children:(0,n.jsx)(i.Button,{children:"Min Width"})})]});},c06af0a7:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=l("777fffbe"),i=l("f19d2b93");l("48147498");var r=n._(l("5b220c3d")),o=l("a9d1a279");let a={width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"};var d=()=>(r.default.useEffect(()=>{document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth;},[]),(0,i.jsx)("div",{style:a,children:(0,i.jsx)(o.Tooltip,{title:"Thanks for using antd. Have a nice day !",open:!0,children:(0,i.jsx)(o.Button,{type:"primary",children:"Scroll The Window"})})}));},fa3dcba2:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("362dfc85");var i=l("a9d1a279");let r=(0,n.jsx)("span",{children:"prompt text"});var o=()=>(0,n.jsx)(i.ConfigProvider,{button:{style:{width:80,margin:4}},children:(0,n.jsxs)(i.Flex,{vertical:!0,justify:"center",align:"center",className:"demo",children:[(0,n.jsxs)(i.Flex,{justify:"center",align:"center",style:{whiteSpace:"nowrap"},children:[(0,n.jsx)(i.Tooltip,{placement:"topLeft",title:r,children:(0,n.jsx)(i.Button,{children:"TL"})}),(0,n.jsx)(i.Tooltip,{placement:"top",title:r,children:(0,n.jsx)(i.Button,{children:"Top"})}),(0,n.jsx)(i.Tooltip,{placement:"topRight",title:r,children:(0,n.jsx)(i.Button,{children:"TR"})})]}),(0,n.jsxs)(i.Flex,{style:{width:432},justify:"space-between",align:"center",children:[(0,n.jsxs)(i.Flex,{align:"center",vertical:!0,children:[(0,n.jsx)(i.Tooltip,{placement:"leftTop",title:r,children:(0,n.jsx)(i.Button,{children:"LT"})}),(0,n.jsx)(i.Tooltip,{placement:"left",title:r,children:(0,n.jsx)(i.Button,{children:"Left"})}),(0,n.jsx)(i.Tooltip,{placement:"leftBottom",title:r,children:(0,n.jsx)(i.Button,{children:"LB"})})]}),(0,n.jsxs)(i.Flex,{align:"center",vertical:!0,children:[(0,n.jsx)(i.Tooltip,{placement:"rightTop",title:r,children:(0,n.jsx)(i.Button,{children:"RT"})}),(0,n.jsx)(i.Tooltip,{placement:"right",title:r,children:(0,n.jsx)(i.Button,{children:"Right"})}),(0,n.jsx)(i.Tooltip,{placement:"rightBottom",title:r,children:(0,n.jsx)(i.Button,{children:"RB"})})]})]}),(0,n.jsxs)(i.Flex,{justify:"center",align:"center",style:{whiteSpace:"nowrap"},children:[(0,n.jsx)(i.Tooltip,{placement:"bottomLeft",title:r,children:(0,n.jsx)(i.Button,{children:"BL"})}),(0,n.jsx)(i.Tooltip,{placement:"bottom",title:r,children:(0,n.jsx)(i.Button,{children:"Bottom"})}),(0,n.jsx)(i.Tooltip,{placement:"bottomRight",title:r,children:(0,n.jsx)(i.Button,{children:"BR"})})]})]})});},feab2a32:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=l("777fffbe"),i=l("f19d2b93");l("4cd328e2");var r=n._(l("5b220c3d")),o=l("a9d1a279");let a=r.default.forwardRef((e,t)=>(0,i.jsx)("div",{style:{overflow:"auto",position:"relative",padding:"24px",border:"1px solid #e9e9e9"},ref:t,children:(0,i.jsxs)("div",{style:{width:"200%",display:"flex",flexDirection:"column",alignItems:"center",rowGap:16},children:[(0,i.jsx)(o.Tooltip,{...e,placement:"left",title:"Prompt Text",children:(0,i.jsx)(o.Button,{children:"Adjust automatically / \u81EA\u52A8\u8C03\u6574"})}),(0,i.jsx)(o.Tooltip,{...e,placement:"left",title:"Prompt Text",autoAdjustOverflow:!1,children:(0,i.jsx)(o.Button,{children:"Ignore / \u4E0D\u5904\u7406"})})]})}));var d=()=>{let e=r.default.useRef(null),t=r.default.useRef(null);return r.default.useEffect(()=>{e.current.scrollLeft=.5*e.current.clientWidth,t.current.scrollLeft=.5*t.current.clientWidth;},[]),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,i.jsx)(o.Typography.Title,{level:5,children:"With `getPopupContainer`"}),(0,i.jsx)(a,{ref:e,getPopupContainer:e=>e.parentElement}),(0,i.jsx)(o.Typography.Title,{level:5,children:"Without `getPopupContainer`"}),(0,i.jsx)(a,{ref:t})]});};}}]);