(this["webpackJsonpteamhyena-react-login"]=this["webpackJsonpteamhyena-react-login"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"author":"Pajarito","title":"How to see sky more","date":"2021-09-12","contents":"Always have spare time."},{"author":"Woong","title":"How to overcome a conflict","date":"2021-09-13","contents":"Share as many as we can."},{"author":"H85","title":"Always be calm.","date":"2021-09-16","contents":"If you can not, I will."},{"author":"coder","title":"Harder, harder. Harder!","date":"2021-09-18","contents":"I also am writing this with this mind."},{"author":"Lee","title":"Awake early is hard","date":"2021-09-19","contents":"So you do."}]')},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(28),s=n.n(r),o=(n(39),n(10)),i=(n(40),n(0)),l=function(e,t){switch(t.type){case"SPECIAL CARACTER":return"\ud2b9\uc218\ubb38\uc790\ub97c \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";case"LENGTH":return"\uc544\uc774\ub514\ub294 4\uac1c \uc774\uc0c1, 10\uac1c \uc774\ud558\uc758 \uc601\ubb38\uc790 \ubc0f \uc22b\uc790\ub85c \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4.";default:return""}},j=function(e,t){switch(t.type){case"TOO SIMPLE":return"\uc601\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790\uac00 \ud558\ub098 \uc774\uc0c1\uc529 \ub4e4\uc5b4\uac00\uc57c \ud569\ub2c8\ub2e4.";case"LENGTH":return"\ube44\ubc00\ubc88\ud638\ub294 4\uac1c \uc774\uc0c1, 16\uac1c \uc774\ud558\uc758 \uc601\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790\uc758 \uc870\ud569\ub85c \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4.";default:return""}},d=function(e,t){switch(t.type){case"DIFFERENT":return"\uc704\uc5d0 \uc785\ub825\ud55c \ube44\ubc00\ubc88\ud638\uc640 \ub2e4\ub985\ub2c8\ub2e4.";default:return""}},u=function(){var e=Object(c.useReducer)(l,""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useReducer)(j,""),s=Object(o.a)(r,2),u=s[0],b=s[1],h=Object(c.useReducer)(d,""),p=Object(o.a)(h,2),O=p[0],x=p[1],m=Object(c.useRef)(),f=Object(c.useRef)(),y=Object(c.useRef)(),g=/[0-9]/,v=/[a-zA-Z]/,w=/[~!@#$%^&*()_+|<>?:{}]/;return Object(i.jsxs)("div",{className:"Join",children:[Object(i.jsx)("label",{children:"User Name"}),Object(i.jsx)("input",{name:"housename",type:"text",placeholder:"User Name",ref:m,required:!0,autoFocus:!0,onChange:function(){var e=m.current.value;e.length<4||e.length>10?a({type:"LENGTH"}):w.test(e)?a({type:"SPECIAL CARACTER"}):a({type:""})}}),Object(i.jsx)("p",{className:"username-verify",children:n}),Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:f,required:!0,onChange:function(){var e=f.current.value;e.length<4||e.length>16?b({type:"LENGTH"}):w.test(e)&&v.test(e)&&g.test(e)?b({type:""}):b({type:"TOO SIMPLE"})}}),Object(i.jsx)("p",{className:"password-verify",children:u}),Object(i.jsx)("label",{children:"Password verification"}),Object(i.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:y,required:!0,onChange:function(){y.current.value!==f.current.value?x({type:"DIFFERENT"}):x({type:""})}}),Object(i.jsx)("p",{className:"password2-verify",children:O}),Object(i.jsx)("input",{type:"button",value:"Join"})]})},b=n(8),h=n(18),p=n.n(h),O=n(29),x=n(34),m=(n(43),n(30)),f=n.n(m),y=n(31),g=Object(x.a)(y).reverse(),v=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://random-data-api.com/api/users/random_user");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e={login:!1,name:"",birthDate:"",address:"",email:"",phoneNumber:"",subscription:{},employment:"",alert:!1,showPersonalData:!1},t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useRef)(),l=Object(c.useRef)(),j=a.login,d=a.name,u=a.birthDate,h=a.address,p=a.email,O=a.phoneNumber,x=a.subscription,m=a.employment,f=a.alert,y=a.showPersonalData;return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"App-container",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("h1",{children:"Login Mini Project"})}),Object(i.jsxs)("section",{className:"App-section",children:[Object(i.jsxs)("div",{className:"input-box",children:[j?Object(i.jsx)("input",{className:"logout-btn",type:"button",value:"Logout",onClick:function(){r(Object(b.a)(Object(b.a)({},a),e))}}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("label",{children:"User Name"}),Object(i.jsx)("input",{name:"housename",type:"text",placeholder:"User Name",ref:s,required:!0,autoFocus:!0}),Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:l,required:!0}),Object(i.jsx)("input",{type:"button",value:"Login",onClick:function(){if(!s.current.value||!l.current.value)return r(Object(b.a)(Object(b.a)({},a),{},{alert:!0})),s.current.value="",void(l.current.value="");v().then((function(e){s.current.value="",l.current.value="";var t=e.data.address,n=t.country,c=t.state,o=t.city,i=t.street_name,j=t.street_address,d=t.zip_code;r(Object(b.a)(Object(b.a)({},a),{},{login:!0,name:e.data.first_name+" "+e.data.last_name,birthDate:e.data.date_of_birth,address:"".concat(j,", ").concat(i,", ").concat(o,", ").concat(c,", ").concat(d," ").concat(n),email:e.data.email,phoneNumber:e.data.phone_number,subscription:e.data.subscription,employment:e.data.employment.title,alert:!1}))}))}})]}),f&&Object(i.jsx)("p",{className:"alert-msg",children:"You need to enter both id and pw"})]}),j&&Object(i.jsxs)("div",{className:"output-box",children:[Object(i.jsx)("p",{className:"personal-data-hello",children:Object(i.jsx)("strong",{children:j&&"Wellcome, ".concat(d)})}),Object(i.jsx)("span",{className:"show-personal-data-btn",onClick:function(){r(Object(b.a)(Object(b.a)({},a),{},{showPersonalData:!a.showPersonalData}))},style:y?{transform:"rotate(180deg)"}:{},children:y?"close":"show"}),Object(i.jsx)("div",{className:"personal-data-box",children:y&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Date of Birth : "})," ",u]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Address : "})," ",h]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Email : "})," ",p]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Phone Number : "})," ",O]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Job : "})," ",m]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Subscription : "})," ",x?"yes":"no"]})]})})]}),j&&Object(i.jsx)("div",{className:"table-box",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Number"}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:"Author"}),Object(i.jsx)("th",{children:"Date"})]})}),Object(i.jsx)("tbody",{children:g.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:g.length-t}),Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.author}),Object(i.jsx)("td",{children:e.date})]},g.length-t)}))})]})})]})]})})},N=n(14),A=n(2),E=function(){return Object(i.jsxs)(N.a,{basename:"/TEAMHYENA-REACT-Login",children:[Object(i.jsx)(N.b,{to:"/",children:"\ud648"}),Object(i.jsx)(N.b,{to:"/join",children:"\ud68c\uc6d0\uac00\uc785"}),Object(i.jsxs)(A.c,{children:[Object(i.jsx)(A.a,{exact:!0,path:"/",children:Object(i.jsx)(w,{})}),Object(i.jsx)(A.a,{path:"/join",children:Object(i.jsx)(u,{})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),P()}},[[71,1,2]]]);
//# sourceMappingURL=main.5cb5f205.chunk.js.map