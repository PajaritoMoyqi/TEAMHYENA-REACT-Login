(this["webpackJsonpteamhyena-react-login"]=this["webpackJsonpteamhyena-react-login"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(15),r=n.n(a),i=(n(23),n(3)),o=n(18),d=n(6),l=n.n(d),j=n(16),u=(n(25),n(17)),b=n.n(u),p=n(0),h=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://random-data-api.com/api/users/random_user");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e={login:!1,name:"",birthDate:"",address:"",email:"",phoneNumber:"",subscription:{},employment:""},t=Object(c.useState)(e),n=Object(o.a)(t,2),s=n[0],a=n[1],r=Object(c.useRef)(),d=Object(c.useRef)(),l=s.login,j=s.name,u=s.birthDate,b=s.address,m=s.email,O=s.phoneNumber,x=s.subscription,g=s.employment;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"App-container",children:[Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("h1",{children:"Login Mini Project"})}),Object(p.jsxs)("section",{className:"App-section",children:[Object(p.jsxs)("div",{className:"input-box",children:[Object(p.jsx)("input",{type:"button",value:"Logout",onClick:function(){a(Object(i.a)(Object(i.a)({},s),e))}}),Object(p.jsx)("label",{children:"User Name"}),Object(p.jsx)("input",{name:"housename",type:"text",placeholder:"User Name",ref:r,required:!0,autoFocus:!0}),Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:d,required:!0}),Object(p.jsx)("input",{type:"button",value:"Login",onClick:function(){h().then((function(e){var t=e.data.address,n=t.country,c=t.state,o=t.city,l=t.street_name,j=t.street_address,u=t.zip_code;a(Object(i.a)(Object(i.a)({},s),{},{login:!0,name:e.data.first_name+e.data.last_name,birthDate:e.data.date_of_birth,address:"".concat(j,", ").concat(l,", ").concat(o,", ").concat(c,", ").concat(u," ").concat(n),email:e.data.email,phoneNumber:e.data.phone_number,subscription:e.data.subscription,employment:e.data.employment.title})),r.current.value="",d.current.value=""}))}})]}),Object(p.jsxs)("div",{className:"output-box",children:[Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:l&&"".concat(j,"\ub2d8 \ubc18\uac11\uc2b5\ub2c8\ub2e4.")})}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Date of Birth : "})," ",u]}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Address : "})," ",b]}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Email : "})," ",m]}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Phone Number : "})," ",O]}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Employment : "})," ",g]}),l&&Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Subscription : "})," ",x?"yes":"no"]})]})]})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.cee103ec.chunk.js.map