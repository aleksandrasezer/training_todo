(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){t.exports={errorInput:"EditableSpan_errorInput__27oor",normalInput:"EditableSpan_normalInput__3CVqX"}},21:function(t,e,n){},22:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(8),o=n.n(r),a=(n(21),n(22),n(4)),d=n(7),u=n.n(d),s=n(1);function l(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],r=n[1],o=Object(c.useState)(!1),d=Object(a.a)(o,2),l=d[0],j=d[1],b=l?u.a.errorInput:u.a.normalInput;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{className:b,value:i,onChange:function(t){r(t.currentTarget.value),""===t.currentTarget.value.trim()?j(!0):j(!1)}}),Object(s.jsx)("button",{onClick:function(){i?(t.onButtonClick(i),r("")):j(!0)},className:u.a.addItemFormButton,children:"ADD"}),l?Object(s.jsx)("span",{className:u.a.errorMessage,children:" input is empty"}):Object(s.jsx)("span",{})]})}var j=n(13),b=n.n(j);function O(t){var e=Object(c.useState)(!1),n=Object(a.a)(e,2),i=n[0],r=n[1],o=Object(c.useState)(t.title),d=Object(a.a)(o,2),u=d[0],l=d[1],j=Object(c.useState)(!1),O=Object(a.a)(j,2),f=O[0],h=O[1],I=f?b.a.errorInput:b.a.normalInput;return Object(s.jsx)(s.Fragment,{children:i?Object(s.jsx)("input",{className:I,onBlur:function(){u?(r(!1),t.changeTitle(u)):h(!0)},value:u,onChange:function(t){l(t.currentTarget.value),""===t.currentTarget.value.trim()?h(!0):h(!1)},autoFocus:!0}):Object(s.jsx)("span",{onDoubleClick:function(){return r(!0)},children:t.title})})}function f(t){return Object(s.jsxs)("div",{className:"toDOList",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)(O,{title:t.title,changeTitle:function(e){return t.changeTodoListTitle(e,t.id)}}),Object(s.jsx)("button",{onClick:function(){return t.deleteTodoList(t.id)},children:" X "})]}),Object(s.jsxs)("div",{children:["Add new task: ",Object(s.jsx)(l,{onButtonClick:function(e){t.addNewTask(e,t.id)}})]}),Object(s.jsxs)("ul",{children:[t.tasks.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)(O,{title:e.title,changeTitle:function(n){return t.changeTaskTitle(n,t.id,e.id)}}),Object(s.jsx)("input",{type:"checkbox",checked:e.checked,onClick:function(n){return t.changeTaskStatus(n.currentTarget.checked,t.id,e.id)}}),Object(s.jsx)("button",{onClick:function(){return t.deleteLine(e.id,t.id)},children:"X"})]},e.id)})),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return t.changeFilter("completed",t.id)},children:"COMPLETED"}),Object(s.jsx)("button",{onClick:function(){return t.changeFilter("active",t.id)},children:"ACTIVE"}),Object(s.jsx)("button",{onClick:function(){return t.changeFilter("all",t.id)},children:"ALL"})]})]})]})}var h,I=n(5),p=n(2),k=n(10),T=n(29),L="ADD_TODO_LIST",m="DELETE_TODO_LIST",g="CHANGE_TODO_LIST_TITLE",x="CHANGE_FILTER",_=Object(T.a)(),v=Object(T.a)(),C=[{id:_,title:"Things to do",filter:"all"},{id:v,title:"Hobbies",filter:"all"}],S=n(3),E="ADD_NEW_TASK",F="DELETE_TASK",A="CHANGE_TASK_STATUS",y="CHANGE_TASK_TITLE",D=(h={},Object(S.a)(h,_,[{id:Object(T.a)(),title:"Meditate",checked:!0},{id:Object(T.a)(),title:"Work out",checked:!0},{id:Object(T.a)(),title:"Study",checked:!1}]),Object(S.a)(h,v,[{id:Object(T.a)(),title:"Solve the puzzles",checked:!0},{id:Object(T.a)(),title:"Read",checked:!1},{id:Object(T.a)(),title:"Sleep",checked:!0}]),h);var N=function(){var t=Object(I.c)((function(t){return t.tasks})),e=Object(I.c)((function(t){return t.todoLists})),n=Object(I.b)();function c(t,e){n(function(t,e){return{type:E,title:t,todoListId:e}}(t,e))}function i(t,e){n(function(t,e){return{type:F,taskId:t,todoListId:e}}(t,e))}function r(t,e,c){n(function(t,e,n){return{type:A,taskId:n,todoListId:e,checked:t}}(t,e,c))}function o(t,e,c){n(function(t,e,n){return{type:y,taskId:n,todoListId:e,title:t}}(t,e,c))}function a(t){var e=function(t){return{type:m,todoListId:t}}(t);n(e)}function d(t,e){n(function(t,e){return{type:x,filter:t,todoListId:e}}(t,e))}function u(t,e){n(function(t,e){return{type:g,title:t,todoListId:e}}(t,e))}function j(e){return"completed"===e.filter?t[e.id].filter((function(t){return t.checked})):"active"===e.filter?t[e.id].filter((function(t){return!t.checked})):t[e.id]}var b=e.map((function(t){return Object(s.jsx)(f,{id:t.id,filter:t.filter,title:t.title,tasks:j(t),deleteLine:i,changeFilter:d,addNewTask:c,changeTaskStatus:r,changeTaskTitle:o,changeTodoListTitle:u,deleteTodoList:a})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{onButtonClick:function(t){var e=function(t){return{type:L,title:t,todoListId:Object(T.a)()}}(t);n(e)}}),b]})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))},w=n(15),M=Object(w.a)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(p.a)(Object(p.a)({},t),{},Object(S.a)({},e.todoListId,[{id:Object(T.a)(),title:e.title,checked:!1}].concat(Object(k.a)(t[e.todoListId]))));case F:return Object(p.a)(Object(p.a)({},t),{},Object(S.a)({},e.todoListId,t[e.todoListId].filter((function(t){return t.id!==e.taskId}))));case A:return Object(p.a)(Object(p.a)({},t),{},Object(S.a)({},e.todoListId,t[e.todoListId].map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),{},{checked:e.checked}):t}))));case y:return Object(p.a)(Object(p.a)({},t),{},Object(S.a)({},e.todoListId,t[e.todoListId].map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),{},{title:e.title}):t}))));case L:return Object(p.a)(Object(p.a)({},t),{},Object(S.a)({},e.todoListId,[]));case m:var n=Object(p.a)({},t);return delete n[e.todoListId],n;default:return t}},todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return[].concat(Object(k.a)(t),[{id:e.todoListId,title:e.title,filter:"all"}]);case m:return t.filter((function(t){return t.id!==e.todoListId}));case g:return t.map((function(t){return t.id===e.todoListId?Object(p.a)(Object(p.a)({},t),{},{title:e.title}):t}));case x:return t.map((function(t){return t.id===e.todoListId?Object(p.a)(Object(p.a)({},t),{},{filter:e.filter}):t}));default:return t}}}),H=Object(w.b)(M);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(I.a,{store:H,children:Object(s.jsx)(N,{})})}),document.getElementById("root")),B()},7:function(t,e,n){t.exports={addItemFormButton:"AddItemForm_addItemFormButton__2jwKN",errorInput:"AddItemForm_errorInput__3u859",normalInput:"AddItemForm_normalInput__2xlQZ",errorMessage:"AddItemForm_errorMessage__ldR7c"}}},[[28,1,2]]]);
//# sourceMappingURL=main.beb4ea16.chunk.js.map