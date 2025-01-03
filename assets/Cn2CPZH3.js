import{_ as B}from"./DoxCxzMA.js";import{r as L,f as S,a as N}from"./7_kIOia7.js";import{d as P,k as p,o as r,c as i,b,w as F,g as s,e as n,t as _,h,n as V,_ as T,i as y,y as w,z as U,A as D,B as E,F as k,p as C,f as M}from"./BT2Vjuh1.js";const j=["src","alt"],z={class:"p-4 pb-16"},G={class:"text-3xl font-bold text-text-primary-light dark:text-text-primary-dark"},I={class:"flex items-center gap-2"},R={class:"flex items-center gap-2"},W={class:"mt-2 flex gap-2"},q={key:0,class:"px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-s"},H={key:1,class:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-s"},J={key:2,class:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-s"},K={key:3,class:"px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-s"},O=P({__name:"EventCard",props:{event:{}},setup(x){const l=x,c=p(()=>{const e=l.event.image;return e.startsWith("http")||e.startsWith("/")?e:`/images/${e}`}),v=p(()=>{if(!l.event.c4p||!l.event.c4p.startDate||!l.event.c4p.endDate)return!1;const e=new Date,u=new Date(l.event.c4p.endDate),f=new Date(l.event.c4p.startDate);return e<=u&&e>=f}),m=p(()=>{var e;return((e=l.event.tickets)==null?void 0:e.available)??!1}),g=p(()=>{const e=new Date;return new Date(l.event.endDate)<e});return(e,u)=>{const f=B;return r(),i("div",{class:V(["rounded-lg shadow-lg overflow-hidden transition-all duration-200 relative hover:ring-2 hover:ring-primary-500",n(g)?"opacity-60 bg-gray-100 dark:bg-gray-900":"bg-white dark:bg-gray-800 hover:shadow-xl"])},[b(f,{to:`${e.event._path}`,class:"block h-full"},{default:F(()=>[s("img",{src:n(c),alt:e.event.name,class:"w-full h-48 object-cover"},null,8,j),s("div",z,[s("h3",G,_(e.event.name),1),s("div",I,[b(n(L),{class:"w-5 h-5"}),s("span",null,_(n(S)(e.event.startDate,e.event.endDate)),1)]),s("div",R,[b(n(N),{class:"w-5 h-5"}),s("span",null,_(e.event.city)+" - "+_(e.event.location),1)]),s("div",W,[n(g)?(r(),i("span",q," Evento passado ")):h("",!0),e.event.isFree?(r(),i("span",H," Gratuito ")):h("",!0),n(v)?(r(),i("span",J," CFP Aberto ")):h("",!0),n(m)?(r(),i("span",K," Ingressos disponíveis ")):h("",!0)]),u[0]||(u[0]=s("div",{class:"absolute bottom-4 right-4 text-primary-600 dark:text-primary-400 hover:underline text-lg"}," Ver detalhes → ",-1))])]),_:1},8,["to"])],2)}}}),Q=T(O,[["__scopeId","data-v-e58284df"]]),X={class:"flex flex-col min-h-[50vh]"},Y={class:"mb-8"},Z={class:"mt-4 flex gap-4"},ee=["value"],te={class:"flex-grow"},se={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},ae={class:"mt-16 py-8 flex justify-center gap-2"},ne=["onClick"],$=9,de=P({__name:"EventsGrid",props:{events:{}},setup(x){const l=x,c=y(""),v=y(""),m=y("date"),g=y(1),e=p(()=>{var t;const o=new Set;return(t=l.events)==null||t.forEach(d=>{d.category&&d.category.forEach(a=>o.add(a))}),Array.from(o).sort()}),u=p(()=>{let o=[...l.events];return c.value&&(o=o.filter(t=>t.name.toLowerCase().includes(c.value.toLowerCase())||t.city.toLowerCase().includes(c.value.toLowerCase()))),v.value&&(o=o.filter(t=>{var d;return(d=t.category)==null?void 0:d.includes(v.value)})),o.sort((t,d)=>m.value==="date"?new Date(t.startDate).getTime()-new Date(d.startDate).getTime():t.name.localeCompare(d.name))}),f=p(()=>{const o=(g.value-1)*$;return u.value.slice(o,o+$)}),A=p(()=>Math.ceil(u.value.length/$));return(o,t)=>{const d=Q;return r(),i("div",X,[s("div",Y,[w(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>D(c)?c.value=a:null),type:"text",placeholder:"Search events...",class:"w-full p-2 border rounded"},null,512),[[U,n(c)]]),s("div",Z,[w(s("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>D(v)?v.value=a:null),class:"p-2 border rounded"},[t[3]||(t[3]=s("option",{value:""},"All Categories",-1)),(r(!0),i(k,null,C(n(e),a=>(r(),i("option",{key:a,value:a},_(a),9,ee))),128))],512),[[E,n(v)]]),w(s("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>D(m)?m.value=a:null),class:"p-2 border rounded"},t[4]||(t[4]=[s("option",{value:"date"},"Sort by Date",-1),s("option",{value:"name"},"Sort by Name",-1)]),512),[[E,n(m)]])])]),s("div",te,[s("div",se,[(r(!0),i(k,null,C(n(f),a=>(r(),M(d,{key:a.name,event:a},null,8,["event"]))),128))])]),s("div",ae,[(r(!0),i(k,null,C(n(A),a=>(r(),i("button",{key:a,onClick:oe=>g.value=a,class:V(["px-4 py-2 rounded",n(g)===a?"bg-primary-600 text-white":"bg-gray-200 dark:bg-gray-700"])},_(a),11,ne))),128))])])}}});export{de as _};
