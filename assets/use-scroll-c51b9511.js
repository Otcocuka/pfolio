import{u as S,a as g,M as k,i as P,b as T,c as C,f as p,d as x,e as R,p as N,v as X,g as Y,h as D,w as G}from"./motion-0c17eb80.js";import{r as y}from"./index-2eb6ce6c.js";function _(e){const t=S(()=>g(e)),{isStatic:o}=y.useContext(k);if(o){const[,n]=y.useState(e);y.useEffect(()=>t.on("change",n),[])}return t}const q=e=>typeof e=="object"&&e.mix,F=e=>q(e)?e.mix:void 0;function j(...e){const t=!Array.isArray(e[0]),o=t?0:-1,n=e[0+o],s=e[1+o],r=e[2+o],i=e[3+o],l=P(s,r,{mixer:F(r[0]),...i});return t?l(n):l}function I(e,t){const o=_(t()),n=()=>o.set(t());return n(),T(()=>{const s=()=>p.update(n,!1,!0),r=e.map(i=>i.on("change",s));return()=>{r.forEach(i=>i()),C(n)}}),o}function J(e){x.current=[],e();const t=I(x.current,e);return x.current=void 0,t}function xe(e,t,o,n){if(typeof e=="function")return J(e);const s=typeof t=="function"?t:j(t,o,n);return Array.isArray(e)?W(e,s):W([e],([r])=>s(r))}function W(e,t){const o=S(()=>[]);return I(e,()=>{o.length=0;const n=e.length;for(let s=0;s<n;s++)o[s]=e[s].get();return t(o)})}function U(e,t,o){var n;if(typeof e=="string"){let s=document;t&&(R(!!t.current),s=t.current),o?((n=o[e])!==null&&n!==void 0||(o[e]=s.querySelectorAll(e)),e=o[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const m=new WeakMap;let d;function $(e,t){if(t){const{inlineSize:o,blockSize:n}=t[0];return{width:o,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function K({target:e,contentRect:t,borderBoxSize:o}){var n;(n=m.get(e))===null||n===void 0||n.forEach(s=>{s({target:e,contentSize:t,get size(){return $(e,o)}})})}function Q(e){e.forEach(K)}function Z(){typeof ResizeObserver>"u"||(d=new ResizeObserver(Q))}function ee(e,t){d||Z();const o=U(e);return o.forEach(n=>{let s=m.get(n);s||(s=new Set,m.set(n,s)),s.add(t),d==null||d.observe(n)}),()=>{o.forEach(n=>{const s=m.get(n);s==null||s.delete(t),s!=null&&s.size||d==null||d.unobserve(n)})}}const w=new Set;let v;function te(){v=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};w.forEach(o=>o(t))},window.addEventListener("resize",v)}function ne(e){return w.add(e),v||te(),()=>{w.delete(e),!w.size&&v&&(v=void 0)}}function se(e,t){return typeof e=="function"?ne(e):ee(e,t)}const oe=50,A=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),re=()=>({time:0,x:A(),y:A()}),ie={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function B(e,t,o,n){const s=o[t],{length:r,position:i}=ie[t],l=s.current,u=o.time;s.current=e["scroll"+i],s.scrollLength=e["scroll"+r]-e["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=N(0,s.scrollLength,s.current);const f=n-u;s.velocity=f>oe?0:X(s.current-l,f)}function le(e,t,o){B(e,"x",t,o),B(e,"y",t,o),t.time=o}function ce(e,t){const o={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)o.x+=n.offsetLeft,o.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const s=n.getBoundingClientRect();n=n.parentElement;const r=n.getBoundingClientRect();o.x+=s.left-r.left,o.y+=s.top-r.top}else if(n instanceof SVGGraphicsElement){const{x:s,y:r}=n.getBBox();o.x+=s,o.y+=r;let i=null,l=n.parentNode;for(;!i;)l.tagName==="svg"&&(i=l),l=n.parentNode;n=i}else break;return o}const fe={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},z={start:0,center:.5,end:1};function O(e,t,o=0){let n=0;if(z[e]!==void 0&&(e=z[e]),typeof e=="string"){const s=parseFloat(e);e.endsWith("px")?n=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?n=s/100*document.documentElement.clientWidth:e.endsWith("vh")?n=s/100*document.documentElement.clientHeight:e=s}return typeof e=="number"&&(n=t*e),o+n}const ue=[0,0];function ae(e,t,o,n){let s=Array.isArray(e)?e:ue,r=0,i=0;return typeof e=="number"?s=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,z[e]?e:"0"]),r=O(s[0],o,n),i=O(s[1],t),r-i}const de={x:0,y:0};function he(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ge(e,t,o){let{offset:n=fe.All}=o;const{target:s=e,axis:r="y"}=o,i=r==="y"?"height":"width",l=s!==e?ce(s,e):de,u=s===e?{width:e.scrollWidth,height:e.scrollHeight}:he(s),f={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let a=!t[r].interpolate;const E=n.length;for(let c=0;c<E;c++){const H=ae(n[c],f[i],u[i],l[r]);!a&&H!==t[r].interpolatorOffsets[c]&&(a=!0),t[r].offset[c]=H}a&&(t[r].interpolate=P(t[r].offset,Y(n)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function pe(e,t=e,o){if(o.x.targetOffset=0,o.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)o.x.targetOffset+=n.offsetLeft,o.y.targetOffset+=n.offsetTop,n=n.offsetParent}o.x.targetLength=t===e?t.scrollWidth:t.clientWidth,o.y.targetLength=t===e?t.scrollHeight:t.clientHeight,o.x.containerLength=e.clientWidth,o.y.containerLength=e.clientHeight}function ve(e,t,o,n={}){return{measure:()=>pe(e,n.target,o),update:s=>{le(e,o,s),(n.offset||n.target)&&ge(e,o,n)},notify:()=>t(o)}}const h=new WeakMap,b=new WeakMap,L=new WeakMap,M=e=>e===document.documentElement?window:e;function ye(e,{container:t=document.documentElement,...o}={}){let n=L.get(t);n||(n=new Set,L.set(t,n));const s=re(),r=ve(t,e,s,o);if(n.add(r),!h.has(t)){const l=()=>{for(const c of n)c.measure()},u=()=>{for(const c of n)c.update(D.timestamp)},f=()=>{for(const c of n)c.notify()},a=()=>{p.read(l,!1,!0),p.update(u,!1,!0),p.update(f,!1,!0)};h.set(t,a);const E=M(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&b.set(t,se(t,a)),E.addEventListener("scroll",a,{passive:!0})}const i=h.get(t);return p.read(i,!1,!0),()=>{var l;C(i);const u=L.get(t);if(!u||(u.delete(r),u.size))return;const f=h.get(t);h.delete(t),f&&(M(t).removeEventListener("scroll",f),(l=b.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function V(e,t){G(!!(!t||t.current))}const me=()=>({scrollX:g(0),scrollY:g(0),scrollXProgress:g(0),scrollYProgress:g(0)});function Le({container:e,target:t,layoutEffect:o=!0,...n}={}){const s=S(me);return(o?T:y.useEffect)(()=>(V("target",t),V("container",e),ye(({x:i,y:l})=>{s.scrollX.set(i.current),s.scrollXProgress.set(i.progress),s.scrollY.set(l.current),s.scrollYProgress.set(l.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),s}export{xe as a,Le as u};