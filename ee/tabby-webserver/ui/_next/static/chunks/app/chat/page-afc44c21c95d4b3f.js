(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1929],{14454:function(e,t,n){Promise.resolve().then(n.bind(n,7931))},7931:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var l=n(36164),r=n(3546),o=n(42891),s=n.n(o),a=n(11978),i=n(23342),c=n(94755),d=n(47190),u=n.n(d),m=n(42450),p=n(36982),f=n(93668),v=n(11075),y=n(14439),h=n(57288),x=n(31458),w=n(81565),S=n(14349),g=n(73033);n(2596);var E=n(66794);let j=e=>u()(e).hsl().toString().replace(/hsla?\(/,"").replace(")","").split(",").slice(0,3).map((e,t)=>0===t?parseFloat(e).toFixed(1):e).join("");function k(){let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),[d,u]=(0,r.useState)(null),[k,N]=(0,r.useState)(""),[b,C]=(0,r.useState)(),[K,R]=(0,r.useState)([]),[I,A]=(0,r.useState)(null),[L,F]=(0,r.useState)(null),[W,_]=(0,r.useState)(!1),O=(0,r.useRef)(null),{width:T}=(0,c.iP)(),V=(0,r.useRef)(T),Z=(0,r.useRef)(null),P=(0,a.useSearchParams)(),Y=P.get("client"),z=!!Y||void 0,B=(0,r.useRef)(),G=e=>{O.current?O.current.executeCommand(e):C(e)},H=e=>{if(O.current)O.current.addRelevantContext(e);else{let t=[...K];t.push(e),R(t)}},J=e=>{O.current?O.current.updateActiveSelection(e):e&&A(e)},M=(0,y.H)({init:e=>{O.current||(Y&&(0,E.zr)(e.fetcherOptions),N((0,h.x0)()),u(e.fetcherOptions),B.current=e.useMacOSKeyboardEventHandler)},executeCommand:async e=>G(e),showError:e=>{F(e)},cleanError:()=>{F(null)},addRelevantContext:e=>H(e),updateTheme:(e,t)=>{let n=e.split(";").filter(e=>e).map(e=>{let[t,n]=e.split(":"),l=n.trim(),r=l.startsWith("#")||l.startsWith("rgb");if(!r)return"".concat(t,": ").concat(n);let o=j(l);return"".concat(t,": ").concat(o)}).join(";");document.documentElement.style.cssText=n,document.documentElement.className=t+" client client-".concat(Y)},updateActiveSelection:e=>J(e)});(0,r.useEffect)(()=>{let e=()=>{setTimeout(()=>{var e;null===(e=Z.current)||void 0===e||e.focus()},0)};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}),(0,r.useEffect)(()=>{let e=(e,t)=>{null==M||M.onKeyboardEvent(e,{code:t.code,isComposing:t.isComposing,key:t.key,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey,location:t.location,repeat:t.repeat,keyCode:t.keyCode})},t=t=>{B.current?t.metaKey&&"KeyC"===t.code?document.execCommand("copy"):t.metaKey&&"KeyX"===t.code?document.execCommand("cut"):t.metaKey&&"KeyV"===t.code?document.execCommand("paste"):t.metaKey&&"KeyA"===t.code?document.execCommand("selectAll"):e("keydown",t):e("keydown",t)},n=t=>{e("keyup",t)},l=t=>{e("keypress",t)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),window.addEventListener("keypress",l),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n),window.removeEventListener("keypress",l)}},[M,Y]),(0,r.useEffect)(()=>{M&&(null==M||M.onLoaded({apiVersion:v.uL}),o(!0))},[M]),(0,r.useLayoutEffect)(()=>{if(e){if(T&&n&&d&&!L&&!V.current){var t;null===(t=O.current)||void 0===t||t.focus()}V.current=T}},[T,e]);let q=()=>{R([]),C(void 0),A(null)},D=async e=>{var t;return null!==(t=null==M?void 0:M.openInEditor(e))&&void 0!==t&&t},Q=async e=>null==M?void 0:M.openExternal(e),X=async()=>{var e;return null!==(e=null==M?void 0:M.getActiveEditorSelection())&&void 0!==e?e:null},U=async()=>{var e,t;return null!==(t=null==M?void 0:null===(e=M.fetchSessionState)||void 0===e?void 0:e.call(M))&&void 0!==t?t:null},$=async e=>{var t;return null==M?void 0:null===(t=M.storeSessionState)||void 0===t?void 0:t.call(M,e)},ee=async()=>{_(!0),await (null==M?void 0:M.refresh()),_(!1)};function et(e){let{children:t}=e;return(0,l.jsxs)("div",{className:"h-screen w-screen",style:{padding:"intellij"==Y?"20px":"5px 18px"},children:[(0,l.jsxs)("div",{className:"flex items-center",style:{marginBottom:"0.55em"},children:[(0,l.jsx)(s(),{src:i.Z,alt:"logo",className:"rounded-full",style:{background:"rgb(232, 226, 210)",marginRight:"0.375em",padding:"0.15em"},width:18}),(0,l.jsx)("p",{className:"font-semibold",children:"Tabby"})]}),t]})}if(L)return(0,l.jsx)(et,{children:(0,l.jsxs)(l.Fragment,{children:[L.title&&(0,l.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:L.title}),(0,l.jsx)(g.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[p.Z,f.Z],children:L.content}),(0,l.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:ee,children:[W&&(0,l.jsx)(w.IconSpinner,{}),"Refresh"]})]})});if(!n||!d)return(0,l.jsx)(et,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"opacity-80",children:"Welcome to Tabby Chat! Just a moment while we get things ready..."}),(0,l.jsx)(w.IconSpinner,{className:"mx-auto",style:{marginTop:"1.25em",width:"0.875em",height:"0.875em"}})]})});let en=(null==M?void 0:M.storeSessionState)&&(null==M?void 0:M.fetchSessionState);return(0,l.jsx)(m.SV,{FallbackComponent:function(e){let{error:t}=e;return(0,l.jsxs)(et,{children:[(0,l.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:"Something went wrong"}),(0,l.jsx)("p",{children:t.message}),(0,l.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:ee,children:[W&&(0,l.jsx)(w.IconSpinner,{}),"Refresh"]})]})},children:(0,l.jsx)(S.e,{chatId:k,ref:O,chatInputRef:Z,onLoaded:()=>{let e=O.current;e&&(K.forEach(t=>{e.addRelevantContext(t)}),I&&e.updateActiveSelection(I),b&&e.executeCommand(b),q(),t(!0))},maxWidth:"vscode"===Y?"5xl":void 0,onCopyContent:z&&(null==M?void 0:M.onCopy),onApplyInEditor:z&&((null==M?void 0:M.onApplyInEditorV2)?null==M?void 0:M.onApplyInEditorV2:null==M?void 0:M.onApplyInEditor),supportsOnApplyInEditorV2:!!(null==M?void 0:M.onApplyInEditorV2),onLookupSymbol:z&&(null==M?void 0:M.lookupSymbol),openInEditor:D,openExternal:Q,readWorkspaceGitRepositories:null==M?void 0:M.readWorkspaceGitRepositories,getActiveEditorSelection:X,fetchSessionState:en?U:void 0,storeSessionState:en?$:void 0,listFileInWorkspace:z&&(null==M?void 0:M.listFileInWorkspace),readFileContent:z&&(null==M?void 0:M.readFileContent)},k)})}},6230:function(e,t,n){"use strict";var l=n(36164),r=n(3546),o=n(24449),s=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:a,children:i}=e,[c,d]=r.useState(!t),[u]=(0,o.n)(c,null!=a?a:200);return(r.useEffect(()=>{t||c||d(!0)},[t]),u)?i:n||(0,l.jsx)(s.cg,{})}},73033:function(e,t,n){"use strict";n.d(t,{s:function(){return s}});var l=n(36164),r=n(3546),o=n(52991);let s=(0,r.memo)(e=>(0,l.jsx)(o.D,{linkTarget:"_blank",...e}),(e,t)=>e.children===t.children&&e.className===t.className)},52569:function(e,t,n){"use strict";n.d(t,{SQ:function(){return g},Yt:function(){return S},nY:function(){return w}});var l=n(36164),r=n(3546),o=n(87782),s=n(21454),a=n(36327),i=n(98454),c=n(3765),d=n(57288),u=n(66612);let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(u.fC,{ref:t,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...r})});m.displayName=u.fC.displayName;let p=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(u.Ee,{ref:t,className:(0,d.cn)("aspect-square h-full w-full",n),...r})});p.displayName=u.Ee.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,l.jsx)(u.NY,{ref:t,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...r})});f.displayName=u.NY.displayName;var v=n(3448),y=n(30410).lW;let h="not_found",x=new Set,w=e=>{x.delete(e),(0,s.JG)("/avatar/".concat(e))};function S(e){var t;let{user:n,className:s,fallback:i}=e,u=null==n?void 0:n.id,w=u?"/avatar/".concat(u):null,{data:S,isLoading:g,error:E}=(0,a.Z)(w,e=>{if(!(!u||x.has(u)))return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=y.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(h)}})}),j=r.useMemo(()=>{if(null==n?void 0:n.email)return(0,o.B)(n.email)},[null==n?void 0:n.email]);return g?(0,l.jsx)(v.O,{className:(0,d.cn)("h-16 w-16 rounded-full",s)}):((null==E?void 0:E.message)===h&&u&&x.add(u),S||j||!i)?!S&&j?(0,l.jsx)(o.Z,{className:(0,d.cn)("h-16 w-16",s),...j}):(0,l.jsxs)(m,{className:(0,d.cn)("h-16 w-16",s),children:[(0,l.jsx)(p,{src:S,alt:null==n?void 0:n.email,className:"object-cover"}),(0,l.jsx)(f,{children:null==n?void 0:null===(t=n.email)||void 0===t?void 0:t.substring(0,2)})]}):i}function g(e){let[{data:t}]=(0,i.P)();return(0,l.jsx)(S,{user:null==t?void 0:t.me,...e})}},2596:function(){}},function(e){e.O(0,[8415,4648,6527,7430,55,7176,340,2546,1283,3449,2578,8511,4421,7070,1454,1002,4546,6805,9275,4405,2991,3781,5738,2812,9440,4545,7288,1565,4656,4349,4170,3375,5289,1744],function(){return e(e.s=14454)}),_N_E=e.O()}]);