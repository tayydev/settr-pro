(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{9694:function(t,e,n){Promise.resolve().then(n.bind(n,548))},6481:function(t,e,n){"use strict";n.d(e,{Oh:function(){return i},_d:function(){return s},lz:function(){return r}});let i="#488bc7",r="#292929";function s(t,e){let n=t.startsWith("#")?t.slice(1):t,i=parseInt(n.substring(0,2),16),r=parseInt(n.substring(2,4),16),s=parseInt(n.substring(4,6),16);return"#"+Math.min(255,i+Math.floor((255-i)*e)).toString(16).padStart(2,"0")+Math.min(255,r+Math.floor((255-r)*e)).toString(16).padStart(2,"0")+Math.min(255,s+Math.floor((255-s)*e)).toString(16).padStart(2,"0")}},548:function(t,e,n){"use strict";n.d(e,{default:function(){return h}});var i=n(7437),r=n(6548),s=n(5673),l=n(2265),o=n(6481);function a(t){let e=(0,l.useRef)(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:(0,i.jsxs)("defs",{children:[(0,i.jsxs)("pattern",{id:"cautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,i.jsx)("rect",{width:"10",height:"20",fill:t.color1}),(0,i.jsx)("rect",{x:"10",width:"10",height:"20",fill:t.color2?t.color2:t.color1})]}),(0,i.jsxs)("pattern",{id:"lightCautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,i.jsx)("rect",{width:"10",height:"20",fill:(0,o._d)(t.color1,.2)}),(0,i.jsx)("rect",{x:"10",width:"10",height:"20",fill:t.color2?(0,o._d)(t.color2,.2):(0,o._d)(t.color1,.2)})]})]})}),(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:"auto"},children:[(0,i.jsx)("img",{ref:e,src:t.image,alt:t.name,style:{width:"100%",height:"auto"}}),t.holds.map(t=>(0,i.jsx)(c,{hold:t},t.id)),t.naturals.map(e=>{let n=t.holds.find(t=>t.id===e.hold1id),r=t.holds.find(t=>t.id===e.hold2id);return(0,i.jsx)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:(0,i.jsx)("line",{x1:"".concat(n.x,"%"),y1:"".concat(n.y,"%"),x2:"".concat(r.x,"%"),y2:"".concat(r.y,"%"),stroke:"url(#cautionPattern)",strokeWidth:".5rem"})})})]})]})}function c(t){let{hold:e}=t;return(0,i.jsx)("div",{style:{position:"absolute",top:"".concat(e.y,"%"),left:"".concat(e.x,"%"),width:"1px",height:"1px"},children:(0,i.jsx)("svg",{width:"4rem",height:"4rem",style:{transform:"translate(-50%, -50%)"},children:(0,i.jsx)("circle",{cx:"2rem",cy:"2rem",r:"1.5rem",fill:"url(#cautionPattern)"})})})}function h(){let[t,e]=(0,l.useState)([]),[n,o]=(0,l.useState)(null),[c,h]=(0,l.useState)(!1);(0,l.useEffect)(()=>{Promise.all(["example.json","example2.json"].map(t=>fetch("/json/".concat(t)).then(t=>t.json()))).then(t=>e(t.flat()))},[]);let d=t=>{o(t),h(!0)},u=()=>{h(!1)};return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[t.map((t,e)=>(0,i.jsx)(r.Z,{onClick:()=>d(t),children:t.name},e)),(0,i.jsx)(s.Z,{open:c,onClose:u,children:(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:n.name}),(0,i.jsx)("div",{style:{width:"50%",height:"auto"},children:(0,i.jsx)(a,{color1:n.color1,color2:n.color2,image:n.image,name:n.name,grade:n.grade,setter:n.setter,holds:n.holds,naturals:n.naturals})}),(0,i.jsx)(r.Z,{onClick:u,children:"Close"})]})})})]})}}},function(t){t.O(0,[666,42,971,23,744],function(){return t(t.s=9694)}),_N_E=t.O()}]);