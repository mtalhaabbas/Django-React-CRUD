(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),l=a.n(s),r=(a(13),a(14),a(4)),i=a.n(r),o=a(8),d=a(2),j=a(5),b=a(6),m=a(0),u=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],s=function(){fetch("/user/").then((function(e){return e.json()})).then((function(e){n(e)}))},l=Object(c.useRef)(null);l.current&&l.current.addEventListener("show.bs.modal",(function(e){var t=e.relatedTarget.getAttribute("data-bs-whatever"),a=l.current.querySelector(".modal-title"),c=l.current.querySelector(".modal-body input");a.textContent="New message to "+t,c.value=t}));var r=Object(c.useState)({username:"",email:"",clas:""}),u=Object(b.a)(r,2),h=u[0],p=u[1],x=function(e){var t=e.target.name,a=e.target.value;p(Object(j.a)(Object(j.a)({},h),{},Object(d.a)({},t,a)))},O=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=h.username,c=h.email,n=h.clas,a&&n&&c&&fetch("/user/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({first_name:n,username:a,email:c})})?(p({username:"",email:"",clas:""}),alert("Student Added"),s()):alert("plz fill the Student Detail");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container mt-4 mx-auto",children:[Object(m.jsx)("h2",{className:"text-center alert alert-warning",children:"Django React CRUD Application for Students Record"}),Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("h5",{className:"text-center alert alert-info",children:"Add New Student"}),Object(m.jsxs)("form",{type:"post",onSubmit:O,children:[Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInput",class:"form-label",children:"Username:"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleInput",name:"username",value:h.username,onChange:x})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Email address:"}),Object(m.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1",name:"email",value:h.email,onChange:x})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInput",class:"form-label",children:"Class Name:"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleInputPassword1",name:"clas",value:h.clas,onChange:x})]}),Object(m.jsx)("button",{type:"submit",class:"btn btn-success",children:"Add"})]})]}),Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h5",{className:"text-center alert alert-info",children:"All Students Details"}),Object(m.jsxs)("table",{class:"table ",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Id"}),Object(m.jsx)("th",{scope:"col",children:"Username"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Class"}),Object(m.jsx)("th",{scope:"col",children:"Action"}),Object(m.jsx)("th",{scope:"col",children:"Action"})]})}),Object(m.jsx)("tbody",{children:a.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:e.id}),Object(m.jsx)("td",{children:e.username}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.first_name}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn btn-outline-warning mx-auto",type:"button",value:"Edit","data-bs-toggle":"modal","data-bs-target":"#exampleModal".concat(e.id),children:"Edit"})}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn btn-outline-danger mx-auto",type:"button",value:"Delete",onClick:function(){return function(e){fetch("/user/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}})&&(alert("Student Deleted"),s())}(e.id)},children:"Delete"})}),Object(m.jsx)("div",{class:"modal fade",id:"exampleModal".concat(e.id),ref:l,"aria-labelledby":"exampleModalLabel",children:Object(m.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:Object(m.jsxs)("div",{class:"modal-content",children:[Object(m.jsxs)("div",{class:"modal-header",children:[Object(m.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Update Student Detail"}),Object(m.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsx)("div",{class:"modal-body",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"recipient-name",class:"col-form-label",children:"Name:"}),Object(m.jsx)("input",{type:"text",name:"username",class:"form-control",value:e.username})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"recipient-name",class:"col-form-label",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",class:"form-control",id:"",value:e.email})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"recipient-name",class:"col-form-label",children:"Class:"}),Object(m.jsx)("input",{type:"text",name:"clas",class:"form-control",id:"",value:e.first_name})]})]})}),Object(m.jsxs)("div",{class:"modal-footer",children:[Object(m.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return t=e.id,a=e.username,c=e.email,n=e.clas,void(fetch("/user/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({first_name:n,username:a,email:c})})&&(alert("Student Detail Updated"),window.location.reload()));var t,a,c,n},children:"Save changes"})]})]})})})]})}))})]})]})]})]})})};var h=function(){return Object(m.jsx)(u,{})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.9dcb365d.chunk.js.map