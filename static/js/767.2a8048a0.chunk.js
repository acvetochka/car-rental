"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[767],{7742:function(n,e,t){t.d(e,{Z:function(){return rn}});var r,o,i,a,s,c,l,d,u,p,h,x,f,b,g,m,v,Z,w,j=t(9439),k=t(2791),y=t(9434),C=t(168),M=t(225),S=M.Z.button(r||(r=(0,C.Z)(["\n  background-color: var(--accent-color);\n  color: var(--invert-color);\n  transition: background-color 250ms ease-in-out;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  padding: 12px 0;\n  margin-top: 28px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--accent-hover);\n  }\n"]))),E=t(184),L=function(n){var e=n.onClick;return(0,E.jsx)(S,{onClick:e,children:"Learn more"})},z=t(1087),I=t(4164),P=M.Z.div(o||(o=(0,C.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #ffffff;\n  border: 1px solid #dce3e5cc;\n  border-radius: 24px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  transition: transform 250ms ease-in-out;\n"]))),B=M.Z.div(i||(i=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #12141780;\n  z-index: 999;\n  transition: transform 250ms ease-in-out;\n"]))),O=(M.Z.div(a||(a=(0,C.Z)(["\n  background-color: white;\n  width: 541px;\n  padding: 20px;\n  border-radius: 5px;\n"]))),M.Z.button(s||(s=(0,C.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n"])))),N=t(71),T=function(n){var e=n.isOpen,t=n.onClose,r=n.children;return(0,k.useEffect)((function(){var n=function(n){e&&"Escape"===n.key&&t()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,t]),e?I.createPortal((0,E.jsx)(B,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,E.jsxs)(P,{id:"modal-container",children:[(0,E.jsx)(O,{onClick:t,children:(0,E.jsx)(N.IOM,{width:24,height:24})}),r]})}),document.getElementById("modal-root")):null},A=M.Z.div(c||(c=(0,C.Z)(["\n  padding: 40px;\n  width: 541px;\n"]))),F=M.Z.img(l||(l=(0,C.Z)(["\n    object-fit: cover;\n    border-radius: 14px;\n"]))),R=function(n){var e=n.isModalOpen,t=n.closeModal,r=n.car,o=r.model,i=r.img,a=r.description;return(0,E.jsx)(T,{isOpen:e,onClose:t,children:(0,E.jsxs)(A,{children:[(0,E.jsx)(F,{src:i,alt:o,width:"461",height:"248"}),(0,E.jsx)("p",{children:a}),(0,E.jsx)(z.rU,{to:"tel:+380730000000",children:"Rental car"})]})})},H=t(7657),U=t(5502),$=t(591),_=t(7692),G=M.Z.div(d||(d=(0,C.Z)(["\n  width: 100%;\n  display: flex;\n  /* flex-grow: 1; */\n  flex-direction: column;\n  min-height: 100%;\n  justify-content: space-between;\n"]))),J=M.Z.div(u||(u=(0,C.Z)(["\n  border-radius: 14px;\n  width: 274px;\n  height: 268px;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;\n  cursor: pointer;\n  margin-bottom: 14px;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 1px 10px black;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    );\n  }\n"]))),K=M.Z.div(p||(p=(0,C.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),V=(0,M.Z)(_.kTx)(h||(h=(0,C.Z)(["\n  fill: #ffffff;\n  width: 100%;\n  height: 100%;\n"]))),W=(0,M.Z)(_.SEb)(x||(x=(0,C.Z)(["\n  fill: var(--accent-color);\n  width: 100%;\n  height: 100%;\n"]))),q=M.Z.img(f||(f=(0,C.Z)(["\n  object-fit: cover;\n  width: 100%;\n"]))),D=M.Z.div(b||(b=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-color);\n"]))),Q=M.Z.span(g||(g=(0,C.Z)(["\n  color: var(--accent-color);\n"]))),X=M.Z.p(m||(m=(0,C.Z)(["\n  color: var(--secondary-color);\n  font-size: 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 90%;\n  text-align: left;\n"]))),Y=M.Z.span(v||(v=(0,C.Z)(["\n  color: var(--separator-color);\n"]))),nn=function(n){var e=n.car,t=e.id,r=e.year,o=e.make,i=e.model,a=e.type,s=e.img,c=e.functionalities,l=e.rentalPrice,d=e.rentalCompany,u=e.address,p=(0,k.useState)(!1),h=(0,j.Z)(p,2),x=h[0],f=h[1],b=(0,k.useState)(!1),g=(0,j.Z)(b,2),m=g[0],v=g[1],Z=(0,y.v9)($.e).favoriteCars,w=(0,y.I0)(),C=u.split(","),M=C[2],S=C[1];(0,k.useEffect)((function(){Z.some((function(n){return n.id===e.id}))&&v(!0)}),[Z,e]);var z=function(){f(!0),w((0,H.Cn)(e.id))};return(0,E.jsxs)(G,{children:[(0,E.jsxs)(J,{onClick:z,children:[(0,E.jsx)(K,{onClick:function(n){n.stopPropagation(),v(!m),Z.some((function(n){return n.id===e.id}))?w((0,U.Ni)(e)):w((0,U.a3)(e))},children:m?(0,E.jsx)(W,{width:20,height:20}):(0,E.jsx)(V,{width:20,height:20})}),(0,E.jsx)(q,{src:s,alt:i,width:"274",height:"268"})]}),(0,E.jsxs)(D,{children:[(0,E.jsxs)("p",{children:[o," ",(0,E.jsx)(Q,{children:i}),", ",r]}),(0,E.jsx)("p",{children:l})]}),(0,E.jsxs)(X,{children:[S," ",(0,E.jsx)(Y,{children:" | "}),M," ",(0,E.jsx)(Y,{children:" | "})," ",d]}),(0,E.jsxs)(X,{children:[a," ",(0,E.jsx)(Y,{children:" | "})," ",i," ",(0,E.jsx)(Y,{children:" | "})," ",t,(0,E.jsx)(Y,{children:" | "})," ",c[0]]}),(0,E.jsx)(L,{car:e,onClick:z}),x&&(0,E.jsx)(R,{isModalOpen:x,closeModal:function(){f(!1)},car:e})]})},en=M.Z.ul(Z||(Z=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  row-gap: 50px;\n  list-style: none;\n  margin: 0 auto;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),tn=M.Z.li(w||(w=(0,C.Z)(["\n  width: 274px;\n"]))),rn=function(n){var e=n.carsArray;return(0,E.jsx)(en,{children:e.map((function(n){return(0,E.jsx)(tn,{children:(0,E.jsx)(nn,{car:n})},n.id)}))})}},7767:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,o,i,a,s,c,l,d,u,p,h,x=t(9439),f=t(5861),b=t(4687),g=t.n(b),m=t(9434),v=t(7657),Z=t(168),w=t(225),j=w.Z.button(r||(r=(0,Z.Z)(["\n  color: var(--accent-color);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]))),k=t(184),y=function(n){var e=n.page,t=n.setPage,r=n.setShowButton,o=(0,m.I0)(),i=function(){var n=(0,f.Z)(g().mark((function n(){var i,a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o((0,v.cf)(e+1));case 2:i=n.sent,a=i.payload,t((function(n){return n+1})),a.length>=8?r(!0):r(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,k.jsx)(j,{onClick:i,children:"Load more"})},C=t(7742),M=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),S=w.Z.form(o||(o=(0,Z.Z)(["\n  margin: 0 auto;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n"]))),E=w.Z.div(i||(i=(0,Z.Z)(["\n  text-align: left;\n"]))),L=w.Z.label(a||(a=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 8px;\n"]))),z=w.Z.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  gap: 1px;\n  background-color: rgba(138, 138, 137, 0.2);\n\n  border: none;\n  border-radius: 14px;\n  overflow: hidden;\n"]))),I=w.Z.div(c||(c=(0,Z.Z)(["\n  position: relative;\n"]))),P=w.Z.p(l||(l=(0,Z.Z)(["\n  position: absolute;\n  left: 24px;\n  top: 15px;\n"]))),B=w.Z.input(d||(d=(0,Z.Z)(["\n  padding-left: ",";\n  width: 160px;\n  height: 48px;\n  background-color: var(--input-bg-color);\n  border: none;\n  outline: none;\n"])),(function(n){return n.padding})),O=t(1413),N=t(1062),T=w.Z.div(u||(u=(0,Z.Z)(["\n  width: ",";\n  text-align: left;\n"])),(function(n){return n.width})),A=w.Z.label(p||(p=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 8px;\n"]))),F=(0,w.Z)(N.ZP)(h||(h=(0,Z.Z)(["\n  /* border-radius: 14px;\n  background-color: var(--input-bg-color); */\n  height: 48px;\n  .custom-select-arrow {\n    transition: transform 0.5s; /* \u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0443 */\n  }\n\n  .custom-select.is-open .custom-select-arrow {\n    transform: rotate(180deg); /* \u041f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0456\u043a\u043e\u043d\u043a\u0443 \u043f\u0440\u0438 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456 */\n  }\n\n  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {\n    width: 8px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u0431\u0430\u0440\u0430 */\n    background-color: red;\n  }\n\n  #react-select-2-listbox,\n  #react-select-3-listbox {\n    border-radius: 14px;\n    overflow: hidden;\n  }\n\n  /* #react-select-2-listbox::-webkit-scrollbar-thumb {\n    background-color: red; \n    border-radius: 4px; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar-track {\n    background: red !important; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar-thumb:active {\n    background-color: red; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar {\n    width: 8px;\n    background-color: red !important;\n  } */\n"]))),R=function(n){var e=n.textLabel,t=n.name,r=n.options,o=n.width,i=n.handleChange,a=n.value;return(0,k.jsxs)(T,{width:o,children:[(0,k.jsx)(A,{htmlFor:t,children:e}),(0,k.jsx)(F,{id:t,options:r,className:"custom-select custom-select-menu",closeMenuOnSelect:!1,onChange:i,value:a,styles:{dropdownIndicator:function(n,e){return(0,O.Z)((0,O.Z)({},n),{},{transition:"transform 0.5s",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"none"})},control:function(n,e){return(0,O.Z)((0,O.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",borderRadius:"14px",border:"none",output:"none",height:"48px"})}}})]})},H=function(n){return n.map((function(n,e){return{value:n,label:n}}))},U=[];!function(){for(var n=30;n<=500;n+=10)U.push(n)}();var $=t(2791),_=function(){var n=(0,$.useState)({value:"price",label:"To $"}),e=(0,x.Z)(n,2),t=e[0],r=e[1],o=(0,$.useState)({value:"brand",label:"Enter the text"}),i=(0,x.Z)(o,2),a=i[0],s=i[1],c=H(M),l=H(U),d=(0,$.useState)(""),u=(0,x.Z)(d,2),p=u[0],h=u[1];return(0,k.jsxs)(S,{children:[(0,k.jsx)(R,{textLabel:"Car brand",name:"brand",options:c,value:a,handleChange:function(n){s({label:n.value,value:n.value})},width:"224px"}),(0,k.jsx)(R,{textLabel:"Price/ 1 hour",name:"price",options:l,value:t,handleChange:function(n){var e="To ".concat(n.value,"$");r({label:e,value:e})},width:"125px"}),(0,k.jsxs)(E,{children:[(0,k.jsx)(L,{htmlFor:"fromMileage",children:"\u0421ar mileage / km"}),(0,k.jsxs)(z,{children:[(0,k.jsxs)(I,{children:[(0,k.jsx)(P,{children:"From"}),(0,k.jsx)(B,{type:"text",name:"",id:"fromMileage",onChange:function(n){var e=n.target.value;h(e)},value:p,padding:"65px"})]}),(0,k.jsxs)(I,{children:[(0,k.jsx)(P,{children:"To"}),(0,k.jsx)(B,{type:"text",name:"",id:"toMileage",padding:"45px"})]})]})]})]})},G=function(n){return n.cars},J=function(){var n=(0,m.I0)(),e=(0,m.v9)(G).cars,t=(0,$.useState)(!1),r=(0,x.Z)(t,2),o=r[0],i=r[1],a=(0,$.useState)(1),s=(0,x.Z)(a,2),c=s[0],l=s[1];return(0,$.useEffect)((function(){1===c&&(n((0,v.zf)()),i(!0))}),[n,c]),(0,k.jsxs)("section",{children:[(0,k.jsx)(_,{}),(0,k.jsx)(C.Z,{carsArray:e}),o&&(0,k.jsx)(y,{page:c,setPage:l,setShowButton:i})]})}},591:function(n,e,t){t.d(e,{e:function(){return r}});var r=function(n){return n.favorites}}}]);
//# sourceMappingURL=767.2a8048a0.chunk.js.map