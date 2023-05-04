"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{7337:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r,a,i,s,o,c,l,d,u,p,x,h=t(9439),f=t(168),m=t(6444),g=m.ZP.form(r||(r=(0,f.Z)(["\n  margin-left: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 5px;\n"]))),b=m.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),v=m.ZP.input(i||(i=(0,f.Z)(["\n  width: 150px;\n  margin-left: 20px;\n  border-radius: 4px;\n  border: solid 2px #4caf50;\n\n  &:hover,\n  focus {\n    box-shadow: 0 0 5px green;\n  }\n"]))),Z=m.ZP.button(s||(s=(0,f.Z)(["\n  background-color: #4caf50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: flex;\n  font-size: 16px;\n  border-radius: 8px;\n  height: 15px;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 5px green;\n  }\n"]))),j=m.ZP.div(o||(o=(0,f.Z)(["\n  background-color: #4caf50; /* Green */\n  border: none;\n  color: white;\n  font-size: 16px;\n  border-radius: 8px;\n  height: 35px;\n  width: 90px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]))),w=t(2791),y=t(7131),k=t(184),P=function(){var n=(0,w.useState)(""),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,w.useState)(""),i=(0,h.Z)(a,2),s=i[0],o=i[1],c=(0,y.Tn)(),l=(0,h.Z)(c,1)[0],d=(0,y.Jx)().data,u=void 0===d?[]:d,p=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":o(a);break;case"number":r(a);break;default:console.log("This field does not exist")}};return(0,k.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=s.toLowerCase();u.every((function(n){return n.name.toLowerCase()!==e}))?(l({name:s,number:t}),r(""),o("")):alert("".concat(s," is already in contacts."))},children:[(0,k.jsxs)(b,{children:[(0,k.jsx)(j,{children:"Name"}),(0,k.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:s})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)(j,{children:"Number"}),(0,k.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:t})]}),(0,k.jsx)(Z,{type:"submit",children:"Add"})]})},C=m.ZP.li(c||(c=(0,f.Z)(["\n  padding-top: 5px;\n  width: 785px;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 20px;\n  align-items: center;\n"]))),z=m.ZP.button(l||(l=(0,f.Z)(["\n  background-color: #4caf50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: flex;\n  font-size: 16px;\n  border-radius: 8px;\n  height: 15px;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 5px green;\n  }\n"]))),A=m.ZP.span(d||(d=(0,f.Z)(["\n  color: #000000;\n"]))),L=m.ZP.span(u||(u=(0,f.Z)(["\n  padding-left: 10px;\n  color: #756060;\n"]))),_=function(n){var e=n.name,t=n.number,r=n.id,a=(0,y.Nt)(),i=(0,h.Z)(a,1)[0];return(0,k.jsxs)(C,{children:[(0,k.jsxs)(A,{children:[e,": "]}),(0,k.jsxs)(L,{children:[t," "]}),(0,k.jsx)(z,{onClick:function(){i({id:r,name:e})},children:"Delete"})]})},G=t(5048),N=m.ZP.ul(p||(p=(0,f.Z)(["\n  list-style: none;\n"]))),S=m.ZP.div(x||(x=(0,f.Z)(["\n  list-style: none;\n  width: 600px;\n  margin-left: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-left: 70px;\n\n  padding: 5px;\n"]))),V=t(321),D=t(1413),F=t(5861),J=t(7757),W=t.n(J),q=t(1243),I=t(5273),T=t(324);q.Z.defaults.baseURL=T._;var $,B,E,K,M,Q,R=(0,I.hg)("contacts/fetchAll",function(){var n=(0,F.Z)(W().mark((function n(e,t){var r;return W().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.Z.get("contacts");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()),U=((0,I.hg)("contacts/addContact",function(){var n=(0,F.Z)(W().mark((function n(e,t){var r,a;return W().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.Z.post("contacts",(0,D.Z)({},e));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),a=n.t0.message,n.abrupt("return",t.rejectWithValue(a));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()),(0,I.hg)("contacts/deleteContact",function(){var n=(0,F.Z)(W().mark((function n(e,t){var r,a,i;return W().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,e.name,n.prev=1,n.next=4,q.Z.delete("contacts/".concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 8:return n.prev=8,n.t0=n.catch(1),i=n.t0.message,n.abrupt("return",t.rejectWithValue(i));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),t(8402)),H=m.ZP.div($||($=(0,f.Z)(["\n  list-style: none;\n"]))),O=function(){return(0,k.jsx)(H,{children:(0,k.jsx)(U.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})})},X=function(){var n=(0,G.v9)(V.Vc),e=(0,G.v9)(V.zK),t=(0,y.Jx)().data,r=void 0===t?[]:t,a=(0,G.I0)();(0,w.useEffect)((function(){a(R())}),[a]);var i=e.toLowerCase(),s=r.filter((function(n){return n.name.toLowerCase().includes(i)}));return(0,k.jsx)(S,{children:(0,k.jsxs)(N,{children:[s.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,k.jsx)(_,{name:t,number:r,id:e},e)})),n&&(0,k.jsx)(O,{})]})})},Y=m.ZP.label(B||(B=(0,f.Z)(["\n  width: 500px;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  align-items: center;\n"]))),nn=m.ZP.input(E||(E=(0,f.Z)(["\n  width: 150px;\n  height: 15px;\n  margin-left: 20px;\n  border-radius: 4px;\n  border: solid 2px #4caf50;\n\n  &:hover,\n  focus {\n    box-shadow: 0 0 5px green;\n  }\n"]))),en=m.ZP.div(K||(K=(0,f.Z)(["\n  background-color: #4caf50; /* Green */\n  border: none;\n  color: white;\n  font-size: 16px;\n  border-radius: 8px;\n  height: 35px;\n  width: 200px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin-left: 112px;\n"]))),tn=function(n){return n.filter},rn=t(1473),an=function(){var n=(0,G.v9)(tn),e=(0,G.I0)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(Y,{children:[(0,k.jsx)(en,{children:"Find contacts by name"}),(0,k.jsx)(nn,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(n){var t=n.target;e((0,rn.z)(t.value))},value:n})]})})},sn=m.ZP.h2(M||(M=(0,f.Z)(["\n  margin-left: 50px;\n  color: #4caf50;\n"]))),on=m.ZP.h1(Q||(Q=(0,f.Z)(["\n  margin-left: 50px;\n  color: #4caf50;\n"])));function cn(){var n=(0,G.v9)(V.Qb),e=(0,G.v9)(V.zD);return(0,k.jsx)("div",{children:n?(0,k.jsxs)("div",{children:[(0,k.jsxs)(on,{children:[e," phonebook: "]}),(0,k.jsx)(P,{}),(0,k.jsx)(sn,{children:"Contacts"}),(0,k.jsx)(an,{}),(0,k.jsx)(X,{})]}):(0,k.jsx)("div",{})})}}}]);
//# sourceMappingURL=337.2b68fc78.chunk.js.map