import{p as h,r as b,q as _,o as x,c as T,y as t,v as e,X as l,a as i,M as y,u as c,t as S,aC as k,_ as z}from"./framework.DcRevfCx.js";import{C as O,w,Y as C,x as N}from"./theme.CK6SIbTt.js";const G=h({__name:"basic",setup(v){const r=b("1"),a=b("1"),d=(u,o)=>{console.log(u,o)};return(u,o)=>{const n=_("el-menu-item"),s=_("el-sub-menu"),f=_("el-menu");return x(),T(y,null,[t(f,{"default-active":r.value,class:"el-menu-demo",mode:"horizontal",onSelect:d},{default:e(()=>[t(n,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(s,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(n,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(s,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(n,{index:"4"},{default:e(()=>[l("Orders")]),_:1})]),_:1},8,["default-active"]),i("div",{class:"h-6"}),t(f,{"default-active":a.value,class:"el-menu-demo",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",onSelect:d},{default:e(()=>[t(n,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(s,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(n,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(s,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(n,{index:"4"},{default:e(()=>[l("Orders")]),_:1})]),_:1},8,["default-active"])],64)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),I=h({__name:"collapse",setup(v){const r=b(!0),a=(u,o)=>{console.log(u,o)},d=(u,o)=>{console.log(u,o)};return(u,o)=>{const n=_("el-radio-button"),s=_("el-radio-group"),f=_("el-icon"),m=_("el-menu-item"),p=_("el-menu-item-group"),g=_("el-sub-menu"),j=_("el-menu");return x(),T(y,null,[t(s,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=P=>r.value=P),style:{"margin-bottom":"20px"}},{default:e(()=>[t(n,{value:!1},{default:e(()=>[l("expand")]),_:1}),t(n,{value:!0},{default:e(()=>[l("collapse")]),_:1})]),_:1},8,["modelValue"]),t(j,{"default-active":"2",class:"el-menu-vertical-demo",collapse:r.value,onOpen:a,onClose:d},{default:e(()=>[t(g,{index:"1"},{title:e(()=>[t(f,null,{default:e(()=>[t(c(O))]),_:1}),i("span",null,"Navigator One")]),default:e(()=>[t(p,null,{title:e(()=>[i("span",null,"Group One")]),default:e(()=>[t(m,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(m,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(p,{title:"Group Two"},{default:e(()=>[t(m,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(g,{index:"1-4"},{title:e(()=>[i("span",null,"item four")]),default:e(()=>[t(m,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(m,{index:"2"},{title:e(()=>[l("Navigator Two")]),default:e(()=>[t(f,null,{default:e(()=>[t(c(w))]),_:1})]),_:1}),t(m,{index:"3",disabled:""},{title:e(()=>[l("Navigator Three")]),default:e(()=>[t(f,null,{default:e(()=>[t(c(C))]),_:1})]),_:1}),t(m,{index:"4"},{title:e(()=>[l("Navigator Four")]),default:e(()=>[t(f,null,{default:e(()=>[t(c(N))]),_:1})]),_:1})]),_:1},8,["collapse"])],64)}}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),M=h({__name:"left-and-right",setup(v){const r=b("1"),a=(d,u)=>{console.log(d,u)};return(d,u)=>{const o=_("el-menu-item"),n=_("el-sub-menu"),s=_("el-menu");return x(),S(s,{"default-active":r.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:a},{default:e(()=>[t(o,{index:"0"},{default:e(()=>[i("img",{style:{width:"100px"},src:k,alt:"Element logo"})]),_:1}),t(o,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(n,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(o,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(o,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(o,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(n,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(o,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(o,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(o,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active"])}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),V={};function B(v,r){const a=_("el-menu-item"),d=_("el-sub-menu"),u=_("el-menu");return x(),S(u,{ellipsis:"",class:"el-menu-popper-demo",mode:"horizontal","popper-offset":16,style:{"max-width":"600px"}},{default:e(()=>[t(a,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(d,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(a,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(d,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(a,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(d,{index:"3","popper-offset":8},{title:e(()=>[l("Override Popper Offset")]),default:e(()=>[t(a,{index:"3-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"3-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"3-3"},{default:e(()=>[l("item three")]),_:1}),t(d,{index:"3-4","popper-offset":20},{title:e(()=>[l("override child")]),default:e(()=>[t(a,{index:"3-4-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"3-4-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"3-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(a,{index:"4",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(a,{index:"5"},{default:e(()=>[l("Orders")]),_:1})]),_:1})}const F=z(V,[["render",B]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),W=h({__name:"vertical",setup(v){const r=(d,u)=>{console.log(d,u)},a=(d,u)=>{console.log(d,u)};return(d,u)=>{const o=_("el-icon"),n=_("el-menu-item"),s=_("el-menu-item-group"),f=_("el-sub-menu"),m=_("el-menu"),p=_("el-col"),g=_("el-row");return x(),S(g,{class:"tac"},{default:e(()=>[t(p,{span:12},{default:e(()=>[i("h5",{class:"mb-2"},"Default colors"),t(m,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:r,onClose:a},{default:e(()=>[t(f,{index:"1"},{title:e(()=>[t(o,null,{default:e(()=>[t(c(O))]),_:1}),i("span",null,"Navigator One")]),default:e(()=>[t(s,{title:"Group One"},{default:e(()=>[t(n,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(s,{title:"Group Two"},{default:e(()=>[t(n,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(f,{index:"1-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(n,{index:"2"},{default:e(()=>[t(o,null,{default:e(()=>[t(c(w))]),_:1}),i("span",null,"Navigator Two")]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[t(o,null,{default:e(()=>[t(c(C))]),_:1}),i("span",null,"Navigator Three")]),_:1}),t(n,{index:"4"},{default:e(()=>[t(o,null,{default:e(()=>[t(c(N))]),_:1}),i("span",null,"Navigator Four")]),_:1})]),_:1})]),_:1}),t(p,{span:12},{default:e(()=>[i("h5",{class:"mb-2"},"Custom colors"),t(m,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",onOpen:r,onClose:a},{default:e(()=>[t(f,{index:"1"},{title:e(()=>[t(o,null,{default:e(()=>[t(c(O))]),_:1}),i("span",null,"Navigator One")]),default:e(()=>[t(s,{title:"Group One"},{default:e(()=>[t(n,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(s,{title:"Group Two"},{default:e(()=>[t(n,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(f,{index:"1-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(n,{index:"2"},{default:e(()=>[t(o,null,{default:e(()=>[t(c(w))]),_:1}),i("span",null,"Navigator Two")]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[t(o,null,{default:e(()=>[t(c(C))]),_:1}),i("span",null,"Navigator Three")]),_:1}),t(n,{index:"4"},{default:e(()=>[t(o,null,{default:e(()=>[t(c(N))]),_:1}),i("span",null,"Navigator Four")]),_:1})]),_:1})]),_:1})]),_:1})}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{q as _,D as a,U as b,X as c,Y as d};
