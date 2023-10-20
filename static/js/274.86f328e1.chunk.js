"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[274],{7742:function(n,e,r){r.d(e,{Z:function(){return tn}});var t,o,i,a,c,s,l,d,u,p,h,x,f,g,m,b,v,Z,w,j=r(9439),k=r(2791),y=r(9434),C=r(168),M=r(225),S=M.Z.button(t||(t=(0,C.Z)(["\n  background-color: var(--accent-color);\n  color: var(--invert-color);\n  transition: background-color 250ms ease-in-out;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  padding: 12px 0;\n  margin-top: 28px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--accent-hover);\n  }\n"]))),L=r(184),E=function(n){var e=n.onClick;return(0,L.jsx)(S,{onClick:e,children:"Learn more"})},I=r(1087),z=r(4164),B=M.Z.div(o||(o=(0,C.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #ffffff;\n  border: 1px solid #dce3e5cc;\n  border-radius: 24px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  transition: transform 250ms ease-in-out;\n"]))),P=M.Z.div(i||(i=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #12141780;\n  z-index: 999;\n  transition: transform 250ms ease-in-out;\n"]))),T=(M.Z.div(a||(a=(0,C.Z)(["\n  background-color: white;\n  width: 541px;\n  padding: 20px;\n  border-radius: 5px;\n"]))),M.Z.button(c||(c=(0,C.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n"])))),O=r(71),F=function(n){var e=n.isOpen,r=n.onClose,t=n.children;return(0,k.useEffect)((function(){var n=function(n){e&&"Escape"===n.key&&r()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,r]),e?z.createPortal((0,L.jsx)(P,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,L.jsxs)(B,{id:"modal-container",children:[(0,L.jsx)(T,{onClick:r,children:(0,L.jsx)(O.IOM,{width:24,height:24})}),t]})}),document.getElementById("modal-root")):null},N=M.Z.div(s||(s=(0,C.Z)(["\n  padding: 40px;\n  width: 541px;\n"]))),A=M.Z.img(l||(l=(0,C.Z)(["\n    object-fit: cover;\n    border-radius: 14px;\n"]))),$=function(n){var e=n.isModalOpen,r=n.closeModal,t=n.car,o=t.model,i=t.img,a=t.description;return(0,L.jsx)(F,{isOpen:e,onClose:r,children:(0,L.jsxs)(N,{children:[(0,L.jsx)(A,{src:i,alt:o,width:"461",height:"248"}),(0,L.jsx)("p",{children:a}),(0,L.jsx)(I.rU,{to:"tel:+380730000000",children:"Rental car"})]})})},D=r(7657),R=r(5161),H=r(591),U=r(7692),_=M.Z.div(d||(d=(0,C.Z)(["\n  width: 100%;\n  display: flex;\n  /* flex-grow: 1; */\n  flex-direction: column;\n  min-height: 100%;\n  justify-content: space-between;\n"]))),G=M.Z.div(u||(u=(0,C.Z)(["\n  border-radius: 14px;\n  width: 274px;\n  height: 268px;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;\n  cursor: pointer;\n  margin-bottom: 14px;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 1px 10px black;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    );\n  }\n"]))),J=M.Z.div(p||(p=(0,C.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),K=(0,M.Z)(U.kTx)(h||(h=(0,C.Z)(["\n  fill: #ffffff;\n  width: 100%;\n  height: 100%;\n"]))),V=(0,M.Z)(U.SEb)(x||(x=(0,C.Z)(["\n  fill: var(--accent-color);\n  width: 100%;\n  height: 100%;\n"]))),W=M.Z.img(f||(f=(0,C.Z)(["\n  object-fit: cover;\n  width: 100%;\n"]))),X=M.Z.div(g||(g=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-color);\n"]))),q=M.Z.span(m||(m=(0,C.Z)(["\n  color: var(--accent-color);\n"]))),Q=M.Z.p(b||(b=(0,C.Z)(["\n  color: var(--secondary-color);\n  font-size: 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 90%;\n  text-align: left;\n"]))),Y=M.Z.span(v||(v=(0,C.Z)(["\n  color: var(--separator-color);\n"]))),nn=function(n){var e=n.car,r=e.id,t=e.year,o=e.make,i=e.model,a=e.type,c=e.img,s=e.functionalities,l=e.rentalPrice,d=e.rentalCompany,u=e.address,p=(0,k.useState)(!1),h=(0,j.Z)(p,2),x=h[0],f=h[1],g=(0,k.useState)(!1),m=(0,j.Z)(g,2),b=m[0],v=m[1],Z=(0,y.v9)(H.e).favoriteCars,w=(0,y.I0)(),C=u.split(","),M=C[2],S=C[1];(0,k.useEffect)((function(){Z.some((function(n){return n.id===e.id}))&&v(!0)}),[Z,e]);var I=function(){f(!0),w((0,D.Cn)(e.id))};return(0,L.jsxs)(_,{children:[(0,L.jsxs)(G,{onClick:I,children:[(0,L.jsx)(J,{onClick:function(n){n.stopPropagation(),v(!b),Z.some((function(n){return n.id===e.id}))?w((0,R.Ni)(e)):w((0,R.a3)(e))},children:b?(0,L.jsx)(V,{width:20,height:20}):(0,L.jsx)(K,{width:20,height:20})}),(0,L.jsx)(W,{src:c,alt:i,width:"274",height:"268"})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)("p",{children:[o," ",(0,L.jsx)(q,{children:i}),", ",t]}),(0,L.jsx)("p",{children:l})]}),(0,L.jsxs)(Q,{children:[S," ",(0,L.jsx)(Y,{children:" | "}),M," ",(0,L.jsx)(Y,{children:" | "})," ",d]}),(0,L.jsxs)(Q,{children:[a," ",(0,L.jsx)(Y,{children:" | "})," ",i," ",(0,L.jsx)(Y,{children:" | "})," ",r,(0,L.jsx)(Y,{children:" | "})," ",s[0]]}),(0,L.jsx)(E,{car:e,onClick:I}),x&&(0,L.jsx)($,{isModalOpen:x,closeModal:function(){f(!1)},car:e})]})},en=M.Z.ul(Z||(Z=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  row-gap: 50px;\n  list-style: none;\n  margin: 0 auto;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),rn=M.Z.li(w||(w=(0,C.Z)(["\n  width: 274px;\n"]))),tn=function(n){var e=n.carsArray;return(0,L.jsx)(en,{children:e.map((function(n){return(0,L.jsx)(rn,{children:(0,L.jsx)(nn,{car:n})},n.id)}))})}},7274:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,i,a,c=r(5861),s=r(9439),l=r(4687),d=r.n(l),u=r(2791),p=r(9434),h=r(7657),x=r(168),f=r(225),g=f.Z.button(t||(t=(0,x.Z)(["\n  color: var(--accent-color);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]))),m=r(184),b=function(n){var e=n.page,r=n.setPage,t=n.setShowButton,o=(0,p.I0)(),i=function(){var n=(0,c.Z)(d().mark((function n(){var i,a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o((0,h.cf)(e+1));case 2:i=n.sent,a=i.payload,r((function(n){return n+1})),a.length>=8?t(!0):t(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,m.jsx)(g,{onClick:i,children:"Load more"})},v=r(7742),Z=r(1413),w=function(n){return n.map((function(n){return{value:n,label:n}}))},j=r(1062),k=f.Z.div(o||(o=(0,x.Z)(["\n  width: ",";\n  text-align: left;\n"])),(function(n){return n.width})),y=f.Z.label(i||(i=(0,x.Z)(["\n  display: block;\n  margin-bottom: 8px;\n"]))),C=(0,f.Z)(j.ZP)(a||(a=(0,x.Z)(["\n  /* border-radius: 14px;\n  background-color: var(--input-bg-color); */\n  height: 48px;\n  .custom-select-arrow {\n    transition: transform 0.5s; /* \u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0443 */\n  }\n\n  .custom-select.is-open .custom-select-arrow {\n    transform: rotate(180deg); /* \u041f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0456\u043a\u043e\u043d\u043a\u0443 \u043f\u0440\u0438 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456 */\n  }\n\n  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {\n    width: 8px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u0431\u0430\u0440\u0430 */\n    background-color: red;\n  }\n\n  #react-select-2-listbox,\n  #react-select-3-listbox {\n    border-radius: 14px;\n    overflow: hidden;\n  }\n\n  /* #react-select-2-listbox::-webkit-scrollbar-thumb {\n    background-color: red; \n    border-radius: 4px; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar-track {\n    background: red !important; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar-thumb:active {\n    background-color: red; \n  }\n\n  .custom-select.custom-select-menu::-webkit-scrollbar {\n    width: 8px;\n    background-color: red !important;\n  } */\n"]))),M=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),S=[];!function(){for(var n=30;n<=500;n+=10)S.push(n)}();var L,E,I,z,B,P,T,O,F=function(n){var e=n.textLabel,r=n.name,t=n.width,o=n.handleChange,i=n.value,a=n.brand,c=M.filter((function(n,e,r){return r.indexOf(n)===e})).sort(),s=w(c),l=w(S);return(0,m.jsxs)(k,{width:t,children:[(0,m.jsx)(y,{htmlFor:r,children:e}),(0,m.jsx)(C,{id:r,options:a?s:l,className:"custom-select custom-select-menu",onChange:o,value:i,styles:{dropdownIndicator:function(n,e){return(0,Z.Z)((0,Z.Z)({},n),{},{transition:"transform 0.5s",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"none"})},control:function(n,e){return(0,Z.Z)((0,Z.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",borderRadius:"14px",border:"none",output:"none",height:"48px"})}}})]})},N=r(948),A=f.Z.form(L||(L=(0,x.Z)(["\n  margin: 0 auto;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 18px;\n"]))),$=f.Z.div(E||(E=(0,x.Z)(["\n  text-align: left;\n"]))),D=f.Z.label(I||(I=(0,x.Z)(["\n  display: block;\n  margin-bottom: 8px;\n"]))),R=f.Z.div(z||(z=(0,x.Z)(["\n  display: flex;\n  gap: 1px;\n  background-color: rgba(138, 138, 137, 0.2);\n\n  border: none;\n  border-radius: 14px;\n  overflow: hidden;\n"]))),H=f.Z.div(B||(B=(0,x.Z)(["\n  position: relative;\n"]))),U=f.Z.p(P||(P=(0,x.Z)(["\n  position: absolute;\n  left: 24px;\n  top: 15px;\n"]))),_=(0,f.Z)(N.h3)(T||(T=(0,x.Z)(["\n  padding-left: ",";\n  width: 160px;\n  height: 48px;\n  background-color: var(--input-bg-color);\n  border: none;\n  outline: none;\n"])),(function(n){return n.padding})),G=f.Z.button(O||(O=(0,x.Z)(["\n  align-self: end;\n  padding: 14px 44px;\n  height: 48px;\n  border-radius: 12px;\n  background-color: var(--accent-color);\n  color: var(--invert-color);\n  transition: background-color 250ms ease-in-out;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    background-color: var(--accent-hover);\n  }\n  &:disabled {\n    background-color: var(--secondary-color);\n    opacity: 0.8;\n    cursor: auto;\n  }\n"]))),J=r(1634),K=function(n){n.setFilterCars;var e=n.setFiltering,r=n.setShowButton,t=(0,u.useState)({value:"",label:"To $"}),o=(0,s.Z)(t,2),i=o[0],a=o[1],l=(0,u.useState)({value:"",label:"Enter the text"}),x=(0,s.Z)(l,2),f=x[0],g=x[1],b=(0,u.useState)(""),v=(0,s.Z)(b,2),Z=v[0],w=v[1],j=(0,u.useState)(!0),k=(0,s.Z)(j,2),y=k[0],C=k[1],M=(0,u.useState)(""),S=(0,s.Z)(M,2),L=S[0],E=S[1],I=(0,u.useState)(""),z=(0,s.Z)(I,2),B=z[0],P=z[1],T=(0,p.I0)();(0,u.useEffect)((function(){"Enter the text"!==f.label||"To $"!==i.label||""!==L||""!==B?C(!1):C(!0)}),[f,i,L,B]);var O=function(n){var e=n.target.value;switch(n.target.name){case"mileageMin":E(e);break;case"mileageMax":P(e)}},N=function(){var n=(0,c.Z)(d().mark((function n(r){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.preventDefault(),t={make:f.value.toLowerCase().trim(),price:Z||"500",mileageMin:L.split(",").join("")||0,mileageMax:B.split(",").join("")||99999},T((0,J.Tv)(t)),e(!0);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(A,{children:[(0,m.jsx)(F,{textLabel:"Car brand",name:"make",brand:!0,value:f,handleChange:function(n){g({label:n.value,value:n.value})},width:"224px"}),(0,m.jsx)(F,{textLabel:"Price/ 1 hour",name:"price",value:i,handleChange:function(n){var e="To ".concat(n.value,"$");a({label:e,value:e}),w(n.value)},width:"125px"}),(0,m.jsxs)($,{children:[(0,m.jsx)(D,{htmlFor:"fromMileage",children:"\u0421ar mileage / km"}),(0,m.jsxs)(R,{children:[(0,m.jsxs)(H,{children:[(0,m.jsx)(U,{children:"From"}),(0,m.jsx)(_,{value:L,name:"mileageMin",id:"fromMileage",format:"##,###",maxLength:6,decimalScale:3,thousandSeparator:!0,onChange:O,padding:"65px"})]}),(0,m.jsxs)(H,{children:[(0,m.jsx)(U,{children:"To"}),(0,m.jsx)(_,{name:"mileageMax",id:"toMileage",padding:"45px",format:"##,###",maxLength:6,decimalScale:3,thousandSeparator:!0,value:B,onChange:O})]})]})]}),(0,m.jsx)(G,{onClick:N,disabled:y,children:"Search"}),(0,m.jsx)(G,{onClick:function(n){n.preventDefault(),T((0,h.zf)()),e(!1),a({value:"",label:"To $"}),g({value:"",label:"Enter the text"}),E(""),P(""),r(!0)},disabled:y,children:"Clear"})]})},V=function(n){return n.cars},W=function(n){return n.filter},X=function(n,e){return n.filter((function(n){var r=n.make,t=n.rentalPrice,o=n.mileage;return r.toLowerCase()===e.make&&parseInt(t.replace(/\D/g,""),10)<e.price&&o>e.mileageMin&&o<e.mileageMax}))},q=function(){var n=(0,p.I0)(),e=(0,p.v9)(V),r=e.cars,t=e.isLoading,o=(0,u.useState)(!1),i=(0,s.Z)(o,2),a=i[0],l=i[1],x=(0,u.useState)(1),f=(0,s.Z)(x,2),g=f[0],Z=f[1],w=(0,p.v9)(W),j=(0,u.useState)([]),k=(0,s.Z)(j,2),y=k[0],C=k[1],M=(0,u.useState)(!1),S=(0,s.Z)(M,2),L=S[0],E=S[1];return(0,u.useEffect)((function(){1===g&&(n((0,h.zf)()),l(!0))}),[n,g]),(0,u.useEffect)((function(){L&&(0,c.Z)(d().mark((function e(){var r,t,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,h.TX)());case 2:return r=e.sent,t=r.payload,e.next=6,X(t,w);case 6:o=e.sent,C(o);case 8:case"end":return e.stop()}}),e)})))()}),[L,w,n]),(0,m.jsxs)("section",{children:[(0,m.jsx)(K,{setFilterCars:C,setFiltering:E,setShowButton:l}),(0,m.jsx)(v.Z,{carsArray:L?y:r}),!L&&(t?(0,m.jsx)("div",{children:"Loading cars..."}):a&&(0,m.jsx)(b,{page:g,setPage:Z,setShowButton:l}))]})}},591:function(n,e,r){r.d(e,{e:function(){return t}});var t=function(n){return n.favorites}}}]);
//# sourceMappingURL=274.86f328e1.chunk.js.map