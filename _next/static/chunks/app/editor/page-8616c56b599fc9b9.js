(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{9364:function(e,t,i){Promise.resolve().then(i.bind(i,8243))},8243:function(e,t,i){"use strict";i.d(t,{default:function(){return H}});var n=i(7437),o=i(2265),r=i(7684),d=i(920);let l={id:(0,d.Z)(),name:"Untitled",grade:"5.5",setter:"",image:"/img/MOCK_rock_wall.jpg",color1:"#FF5733",color2:"#C70039",holds:[],naturals:[]};var s=i(2890),h=i.n(s);let a="#488bc7",c="#292929";function u(e,t){let i=e.startsWith("#")?e.slice(1):e,n=parseInt(i.substring(0,2),16),o=parseInt(i.substring(2,4),16),r=parseInt(i.substring(4,6),16);return"#"+Math.min(255,n+Math.floor((255-n)*t)).toString(16).padStart(2,"0")+Math.min(255,o+Math.floor((255-o)*t)).toString(16).padStart(2,"0")+Math.min(255,r+Math.floor((255-r)*t)).toString(16).padStart(2,"0")}let g=()=>{let e=(0,o.useRef)(null),[t,i]=(0,o.useState)({width:0,height:0}),n=()=>{e.current&&i({width:e.current.offsetWidth,height:e.current.offsetHeight})};return(0,o.useEffect)(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),[e,t]};function x(e){let[t,i]=e.routeState,[r,d]=e.highlightedState,[l,s]=e.selectedState,[h,a]=g(),[c,x]=(0,o.useState)([]);(0,o.useEffect)(()=>{if(null!=l){let e=t.naturals.filter(e=>e.id==l);e.length>0?x([e[0].hold1id,e[0].id,e[0].hold2id]):x([l])}else x([null!=l?l:"help"])},[t,l]);let p=(e,n)=>{s(t.naturals.flatMap(e=>[e.hold1id,e.hold2id]).includes(e)?t.naturals.filter(t=>t.hold1id==e||t.hold2id==e)[0].id:e);let o=t.holds.filter(t=>t.id==e)[0],r={id:o.id,x:n.x/a.width*100+o.x,y:n.y/a.height*100+o.y};i({...t,holds:[...t.holds.filter(t=>t.id!=e),r]})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:(0,n.jsxs)("defs",{children:[(0,n.jsxs)("pattern",{id:"cautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,n.jsx)("rect",{width:"10",height:"20",fill:t.color1}),(0,n.jsx)("rect",{x:"10",width:"10",height:"20",fill:t.color2?t.color2:t.color1})]}),(0,n.jsxs)("pattern",{id:"lightCautionPattern",patternUnits:"userSpaceOnUse",width:"20",height:"20",patternTransform:"rotate(-45)",children:[(0,n.jsx)("rect",{width:"10",height:"20",fill:u(t.color1,.2)}),(0,n.jsx)("rect",{x:"10",width:"10",height:"20",fill:t.color2?u(t.color2,.2):u(t.color1,.2)})]})]})}),(0,n.jsxs)("div",{style:{position:"relative",width:"100%",height:"auto"},children:[(0,n.jsx)("img",{ref:h,src:t.image,alt:t.name,style:{width:"100%",height:"auto"}}),t.holds.map(e=>(0,n.jsx)(f,{hold:e,setHighlighted:()=>d(e.id),unHighlight:()=>d(null),isHighlighted:r===e.id,isSelected:c.includes(e.id),handleStop:p})),t.naturals.map(e=>{let i=t.holds.find(t=>t.id===e.hold1id),o=t.holds.find(t=>t.id===e.hold2id);return(0,n.jsx)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:(0,n.jsx)("line",{x1:"".concat(i.x,"%"),y1:"".concat(i.y,"%"),x2:"".concat(o.x,"%"),y2:"".concat(o.y,"%"),stroke:"url(#cautionPattern)",strokeWidth:".5rem"})})})]})]})}function f(e){return(0,n.jsx)(h(),{bounds:"parent",onStop:(t,i)=>e.handleStop(e.hold.id,i),position:{x:0,y:0},children:(0,n.jsx)("div",{style:{position:"absolute",top:"".concat(e.hold.y,"%"),left:"".concat(e.hold.x,"%"),width:"1px",height:"1px"},onMouseEnter:()=>e.setHighlighted(),onMouseLeave:()=>e.unHighlight(),children:(0,n.jsx)("svg",{width:"50",height:"50",style:{transform:"translate(-50%, -50%)"},children:(0,n.jsx)("circle",{cx:"25",cy:"25",r:"23",fill:e.isHighlighted?"url(#lightCautionPattern)":"url(#cautionPattern)",stroke:e.isSelected?a:"none",strokeWidth:"3"})})})},e.hold.id)}var p=i(8711),j=i(5961),m=i(511),S=i(8819),v=i(7170);function w(e){let[t,i]=e.routeState,[l,s]=e.highlightedState,[h,a]=e.selectedState,[c,u]=(0,o.useState)([]);function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,o={id:(0,d.Z)(),x:e,y:n};return i({...t,holds:[...t.holds,o]}),o}return(0,o.useEffect)(()=>{let e=t.naturals.flatMap(e=>[e.hold1id,e.hold2id]);u(t.holds.filter(t=>!e.includes(t.id)))},[t]),(0,n.jsxs)(r.Z,{spacing:1,padding:"1rem",style:{width:"100%"},children:[(0,n.jsxs)(r.Z,{direction:"row",spacing:1,height:"2.5rem",children:[(0,n.jsx)(j.Z,{onClick:()=>g(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(m.Z,{fontWeight:"bold",children:"Hold"})]})}),(0,n.jsx)(j.Z,{onClick:()=>(function(){let e=g(45,50),n=g(55,50),o={id:(0,d.Z)(),hold1id:e.id,hold2id:n.id};i({...t,holds:[...t.holds,e,n],naturals:[...t.naturals,o]})})(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(m.Z,{fontWeight:"bold",children:"Natural"})]})}),(0,n.jsx)(j.Z,{onClick:()=>(function(){let e=new Blob([JSON.stringify(t)],{type:"text/plain;charset=utf-8"});(0,v.saveAs)(e,"".concat(t.name,".json"))})(),variant:"contained",style:{fontWeight:"bold",borderRadius:"10px",width:"33%"},children:(0,n.jsx)(m.Z,{fontWeight:"bold",children:"Export"})})]}),c.toSorted((e,t)=>e.id.localeCompare(t.id)).map(e=>(0,n.jsx)(b,{name:e.id.substring(0,4),onHover:()=>s(e.id),onHoverEnd:()=>s(null),onSelect:()=>a(e.id),isHovered:e.id==l,isSelected:e.id==h})),t.naturals.toSorted((e,t)=>e.id.localeCompare(t.id)).map(e=>(0,n.jsx)(y,{name:e.id.substring(0,4),onHover:()=>s(e.id),onHoverEnd:()=>s(null),onSelect:()=>a(e.id),isHovered:e.id==l,isSelected:e.id==h}))]})}function b(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{style:{backgroundColor:e.isSelected?e.isHovered?"#7fa6c9":"#488bc7":e.isHovered?"grey":"#292929",borderRadius:"10px",minHeight:"2.5rem",width:"100%"},onMouseEnter:()=>e.onHover(),onMouseLeave:()=>e.onHoverEnd(),onClick:()=>e.onSelect(),children:(0,n.jsxs)(r.Z,{direction:"row",alignItems:"center",padding:"0.5rem",children:[(0,n.jsx)(m.Z,{fontWeight:"bold",children:"Hold: "}),(0,n.jsx)(m.Z,{marginLeft:"auto",fontWeight:"bold",children:e.name})]})})})}function y(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{style:{backgroundColor:e.isSelected?e.isHovered?u(a,.3):a:e.isHovered?u(c,.3):c,borderRadius:"10px",minHeight:"2.5rem",width:"100%"},onMouseEnter:()=>e.onHover(),onMouseLeave:()=>e.onHoverEnd(),onClick:()=>e.onSelect(),children:(0,n.jsxs)(r.Z,{direction:"row",alignItems:"center",padding:"0.5rem",children:[(0,n.jsx)(m.Z,{fontWeight:"bold",children:"Natural Hold: "}),(0,n.jsx)(m.Z,{marginLeft:"auto",fontWeight:"bold",children:e.name})]})})})}var H=function(){let[e,t]=(0,o.useState)(l),[i,d]=(0,o.useState)(null),[s,h]=(0,o.useState)(null);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Z,{direction:"row",children:[(0,n.jsx)(p.Z,{style:{width:"65%"},padding:"1rem",children:(0,n.jsx)(x,{routeState:[e,t],highlightedState:[i,d],selectedState:[s,h]})}),(0,n.jsx)(p.Z,{style:{width:"35%"},children:(0,n.jsx)(w,{routeState:[e,t],highlightedState:[i,d],selectedState:[s,h]})})]})})}}},function(e){e.O(0,[444,816,971,23,744],function(){return e(e.s=9364)}),_N_E=e.O()}]);