(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,c){t.exports={addItemFormButton:"AddItemForm_addItemFormButton__1eKpx"}},15:function(t,e,c){},16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(2),i=c.n(n),a=c(9),r=c.n(a),d=(c(15),c(8)),u=c(1),j=c(3),l=c(5),o=(c(16),c(10)),b=c.n(o),s=c(0);function O(t){var e=Object(n.useState)(""),c=Object(l.a)(e,2),i=c[0],a=c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{value:i,onChange:function(t){return a(t.currentTarget.value)}}),Object(s.jsx)("button",{onClick:function(){t.onButtonClick(i),a("")},className:b.a.addItemFormButton,children:"ADD"})]})}function h(t){return Object(s.jsxs)("div",{className:"toDOList",children:[Object(s.jsx)("h3",{children:t.title}),Object(s.jsxs)("div",{children:["Add new task: ",Object(s.jsx)(O,{onButtonClick:function(e){t.addNewTask(e,t.id)}})]}),Object(s.jsxs)("ul",{children:[t.tasks.map((function(e){return Object(s.jsxs)("li",{children:[" ",e.title,Object(s.jsx)("input",{type:"checkbox",checked:e.checked,onClick:function(c){t.changeTaskStatus(c.currentTarget.checked,t.id,e.id)}}),Object(s.jsx)("button",{onClick:function(){return t.deleteLine(e.id,t.id)},children:"X"})]},e.id)})),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return t.changeFilter("completed",t.id)},children:"COMPLETED"}),Object(s.jsx)("button",{onClick:function(){return t.changeFilter("active",t.id)},children:"ACTIVE"}),Object(s.jsx)("button",{onClick:function(){return t.changeFilter("all",t.id)},children:"ALL"})]})]})]})}var f=c(20);var k=function(){var t,e=Object(f.a)(),c=Object(f.a)(),i=Object(n.useState)([{id:e,title:"Things to do",filter:"all"},{id:c,title:"Hobbies",filter:"all"}]),a=Object(l.a)(i,2),r=a[0],o=a[1],b=Object(n.useState)((t={},Object(j.a)(t,e,[{id:Object(f.a)(),title:"Meditate",checked:!0},{id:Object(f.a)(),title:"Work out",checked:!0},{id:Object(f.a)(),title:"Study",checked:!1}]),Object(j.a)(t,c,[{id:Object(f.a)(),title:"Solve the puzzles",checked:!0},{id:Object(f.a)(),title:"Read",checked:!1},{id:Object(f.a)(),title:"Sleep",checked:!0}]),t)),k=Object(l.a)(b,2),x=k[0],m=k[1];function p(t,e){var c={id:Object(f.a)(),title:t,checked:!1};m(Object(u.a)(Object(u.a)({},x),{},Object(j.a)({},e,[c].concat(Object(d.a)(x[e])))))}function v(t,e){var c=x[e].filter((function(e){return e.id!==t}));m(Object(u.a)(Object(u.a)({},x),{},Object(j.a)({},e,c)))}function g(t,e){o(r.map((function(c){return c.id===e?Object(u.a)(Object(u.a)({},c),{},{filter:t}):c})))}function C(t,e,c){var n=x[e].map((function(e){return e.id===c?Object(u.a)(Object(u.a)({},e),{},{checked:t}):e}));m(Object(u.a)(Object(u.a)({},x),{},Object(j.a)({},e,n)))}function F(t){return"completed"===t.filter?x[t.id].filter((function(t){return t.checked})):"active"===t.filter?x[t.id].filter((function(t){return!t.checked})):x[t.id]}var T=r.map((function(t){return Object(s.jsx)(h,{id:t.id,filter:t.filter,title:t.title,tasks:F(t),deleteLine:v,changeFilter:g,addNewTask:p,changeTaskStatus:C})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{onButtonClick:function(t){var e={id:Object(f.a)(),title:t,filter:"all"};o([e].concat(Object(d.a)(r))),m(Object(u.a)(Object(u.a)({},x),{},Object(j.a)({},e.id,[])))}}),T]})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),a(t),r(t)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.c4787187.chunk.js.map