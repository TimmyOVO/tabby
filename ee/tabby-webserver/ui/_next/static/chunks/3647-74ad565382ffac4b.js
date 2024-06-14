"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3647],{35646:function(e,t,n){n.d(t,{q:function(){return d}});let r=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,o=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(r);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},a=e=>"*"===e||"x"===e||"X"===e,l=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},i=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],s=(e,t)=>{if(a(e)||a(t))return 0;let[n,r]=i(l(e),l(t));return n>r?1:n<r?-1:0},u=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=s(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},c=(e,t)=>{let n=o(e),r=o(t),a=n.pop(),l=r.pop(),i=u(n,r);return 0!==i?i:a&&l?u(a.split("."),l.split(".")):a||l?a?-1:1:0},d=(e,t,n)=>{p(n);let r=c(e,t);return m[n].includes(r)},m={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},f=Object.keys(m),p=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===f.indexOf(e))throw Error(`Invalid operator, expected one of ${f.join("|")}`)}},28242:function(e,t,n){n.d(t,{F:function(){return u},f:function(){return c}});var r=n(3546);let o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:s},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:m="data-theme",value:b,children:g,nonce:y})=>{let[w,E]=(0,r.useState)(()=>p(s,c)),[C,T]=(0,r.useState)(()=>p(s)),S=b?Object.values(b):u,$=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let a=b?b[r]:r,i=t?h():null,s=document.documentElement;if("class"===m?(s.classList.remove(...S),a&&s.classList.add(a)):a?s.setAttribute(m,a):s.removeAttribute(m),l){let e=o.includes(c)?c:null,t=o.includes(r)?r:e;s.style.colorScheme=t}null==i||i()},[]),I=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),x=(0,r.useCallback)(t=>{let r=v(t);T(r),"system"===w&&n&&!e&&$("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&I(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[I]),(0,r.useEffect)(()=>{$(null!=e?e:w)},[e,w]);let k=(0,r.useMemo)(()=>({theme:w,setTheme:I,forcedTheme:e,resolvedTheme:"system"===w?C:w,themes:n?[...u,"system"]:u,systemTheme:n?C:void 0}),[w,I,e,C,n,u]);return r.createElement(i.Provider,{value:k},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:s,themes:u,defaultTheme:c,attribute:m,value:b,children:g,attrs:S,nonce:y}),g)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:s,value:u,attrs:c,nonce:d})=>{let m="system"===s,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=i?o.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let a=u?u[e]:e,l=t?e+"|| ''":`'${a}'`,s="";return i&&r&&!t&&o.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||a?`c.add(${l})`:"null":a&&(s+=`d[s](n,${l})`),s},v=e?`!function(){${f}${h(e)}}()`:l?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}${m?"":"else{"+h(s,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),p=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},17989:function(e,t,n){n.d(t,{Fw:function(){return E},VY:function(){return I},fC:function(){return S},p_:function(){return h},wy:function(){return y},xz:function(){return $}});var r=n(65122),o=n(3546),a=n(65727),l=n(47091),i=n(27250),s=n(65292),u=n(79869),c=n(72205),d=n(96497),m=n(29434);let f="Collapsible",[p,h]=(0,l.b)(f),[v,b]=p(f),g=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:a,defaultOpen:l,disabled:s,onOpenChange:u,...d}=e,[f=!1,p]=(0,i.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(v,{scope:n,disabled:s,contentId:(0,m.M)(),open:f,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":T(f),"data-disabled":s?"":void 0},d,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...l}=e,i=b("CollapsibleTrigger",n);return(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":T(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},l,{ref:t,onClick:(0,a.M)(e.onClick,i.onOpenToggle)}))}),w="CollapsibleContent",E=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,l=b(w,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||l.open},({present:e})=>(0,o.createElement)(C,(0,r.Z)({},a,{ref:t,present:e})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:a,children:l,...i}=e,d=b(w,n),[m,f]=(0,o.useState)(a),p=(0,o.useRef)(null),h=(0,u.e)(t,p),v=(0,o.useRef)(0),g=v.current,y=(0,o.useRef)(0),E=y.current,C=d.open||m,S=(0,o.useRef)(C),$=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.b)(()=>{let e=p.current;if(e){$.current=$.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,y.current=t.width,S.current||(e.style.transitionDuration=$.current.transitionDuration,e.style.animationName=$.current.animationName),f(a)}},[d.open,a]),(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":T(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C},i,{ref:h,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":E?`${E}px`:void 0,...e.style}}),C&&l)});function T(e){return e?"open":"closed"}let S=g,$=y,I=E},1333:function(e,t,n){n.d(t,{Pc:function(){return E},ck:function(){return F},fC:function(){return R}});var r=n(65122),o=n(3546),a=n(65727),l=n(85656),i=n(79869),s=n(47091),u=n(29434),c=n(72205),d=n(17957),m=n(27250),f=n(57541);let p="rovingFocusGroup.onEntryFocus",h={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[b,g,y]=(0,l.B)(v),[w,E]=(0,s.b)(v,[y]),[C,T]=w(v),S=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)($,(0,r.Z)({},e,{ref:t}))))),$=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:s=!1,dir:u,currentTabStopId:v,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:w,...E}=e,T=(0,o.useRef)(null),S=(0,i.e)(t,T),$=(0,f.gm)(u),[I=null,x]=(0,m.T)({prop:v,defaultProp:b,onChange:y}),[R,F]=(0,o.useState)(!1),_=(0,d.W)(w),M=g(n),A=(0,o.useRef)(!1),[D,L]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=T.current;if(e)return e.addEventListener(p,_),()=>e.removeEventListener(p,_)},[_]),(0,o.createElement)(C,{scope:n,orientation:l,dir:$,loop:s,currentTabStopId:I,onItemFocus:(0,o.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,o.useCallback)(()=>F(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>L(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>L(e=>e-1),[])},(0,o.createElement)(c.WV.div,(0,r.Z)({tabIndex:R||0===D?-1:0,"data-orientation":l},E,{ref:S,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!A.current;if(e.target===e.currentTarget&&t&&!R){let t=new CustomEvent(p,h);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=M().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===I),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);k(o)}}A.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>F(!1))})))}),I=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:l=!0,active:i=!1,tabStopId:s,...d}=e,m=(0,u.M)(),f=s||m,p=T("RovingFocusGroupItem",n),h=p.currentTabStopId===f,v=g(n),{onFocusableItemAdd:y,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(l)return y(),()=>w()},[l,y,w]),(0,o.createElement)(b.ItemSlot,{scope:n,id:f,focusable:l,active:i},(0,o.createElement)(c.WV.span,(0,r.Z)({tabIndex:h?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{l?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=v().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=p.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>k(a))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let R=S,F=I}}]);