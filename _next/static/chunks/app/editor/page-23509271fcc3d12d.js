(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{9364:function(e,t,i){Promise.resolve().then(i.bind(i,2018))},2018:function(e,t,i){"use strict";i.d(t,{default:function(){return I}});var n=i(7437),l=i(2265),r=i(7684),o=i(7048),d=i(511),s=i(2890),a=i.n(s),h=i(6481);function c(e){let[t,i]=e.routeState,[r,o]=e.highlightedState,[d,s]=e.selectedState,[a,c]=(0,l.useState)([]),g=(0,l.useRef)(null),[x,f]=(0,l.useState)({width:0,height:0}),p=()=>{g.current&&f({width:g.current.offsetWidth,height:g.current.offsetHeight})};(0,l.useEffect)(()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[t]),(0,l.useEffect)(()=>{if(null!=d){let e=t.naturals.filter(e=>e.id==d);e.length>0?c([e[0].hold1id,e[0].id,e[0].hold2id]):c([d])}else c([null!=d?d:"help"])},[t,d]);let j=(e,n)=>{s(t.naturals.flatMap(e=>[e.hold1id,e.hold2id]).includes(e)?t.naturals.filter(t=>t.hold1id==e||t.hold2id==e)[0].id:e);let l=t.holds.filter(t=>t.id==e)[0],r={id:l.id,x:n.x/x.width*100+l.x,y:n.y/x.height*100+l.y};i({...t,holds:[...t.holds.filter(t=>t.id!=e),r]})};function m(e,t){let[i,n,l]=e.match(/\w\w/g).map(e=>parseInt(e,16));return"rgba(".concat(i,",").concat(n,",").concat(l,",").concat(t,")")}return(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:(0,n.jsxs)("defs",{children:[(0,n.jsxs)("pattern",{id:"cautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,n.jsx)("rect",{width:"10",height:"20",fill:m(t.color1,.75)}),(0,n.jsx)("rect",{x:"10",width:"10",height:"20",fill:m(t.color2?t.color2:t.color1,.75)})]}),(0,n.jsxs)("pattern",{id:"lightCautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,n.jsx)("rect",{width:"10",height:"20",fill:m((0,h._d)(t.color1,.2),.75)}),(0,n.jsx)("rect",{x:"10",width:"10",height:"20",fill:m(t.color2?(0,h._d)(t.color2,.2):(0,h._d)(t.color1,.2),.75)})]})]})}),(0,n.jsxs)("div",{style:{position:"relative",width:"100%",height:"auto"},children:[(0,n.jsx)("img",{ref:g,src:t.image,alt:t.name,style:{width:"100%",height:"auto"}}),t.holds.map(e=>(0,n.jsx)(u,{hold:e,setHighlighted:()=>o(e.id),unHighlight:()=>o(null),isHighlighted:r===e.id,isSelected:a.includes(e.id),handleStop:j})),t.naturals.map(e=>{let i=t.holds.find(t=>t.id===e.hold1id),l=t.holds.find(t=>t.id===e.hold2id);return(0,n.jsx)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:(0,n.jsx)("line",{x1:"".concat(i.x,"%"),y1:"".concat(i.y,"%"),x2:"".concat(l.x,"%"),y2:"".concat(l.y,"%"),stroke:"url(#cautionPattern)",strokeWidth:"1vw"})})})]})]})}function u(e){return(0,n.jsx)(a(),{bounds:"parent",onStop:(t,i)=>e.handleStop(e.hold.id,i),position:{x:0,y:0},children:(0,n.jsx)("div",{style:{position:"absolute",top:"".concat(e.hold.y,"%"),left:"".concat(e.hold.x,"%"),width:"1px",height:"1px"},onMouseEnter:()=>e.setHighlighted(),onMouseLeave:()=>e.unHighlight(),children:(0,n.jsx)("svg",{width:"5vw",height:"5vw",style:{transform:"translate(-50%, -50%)"},children:(0,n.jsx)("circle",{cx:"2.5vw",cy:"2.5vw",r:"2vw",fill:e.isHighlighted?"url(#lightCautionPattern)":"url(#cautionPattern)",stroke:e.isSelected?h.Oh:"none",strokeWidth:"0.25vw"})})})},e.hold.id)}var g=i(4444),x=i(1705),f=i(8549),p=i(6065),j=i(3396),m=i(5870),v=i(6548),w=i(3983),Z=i(5786),y=i(335),S=i(8819),b=i(920),C=i(7170),H=i(3478),k=i(5853);let W=(0,g.Z)({palette:{mode:"dark"}}),E=["5.5","5.6","5.7","5.8","5.9","5.10","5.11","5.12","5.13"];function M(e){let[t,i]=e.routeState,[s,a]=e.highlightedState,[h,c]=e.selectedState,[u,g]=(0,l.useState)([]);function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;e+=20*Math.random(),n+=20*Math.random();let l={id:(0,b.Z)(),x:e,y:n};return i({...t,holds:[...t.holds,l]}),c(l.id),l}(0,l.useEffect)(()=>{let e=t.naturals.flatMap(e=>[e.hold1id,e.hold2id]);g(t.holds.filter(t=>!e.includes(t.id)))},[t]),console.log("image",t.image);let k=(0,l.useRef)(null);return(0,n.jsxs)(r.Z,{spacing:1,padding:"1rem",style:{width:"100%"},children:[(0,n.jsx)(o.Z,{}),(0,n.jsxs)(r.Z,{direction:"row",spacing:1,children:[(0,n.jsx)(x.Z,{theme:W,children:(0,n.jsxs)(f.Z,{style:{width:"100%"},children:[(0,n.jsx)(p.Z,{id:"demo-simple-select-img",children:"Wall"}),(0,n.jsx)(j.Z,{value:t.image.substring(5),labelId:"demo-simple-select-img",label:"Wall",onChange:e=>{i({...t,image:"/img/".concat(e.target.value)})},children:e.imageNames.map(e=>(0,n.jsx)(m.Z,{value:e,children:e}))})]})}),(0,n.jsx)("input",{type:"file",style:{display:"none"},accept:"application/json",ref:k,onChange:e=>{let t=e.target.files;if(t&&t[0]){let e=t[0],n=new FileReader;n.onload=e=>{var t;(null===(t=e.target)||void 0===t?void 0:t.result)&&i(JSON.parse(e.target.result.toString()))},n.readAsText(e)}}}),(0,n.jsx)(v.Z,{onClick:()=>{var e;null===(e=k.current)||void 0===e||e.click()},variant:"contained",style:{fontWeight:"bold",borderRadius:"10px"},children:(0,n.jsx)(d.Z,{fontWeight:"bold",children:"Import"})})]}),(0,n.jsxs)(x.Z,{theme:W,children:[(0,n.jsx)(w.Z,{label:"Route Name",variant:"outlined",value:t.name,onChange:e=>{i({...t,name:e.target.value})}}),(0,n.jsxs)(r.Z,{direction:"row",spacing:1,children:[(0,n.jsx)(w.Z,{style:{width:"50%"},label:"Setter",variant:"outlined",value:t.setter,onChange:e=>{i({...t,setter:e.target.value})}}),(0,n.jsxs)(f.Z,{style:{width:"50%"},children:[(0,n.jsx)(p.Z,{id:"demo-simple-select-label",children:"Grade"}),(0,n.jsx)(j.Z,{value:t.grade,labelId:"demo-simple-select-label",label:"Grade",onChange:e=>{i({...t,grade:e.target.value})},children:E.map(e=>(0,n.jsx)(m.Z,{value:e,children:e}))})]})]})]}),(0,n.jsxs)(r.Z,{direction:"row",spacing:2,height:"12rem",children:[(0,n.jsx)(H.gW,{style:{height:"100%",width:"50%"},color:t.color1,onChange:e=>{i({...t,color1:e})}}),(0,n.jsxs)(r.Z,{style:{width:"50%",padding:0},children:[(0,n.jsxs)(r.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(d.Z,{children:"Secondary Color?"}),(0,n.jsx)(x.Z,{theme:W,children:(0,n.jsx)(Z.Z,{checked:""!=t.color2,onChange:e=>{i({...t,color2:e.target.checked?"#d64242":""})}})})]}),""!==t.color2?(0,n.jsx)(H.gW,{style:{height:"100%",width:"100%"},color:t.color2,onChange:e=>{i({...t,color2:e})}}):(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"55%"},children:(0,n.jsx)(d.Z,{variant:"subtitle2",color:"darkgray",children:"No Secondary Color"})})]})]}),(0,n.jsx)(o.Z,{}),(0,n.jsxs)(r.Z,{direction:"row",spacing:1,height:"2.5rem",children:[(0,n.jsx)(v.Z,{onClick:()=>y(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(d.Z,{fontWeight:"bold",children:"Hold"})]})}),(0,n.jsx)(v.Z,{onClick:()=>(function(){let e=y(45,50),n=y(55,50),l={id:(0,b.Z)(),hold1id:e.id,hold2id:n.id};i({...t,holds:[...t.holds,e,n],naturals:[...t.naturals,l]}),c(l.id)})(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(d.Z,{fontWeight:"bold",children:"Natural"})]})}),(0,n.jsx)(v.Z,{onClick:()=>(function(){let e=new Blob([JSON.stringify(t)],{type:"text/plain;charset=utf-8"}),i=t.name.replace(/ /g,"_");(0,C.saveAs)(e,"".concat(i,".json"))})(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsx)(d.Z,{fontWeight:"bold",children:"Export"})})]}),(0,n.jsxs)(r.Z,{spacing:1,children:[u.toSorted((e,t)=>e.id.localeCompare(t.id)).map(e=>(0,n.jsx)(N,{name:e.id.substring(0,4),onHover:()=>a(e.id),onHoverEnd:()=>a(null),onSelect:()=>c(e.id),isHovered:e.id==s,isSelected:e.id==h,onDelete:()=>i({...t,holds:t.holds.filter(t=>t.id!=e.id)}),description:"Hold"})),t.naturals.toSorted((e,t)=>e.id.localeCompare(t.id)).map(e=>(0,n.jsx)(N,{name:e.id.substring(0,4),onHover:()=>a(e.id),onHoverEnd:()=>a(null),onSelect:()=>c(e.id),isHovered:e.id==s,isSelected:e.id==h,onDelete:()=>i({...t,holds:t.holds.filter(t=>![e.hold1id,e.hold2id].includes(t.id)),naturals:t.naturals.filter(t=>t.id!=e.id)}),description:"Natural Hold"}))]})]})}function N(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{style:{backgroundColor:e.isSelected?e.isHovered?"#7fa6c9":"#488bc7":e.isHovered?"grey":"#292929",borderRadius:"10px",minHeight:"2.5rem",width:"100%"},onMouseEnter:()=>e.onHover(),onMouseLeave:()=>e.onHoverEnd(),onClick:()=>e.onSelect(),children:(0,n.jsxs)(r.Z,{direction:"row",alignItems:"center",padding:"0.5rem",children:[(0,n.jsxs)(d.Z,{fontWeight:"bold",children:[e.description," "]}),(0,n.jsxs)(d.Z,{marginLeft:"0.5rem",fontWeight:"bold",color:"lightgrey",children:["(",e.name,")"]}),(0,n.jsx)(y.Z,{size:"small",style:{marginLeft:"auto",color:"red",minWidth:"0"},onClick:()=>{e.onDelete()},children:(0,n.jsx)(k.Z,{})})]})})})}let _=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{t(window.innerWidth<=900)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e};var I=function(e){let[t,i]=(0,l.useState)(e.starterRoute),[s,a]=(0,l.useState)(null),[h,u]=(0,l.useState)(null),g=_();return(0,n.jsx)(n.Fragment,{children:g?(0,n.jsx)(d.Z,{align:"center",padding:"1rem",children:"The Editor is not supported on your display size"}):(0,n.jsxs)(r.Z,{direction:"row",children:[(0,n.jsx)(o.Z,{style:{width:"65%",maxHeight:"90vh",overflow:"auto"},padding:"1rem",children:(0,n.jsx)(c,{routeState:[t,i],highlightedState:[s,a],selectedState:[h,u]})}),(0,n.jsx)(o.Z,{style:{width:"35%",maxHeight:"90vh",overflow:"auto"},children:(0,n.jsx)(M,{routeState:[t,i],highlightedState:[s,a],selectedState:[h,u],imageNames:e.images})})]})})}},6481:function(e,t,i){"use strict";i.d(t,{Oh:function(){return n},_d:function(){return r},lz:function(){return l}});let n="#488bc7",l="#292929";function r(e,t){let i=e.startsWith("#")?e.slice(1):e,n=parseInt(i.substring(0,2),16),l=parseInt(i.substring(2,4),16),r=parseInt(i.substring(4,6),16);return"#"+Math.min(255,n+Math.floor((255-n)*t)).toString(16).padStart(2,"0")+Math.min(255,l+Math.floor((255-l)*t)).toString(16).padStart(2,"0")+Math.min(255,r+Math.floor((255-r)*t)).toString(16).padStart(2,"0")}}},function(e){e.O(0,[444,872,971,23,744],function(){return e(e.s=9364)}),_N_E=e.O()}]);