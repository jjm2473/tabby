(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1929],{14454:function(e,t,n){Promise.resolve().then(n.bind(n,7931))},7931:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var l=n(36164),r=n(3546),s=n(42891),a=n.n(s),o=n(11978),i=n(23342),c=n(94755),u=n(47190),d=n.n(u),m=n(42450),p=n(36982),f=n(93668),y=n(11075),v=n(14439),h=n(57288),x=n(31458),w=n(81565),g=n(3236),E=n(73033);n(2596);var j=n(66794);let b=e=>d()(e).hsl().toString().replace(/hsla?\(/,"").replace(")","").split(",").slice(0,3).map((e,t)=>0===t?parseFloat(e).toFixed(1):e).join("");function k(){let[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!1),[u,d]=(0,r.useState)(null),[k,S]=(0,r.useState)(""),[N,C]=(0,r.useState)(),[K,R]=(0,r.useState)([]),[L,A]=(0,r.useState)(null),[I,W]=(0,r.useState)(null),[O,Z]=(0,r.useState)(!1),_=(0,r.useRef)(null),{width:F}=(0,c.iP)(),T=(0,r.useRef)(F),V=(0,r.useRef)(null),P=(0,o.useSearchParams)(),G=P.get("client"),Y=!!G||void 0,z=(0,r.useRef)(),[B,H]=(0,r.useState)(!1),[J,M]=(0,r.useState)(!1),[q,Q]=(0,r.useState)(!1),X=e=>{_.current?_.current.executeCommand(e):C(e)},D=e=>{if(_.current)_.current.addRelevantContext(e);else{let t=[...K];t.push(e),R(t)}},U=e=>{_.current?_.current.updateActiveSelection(e):e&&A(e)},$=(0,v.H)({init:e=>{_.current||(G&&(0,j.zr)(e.fetcherOptions),S((0,h.x0)()),d(e.fetcherOptions),z.current=e.useMacOSKeyboardEventHandler)},executeCommand:async e=>X(e),showError:e=>{W(e)},cleanError:()=>{W(null)},addRelevantContext:e=>D(e),updateTheme:(e,t)=>{let n=e.split(";").filter(e=>e).map(e=>{let[t,n]=e.split(":"),l=n.trim(),r=l.startsWith("#")||l.startsWith("rgb");if(!r)return"".concat(t,": ").concat(n);let s=b(l);return"".concat(t,": ").concat(s)}).join(";");document.documentElement.style.cssText=n,document.documentElement.className=t+" client client-".concat(G)},updateActiveSelection:e=>U(e)});(0,r.useEffect)(()=>{let e=()=>{setTimeout(()=>{var e;null===(e=V.current)||void 0===e||e.focus()},0)};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}),(0,r.useEffect)(()=>{let e=(e,t)=>{null==$||$.onKeyboardEvent(e,{code:t.code,isComposing:t.isComposing,key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey,location:t.location,repeat:t.repeat,keyCode:t.keyCode})},t=t=>{z.current?t.metaKey&&"KeyC"===t.code?document.execCommand("copy"):t.metaKey&&"KeyX"===t.code?document.execCommand("cut"):t.metaKey&&"KeyV"===t.code?document.execCommand("paste"):t.metaKey&&"KeyA"===t.code?document.execCommand("selectAll"):e("keydown",t):e("keydown",t)},n=t=>{e("keyup",t)},l=t=>{e("keypress",t)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),window.addEventListener("keypress",l),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n),window.removeEventListener("keypress",l)}},[$,G]),(0,r.useEffect)(()=>{if($){null==$||$.onLoaded({apiVersion:y.uL});let e=async()=>{null==$||$.hasCapability("onApplyInEditorV2").then(H),null==$||$.hasCapability("lookupSymbol").then(M),null==$||$.hasCapability("readWorkspaceGitRepositories").then(Q)};e().then(()=>{s(!0)})}},[$]),(0,r.useLayoutEffect)(()=>{if(e){if(F&&n&&u&&!I&&!T.current){var t;null===(t=_.current)||void 0===t||t.focus()}T.current=F}},[F,e]);let ee=()=>{R([]),C(void 0),A(null)},et=async e=>{var t;return null!==(t=null==$?void 0:$.openInEditor(e))&&void 0!==t&&t},en=async e=>null==$?void 0:$.openExternal(e),el=async()=>{var e;return null!==(e=null==$?void 0:$.getActiveEditorSelection())&&void 0!==e?e:null},er=async()=>{Z(!0),await (null==$?void 0:$.refresh()),Z(!1)};function es(e){let{children:t}=e;return(0,l.jsxs)("div",{className:"h-screen w-screen",style:{padding:"intellij"==G?"20px":"5px 18px"},children:[(0,l.jsxs)("div",{className:"flex items-center",style:{marginBottom:"0.55em"},children:[(0,l.jsx)(a(),{src:i.Z,alt:"logo",className:"rounded-full",style:{background:"rgb(232, 226, 210)",marginRight:"0.375em",padding:"0.15em"},width:18}),(0,l.jsx)("p",{className:"font-semibold",children:"Tabby"})]}),t]})}return I?(0,l.jsx)(es,{children:(0,l.jsxs)(l.Fragment,{children:[I.title&&(0,l.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:I.title}),(0,l.jsx)(E.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[p.Z,f.Z],children:I.content}),(0,l.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:er,children:[O&&(0,l.jsx)(w.IconSpinner,{}),"Refresh"]})]})}):n&&u?(0,l.jsx)(m.SV,{FallbackComponent:function(e){let{error:t}=e;return(0,l.jsxs)(es,{children:[(0,l.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:"Something went wrong"}),(0,l.jsx)("p",{children:t.message}),(0,l.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:er,children:[O&&(0,l.jsx)(w.IconSpinner,{}),"Refresh"]})]})},children:(0,l.jsx)(g.e,{chatId:k,ref:_,chatInputRef:V,onLoaded:()=>{let e=_.current;e&&(K.forEach(t=>{e.addRelevantContext(t)}),L&&e.updateActiveSelection(L),N&&e.executeCommand(N),ee(),t(!0))},maxWidth:"vscode"===G?"5xl":void 0,onCopyContent:Y&&(null==$?void 0:$.onCopy),onApplyInEditor:Y&&(B?null==$?void 0:$.onApplyInEditorV2:null==$?void 0:$.onApplyInEditor),supportsOnApplyInEditorV2:B,onLookupSymbol:Y&&(J?null==$?void 0:$.lookupSymbol:void 0),openInEditor:et,openExternal:en,readWorkspaceGitRepositories:q?null==$?void 0:$.readWorkspaceGitRepositories:void 0,getActiveEditorSelection:el},k)}):(0,l.jsx)(es,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"opacity-80",children:"Welcome to Tabby Chat! Just a moment while we get things ready..."}),(0,l.jsx)(w.IconSpinner,{className:"mx-auto",style:{marginTop:"1.25em",width:"0.875em",height:"0.875em"}})]})})}},6230:function(e,t,n){"use strict";var l=n(36164),r=n(3546),s=n(24449),a=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:o,children:i}=e,[c,u]=r.useState(!t),[d]=(0,s.n)(c,null!=o?o:200);return(r.useEffect(()=>{t||c||u(!0)},[t]),d)?i:n||(0,l.jsx)(a.cg,{})}},52569:function(e,t,n){"use strict";n.d(t,{SQ:function(){return E},Yt:function(){return g},nY:function(){return w}});var l=n(36164),r=n(3546),s=n(87782),a=n(21454),o=n(36327),i=n(98454),c=n(3765),u=n(57288),d=n(66612);let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(d.fC,{ref:t,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...r})});m.displayName=d.fC.displayName;let p=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(d.Ee,{ref:t,className:(0,u.cn)("aspect-square h-full w-full",n),...r})});p.displayName=d.Ee.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(d.NY,{ref:t,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...r})});f.displayName=d.NY.displayName;var y=n(3448),v=n(30410).lW;let h="not_found",x=new Set,w=e=>{x.delete(e),(0,a.JG)("/avatar/".concat(e))};function g(e){var t;let{user:n,className:a,fallback:i}=e,d=null==n?void 0:n.id,w=d?"/avatar/".concat(d):null,{data:g,isLoading:E,error:j}=(0,o.Z)(w,e=>{if(!(!d||x.has(d)))return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=v.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(h)}})}),b=r.useMemo(()=>{if(null==n?void 0:n.email)return(0,s.B)(n.email)},[null==n?void 0:n.email]);return E?(0,l.jsx)(y.O,{className:(0,u.cn)("h-16 w-16 rounded-full",a)}):((null==j?void 0:j.message)===h&&d&&x.add(d),g||b||!i)?!g&&b?(0,l.jsx)(s.Z,{className:(0,u.cn)("h-16 w-16",a),...b}):(0,l.jsxs)(m,{className:(0,u.cn)("h-16 w-16",a),children:[(0,l.jsx)(p,{src:g,alt:null==n?void 0:n.email,className:"object-cover"}),(0,l.jsx)(f,{children:null==n?void 0:null===(t=n.email)||void 0===t?void 0:t.substring(0,2)})]}):i}function E(e){let[{data:t}]=(0,i.P)();return(0,l.jsx)(g,{user:null==t?void 0:t.me,...e})}},2596:function(){}},function(e){e.O(0,[8415,3078,753,7430,55,7812,9643,4752,3449,2578,8511,4421,1454,7070,1002,6805,4546,9275,4405,5083,8300,1266,440,9427,2763,7288,1565,4656,3236,9002,3375,5289,1744],function(){return e(e.s=14454)}),_N_E=e.O()}]);