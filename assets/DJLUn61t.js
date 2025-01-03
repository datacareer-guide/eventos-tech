import{_ as y}from"./BG8Jy7EG.js";import{o as t,c as o,g as r,a2 as w,d as f,e as x,f as _,i as M,b as n,w as u,l as h,F as m,p as k,t as g,h as C,_ as v,az as S,r as $}from"./BinqcT8R.js";function B(d,e){return t(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})])}function N(d,e){return t(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})])}const V=()=>w("color-mode").value,j=f({__name:"ColorModeSwitch",setup(d){const e=V(),a=()=>{e.preference=e.value==="dark"?"light":"dark"};return(c,b)=>(t(),o("button",{class:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",onClick:a},[x(e).value==="dark"?(t(),_(x(N),{key:0,class:"w-5 h-5 text-gray-400"})):(t(),_(x(B),{key:1,class:"w-5 h-5 text-gray-600"}))]))}}),A={class:"bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark"},E={class:"container mx-auto px-4 py-4"},F={class:"flex justify-between items-center"},H={class:"hidden md:flex md:items-center gap-6"},L={key:0,class:"flex flex-col md:hidden mt-4 gap-4"},T=f({__name:"AppHeader",setup(d){const e=[{text:"Eventos",to:"/"},{text:"Submeter evento",to:"https://github.com/datacareer-guide/eventos-tech/issues/new"},{text:"Sobre",to:"/sobre"}],a=M(!1),c=()=>{a.value=!a.value};return(b,l)=>{const i=y,p=j;return t(),o("header",A,[r("nav",E,[r("div",F,[n(i,{to:"/",class:"text-4xl font-bold text-text-primary-light dark:text-text-primary-dark"},{default:u(()=>l[0]||(l[0]=[h(" Eventos Tech ")])),_:1}),r("button",{onClick:c,class:"md:hidden text-text-primary-light dark:text-text-primary-dark"},l[1]||(l[1]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)])),r("div",H,[(t(),o(m,null,k(e,s=>n(i,{key:s.to,to:s.to,class:"text-xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"},{default:u(()=>[h(g(s.text),1)]),_:2},1032,["to"])),64)),n(p)])]),a.value?(t(),o("div",L,[(t(),o(m,null,k(e,s=>n(i,{key:s.to,to:s.to,class:"text-xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"},{default:u(()=>[h(g(s.text),1)]),_:2},1032,["to"])),64)),n(p)])):C("",!0)])])}}}),Z={},z={class:"bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark"};function D(d,e){return t(),o("footer",z,e[0]||(e[0]=[S('<div class="container mx-auto px-4 py-8"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-text-secondary-light dark:text-text-secondary-dark">© 2025 Eventos Tech. Feito por <a href="https://github.com/1cadumagalhaes">@1cadumagalhaes</a>.</p><div class="flex gap-4 mt-4 md:mt-0"><a href="https://github.com/datacareer-guide/eventos-tech" class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"> GitHub </a><a href="/sobre" class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"> Sobre </a></div></div></div>',1)]))}const G=v(Z,[["render",D]]),I={},O={class:"min-h-screen flex flex-col bg-background-light dark:bg-background-dark"},q={class:"container mx-auto px-4 flex-grow pt-16"};function J(d,e){const a=T,c=G;return t(),o("div",O,[n(a),r("main",q,[$(d.$slots,"default")]),n(c)])}const Q=v(I,[["render",J]]);export{Q as default};